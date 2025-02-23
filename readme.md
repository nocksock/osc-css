> [!WARN]
> This project is still in early development and not yet ready for production use. Braking API changes are to be expected.

# OSC.CSS

CSS properties to animate numeric values where they are needed using oscillators and envelopes.

- Pure CSS, 0 dependencies
- 4 free running, independent Oscillators, each through zero + normalised.
- One DAHD envelope

## Overview for audio synthesis buffs

If you're familiar with audio synthesis, it will be faster to give an overview:

`osc.css` provides 6 different, free running oscillators (sin, cos, saw, tri), each available as through zero (lowercase) and normalised (uppercase).
Each oscillator's frequency can be adjusted independently in Hz.
It also provides one DAHD envelope generator, where each stage can be independently adjusted.
The envelope generator can loop or run a fixed amount of iterations.

FM is possible, but not yet documented - the API for that is work in progress.

## Installation

### Recommended way

Copy the `osc.css` file into your project and import it.

```bash
wget https://raw.githubusercontent.com/nocksock/osc-css/main/osc.css \
    -O path/to/assets/osc.css
```

### As package

```bash
npm install osc-css
```

In your CSS file:

```css
@import "osc-css/osc.css";
```

Import via esm coming very soon.


### Via CDN

```css
@import "https://unpkg.com/osc-css";
```

## Usage

```css
.wiggle {
    animation: var(--osc);
    /* use any of the oscillators in your calculations */
    /* this rotate from -20deg to 20deg, use --osc-SIN to go from 0...1 */
    rotate: calc(var(--osc-sin) * 20deg);
}
```

## API

All time-based properties (phase, envelope stages) use seconds as an **implied** unit.
So you must not include a unit when changing time-based properties.

### Global Settings

- `--osc-state`: Controls [animation state]. Values: `running` (default) or `paused`
- `--osc-amp-iterations`: Number of times the envelope repeats. Default: `infinite`
- `--osc-all-phase`: The global phase offset for all oscillators in seconds. Default: `0s`
- `--osc-all-frequency`: The global frequency in Hz; But **without unit**, since no browser has actually implemented it at the moment. Default: 2

### Oscillators

- `--osc-sin`: Sine Wave. Range: `-1...1` (ease-in-out)
- `--osc-cos`: Cosine Wave. Range: `-1...1` (ease-in-out)
- `--osc-saw`: Saw Wave. Range: `-1...1` (linear)
- `--osc-tri`: Triangle Wave. Range: `-1...1` (linear)

#### normalised

- `--osc-SIN`: Sine Wave. Range: `0...1` (ease-in-out)
- `--osc-COS`: Cosine Wave. Range: `0...1` (ease-in-out)
- `--osc-SAW`: Saw Wave. Range: `0...1` (linear)
- `--osc-TRI`: Triangle Wave. Range: `0...1` (linear)

### Individual Oscillator Settings

Each oscillator can be configured independently, where `*` must be one of: `sin, cos, saw, tri`

- `--osc-*-frequency`: frequency of waveform (overrides global frequency)
- `--osc-*-phase`: Phase offset for individual waveform

### Envelope Generator Settings

The DAHD (Delay-Attack-Hold-Decay) envelope can be configured with these parameters:

- `--osc-delay`: Delay time before envelope starts
- `--osc-attack`: Attack time (fade in)
- `--osc-hold`: Hold time at peak value
- `--osc-decay`: Decay time (fade out)

### Animation Utilities

- `--osc`: Combines all oscillators and envelope into a single animation property
- `--osc-only-*`: Isolated wave animation
- `--osc-only-envelope`: Isolated envelope animation

## Examples

```css
/* Basic oscillating animation */
.element {
  animation: var(--osc);
  translate: 0 calc(var(--osc-sin) * 100px)); /* -100px...100px */
}

/* Custom frequency and envelope */
.custom-animation {
    animation: var(--osc);
    --osc-frequency: 0.5;
    --osc-attack: 2;
    --osc-hold: 1;
    --osc-decay: 3;
}

/* Using normalized (0...1) oscillators */
.fade {
    animation: var(--osc);
    opacity: var(--osc-SIN);
}

[animation state]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
