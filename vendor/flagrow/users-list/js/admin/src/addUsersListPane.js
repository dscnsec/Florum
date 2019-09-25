import app from 'flarum/app';
import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';
import UsersListPage from 'flagrow/users-list/components/UsersListPage';

export default function() {
    app.routes.usersList = {path: '/users-list', component: UsersListPage.component()};

    app.extensionSettings['flagrow-users-list'] = () => m.route(app.route('usersList'));

    extend(AdminNav.prototype, 'items', items => {
        items.add('users-list', AdminLinkButton.component({
            href: app.route('usersList'),
            icon: 'users',
            children: app.translator.trans('flagrow-users-list.admin.nav.users_button'),
            description: app.translator.trans('flagrow-users-list.admin.nav.users_text')
        }));
    });
}
