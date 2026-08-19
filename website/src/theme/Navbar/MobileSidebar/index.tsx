import React, { useEffect, useState } from 'react';
import { useNavbarMobileSidebar, useLockBodyScroll } from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';

/**
 * Swizzled to raise the hamburger-menu breakpoint. Docusaurus hard-codes its
 * mobile switch at 996px, but our navbar carries 8 category dropdowns that
 * only fit a single row on wide screens — so the full menu shows at
 * >= 1500px and everything below gets the hamburger.
 *
 * Keep in sync with the `1499px` / `1500px` media queries in
 * src/css/custom.css (which hide the navbar items and show the toggle).
 */
const HAMBURGER_BELOW_PX = 1500;

function useIsNarrowViewport(): boolean {
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    const update = () => setIsNarrow(window.innerWidth < HAMBURGER_BELOW_PX);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return isNarrow;
}

export default function NavbarMobileSidebar(): React.ReactElement | null {
  const mobileSidebar = useNavbarMobileSidebar();
  const isNarrow = useIsNarrowViewport();
  useLockBodyScroll(mobileSidebar.shown);

  if (mobileSidebar.disabled || !isNarrow) {
    return null;
  }

  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}
