const image_astro_forms = document.getElementById('image-astro');

function statusButtonSubmit(){
    const check_inputs_status = document.querySelectorAll(".input-valid").length;
    const btn_submit = document.getElementById("btn-submit");
    if(check_inputs_status==4){
        btn_submit.classList.remove("disabled-active");
        btn_submit.disabled = false;
    }else{
        btn_submit.classList.add("disabled-active");
        btn_submit.disabled = true;
    }
}
function validarApenasLetras(element) {
    const regex = /^[a-zA-Z]+$/;
    const test_value = element.value;
    const test_result  = regex.test(test_value);
    let msg_error = document.querySelector(`.status-${element.id}-check .msg-error`);
    if (element.value.length <2){
        element.classList.remove("input-valid");
        setTimeout(()=>{
            msg_error.textContent = "o nome deve conter no minimo 3 letras.";
            element.classList.add("input-invalid");
        }, 880);
    }
    else if(!test_result){
        msg_error.textContent = "apenas letras.";
        element.classList.remove("input-valid");
        element.classList.add("input-invalid");
    } else{
        msg_error.textContent = "";
        element.classList.remove("input-invalid");
        element.classList.add("input-valid");
    }
    image_astro_forms.style.transform = `rotate(-15deg)`;
    image_astro_forms.style.transition = "2s";
    statusButtonSubmit();
}

// ------------------------------------------
function validarEmail(element) {
    let email_id = element.id
    let email_value = element.value;
    const regex_test = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const email_test = regex_test.test(email_value);
    let e_msg_error = document.querySelector(`.status-${element.id}-check .msg-error`);
    if(!email_test){
        element.classList.remove("input-valid");
        element.classList.add("input-invalid");
        setTimeout(()=>{
            e_msg_error.textContent = "ops! parece que esse e-mail não é válido.";
        }, 800);
    } else{
        element.classList.remove("input-invalid");
        element.classList.add("input-valid");
        e_msg_error.textContent = "";
    }
    image_astro_forms.style.transform = `rotate(5deg)`;
    image_astro_forms.style.transition = "2s";
    statusButtonSubmit();
}
// ------------------------------------------
function validarSenha(element) {
    let password_id = element.id
    let password_value = element.value;
    let password_2 = document.getElementById("password_2");
    let e_msg_error = document.querySelector(`.status-${element.id}-check .msg-error`);
    
    e_msg_error.textContent = "";
    let bar_nivel = document.querySelector(`.input-${password_id}-check-animation-2`);

    const regex_letras_minusc = /[a-z]/.test(password_value);
    const regex_letras_maiusc = /[A-Z]/.test(password_value);
    const regex_numero = /[0-9]/.test(password_value);
    const regex_caract = /[!@}{,.^?~=+\-_\/*\-+.\|#]/.test(password_value);
    const tam_senha = password_value.length;
    
    let v1=0
    let v2=0
    let v3=0
    let v4=0
    let v5=0
    if(regex_letras_minusc){
        v1 +=20;
    }if (regex_letras_maiusc){
        v2 += 20;
    }if (regex_numero){
        v3 += 20;
    }if (regex_caract){
        v4 += 20;
    }if (tam_senha>=8){
        v5 += 20;
    }
    let perc_nivel_senha = v1+v2+v3+v4+v5;
    let cor_barra = "#ff0000" // vermelho
    
    if (perc_nivel_senha==40){
        cor_barra = "#ffed00" // amarelo
    }if(perc_nivel_senha==60){
        cor_barra = "ffb300" // laranja
    }if(perc_nivel_senha==80){
        cor_barra = "#31ff00" // verde
    }if(perc_nivel_senha==100){
        cor_barra = "var(--color-base-3)";
    }
    bar_nivel.style.width = `${perc_nivel_senha}%`;
    bar_nivel.style.background = `${cor_barra}`;

    if (password_value.length < 5){
        e_msg_error.textContent = "insira uma senha com minimo 5 caracteres.";
        element.classList.remove("input-valid");
        password_2.classList.remove("input-valid");
        element.classList.add("input-invalid");
        password_2.classList.add("input-invalid");
    } else{
        if (password_2.value.length>=1){
            if (element.value != password_2.value){
                element.classList.remove("input-valid");
                password_2.classList.remove("input-valid");
                element.classList.add("input-invalid");
                password_2.classList.add("input-invalid");
                e_msg_error.textContent = "as senhas inseridades estão diferentes.";
            } else {
                element.classList.remove("input-invalid");
                password_2.classList.remove("input-invalid");
                element.classList.add("input-valid");
                password_2.classList.add("input-valid");
                e_msg_error.textContent = "";
                document.querySelector(".error-passwords").textContent = "";
            }
        }
    }
    image_astro_forms.style.transform = `rotate(10deg)`;
    image_astro_forms.style.transition = "2s";
    statusButtonSubmit();
}
// ------------------------------------------
function validarSenhaConfirmacao(element) {
    let password_1 = document.getElementById("password_1");
    let password_2 = element;
    let e_msg_error = document.querySelector(".error-passwords");

    if (password_1.value.length < 5){
        e_msg_error.textContent = "insira uma senha com minimo 5 caracteres.";
    } else{
        if (password_1.value != password_2.value){
            password_1.classList.remove("input-valid");
            password_2.classList.remove("input-valid");
            password_1.classList.add("input-invalid");
            password_2.classList.add("input-invalid");
            e_msg_error.textContent = "as senhas inseridades estão diferentes.";
        } else {
            password_1.classList.remove("input-invalid");
            password_2.classList.remove("input-invalid");
            password_1.classList.add("input-valid");
            password_2.classList.add("input-valid");
            e_msg_error.textContent = "";
            document.querySelector(`.status-password_1-check .msg-error`).textContent = "";
        }
    }

    image_astro_forms.style.transform = `rotate(17deg)`;
    image_astro_forms.style.transition = "2s";
    statusButtonSubmit();
}