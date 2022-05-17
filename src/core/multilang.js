import lang from "../assets/lang/lang.json";

export default class MultiLang {
    constructor(vueContext) {
        this.store = vueContext.$store;
    }

    init() {
        let lang = localStorage.getItem("lang");
        if (lang) {
            this.store.dispatch("updateLanguage", lang);
        } else {
            this.store.dispatch("updateLanguage", "en");
        }
    }

    get(key, sourceKey = "lang", replacements = {}) {
        let source = lang;
        switch (
            sourceKey //TODO: if possible - recode switch
        ) {
            case "modal":
                source = modal;
                break;
            case "faq":
                source = faq;
                break;
            case "transactionStatus":
                source = transactionStatus;
                break;
        }

        let langKey = this.store.getters["getLanguage"];
        if (langKey && source[langKey][key]) {
            let value = source[langKey][key];
            for (let replacement in replacements) {
                //value = value.replace(`[${replacement}]`, replacements[replacement]);
                value = value.split(`[${replacement}]`).join(replacements[replacement]);
            }

            return value;
        }

        return "";
    }

    getTranslationsData() {
        return lang;
    }

    getDaysLabel(days) {
        if (days == 1) {
            return this.get("DAY");
        } else if ([2, 3, 4].includes(days)) {
            return this.get("DAYS_1");
        } else {
            return this.get("DAYS_2");
        }
    }
}

String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
