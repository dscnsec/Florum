<?php

/*
 * This file is part of fof/extend.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\Extend\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Frontend\Document;
use Flarum\Frontend\Frontend;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Container\Container;

class ExtensionSettings implements ExtenderInterface
{
    /**
     * @var SettingsRepositoryInterface
     */
    private $settings;

    /**
     * @var string
     */
    private $prefix = '';

    /**
     * @var array
     */
    private $keys = [];

    /**
     * @var array
     */
    private $defaults = [];

    /**
     * @param string $frontend
     */
    public function __construct()
    {
        $this->settings = app(SettingsRepositoryInterface::class);
    }

    public function extend(Container $container, Extension $extension = null)
    {
        $container->resolving(
            'flarum.frontend.forum',
            function (Frontend $frontend, Container $container) {
                $frontend->content(function (Document $document) {
                    foreach ($this->keys as $index => $key) {
                        $document->payload[$key] = $this->settings->get($key, $this->defaults[$index]);
                    }
                });
            }
        );
    }

    /**
     * Set extension keys prefix.
     *
     * @param string $prefix
     *
     * @return self
     */
    public function setPrefix($prefix) : self
    {
        $this->prefix = $prefix;

        return $this;
    }

    /**
     * Add setting key.
     *
     * @param string      $key
     * @param string|null $default
     *
     * @return self
     */
    public function addKey($key, $default = null) : self
    {
        $this->addKeys([$key => $default]);

        return $this;
    }

    /**
     * Add multiple setting keys. Supports a callable.
     *
     * @param array|callable $input
     *
     * @return self
     */
    public function addKeys($input) : self
    {
        if (is_callable($input)) {
            $input = (array) app()->call($input);
        }

        $keys = array_keys($input);
        $values = array_values($input);

        foreach ($keys as $index => $key) {
            if (is_numeric($key)) {
                $this->keys[] = $this->prefix.$values[$index];
                $this->defaults[] = null;
            } else {
                $this->keys[] = $this->prefix.$key;
                $this->defaults[] = $values[$index];
            }
        }

        return $this;
    }
}
