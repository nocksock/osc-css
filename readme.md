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
    animation: var(--osc);
    rotate: calc(var(--osc-sin) * 20deg);
}
```

## API

- `--osc-frequency`: the frequency in Hz; But **without the unit**, since no browser has actually implemented it at the moment. Default: 2

### Experience with audio synthesis? 

If you're familiar with synthesizers, it will be faster to explain: 
osc.css provides 6[^1] free running oscillators (sin + cos, saw, tri, pul), each available as through zero and normalised.
Each oscillators frequency
It also provides AHD envelope generator that loops by default.


### Oscillators

> [!WARN]
> CSS doesn't have "read-only" properties, so you could overwrite these values. 
> But this will certainly break things. So, um, don't do that! 
> You should rather create your own custom props.

- `--osc-sin`: Sine Wave. Range: `-1...1` (smooth)
- `--osc-cos`: Cosine Wave. Range: `-1...1` (smooth)
- `--osc-saw`: Saw Wave. Range: `-1...1` (linear)
- `--osc-tri`: Triangle Wave. Range: `-1...1` (linear)

#### normalised

- `--osc-SIN`: Sine Wave. Range: `0...1` (smooth)
- `--osc-COS`: Cosine Wave. Range: `0...1` (smooth)
- `--osc-SAW`: Saw Wave. Range: `0...1` (linear)
- `--osc-TRI`: Triangle Wave. Range: `0...1` (linear)

#### Pulse wave?

Will be added in an upcoming version

### Amp Envelope

If you're familiar with synthesizers, the tl;dr is: osc.css provides an AHD envelope generator that loops by default.

