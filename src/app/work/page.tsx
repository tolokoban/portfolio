import Vignettes from "@/components/Vignettes"

export default function WorkPage() {
    return (
        <div>
            <Vignettes
                prefix="work"
                images={[
                    "Akonolinga",
                    "Minervois",
                    "FrancaisFacile",
                    "MediationFamilliale",
                    "ApiHrGraph",
                    "HandsOnWebGL",
                    "TrailTar",
                    "Tournus",
                ]}
            />
        </div>
    )
}
