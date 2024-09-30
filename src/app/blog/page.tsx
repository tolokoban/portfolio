import Vignettes from "@/components/Vignettes"

export default function WorkPage() {
    return (
        <div>
            <Vignettes
                prefix="blog/articles"
                images={[
                    "math/CrossingBoats",
                    // "game/ColorGuess",
                    // "webgl/InfinitePlane",
                    "rust/Fern",
                    // "blender/Volume",
                ]}
            />
        </div>
    )
}
