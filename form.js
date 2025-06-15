let loginform = document.getElementById('login-form');
let usernameBox = document.getElementById('usn-box');
let passwordBox = document.getElementById('pwd-box');

login-form.addEventListner('submit', function(e)
{
    e.preventDefault();

    let enteredUsn = usernameBox.value;    
    let enteredPwd = passwordBox.value;  
    
    let newUser={};
    newUser.usn = enteredUsn;
    newUser.pwd = enteredPwd;

    console.log("New user");

    usernameBox.value = "";
    passwordBox.value = "";
});