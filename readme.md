# OSC.CSS

Easily create smooth, organic animations, that loop seamlessly - or not - using oscillators.

- No Dependencies
- Pure CSS
- 6[^1] free running, independent Oscillators, each through zero + normalised.
- 4 Voices by default
- One DAHD envelope per voice

## You know audio synthesis?

If you're familiar with audio synthesis, it will be faster to give an overview: 

`osc.css` provides 6 different, free running oscillators (sin + cos, saw, tri, pul), each available as through zero and normalised.
Each oscillator's frequency can be adjusted independently in Hz.
It also provides one DAHD envelope generator. 
Each stage can be independently adjusted.
The envelope generator can loop or run a fixed amount of iterations.

FM is possible, but not yet documented - the API for that is work in progress.


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

#
