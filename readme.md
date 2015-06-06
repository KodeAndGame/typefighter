#typefighter

This is a NodeJS based competitive typing game

##Installation for development
###With Virtualization via Vagrant
- Install vagrant
- Install vagrant-berkshelf plugin
- Install Chef-DK
- Run `vagrant up`
- Run `vagrant ssh`
- Run `node app/app.js` or `DEBUG=* node app/app.js`
- Visit 192.168.33.10:8080 in host machine

###Locally
- Install node.js
- Run `node src/app.js` or `DEBUG=* node src/app.js`
- Visit 127.0.0.1:8080 (or localhost:8080)