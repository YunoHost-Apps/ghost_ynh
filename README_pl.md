<!--
To README zostało automatycznie wygenerowane przez <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Nie powinno być ono edytowane ręcznie.
-->

# Ghost dla YunoHost

[![Poziom integracji](https://apps.yunohost.org/badge/integration/ghost)](https://ci-apps.yunohost.org/ci/apps/ghost/)
![Status działania](https://apps.yunohost.org/badge/state/ghost)
![Status utrzymania](https://apps.yunohost.org/badge/maintained/ghost)

[![Zainstaluj Ghost z YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Przeczytaj plik README w innym języku.](./ALL_README.md)*

> *Ta aplikacja pozwala na szybką i prostą instalację Ghost na serwerze YunoHost.*  
> *Jeżeli nie masz YunoHost zapoznaj się z [poradnikiem](https://yunohost.org/install) instalacji.*

## Przegląd

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Dostarczona wersja:** 5.114.1~ynh1

## Zrzuty ekranu

![Zrzut ekranu z Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Niepożądane funkcje

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Dokumentacja i zasoby

- Oficjalna strona aplikacji: <https://ghost.org/>
- Oficjalna dokumentacja dla administratora: <https://ghost.org/help/>
- Repozytorium z kodem źródłowym: <https://github.com/TryGhost/Ghost>
- Sklep YunoHost: <https://apps.yunohost.org/app/ghost>
- Zgłaszanie błędów: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Informacje od twórców

Wyślij swój pull request do [gałęzi `testing`](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Aby wypróbować gałąź `testing` postępuj zgodnie z instrukcjami:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
lub
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Więcej informacji o tworzeniu paczek aplikacji:** <https://yunohost.org/packaging_apps>
