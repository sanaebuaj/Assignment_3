// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

 

var btn = document.getElementById('submit-button');
var data = document.getElementById('contact-page');
function main_content(){
    data.innerHTML = "<p>Thank you for your message </p>"; 
    data.style.fontSize="24px";
}
btn.addEventListener("click",main_content);
