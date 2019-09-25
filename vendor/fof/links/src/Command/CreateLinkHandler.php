<?php

/*
 * This file is part of fof/links.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Links\Command;

use Flarum\User\AssertPermissionTrait;
use FoF\Links\Link;
use FoF\Links\LinkValidator;

class CreateLinkHandler
{
    use AssertPermissionTrait;

    /**
     * @var LinkValidator
     */
    protected $validator;

    /**
     * @param LinkValidator $validator
     */
    public function __construct(LinkValidator $validator)
    {
        $this->validator = $validator;
    }

    /**
     * @param CreateLink $command
     *
     * @return Link
     */
    public function handle(CreateLink $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $this->assertAdmin($actor);

        $link = Link::build(
            array_get($data, 'attributes.title'),
            array_get($data, 'attributes.url'),
            array_get($data, 'attributes.isInternal'),
            array_get($data, 'attributes.isNewtab')
        );

        $this->validator->assertValid($link->getAttributes());

        $link->save();

        return $link;
    }
}
