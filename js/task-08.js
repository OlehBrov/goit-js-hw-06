const loginFormRef = document.querySelector('.login-form')

loginFormRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
        alert ("Please fill in all the fields!");
      }
    
      console.log(`Email: ${email.value}, Password: ${password.value}`);
      event.currentTarget.reset();
});
