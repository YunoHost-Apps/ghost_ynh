<!--
Nota bene: ce README est automatiquement généré par https://github.com/YunoHost/apps/tree/master/tools/readme_generator
Il ne doit pas être modifié à la main.
-->

# Ghost pour YunoHost

[![Niveau d'intégration ](https://dash.yunohost.org/integration/ghost.svg)](https://dash.yunohost.org/appci/app/ghost) ![Status du fonctionnement](https://ci-apps.yunohost.org/ci/badges/ghost.status.svg) ![Statut demaintenance](https://ci-apps.yunohost.org/ci/badges/ghost.maintain.svg)

[![Installer Ghost avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer Ghost rapidement et simplement sur un serveur YunoHost.
Si vous n’avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l’installer et en profiter.*

## Vue d'ensemble

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.

**Version incluse :** 5.81.0~ynh1

## Captures d'écran

![Capture d'écran de Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Anti-fonctionnalités

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Documentations et ressources

- Site officiel de l’app : <https://ghost.org/>
- Documentation officielle de l'admin <https://ghost.org/help/>
- Dépôt de code officiel de l’app : <https://github.com/TryGhost/Ghost>
- YunoHost Store : <https://apps.yunohost.org/app/ghost>
- Signaler un bug : <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche branch](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing),


Pour essayer la branche testing, procédez comme suit.

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
or
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Plus d'infos sur le packaging d'applications :** <https://yunohost.org/packaging_apps>
