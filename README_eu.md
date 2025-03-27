<!--
Ohart ongi: README hau automatikoki sortu da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>ri esker
EZ editatu eskuz.
-->

# Ghost YunoHost-erako

[![Integrazio maila](https://apps.yunohost.org/badge/integration/ghost)](https://ci-apps.yunohost.org/ci/apps/ghost/)
![Funtzionamendu egoera](https://apps.yunohost.org/badge/state/ghost)
![Mantentze egoera](https://apps.yunohost.org/badge/maintained/ghost)

[![Instalatu Ghost YunoHost-ekin](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Irakurri README hau beste hizkuntzatan.](./ALL_README.md)*

> *Pakete honek Ghost YunoHost zerbitzari batean azkar eta zailtasunik gabe instalatzea ahalbidetzen dizu.*  
> *YunoHost ez baduzu, kontsultatu [gida](https://yunohost.org/install) nola instalatu ikasteko.*

## Aurreikuspena

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Paketatutako bertsioa:** 5.115.0~ynh1

## Pantaila-argazkiak

![Ghost(r)en pantaila-argazkia](./doc/screenshots/screenshot.png)

## :red_circle: Ezaugarri zalantzagarriak

- **Muga arbitrarioak**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Dokumentazioa eta baliabideak

- Aplikazioaren webgune ofiziala: <https://ghost.org/>
- Administratzaileen dokumentazio ofiziala: <https://ghost.org/help/>
- Jatorrizko aplikazioaren kode-gordailua: <https://github.com/TryGhost/Ghost>
- YunoHost Denda: <https://apps.yunohost.org/app/ghost>
- Eman errore baten berri: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Garatzaileentzako informazioa

Bidali `pull request`a [`testing` abarrera](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

`testing` abarra probatzeko, honakoa egin:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
edo
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Informazio gehiago aplikazioaren paketatzeari buruz:** <https://yunohost.org/packaging_apps>
