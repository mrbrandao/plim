Plim
-------------
Plim eh um pequeno projeto para automacao em casas, edificios e outros usando Raspberry Pi/Banana Pi/Arduino's, etc...

Aqui temos apens um simples Hello World do projeto que faz um led blink pela web no RaspBerry.
Criamos um pyhton(led.py) que usa a API Rpi.GPIO para interagir com o raspberry. Os arquivos php sao apenas para chamar em shell_exec o led.py

### Instalacao

    1 - Instale o nginx no Raspberry, faca o clone do plim na raiz do nginx.
    2 - Adcione o www-data no sudoers com: www-data ALL=NOPASSWD: ALL

### Autor
-------
| | |
| ------------- | ----------- |
| [Zero ](http://plebeos1.blogspot.com) | Zerocentos |<br />
| email | igorsca(at)gmail.com |<br />
| Curitiba/PR | 12/02/2015 |<br />
| Brazil | |
