---
title: "Cryptography"
---

# Cryptography

### Cryptography Key Terminology

**_Key/Encryption Key_** - An encryption key is an input parameter that controls the output of a cryptographic algorithm to encrypt data. The key is also required to decipher the data. An example of how this works is the following. If our key was to, "write our words using the letter following the original letter in the alphabet" we would end up with something the words "Hi There" equating to  "Ij Uifsf". If we use our key of alphabet character + 1 to decrypt it we can easily figure out that Ij Uifsf = Hi There, but without it, it would be impossible to understand.  

**_Key Management_** - This is literally the process of managing our cryptographic keys. It involves generating, exchanging, storing, using, replacing and destroying keys. It's important to know that Salesforce Shield supports bring your own key (BYOK), which allows a customer to have full control over the encryption keys in their org instead or relying on Salesforce's cloud generated keys. [Documentation on Salesforce Key Management](https://help.salesforce.com/articleView?id=security_keys_using_master.htm&type=0)  

**_Initialization Vector_** - The initial value used during the cipher process to encrypt data. This value is somewhat random and it is important because without it you cannot decrypt your first block of cipher text. You can still decrypt subsequent blocks but without the initialization vector it becomes impossible to decrypt the first block of your encrypted data. More info on [decrypting using the initialization vector here](https://www.youtube.com/watch?v=MzCXYpdcBJY&ab_channel=Computerphile). It's important to note that Initialization Vectors are not meant to be kept secret. They need to be known to be able to decrypt the first block of cipher text.

**_Salt_** - The salt is a piece of pseudorandom data that is added to the input data. A salt is primarily used with one-way hashing algorithms. A good example of a salt being used is a system taking a password and adding a salt value to it before hashing the combined text. This makes it more difficult for an attacker to guess the length of the password or whatever value you were encrypting. Since the salt is random each time it's used, there each output would look different so no one could easily guess the portion of the encrypted value that was a salt. Salts are also not meant to be kept secret, they are usually stored in a database somewhere.  

**_Certificate_** - A certificate is an electronic document that contains an encryption key called the public key in addition to data like the issuer, the purpose of the cert and more. The cert is used to prove the authenticity of an entity (such as a server) that owns the private key of the certs public key. A good example of this is how secure https websites work. They register with a certificate authority who digitally signs and produces a cert for the site to store. Now, when a user traverses to the site it presents that cert with the CA's digital signature on it to prove the sites identity. This allows the browser to verify the site is legitimate to prevent man in the middle attacks.  

**_[Block Cipher](https://en.wikipedia.org/wiki/Block_cipher)_** - The name given to crypto algorithms that operate on fixed length groups of bits (blocks). 

---


### Symmetric Cryptology Algorithms

These are the algorithms that rely on a [symmetric key](https://en.wikipedia.org/wiki/Symmetric-key_algorithm#:~:text=Symmetric%2Dkey%20algorithms%20are%20algorithms,and%20the%20decryption%20of%20ciphertext.&text=The%20keys%2C%20in%20practice%2C%20represent,maintain%20a%20private%20information%20link.) (or the same key) for encrypting and decrypting cipher text. Storing the key in a safe place is absolutely critical for these algorithms. Since you must share the key between the sender of the encrypted data and the receiver of the encrypted data it presents an opportunity for malicious individuals to intercept the key in transit, there are however ways to deal with this issue. The two main types of symmetric crypto algorithms are stream ciphers and block ciphers. Some of the most popular symmetric crypto algorithms are [DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard) and [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). AES is supported by the [Salesforce Crypto class](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_classes_restful_crypto.htm).

---

### Hashing Algorithms

Hashing algorithms exist to solve the problem of how to ensure the message I've received hasn't been tampered with. Hashing algorithms create a digest out of plain text that cannot be reversed back into plaintext. Hashing Algorithms typically do not need or use a key as their purpose is simply to ensure the integrity of the original plaintext. Hash algorithms are used in digital signatures, MAC algorithms, generating encryption keys, creating index data, detecting duplicate data and creating message checksums. Some popular hashing algorithms include [MD5](https://en.wikipedia.org/wiki/MD5) and [SHA](https://en.wikipedia.org/wiki/SHA-2). Both MD5 and SHA are supported by the [Salesforce Crypto class](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_classes_restful_crypto.htm) although MD5 has many weaknesses and should not be used.

![Hashing Algorithm Diagram](/img/CTA_Repo_Images/Crypto%20Diagrams/Hashing%20Algorithm%20Diagram.png)


---

### MAC Algorithms

MAC Algorithms are similar to Hashing Algorithms in that they both generate a one-way digest of plain text but MAC algorithms are primarily created to verify the authenticity of the sender of the message as well as the authenticity of the message. To do this MAC algorithms use a key. This key must be known by both the sender and the receiver of the message. One popular MAC Algorithms is the [HMAC](https://en.wikipedia.org/wiki/HMAC) algorithm and its variants, all of which are supported by 
the [Salesforce Crypto class](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_classes_restful_crypto.htm).

![MAC Algorithm Diagram](/img/CTA_Repo_Images/Crypto%20Diagrams/MAC%20Algorithm%20Diagram.png) 

---

### Asymmetric Cryptography Algorithms

Asymmetric crypto algorithms are also often called public key crypto algorithms. These algorithms use two different keys to verify authenticity between communicating entities. The first key is referred to as the private key, which must be kept secret and the second is referred to as the public key which is ok to be shared. In these algorithms the outbound message is encrypted using the public key but it can only be decrypted by the private key. Asymmetric algorithms are typically used in two different scenarios (though there are many others). They are Message Confidentiality and Digital Signatures. RSA-SHA is the most popular asymmetric crypto algorithm and it's supported by the [Salesforce Crypto class](https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_classes_restful_crypto.htm).

---

### How TLS (Transport Layer Security) Works

TLS is a crypto protocol that has superseded the SSL (Secure Socket Layer Protocol). It is designed to secure communication between two applications over a network. When communication is secured by TLS the communication between two parties (typically a client and a server) has one or more of the following properties: 

* A private connection: A symmetric encryption algorithm is used to encrypt all data transmitted between the two entities. The key that's used for this is unique per session and is generated as part of a handshake process.

* Authentic Identity: The identity of the two parties can be verified using an asymmetric algorithm that utilizes CA signed certs.   

* Reliable: Each message exchanged by the parties will include a MAC value to ensure that the message hasn't been modified. 

An in depth example of TLS communication starts on page 91 of the Becoming a CTA book.

--- 

### How Two-way TLS Works

Two-way TLS (sometimes referred to as two-way SSL) is similar to one way TLS with one main difference. In one-way TLS the client validates the servers cert to confirm the servers identity, but the server has no way to identify the client. In many cases the server verifying a client is not super important, but sometimes it is necessary for the server to verify this when it should only be serving data to specific clients. This scenario is when two way TLS is utilized.

[How to setup two way TLS in Salesforce](https://help.salesforce.com/articleView?id=security_keys_uploading_mutual_auth_cert.htm&type=0)  
[How to configure your client to use two way TLS in Salesforce](https://help.salesforce.com/articleView?id=security_keys_uploading_mutual_auth_cert_api.htm&type=0)
    

