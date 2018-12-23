import * as i18n from "i18n";
import * as path from "path";

i18n.configure({
    api: {
        __: "translate",
        __n: "translateN",
    },
    defaultLocale: "en",
    directory: path.join(__dirname, "..", "resources", "locales"),
    locales: ["en"],
    queryParameter: "lang",

});
export default i18n;
