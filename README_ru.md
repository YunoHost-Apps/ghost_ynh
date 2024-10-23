<!--
Важно: этот README был автоматически сгенерирован <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Он НЕ ДОЛЖЕН редактироваться вручную.
-->

# Ghost для YunoHost

[![Уровень интеграции](https://dash.yunohost.org/integration/ghost.svg)](https://ci-apps.yunohost.org/ci/apps/ghost/) ![Состояние работы](https://ci-apps.yunohost.org/ci/badges/ghost.status.svg) ![Состояние сопровождения](https://ci-apps.yunohost.org/ci/badges/ghost.maintain.svg)

[![Установите Ghost с YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[Прочтите этот README на других языках.](./ALL_README.md)*

> *Этот пакет позволяет Вам установить Ghost быстро и просто на YunoHost-сервер.*  
> *Если у Вас нет YunoHost, пожалуйста, посмотрите [инструкцию](https://yunohost.org/install), чтобы узнать, как установить его.*

## Обзор

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**Поставляемая версия:** 5.97.3~ynh1

## Снимки экрана

![Снимок экрана Ghost](./doc/screenshots/screenshot.png)

## :red_circle: Анти-функции

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## Документация и ресурсы

- Официальный веб-сайт приложения: <https://ghost.org/>
- Официальная документация администратора: <https://ghost.org/help/>
- Репозиторий кода главной ветки приложения: <https://github.com/TryGhost/Ghost>
- Магазин YunoHost: <https://apps.yunohost.org/app/ghost>
- Сообщите об ошибке: <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## Информация для разработчиков

Пришлите Ваш запрос на слияние в [ветку `testing`](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing).

Чтобы попробовать ветку `testing`, пожалуйста, сделайте что-то вроде этого:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
или
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**Больше информации о пакетировании приложений:** <https://yunohost.org/packaging_apps>
