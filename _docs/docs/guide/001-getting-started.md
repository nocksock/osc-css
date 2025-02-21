---
title: "Getting Started"
tags: [guide, intro]
layout: guide
---

## Hello Oscillators!

Oscillators sounds super math-y, and they are.
But you don't need to be great at trigonometry to have a ton of fun with them.
I know, because I suck(ed?) at that, yet here we are.

If you understand how to get from a value that's ranging from 0 to 1, to a value that's 0 to 42, you know everything you need to know.
And just in case you weren't sure, the answer is multiplication!

## Write `sin`, not tragedies.[^1]

`sin` is a fun and versatile function.
You give it any value, and it always gives us a value between -1 and 1.
And when we give it linear values, it smoothes them automatically.
`ease-in-out`-style.

It's magical[^*]!
And it's your new best friend!
And it won't be the last!

`osc.css` provides a handful of [custom CSS properties][css-props], like `--osc-sin`.
And with the help of [`@property`][at-prop] we can now animate them!
There's nothing *truly* exciting behind `osc.css`, you can easily recreate this with effect to the left in like a dozen lines of CSS.
But of course we're just getting started, and I hope you'll find `osc.css` handy.

This guide assumes some decent familiarity with CSS.
To check wether you're familiar enough: none of the keywords should be news to you.
You should also be somewhat familiar with the `animation` property and `@keyframes`, although we're not using it - which is the entire point of `osc.css`.

## The "trick"

This is the entire trick:

```css
.osc {
    animation: 1s linear infinite t;
    --osc-sin: calc(sin(var(--t) * pi));
}

@keyframes t {
  from { --t: 0; }
  to   { --t: 1; }
}
```

You don't *need* to understand the math behind that.
But you *should* understand the CSS parts.

We're animating a value from 0 to one, infinitely, linearily and then apply sin to it.
There are other ways of expressing the same result.
Like this one:

```css
.osc {
    animation: 1s ease-in-out alternate osc-sin;
}

@keyframes osc-sin {
  from { --osc-sin: -1; }
  to   { --osc-sin:  1; }
}
```

Because `ease-in-out` "happens" to use the same concept for smoothing.

And with just *that*, you can already achieve a lot of smooth and organic animations.

## Why using CSS properties?

Why not just animating the property in `@keyframe`?

Easy:
CSS variables are reactive and we can use them in all kinds of places more easily.
We can use them in `repeating-linear-gradient`, in `rotate3d`, in `blur`, in `scale`... everywhere.
This makes it *much* easier to create complex animations that would have been cumbersome via `@keyframe`

Let's look at an example.

[at-prop]: https://developer.mozilla.org/en-US/docs/Web/CSS/@property
[css-props]: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
[patd]: https://www.youtube.com/watch?v=Vy0mqXuBMY4
[^1]: Tell me you're a millenial, without telling me you're a millenial. [Listen to this][patd], if you're not.
[^*]: Actually, it's math. This is taught early in school. Still magical, tho.
