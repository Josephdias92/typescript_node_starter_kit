import i18n from "../config/i18n";

class LocaleService {
    private i18nProvider: any;
    /**
     *
     * @param i18nProvider The i18n provider
     */
    constructor(i18nProvider) {
        this.i18nProvider = i18nProvider;
    }

    /**
     *
     * @returns {string} The current locale code
     */
    public getCurrentLocale() {
        return this.i18nProvider.getLocale();
    }

    /**
     *
     * @returns string[] The list of available locale codes
     */
    public getLocales() {
        return this.i18nProvider.getLocales();
    }

    /**
     *
     * @param locale The locale to set. Must be from the list of available locales.
     */
    public setLocale(locale) {
        if (this.getLocales().indexOf(locale) !== -1) {
            this.i18nProvider.setLocale(locale);
        }
    }

    /**
     *
     * @param string String to translate
     * @param args Extra parameters
     * @returns {string} Translated string
     */
    public translate(str, args?) {
        return this.i18nProvider.__(str, args);
    }

    /**
     *
     * @param phrase Object to translate
     * @param count The plural number
     * @returns {string} Translated string
     */
    public translatePlurals(phrase, count) {
        return this.i18nProvider.__n(phrase, count);
    }
}

export default new LocaleService(i18n);
