const JSEncrypt = require('jsencrypt').default;

class RSAEncryption {
  constructor() {
    this.encryptor = new JSEncrypt();
  }

  // Generate key pair
  generateKeys() {
    const keySize = 2048; // Key size
    this.encryptor = new JSEncrypt({ default_key_size: keySize });
    return {
      publicKey: this.encryptor.getPublicKey(),
      privateKey: this.encryptor.getPrivateKey()
    };
  }

  // Set public key
  setPublicKey(publicKey) {
    this.encryptor.setPublicKey(publicKey);
  }

  // Set private key
  setPrivateKey(privateKey) {
    this.encryptor.setPrivateKey(privateKey);
  }

  // Encrypt data
  encrypt(plainText) {
    try {
      return this.encryptor.encrypt(plainText);
    } catch (error) {
      throw new Error('Encryption failed: ' + error.message);
    }
  }

  // Decrypt data
  decrypt(encryptedText) {
    try {
      return this.encryptor.decrypt(encryptedText);
    } catch (error) {
      throw new Error('Decryption failed: ' + error.message);
    }
  }
}

module.exports = RSAEncryption;