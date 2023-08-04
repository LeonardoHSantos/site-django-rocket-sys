// ------------------------------------------
function toglleShowPassword(){
    let type_inputs_1 = document.getElementById("password_1");
    let type_inputs_2 = document.getElementById("password_2");
    if (type_inputs_1.type == "password"){
        type_inputs_1.type = "text";
        type_inputs_2.type = "text";
        document.querySelector(".show-password p").textContent = "esconder senhas";
    } else {
        type_inputs_1.type = "password";
        type_inputs_2.type = "password";
        document.querySelector(".show-password p").textContent = "ver senhas";
    }
}

function postFormCreateAccount(element){
    console.log(element);
    document.getElementById("form-create-account").submit();
}
