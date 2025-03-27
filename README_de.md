<!--
N.B.: Diese README wurde automatisch von <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> generiert.
Sie darf NICHT von Hand bearbeitet werden.
-->

# Ghost für YunoHost

[![Integrations-Level](https://apps.yunohost.org/badge/integration/ghost)](https://ci-apps.yunohost.org/ci/apps/ghost/)
![Funktionsstatus](https://apps.yunohost.org/badge/state/ghost)
![Wartungsstatus](https://apps.yunohost.org/badge/maintained/ghost)

[![Ghost mit YunoHost installieren](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Dieses README in anderen Sprachen lesen.](./ALL_README.md)*

> *Mit diesem Paket können Sie Ghost schnell und einfach auf einem YunoHost-Server installieren.*  
> *Wenn Sie YunoHost nicht haben, lesen Sie bitte [die Anleitung](https://yunohost.org/install), um zu erfahren, wie Sie es installieren.*

## Übersicht

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Ausgelieferte Version:** 5.115.0~ynh1

## Bildschirmfotos

![Bildschirmfotos von Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Anti-Eigenschaften

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Dokumentation und Ressourcen

- Offizielle Website der App: <https://ghost.org/>
- Offizielle Verwaltungsdokumentation: <https://ghost.org/help/>
- Upstream App Repository: <https://github.com/TryGhost/Ghost>
- YunoHost-Shop: <https://apps.yunohost.org/app/ghost>
- Einen Fehler melden: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Entwicklerinformationen

Bitte senden Sie Ihren Pull-Request an den [`testing` branch](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Um den `testing` Branch auszuprobieren, gehen Sie bitte wie folgt vor:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
oder
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Weitere Informationen zur App-Paketierung:** <https://yunohost.org/packaging_apps>
