import Page from 'flarum/components/Page';
import SeoSettings from "../components/Forms/SeoSettings";
import Button from 'flarum/components/Button';
import saveSettings from 'flarum/utils/saveSettings';
import Alert from 'flarum/components/Alert';
import Header from "../components/Header";

export default class RegisterToSearchEngines extends Page {
    init() {
        this.saving = false;
        this.hasConfirmed = app.data.settings.seo_reviewed_search_engines === "1";
    }

    view() {
        return (
            <div className="FlarumSEO">
                {Header.component()}

                <div className="container">
                    <h2>Submit your website to Search Engines</h2>
                    <p>It is good practice to let Search Engines know your site is exists. This page will guide you in doing this succesfully.</p>

                    <p>It is recommended to have a sitemap ready before completing this guide. If you don't have a sitemap yet, <a href="#/seo/sitemap">click here to read more about them</a>.</p>

                    <div>
                        <h4>Add your website to the Google search results</h4>
                        <p>If you want to add your website to the Google search results, visit the <a href="https://search.google.com/search-console" target="_blank">Google Search Console <i className="fas fa-external-link-alt"></i></a>. You'll need to add your website and verify that you're the owner of the associated domain name.</p>

                        <p>When you enter your domain you need to answer the following question for yourself: Do you want to use the 'www' sub-domain in the search results? You can <strong>not</strong> change this later. Registering your domain in the Google Search Console multiple times won't result in a better ranking.</p>

                        <p>When you completed the registration in the Google Search Console, visit the <b>Sitemaps</b> page. Pass your <b>sitemap.xml</b> to Google. Make sure that Google can crawl your sitemap and will keep doing this.</p>
                    </div>

                    <div>
                        <h4>Add your website to the Bing search results</h4>
                        <p>If you want to add your website to the Bing search results, visit the <a href="https://www.bing.com/toolbox/webmaster" target="_blank">Bing Webmaster Tools <i className="fas fa-external-link-alt"></i></a> and complete the given steps. Not all fields are required.</p>

                        <p>Don't forget to configure your sitemap URL. After you verified your website you're all set and Bing will now index your website.</p>
                    </div>

                    <div>
                        <h4>Add your website to the Yandex search results</h4>
                        <p>If you want to add your website to the Yandex search results, visit the <a href="https://webmaster.yandex.com" target="_blank">Yandex.Webmaster <i className="fas fa-external-link-alt"></i></a> and follow the given steps.</p>

                        <p>Don't forget to configure the sitemap in the Yandex.Webmaster.</p>
                    </div>

                    <div>
                        <h4>Add your website to the Yahoo search results</h4>
                        <p>If you want to add your website to the Yahoo search results, finish your Bing search results registration. Yahoo will use that data.</p>
                    </div>

                    <div className="clear"></div>
                    {Button.component({
                        className: 'Button pull-right ' + (this.hasConfirmed ? 'hidden' : ''),
                        onclick: () => this.confirm(),
                        icon: 'fas fa-check',
                        loading: this.saving,
                        children: 'I have read this'
                    })}
                </div>
            </div>
        );
    }

    confirm()
    {
        this.saveSingleSetting('seo_reviewed_search_engines', true);
    }

    // Save allow bots
    saveSingleSetting(setting, value)
    {
        if (this.saving) return;

        this.saving = true;

        let data = app.data.settings;
        data[setting] = value;

        saveSettings(data)
        .then(() => {
            this.hasConfirmed = true;
                app.alerts.show(this.successAlert = new Alert({type: 'success', children: app.translator.trans('core.admin.basics.saved_message')}));
            })
            .catch(() => {})
            .then(() => {
                this.saving = false;
                m.redraw();
            });
        }
}
