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

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Shipped version:** 5.64.0~ynh2

## Screenshots

![Screenshot of Ghost](./doc/screenshots/screenshot.png)

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
