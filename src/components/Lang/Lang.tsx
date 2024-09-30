import { useLangValue } from "@/hooks/lang"

export interface CardProps {
    fr: React.FC
    en?: React.FC
}

export default function Lang({ fr, en }: CardProps) {
    const lang = useLangValue()
    console.log("🚀 [Lang] lang = ", lang) // @FIXME: Remove this line written on 2023-08-30 at 14:51
    const Component = lang === "fr" ? fr : en ?? fr
    return <Component />
}
