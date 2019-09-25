# Console

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/friendsofflarum/console/blob/master/LICENSE.md) [![Latest Stable Version](https://img.shields.io/packagist/v/friendsofflarum/console.svg)](https://packagist.org/packages/friendsofflarum/console) [![Total Downloads](https://img.shields.io/packagist/dt/friendsofflarum/console.svg)](https://packagist.org/packages/friendsofflarum/console)

This package is meant for extension developers and offers the ability to add task scheduling to Flarum.

## Use in your extension

The real deal is using it in your own extension.
Simply require it in your extension `composer.json` file:

    "require": {
        "fof/console": "^0.5"
    },

Now make sure the ConsoleProvider is registered inside Flarum. There's an Extender that helps you with that, inside
your `extend.php` add:

```php
return [
    new \FoF\Console\Extend\EnableConsole,
  // .. your code
];
```

## Task Scheduling, cron jobs

To set a schedule, create a [Service Provider](https://laravel.com/docs/5.7/packages#service-providers) which
resolves the `Illuminate\Console\Scheduling\Schedule` through IoC, then use its methods to configure the schedule
for the command, see the [Task Scheduling documentation](https://laravel.com/docs/5.7/scheduling#defining-schedules).

## Security

If you discover a security vulnerability within Console, please send an email to the Flagrow team at security@flagrow.io. All security vulnerabilities will be promptly addressed.

Please include as many details as possible. You can use `php flarum info` to get the PHP, Flarum and extension versions installed.

## Links

- [Source code on GitHub](https://github.com/friendsOfFlarum/console)
- [Report an issue](https://github.com/friendsOfFlarum/console/issues)
- [Download via Packagist](https://packagist.org/packages/friendsOfFlarum/console)
