#!/usr/bin/python
#by:Isca (zz0@garagemhacker.org)

import sys
import RPi.GPIO as GPIO

arg=len(sys.argv)
if arg == 3: 
  pin, sig = int(sys.argv[1]), int(sys.argv[2])
  GPIO.setwarnings(False)
  GPIO.setmode(GPIO.BOARD)
  GPIO.setup(pin, GPIO.OUT)
  GPIO.output(pin, sig)
else:
 print 'ops... voce deve usar led porta sinal\n Exemplo: led 24 1 (acender o led na porta 24)\n led 24 0 (apagar o led na porta 24)' 

