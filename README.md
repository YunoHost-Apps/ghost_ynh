<!--
N.B.: This README was automatically generated by https://github.com/YunoHost/apps/tree/master/tools/README-generator
It shall NOT be edited by hand.
-->

# Ghost for YunoHost

[![Integration level](https://dash.yunohost.org/integration/ghost.svg)](https://dash.yunohost.org/appci/app/ghost) ![Working status](https://ci-apps.yunohost.org/ci/badges/ghost.status.svg) ![Maintenance status](https://ci-apps.yunohost.org/ci/badges/ghost.maintain.svg)

[![Install Ghost with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Lire ce readme en français.](./README_fr.md)*

> *This package allows you to install Ghost quickly and simply on a YunoHost server.
If you don't have YunoHost, please consult [the guide](https://yunohost.org/#/install) to learn how to install it.*

## Overview

Publishing, memberships, subscriptions and newsletters platform

**Shipped version:** 5.34.0~ynh1

## Screenshots

![Screenshot of Ghost](./doc/screenshots/screenshot.png)

## Disclaimers / important information

## Installation

 1. No LDAP support.
 1. You need more than **1GB** of ram. If you don't have it, please create a **swap memory**.

        dd if=/dev/zero of=/swapfile bs=1024 count=1048576
        mkswap /swapfile
        swapon /swapfile
        echo "/swapfile swap swap defaults 0 0" >> /etc/fstab

 1. This app is multi-instance (you can have more than one Ghost blogging websites on a single YunoHost server)

### Installing the Ghost app

 0. Note - When making the install public, your Ghost domain link must be accessed WHILE NOT signed into your YunoHost session. It is recommended to use a incognito mode to sign into your Ghost admin account. If you make your install public, and try to login your Ghost admin account while signed into your YunoHost session, you will get a an authorized header error. The reason for this is because Ghost has a feature that allows for a subscription based access for content. This means Ghost allows for the admin user to setup other users (either other staff or paid/unpaid subscribers) to have the abilility to login outside of YunoHost. 
 
 1. **App can be installed by YunoHost admin interface or by the following command:**

         `sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh`

 2. After installation create an **admin account** by visiting `https://domain.tld/ghost/ghost`. If you choose to name your Ghost instance "blog" during YunoHost setup process, then it would be `https://domain.tld/blog/ghost`. This will allow you to continue to setup your admin account and configure your settings.

## :red_circle: Antifeatures

- **Arbitrary limitations**: Features arbitrary limitations. Please refer to the README.

## Documentation and resources

* Official app website: <https://ghost.org/>
* Official admin documentation: <https://ghost.org/help/>
* Upstream app code repository: <https://github.com/TryGhost/Ghost>
* YunoHost documentation for this app: <https://yunohost.org/app_ghost>
* Report a bug: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Developer info

Please send your pull request to the [testing branch](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

To try the testing branch, please proceed like that.

``` bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
or
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**More info regarding app packaging:** <https://yunohost.org/packaging_apps>
