# Hero 3D layers

Pre-rendered 3D layers for the "3D & immersive" hero redesign of Rocket UI.
The hero is built from these separate transparent images and animated with CSS
parallax (no WebGL / three.js), so they stay small and cheap to load.

**All artwork here is AI-generated original artwork** (soft clay-like 3D look,
studio light from the top left). It was created for this project; it is not
based on or copied from any third-party asset. The backgrounds were removed
with a chroma key and every layer was checked over dark and light backgrounds.

## Layers

All layers have an alpha channel and are trimmed to their content bounds.
Each is exported as AVIF (preferred) and WebP (fallback) at 1x and 2x widths.
The number in the file name is the pixel width.

| Layer   | Files                            | What it is                                                                                      |
| ------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| rocket  | `rocket-360.*`, `rocket-720.*`   | Cream rocket tilted right: orange-red nose and fins, olive band, blue porthole with a navy rim. |
| sun     | `sun-520.*`, `sun-1040.*`        | Large orange banded planet that sits behind the rocket.                                         |
| moon    | `moon-140.*`, `moon-280.*`       | Small olive cratered moon.                                                                      |
| cloud-a | `cloud-a-240.*`, `cloud-a-480.*` | Puffy cream cloud, three big lobes.                                                             |
| cloud-b | `cloud-b-320.*`, `cloud-b-640.*` | Long, flat cloud bank.                                                                          |
| cloud-c | `cloud-c-200.*`, `cloud-c-400.*` | Small lopsided pillow cloud, one big and one small lobe.                                        |
| stars   | `stars-240.*`, `stars-480.*`     | One sheet of seven small cream sparkle stars. Position them with CSS or crop individual stars.  |

Suggested display widths (CSS px): rocket 360, sun 520, moon 140, clouds
200-320, stars 240. Use the 2x file for high-density screens, for example
`srcset="rocket-360.avif 360w, rocket-720.avif 720w"` inside a `<picture>` with
the WebP as the fallback `<source>`.

## Masters

The lossless, background-removed PNG masters are intentionally kept out of the
repository to avoid bloating it. Re-export from the masters rather than from
the AVIF/WebP files; ask the maintainer for them.

## Notes

- Lighting is consistent across all layers (soft key light from the top left),
  so layers can be freely recombined.
- Palette: cream, navy, rust/orange and olive, matching the "Retro Launch"
  design.
- `rocket-720.*` is upscaled about 1.4x from the 510 px master with Lanczos.
  The soft clay shading hides this well, but it is not native 2x detail.
- The stars are cream and low-contrast on the cream page background; place them
  over the sun or on a darker area for them to read.
