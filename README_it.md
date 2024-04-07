<!--
N.B.: Questo README è stato automaticamente generato da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON DEVE essere modificato manualmente.
-->

# Ghost per YunoHost

[![Livello di integrazione](https://dash.yunohost.org/integration/ghost.svg)](https://dash.yunohost.org/appci/app/ghost) ![Stato di funzionamento](https://ci-apps.yunohost.org/ci/badges/ghost.status.svg) ![Stato di manutenzione](https://ci-apps.yunohost.org/ci/badges/ghost.maintain.svg)

[![Installa Ghost con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Leggi questo README in altre lingue.](./ALL_README.md)*

> *Questo pacchetto ti permette di installare Ghost su un server YunoHost in modo semplice e veloce.*  
> *Se non hai YunoHost, consulta [la guida](https://yunohost.org/install) per imparare a installarlo.*

## Panoramica

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Versione pubblicata:** 5.79.6~ynh1

## Screenshot

![Screenshot di Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Anti-funzionalità

- **Limitazioni arbitrarie**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Documentazione e risorse

- Sito web ufficiale dell’app: <https://ghost.org/>
- Documentazione ufficiale per gli amministratori: <https://ghost.org/help/>
- Repository upstream del codice dell’app: <https://github.com/TryGhost/Ghost>
- Store di YunoHost: <https://apps.yunohost.org/app/ghost>
- Segnala un problema: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Informazioni per sviluppatori

Si prega di inviare la tua pull request alla [branch di `testing`](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Per provare la branch di `testing`, si prega di procedere in questo modo:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
o
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Maggiori informazioni riguardo il pacchetto di quest’app:** <https://yunohost.org/packaging_apps>
