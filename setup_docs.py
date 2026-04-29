"""
Script to convert Salesforce-CTA-Study-Guide wiki markdown files
into a MkDocs-ready docs/ folder structure.
"""
import os
import re
import shutil
from urllib.parse import unquote

# ─── Directory paths ──────────────────────────────────────────────────────────
WIKI_DIR   = 'Salesforce-CTA-Study-Guide.wiki'
DOCS_DIR   = 'docs'

SRC_REPO_IMAGES = 'CTA_Repo_Images'
SRC_OOTB_ERDS   = 'CTA_OOTB_Object_ERDs'
SRC_USEFUL_DOCS = 'CTA_Useful_Documentation'

DEST_IMAGES = os.path.join(DOCS_DIR, 'assets', 'images')

# ─── Create output directory structure ───────────────────────────────────────
dirs_to_create = [
    DOCS_DIR,
    os.path.join(DEST_IMAGES, 'CTA_Repo_Images', 'Crypto Diagrams'),
    os.path.join(DEST_IMAGES, 'CTA_OOTB_Object_ERDs'),
    os.path.join(DEST_IMAGES, 'CTA_Useful_Documentation', 'Additional_Useful_Guides'),
]
for d in dirs_to_create:
    os.makedirs(d, exist_ok=True)
    print(f'  Created dir: {d}')

# ─── Copy image files ─────────────────────────────────────────────────────────
def copy_images():
    # Top-level CTA_Repo_Images
    for fname in os.listdir(SRC_REPO_IMAGES):
        src = os.path.join(SRC_REPO_IMAGES, fname)
        if os.path.isfile(src):
            shutil.copy2(src, os.path.join(DEST_IMAGES, 'CTA_Repo_Images', fname))
            print(f'  Copied: {src}')

    # CTA_Repo_Images/Crypto Diagrams
    crypto_src = os.path.join(SRC_REPO_IMAGES, 'Crypto Diagrams')
    crypto_dst = os.path.join(DEST_IMAGES, 'CTA_Repo_Images', 'Crypto Diagrams')
    for fname in os.listdir(crypto_src):
        src = os.path.join(crypto_src, fname)
        if os.path.isfile(src):
            shutil.copy2(src, os.path.join(crypto_dst, fname))
            print(f'  Copied: {src}')

    # CTA_OOTB_Object_ERDs
    for fname in os.listdir(SRC_OOTB_ERDS):
        src = os.path.join(SRC_OOTB_ERDS, fname)
        if os.path.isfile(src):
            shutil.copy2(src, os.path.join(DEST_IMAGES, 'CTA_OOTB_Object_ERDs', fname))
            print(f'  Copied: {src}')

    # Limits_Cheatsheet.webp
    src = os.path.join(SRC_USEFUL_DOCS, 'Additional_Useful_Guides', 'Limits_Cheatsheet.webp')
    dst = os.path.join(DEST_IMAGES, 'CTA_Useful_Documentation', 'Additional_Useful_Guides', 'Limits_Cheatsheet.webp')
    shutil.copy2(src, dst)
    print(f'  Copied: {src}')

copy_images()

# ─── URL-encode spaces and special chars in a local file path ────────────────
def encode_path(raw_path):
    """Percent-encode spaces (and only spaces) in a local path string."""
    return raw_path.replace(' ', '%20')

# ─── Fix image URLs ───────────────────────────────────────────────────────────
def fix_image_urls(content):
    """
    Replace absolute GitHub image URLs with relative local paths pointing to
    docs/assets/images/...
    """

    # Handles both the old repo name (CTA_Study_Guide) and current repo name
    # for CTA_Repo_Images
    def replace_repo_image(m):
        raw = unquote(m.group(1))          # decode %20 → space
        return 'assets/images/' + encode_path(raw)

    # Pattern 1 – old repo name
    content = re.sub(
        r'https://github\.com/Coding-With-The-Force/CTA_Study_Guide/blob/main/'
        r'(CTA_Repo_Images/[^\s)\'"]+?)(?:\?raw=true)?(?=[)\s\'"])',
        replace_repo_image,
        content
    )

    # Pattern 2 – current repo, CTA_Repo_Images
    content = re.sub(
        r'https://github\.com/Coding-With-The-Force/Salesforce-CTA-Study-Guide/blob/main/'
        r'(CTA_Repo_Images/[^\s)\'"]+?)(?:\?raw=true)?(?=[)\s\'"])',
        replace_repo_image,
        content
    )

    # Pattern 3 – current repo, CTA_OOTB_Object_ERDs
    content = re.sub(
        r'https://github\.com/Coding-With-The-Force/Salesforce-CTA-Study-Guide/blob/main/'
        r'(CTA_OOTB_Object_ERDs/[^\s)\'"]+?)(?:\?raw=true)?(?=[)\s\'"])',
        replace_repo_image,
        content
    )

    # Pattern 4 – current repo, CTA_Useful_Documentation
    content = re.sub(
        r'https://github\.com/Coding-With-The-Force/Salesforce-CTA-Study-Guide/blob/main/'
        r'(CTA_Useful_Documentation/[^\s)\'"]+?)(?:\?raw=true)?(?=[)\s\'"])',
        replace_repo_image,
        content
    )

    return content

# ─── Fix internal wiki links (Home.md / index.md only) ───────────────────────

# Home.md's table of contents contains stale slugs that were never updated
# when the wiki pages were renamed. Map old slug → correct filename (no ext).
SLUG_CORRECTIONS = {
    '04)-Data-Governance':       '04)-Project-Governance-(COE)',
    '14)-Field-Sales-Objects':   '14)-Field-Service-Lightning',
    '17)-Powerpoint-Hotkey-Notes': '17)-Google-Slides-Hotkey-Notes',
}

def fix_wiki_links(content):
    """
    Convert <a href="...wiki/PAGE"> link text </a>  →  [link text](<PAGE.md>)
    """
    def replace_anchor(m):
        page_slug = m.group(1)   # e.g. "00)-CTA-Exam-Structure"
        page_slug = SLUG_CORRECTIONS.get(page_slug, page_slug)
        link_text = m.group(2).strip()
        # Angle brackets are required because the filenames contain ")" which
        # would otherwise terminate the markdown link URL prematurely.
        return f'[{link_text}](<{page_slug}.md>)'

    content = re.sub(
        r'<a\s[^>]*href="https://github\.com/Coding-With-The-Force/'
        r'Salesforce-CTA-Study-Guide/wiki/([^"]+)"[^>]*>(.*?)</a>',
        replace_anchor,
        content,
        flags=re.DOTALL
    )
    return content

# ─── Process and copy all wiki .md files ─────────────────────────────────────
processed = 0
for filename in sorted(os.listdir(WIKI_DIR)):
    if not filename.endswith('.md'):
        continue

    src_path = os.path.join(WIKI_DIR, filename)
    dest_filename = 'index.md' if filename == 'Home.md' else filename
    dest_path = os.path.join(DOCS_DIR, dest_filename)

    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = fix_image_urls(content)

    if filename == 'Home.md':
        content = fix_wiki_links(content)

    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(content)

    processed += 1
    print(f'  Processed: {filename} -> {dest_filename}')

print(f'\n✅  Done! {processed} markdown files written to {DOCS_DIR}/')
