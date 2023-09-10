document.addEventListener("DOMContentLoaded", function () {
    const emailField = document.getElementById("email"); 
    const phoneNumberField = document.getElementById("phone-number"); 
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
    const createAccountButton = document.getElementById("create-account-button");
  
    createAccountButton.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Check if any of the fields are empty
      if (isEmptyField(emailField) || isEmptyField(phoneNumberField) || isEmptyField(passwordField) || isEmptyField(confirmPasswordField)) {
        alert("Please fill in all required fields.");
        return; // Prevent further execution
      }
  
      // Check if the email is valid
      const emailValue = emailField.value;
      if (!isValidEmail(emailValue)) {
        alert("Please enter a valid email address.");
        emailField.value = "";
        emailField.focus();
        return; 
      }
  
      // Check if the phone number contains only numbers
      const phoneNumberValue = phoneNumberField.value;
      if (!isValidPhoneNumber(phoneNumberValue)) {
        alert("Please enter a valid phone number. The phone number should contain numbers only.");
        phoneNumberField.value = "";
        phoneNumberField.focus();
        return; 
      }
  
      // Check if the passwords match
      const passwordValue = passwordField.value;
      const confirmPasswordValue = confirmPasswordField.value;
      if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match. Please make sure both password fields are the same.");
        passwordField.value = "";
        confirmPasswordField.value = "";
        passwordField.focus();
        return; 
      }
  
      // Passwords match, email is valid, and phone number is valid proceed with form submission
      alert("Account created successfully!");
      // Refresh the page 
      location.reload();
    });
  
    function isEmptyField(field) {
      return field.value.trim() === "";
    }
  
    function isValidEmail(email) {
      // check for a valid email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidPhoneNumber(phoneNumber) {
      // check if the string contains only numeric characters
      const numericRegex = /^[0-9]+$/;
      return numericRegex.test(phoneNumber);
    }
  });
  