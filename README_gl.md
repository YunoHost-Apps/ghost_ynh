<!--
NOTA: Este README foi creado automáticamente por <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON debe editarse manualmente.
-->

# Ghost para YunoHost

[![Nivel de integración](https://dash.yunohost.org/integration/ghost.svg)](https://ci-apps.yunohost.org/ci/apps/ghost/) ![Estado de funcionamento](https://ci-apps.yunohost.org/ci/badges/ghost.status.svg) ![Estado de mantemento](https://ci-apps.yunohost.org/ci/badges/ghost.maintain.svg)

[![Instalar Ghost con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Le este README en outros idiomas.](./ALL_README.md)*

> *Este paquete permíteche instalar Ghost de xeito rápido e doado nun servidor YunoHost.*  
> *Se non usas YunoHost, le a [documentación](https://yunohost.org/install) para saber como instalalo.*

## Vista xeral

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Versión proporcionada:** 5.88.3~ynh1

## Capturas de pantalla

![Captura de pantalla de Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Debes considerar

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Documentación e recursos

- Web oficial da app: <https://ghost.org/>
- Documentación oficial para admin: <https://ghost.org/help/>
- Repositorio de orixe do código: <https://github.com/TryGhost/Ghost>
- Tenda YunoHost: <https://apps.yunohost.org/app/ghost>
- Informar dun problema: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Info de desenvolvemento

Envía a túa colaboración á [rama `testing`](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Para probar a rama `testing`, procede deste xeito:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
ou
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Máis info sobre o empaquetado da app:** <https://yunohost.org/packaging_apps>
