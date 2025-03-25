<!--
N.B.: Aquest README ha estat generat automàticament per <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NO s'ha de modificar manualment.
-->

# Ghost per YunoHost

[![Nivell d'integració](https://apps.yunohost.org/badge/integration/ghost)](https://ci-apps.yunohost.org/ci/apps/ghost/)
![Estat de funcionament](https://apps.yunohost.org/badge/state/ghost)
![Estat de manteniment](https://apps.yunohost.org/badge/maintained/ghost)

[![Instal·la Ghost amb YunoHosth](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Llegeix aquest README en altres idiomes.](./ALL_README.md)*

> *Aquest paquet et permet instal·lar Ghost de forma ràpida i senzilla en un servidor YunoHost.*  
> *Si no tens YunoHost, consulta [la guia](https://yunohost.org/install) per saber com instal·lar-lo.*

## Visió general

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Versió inclosa:** 5.115.0~ynh1

## Captures de pantalla

![Captures de pantalla de Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Anticaracterístiques

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Documentació i recursos

- Lloc web oficial de l'aplicació: <https://ghost.org/>
- Documentació oficial per l'administrador: <https://ghost.org/help/>
- Repositori oficial del codi de l'aplicació: <https://github.com/TryGhost/Ghost>
- Botiga YunoHost: <https://apps.yunohost.org/app/ghost>
- Reportar un error: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Informació per a desenvolupadors

Envieu les pull request a la [branca `testing`](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Per provar la branca `testing`, procedir com descrit a continuació:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
o
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Més informació sobre l'empaquetatge d'aplicacions:** <https://yunohost.org/packaging_apps>
