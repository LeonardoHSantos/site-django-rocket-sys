from django import forms

class LoginUser(forms.Form):
    # ----
    email = forms.EmailField(
        label="e-mail", 
        max_length=40,
        widget=forms.EmailInput(
            attrs={
                "id": "email",
                "autocomplete": "email",
                "class": "input-form-django",
                "placeholder": "use até 40 caracteres",
            }
        )
    )
    # ----
    password = forms.CharField(
        max_length=15,
        label="senha",
        widget=forms.PasswordInput(
            attrs={
                "id": "password",
                "autocomplete": "password",
                "class": "input-form-django",
                "placeholder": "use até 8 caracteres",
            }
        )
    )
    
class NewUser(forms.Form):
    name = forms.CharField(
        max_length=15,
        label="usuário",
        widget=forms.TextInput(
            attrs={
                "id": "username",
                "autocomplete": "name",
                "class": "input-form-django",
                "onkeyup": "validarApenasLetras(this)",
                "placeholder": "use até 15 caracteres",
            }
        )
    )
    # ----
    email = forms.EmailField(
        label="e-mail", 
        max_length=40,
        widget=forms.EmailInput(
            attrs={
                "id": "email",
                "autocomplete": "email",
                "class": "input-form-django",
                "onkeyup": "validarEmail(this)",
                "placeholder": "use até 40 caracteres",
            }
        )
    )
    # ----
    password_1 = forms.CharField(
        max_length=15,
        label="senha",
        widget=forms.PasswordInput(
            attrs={
                "id": "password_1",
                "autocomplete": "password",
                "class": "input-form-django",
                "onkeyup": "validarSenha(this)",
                "placeholder": "use até 8 caracteres",
            }
        )
    )
    # ----
    password_2 = forms.CharField(
        max_length=15,
        label="confirme sua senha",
        widget=forms.PasswordInput(
            attrs={
                "id": "password_2",
                "autocomplete": "password",
                "class": "input-form-django",
                "onkeyup": "validarSenhaConfirmacao(this)",
                "placeholder": "confirme sua senha aqui",
            }
        )
    )