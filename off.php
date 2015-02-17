<?php
$led=shell_exec('sudo /usr/share/nginx/www/led.py 24 0');
echo $led;
echo "Led Desligado."
?>
