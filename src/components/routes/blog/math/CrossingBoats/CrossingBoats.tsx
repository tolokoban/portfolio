import Lang from "@/components/Lang"

import Fr from "./CrossingBoats.fr.mdx"
import En from "./CrossingBoats.en.mdx"

export interface CrossingBoatsProps {
    className?: string
}

export default function CrossingBoats({ className }: CrossingBoatsProps) {
    return <Lang fr={Fr} en={En} />
}
