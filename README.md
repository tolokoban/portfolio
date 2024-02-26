# portfolio

Tolokoban's portfolio

## Test it on mobile

Accessible at <http://192.168.0.215:46644>

You might need to open this port:

```
sudo ufw allow 46644
```

## Add article in "work" section

Let's say you want to add an article you call **NewStuff**.

1. Create a page `page.mdx` (and maybe `page.en.mdx` for english translation)
in this folder: `src/app/work/articles/NewStuff`
2. Edit this component: `src/components/Welcome/Welcome.tsx`
3. Create an image that represents your article with a ratio
of `320x240`. Save it here: `gfx/images/work/articles/@/MyStuff.png`
