// Changing color letters from the string "Calculator"
let letters = document.querySelector('#letters').textContent;
let nHTML = '';

// for... of, pull just the value rather than the key of and object.
for(let i of letters) {
  nHTML += "<span class = 'x'>" + i + "</span>"; 
};
// Now that we have all the letters with the class 'x' we just need to change the color in CDD
document.querySelector('#letters').innerHTML = nHTML;