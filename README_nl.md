<!--
NB: Deze README is automatisch gegenereerd door <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Hij mag NIET handmatig aangepast worden.
-->

# Ghost voor Yunohost

[![Integratieniveau](https://apps.yunohost.org/badge/integration/ghost)](https://ci-apps.yunohost.org/ci/apps/ghost/)
![Mate van functioneren](https://apps.yunohost.org/badge/state/ghost)
![Onderhoudsstatus](https://apps.yunohost.org/badge/maintained/ghost)

[![Ghost met Yunohost installeren](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Deze README in een andere taal lezen.](./ALL_README.md)*

> *Met dit pakket kun je Ghost snel en eenvoudig op een YunoHost-server installeren.*  
> *Als je nog geen YunoHost hebt, lees dan [de installatiehandleiding](https://yunohost.org/install), om te zien hoe je 'm installeert.*

## Overzicht

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Geleverde versie:** 5.112.0~ynh1

## Schermafdrukken

![Schermafdrukken van Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Anti-eigenschappen

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Documentatie en bronnen

- Officiele website van de app: <https://ghost.org/>
- Officiele beheerdersdocumentatie: <https://ghost.org/help/>
- Upstream app codedepot: <https://github.com/TryGhost/Ghost>
- YunoHost-store: <https://apps.yunohost.org/app/ghost>
- Meld een bug: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Ontwikkelaarsinformatie

Stuur je pull request alsjeblieft naar de [`testing`-branch](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Om de `testing`-branch uit te proberen, ga als volgt te werk:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
of
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Verdere informatie over app-packaging:** <https://yunohost.org/packaging_apps>
