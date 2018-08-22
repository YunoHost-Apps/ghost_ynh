# Ghost blogging app for YunoHost

[![Integration level](https://dash.yunohost.org/integration/ghost.svg)](https://ci-apps.yunohost.org/jenkins/job/ghost%20%28Community%29/lastBuild/consoleFull)  
[![Install Ghost with YunoHost](https://install-app.yunohost.org/install-with-yunohost.png)](https://install-app.yunohost.org/?app=ghost)<br><br>
=======

Shipped version: **1.24.9** <br><br>

- [Yunohost project](https://yunohost.org)
- [Ghost](https://ghost.org/)
- [Ghost source code at Github](https://github.com/TryGhost/Ghost)
- [Ghost forum](https://forum.ghost.org/)

## What is Ghost ?
Ghost is a fully open source, adaptable platform for building and running a modern online publication.


## Installation

### Guidelines 

 1. No LDAP support.
 1. You need more then **1GB** of ram. If you don't have it, please create a **swap memory**.
 
        $ dd if=/dev/zero of=/swapfile bs=1024 count=1048576
        $ mkswap /swapfile
        $ swapon /swapfile
        $ echo "/swapfile swap swap defaults 0 0" >> /etc/fstab
 1. This app is multi-instance (you can have more then one Ghost blogging websites on a single YunoHost server)
   
### Installing the Ghost app

 1. **App can be installed by YunoHost admin interface or by the following command:**

         $ sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh
 1. After installation create an **admin account** by visiting https://domain.tld/admin
 
### Updating the Ghost app
 1. Updatation of the app works, but it need more testing to check eveything works after upgrade. So its advised to backup before updating.
 1. **App can be updated by YunoHost admin interface or with the following command:**
          
          $ sudo yunohost app upgrade -u https://github.com/YunoHost-Apps/ghost_ynh ghost


### Dependencies

  * NodeJS
  * MySql
  * Yarn

