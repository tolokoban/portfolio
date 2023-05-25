import { useLangValue } from "@/hooks/lang"

const TRANSLATIONS = {
    en: {
        restart: "Restart",
        wellDone: "Good job!",
    },
    fr: {
        restart: "Recommencer",
        wellDone: "Bien joué !",
    },
}

export function useTranslations(): (typeof TRANSLATIONS)["en"] {
    const lang = useLangValue()
    const tr = {
        ...TRANSLATIONS.en,
        ...TRANSLATIONS[lang as keyof typeof TRANSLATIONS],
    }
    return tr
}
