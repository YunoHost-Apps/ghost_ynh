<!--
注意：此 README 由 <https://github.com/YunoHost/apps/tree/master/tools/readme_generator> 自动生成
请勿手动编辑。
-->

# YunoHost 上的 Ghost

[![集成程度](https://dash.yunohost.org/integration/ghost.svg)](https://dash.yunohost.org/appci/app/ghost) ![工作状态](https://ci-apps.yunohost.org/ci/badges/ghost.status.svg) ![维护状态](https://ci-apps.yunohost.org/ci/badges/ghost.maintain.svg)

[![使用 YunoHost 安装 Ghost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ghost)

*[阅读此 README 的其它语言版本。](./ALL_README.md)*

> *通过此软件包，您可以在 YunoHost 服务器上快速、简单地安装 Ghost。*  
> *如果您还没有 YunoHost，请参阅[指南](https://yunohost.org/install)了解如何安装它。*

## 概况

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.


**分发版本：** 5.85.2~ynh1

## 截图

![Ghost 的截图](./doc/screenshots/screenshot.png)

## :red_circle: 负面特征

- **Arbitrary limitations**: Ghost developers have chosen to only support MySQL. YunoHost relying on MariaDB, incompatibilities may arise. For more information: https://github.com/TryGhost/Ghost/issues/15729#issuecomment-1299297720

## 文档与资源

- 官方应用网站： <https://ghost.org/>
- 官方管理文档： <https://ghost.org/help/>
- 上游应用代码库： <https://github.com/TryGhost/Ghost>
- YunoHost 商店： <https://apps.yunohost.org/app/ghost>
- 报告 bug： <https://github.com/YunoHost-Apps/ghost_ynh/issues>

## 开发者信息

请向 [`testing` 分支](https://github.com/YunoHost-Apps/ghost_ynh/tree/testing) 发送拉取请求。

如要尝试 `testing` 分支，请这样操作：

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
或
sudo yunohost app upgrade ghost -u https://github.com/YunoHost-Apps/ghost_ynh/tree/testing --debug
```

**有关应用打包的更多信息：** <https://yunohost.org/packaging_apps>
