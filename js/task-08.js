const loginFormRef = document.querySelector('.login-form')

loginFormRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
    
      if (email.value === "" || password.value === "") {
        alert ("Please fill in all the fields!");
      return;
      }
      const loginData = {
        email: email.value,
        password: password.value,
      }
      console.dir(loginData);
      event.currentTarget.reset();
      
});
