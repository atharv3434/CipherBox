// script.js
document.getElementById('encryptButton').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value;
    const encrypted = btoa(textInput); // Basic Base64 encryption
    document.getElementById('output').value = encrypted;
  });
  
  document.getElementById('decryptButton').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value;
    try {
      const decrypted = atob(textInput); // Base64 decryption
      document.getElementById('output').value = decrypted;
    } catch (e) {
      document.getElementById('output').value = "Invalid input for decryption!";
    }
  });
  