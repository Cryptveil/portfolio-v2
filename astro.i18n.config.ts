import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
    defaultLangCode: "br",
    supportedLangCodes: ["en"],
    showDefaultLangCode: false,
    translations: {
        br: "/public/locale/br/translations.json",
        en: "/public/locale/en/translations.json"
    },
    routeTranslations: {},
})
