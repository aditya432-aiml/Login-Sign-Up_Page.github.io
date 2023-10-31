alert('Welcome To Login/Sign Up Page !!');
function myFunction() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    if (emailInput.value === "admin@gmail.com" && passwordInput.value === "admin@123") {
        alert('Welcome back');
    } else {
        alert('Wrong Email or Password');
      }
}
