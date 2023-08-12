# site-django-rocket-sys
Este é um site feito com Django Framework, trata-se de um projeto pessoal chamado rocket-sys.

<h1>Modos de uso:</h1>
<p>Antes clonar este projeto Django é importante entender como funciona a declaração de alguns valores.</p>
<br><br>
<p>Na raiz do projeto crie o arquivo chamado "config_app.py", este arquivo deverá receber as constantes abaixo:</p>
<pre>
SECRET_KEY = 'crie uma chave Django e cole aqui, exemplo: django-insecure-s=mn=^-^31rm@an%h3...'
DEBUG = True
ALLOWED_HOSTS = ["*"]
DB_HOST = "host_database"
DB_USER = "username_database"
DB_PASSWORD = "password_database"
DB_NAME = "name_database"
DB_PORT = "port_database"
DB_ENGINE = "django.db.backends.mysql"
</pre>
<br>
<p>
    Perceba que apontei para um servidor de banco de dados "mysql", para outros tipos acesse a documentação do Django acesse 
      <a href="https://docs.djangoproject.com/en/4.2/ref/databases/">Documentação versão 4.2 - databases</a>
<p>
