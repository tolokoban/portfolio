import State from "@/state"

export function useLang() {
    return State.language.useState()
}

export function useLangValue() {
    return State.language.useValue()
}
