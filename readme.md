# OSC.CSS

Easily create smooth, organic animations, that loop seamlessly - or not - using oscillators.

- No Dependencies
- Pure CSS
- Compatible with Tailwind. Obviously. It's just CSS; but I heard it's good marketing.
- Baseline 2024

## Installation

## Usage

```css
.wiggle {
    animation: var(--osc); /* this is equivalent to adding the .osc class to an element */
    rotate: calc(var(--osc-sin) * 20deg);
}
```

## API

- `--osc-frq`: the frequency in Hz; But **without the unit**, since no browser has actually implemented it at the moment. Default: 2
- `--osc-dur`: The duration of the fading oscillations. Default: `2s`
- `--osc-del`: delay for the fading. Default: `0s`
- `--osc-fade-type`: the CSS `animation-timing-function` that drives the fade. Default: `ease-in-out`

### Oscillators

> [!WARN]
> CSS doesn't have "read-only" properties, so you could overwrite these values. 
> But this will certainly break things. So, um, don't do that! 
> You should rather create your own custom props.

- `--osc-sin`: Sine Wave. Range: `-1...1` (smooth)
- `--osc-cos`: Cosine Wave. Range: `-1...1` (smooth)
- `--osc-saw`: Saw Wave. Range: `0...1` (linear)
- `--osc-tri`: Triangle Wave. Range: `0...1` (linear)
- `--osc-pul`: Pulse Wave. Binary: `0 || 1` (flips at 50%)

### Inversion, (Prefix: `i`)

Often you'll wan't things to move "in reverse", "down up" instead of "up down".
That's what the inversion prefix is for.
It's a simple convenienve, so you don't have to `1 - oscillator` manually.

- `--osc-isin`
- `--osc-icos`
- `--osc-isaw`
- `--osc-itri`
- `--osc-ipul`

You can read those as e.g: `inverted sine`, or `i(sin)`, I do the former.

### Fading, (Prefix: `f`)

Rarely do we need a constant, looping motion in day-to-day CSS.
Like fading an element into view.
That's why there's a fading factor.

- `--osc-f`: A value that animates from `1` to `0` according to `--osc-fade-type`.

Over the time of that value, there are oscillators that gradually approache their base value of `0`.
Those are all prefixed with `f`

- `--osc-fsin`
- `--osc-fcos`
- `--osc-fsaw`
- `--osc-ftri`
- `--osc-fpul`

You can read those as `fading sine` or `f(sin)`, I do the former.

### Inverse Fading, (Prefix: `i`)

When you want to move something out of view, or make something larger, it might simpler to use the invert fade:

- `--osc-if`: A value that animates from `0` to `1` according to `--osc-fade-type`.

This is available for oscillators as well, meaning they will oscillate *more* over time.

- `--osc-ifsin`
- `--osc-ifcos`
- `--osc-ifsaw`
- `--osc-iftri`
- `--osc-ifpul`

You can read those as `inverted fading sine`. 
The other reading is too similar with a conditional.

### Inverse Fading Inverse Oscillators

I guess you get the idea this point:

- `--osc-ifisin`
- `--osc-ificos`
- `--osc-ifisaw`
- `--osc-ifitri`
- `--osc-ifipul`

These oscillate more over the time, but in the opposite direction.

## Combining with own animations

Nothing is stopping you from combining oscillators with conventional animations:

```css
.pop {
    animation: 
        var(--osc),
        5s linear forwards fade-in
    ;
    /* ... */
}
```

