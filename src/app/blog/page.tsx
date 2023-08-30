import Vignettes from "@/components/Vignettes"

export default function WorkPage() {
    return (
        <div>
            <Vignettes
                prefix="blog"
                images={[
                    "math/CrossingBoats",
                    "game/ColorGuess",
                    "webgl/InfinitePlane",
                    "rust/Fern",
                ]}
            />
        </div>
    )
}
