# Optimize images

During optimization, we can generate up to three pair of images from one source PNG:

* **normal**: The full size image.
* **mini**: A small image for preview.
* **blur**: A super small image for very fast preview.

So from `picture.png` we can get 6 images:
`picture.png`, `picture.webp`,
`picture.mini.png`, `picture.mini.webp`,
`picture.blur.png` and `picture.blur.webp`.

To control what and how we generate, we read any `@.json` file we can find in the folders.

Here is an example:

```js
{
    "normal": 1920,
    "mini": 640,
    "blur": 64
}
```

This file says we must generate the three pairs.
And it also gives hint on the expected size.

for instance `"mini": 640` means that the resulting images will have their longest side
equal to **640** pixels.

The type definition of such file is:

```ts
interface ImageOptimizationSettings {
    normal? : number
    mini? : number
    blur? : number
}
```

If an attribute is not defined, then the corresponding image is not generated.
