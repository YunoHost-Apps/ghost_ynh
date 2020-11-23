# Ghost blogging app for YunoHost

[![Integration level](https://dash.yunohost.org/integration/ghost.svg)](https://dash.yunohost.org/appci/app/ghost) ![](https://ci-apps.yunohost.org/ci/badges/ghost.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/ghost.maintain.svg)  
[![Install Ghost with YunoHost](https://install-app.yunohost.org/install-with-yunohost.png)](https://install-app.yunohost.org/?app=ghost)

> *This package allows you to install Ghost quickly and simply on a YunoHost server.  
If you don't have YunoHost, please consult [the guide](https://yunohost.org/#/install) to learn how to install it.*

## Overview
Ghost is a fully open source, adaptable platform for building and running a modern online publication.

**Shipped version:** 3.38.2

## Screenshots

![](https://ghost.org/static/ghost-admin-home-header-0c20f780aac8e98af7a56076ae8228b8.png)

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
 1. After installation create an **admin account** by visiting https://domain.tld/ghost
 
### Updating the Ghost app
 1. Updatation of the app works, but it need more testing to check eveything works after upgrade. So its advised to backup before updating.
 1. **App can be updated by YunoHost admin interface or with the following command:**
          
          $ sudo yunohost app upgrade -u https://github.com/YunoHost-Apps/ghost_ynh ghost

## Documentation

 * Official documentation: https://ghost.org/docs/

## YunoHost specific features

#### Supported architectures

* x86-64 - [![Build Status](https://ci-apps.yunohost.org/ci/logs/ghost%20%28Apps%29.svg)](https://ci-apps.yunohost.org/ci/apps/ghost/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/ghost%20%28Apps%29.svg)](https://ci-apps-arm.yunohost.org/ci/apps/ghost/)

## Links

 * Report a bug: https://github.com/YunoHost-Apps/ghost_ynh/issues
 * App website: https://ghost.org/
 * Upstream app repository: https://github.com/TryGhost/Ghost
 * YunoHost website: https://yunohost.org/

---

Developer info
----------------

Please send your pull request to the [testing branch](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

To try the testing branch, please proceed like that.
```
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
or
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```
