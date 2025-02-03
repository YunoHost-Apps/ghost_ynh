<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# Ghost para Yunohost

[![Nivel de integración](https://apps.yunohost.org/badge/integration/ghost)](https://ci-apps.yunohost.org/ci/apps/ghost/)
![Estado funcional](https://apps.yunohost.org/badge/state/ghost)
![Estado En Mantención](https://apps.yunohost.org/badge/maintained/ghost)

[![Instalar Ghost con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarGhost rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Versión actual:** 5.109.1~ynh1

## Capturas

![Captura de Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Características no deseables

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Documentaciones y recursos

- Sitio web oficial: <https://ghost.org/>
- Documentación administrador oficial: <https://ghost.org/help/>
- Repositorio del código fuente oficial de la aplicación : <https://github.com/TryGhost/Ghost>
- Catálogo YunoHost: <https://apps.yunohost.org/app/ghost>
- Reportar un error: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [rama `testing`](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
o
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
