<!--
N.B.: README ini dibuat secara otomatis oleh <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Ini TIDAK boleh diedit dengan tangan.
-->

# Ghost untuk YunoHost

[![Tingkat integrasi](https://apps.yunohost.org/badge/integration/ghost)](https://ci-apps.yunohost.org/ci/apps/ghost/)
![Status kerja](https://apps.yunohost.org/badge/state/ghost)
![Status pemeliharaan](https://apps.yunohost.org/badge/maintained/ghost)

[![Pasang Ghost dengan YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Baca README ini dengan bahasa yang lain.](./ALL_README.md)*

> *Paket ini memperbolehkan Anda untuk memasang Ghost secara cepat dan mudah pada server YunoHost.*  
> *Bila Anda tidak mempunyai YunoHost, silakan berkonsultasi dengan [panduan](https://yunohost.org/install) untuk mempelajari bagaimana untuk memasangnya.*

## Ringkasan

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Versi terkirim:** 5.113.1~ynh1

## Tangkapan Layar

![Tangkapan Layar pada Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Antifitur

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Dokumentasi dan sumber daya

- Website aplikasi resmi: <https://ghost.org/>
- Dokumentasi admin resmi: <https://ghost.org/help/>
- Depot kode aplikasi hulu: <https://github.com/TryGhost/Ghost>
- Gudang YunoHost: <https://apps.yunohost.org/app/ghost>
- Laporkan bug: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Info developer

Silakan kirim pull request ke [`testing` branch](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Untuk mencoba branch `testing`, silakan dilanjutkan seperti:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
atau
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Info lebih lanjut mengenai pemaketan aplikasi:** <https://yunohost.org/packaging_apps>
