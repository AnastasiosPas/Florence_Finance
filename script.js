

const myWallet = function() {
   document.getElementById("modalwallet").style.display = "block";
   document.getElementById("shadow").style.display = "block";
  }

const closeWallet = function() {
  document.getElementById("modalwallet").style.display = "none";
  document.getElementById("shadow").style.display = "none";
}


  module.exports = { myWallet, closeWallet };