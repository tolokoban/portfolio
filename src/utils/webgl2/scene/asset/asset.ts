import { TgdAssetImage } from "../../types"
import RefMap from "../../ref-map"

export default class Asset {
    private readonly images = new RefMap<string, TgdAssetImage>()

    createImage(src: string): TgdAssetImage {
        const key = src
        return this.images.add(key, () => {
            const image = new Image()
            image.loading = "eager"
            return {
                type: "TgdAssetImage",
                key,
                image,
                isSuccessfullyLoaded: new Promise(resolve => {
                    image.src = src
                    image.onload = () => resolve(true)
                    image.onerror = () => resolve(false)
                }),
            }
        })
    }

    destroyImage(asset: TgdAssetImage) {
        this.images.delete(asset.key)
    }
}
