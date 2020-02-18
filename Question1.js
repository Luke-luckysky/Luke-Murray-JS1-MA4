
// Question 1

const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", checkLength);

function checkLength(event) {
   event.preventDefault();

   const firstName = document.querySelector("#firstName");
   const firstNameError = document.querySelector("#firstNameError")
   const firstNameValue = firstName.value;
   
   if(checkNameLength(firstNameValue) === true) {
      firstNameError.style.display = "none";
   } else {
      firstNameError.style.display = "block";
   }
}

function checkNameLength(value) {
   const trimmedValue = value.trim();

   if(trimmedValue.length < 2) {
      return false;
   } else {
      return true;
   }
}
