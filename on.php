<?php
$led=shell_exec('sudo /usr/share/nginx/www/led.py 24 1');
echo $led;
echo "Led Ligado"
?>
