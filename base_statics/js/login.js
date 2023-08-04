// ------------------------------------------
function toglleShowPassword(){
    let type_inputs = document.getElementById("password");
    if (type_inputs.type == "password"){
        type_inputs.type = "text";
        document.querySelector(".show-password p").textContent = "esconder senha";
    } else {
        type_inputs.type = "password";
        document.querySelector(".show-password p").textContent = "ver senha";
    }
}

function postFormLogin(element){
    console.log(element);
    let btn_submit = document.getElementById("form-login-account").submit();
    
}