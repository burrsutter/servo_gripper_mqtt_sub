npm install mqtt --save

https://github.com/sarfata/pi-blaster
sudo apt-get install autoconf
git clone git@github.com:sarfata/pi-blaster.git
cd pi-blaster
./autogen.sh
./configure
make

# auto run upon reboot
sudo make install
sudo make uninstall # if necessary

Servo/PWM with Node.js (depends on pi-plaster)
https://www.npmjs.com/package/pi-servo-blaster.js

npm install pi-blaster.js --save
