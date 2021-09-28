# Ghost pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/ghost.svg)](https://dash.yunohost.org/appci/app/ghost) ![](https://ci-apps.yunohost.org/ci/badges/ghost.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/ghost.maintain.svg)  
[![Installer Ghost avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Read this readme in english.](./README.md)*
*[Lire ce readme en français.](./README_fr.md)*

> *Ce package vous permet d'installer Ghost rapidement et simplement sur un serveur YunoHost.
Si vous n'avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble

Plateforme de blogging

**Version incluse :** 4.16.0~ynh1



## Captures d'écran

![](./doc/screenshots/screenshot.png)

## Avertissements / informations importantes

## Installation

 1. Pas de prise en charge LDAP.
 1. Vous avez besoin de plus de **1 Go** de RAM. Si vous ne l'avez pas, veuillez créer une **mémoire d'échange**.

        dd if=/dev/zero of=/swapfile bs=1024 count=1048576
        mkswap /fichier d'échange
        swapon / fichier d'échange
        echo "/swapfile swap swap defaults 0 0" >> /etc/fstab

 1. Cette application est multi-instance (vous pouvez avoir plusieurs sites Web de blogs Ghost sur un seul serveur YunoHost)

### Installation de l'application Ghost

 0. Remarque - Lorsque vous rendez l'installation publique, vous devez accéder à votre lien de domaine Ghost SANS vous connecter à votre session YunoHost. Il est recommandé d'utiliser un mode incognito pour vous connecter à votre compte administrateur Ghost. Si vous rendez votre installation publique et essayez de vous connecter à votre compte administrateur Ghost tout en étant connecté à votre session YunoHost, vous obtiendrez une erreur d'en-tête autorisée. La raison en est que Ghost a une fonctionnalité qui permet un accès au contenu basé sur un abonnement. Cela signifie que Ghost permet à l'utilisateur administrateur de configurer d'autres utilisateurs (soit d'autres membres du personnel, soit des abonnés payés/non payés) pour avoir la possibilité de se connecter en dehors de YunoHost.
 
 1. ** L'application peut être installée par l'interface d'administration YunoHost ou par la commande suivante : **

         `sudo yunohost installer l'application https://github.com/YunoHost-Apps/ghost_ynh`

 2. Après l'installation, créez un **compte administrateur** en visitant `https://domain.tld/ghost/ghost`. Si vous choisissez de nommer votre instance Ghost "blog" pendant le processus d'installation de YunoHost, alors ce sera "https://domain.tld/blog/ghost". Cela vous permettra de continuer à configurer votre compte administrateur et à configurer vos paramètres. 
## Documentations et ressources

* Site officiel de l'app : https://ghost.org/
* Documentation officielle de l'admin : https://ghost.org/help/
* Dépôt de code officiel de l'app : https://github.com/TryGhost/Ghost
* Documentation YunoHost pour cette app : https://yunohost.org/app_ghost
* Signaler un bug : https://github.com/YunoHost-Apps/ghost_ynh/issues

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
ou
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Plus d'infos sur le packaging d'applications :** https://yunohost.org/packaging_apps