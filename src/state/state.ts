import { isString } from "../utils/type-guards"
import AtomicState from "./atomic-state"

export default {
    language: new AtomicState(navigator.language, {
        storage: {
            id: "language",
            guard: isString,
        },
        transform(value: string) {
            const lang = value.trim().substring(0, 2).toLocaleLowerCase()
            return ["en", "fr", "it"].includes(lang) ? lang : "en"
        },
    }),
}
