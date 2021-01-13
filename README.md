# fromCSS

Figma plugin. Write, paste, and apply CSS.

Install: https://www.figma.com/community/plugin/807925991544813159/fromCSS

Donate/Support: https://gum.co/fromCSS

![artwork.png](https://i.imgur.com/UielVtc.png)

## Usage
Select node/nodes to apply .fromCSS styles. After plugin relaunch .fromCSS block will be blank.
Write your notes below .fromCSS block. Notes will be saved in the same place after plugin, project or even Figma relaunch.

## Use cases
1. Apply CSS from different generators like:
    * https://neumorphism.io/
    * https://brumm.af/shadows
    * https://www.cssmatic.com/box-shadow
2. Get rid of manual adding effects from CSS.
3. Save CSS notes to reuse in the project.
4. Edit node properties fast

## In detail
* You can select a node or nodes before or after the plugin is launched. When you change the selection styles from the block .fromCSS will be applied immediately.
* Block .fromCSS must be the first. The name can be changed.
* When applying styles for effects and backgrounds, the plugin looks for conflicts and removes only effects and fills with the same type as you have in CSS, while all the others remain unchanged. Conflicts are searched individually for each selected node.
* If you add something inside the plugin, you will see changes, and if you decide to delete something via plugin nothing will happen, this is due to the specifics of the plugin: quickly add with removing conflicts, but do not replace the functionality of standard controls in Figma.

## What is supported (the rest is ignored by the plugin)

| Property | Supported Options
| -- | -- |
| `width` | To be confirmed (TBC) |
| `height` | TBC |
| `opacity` | TBC |
| `mix-blend-mode` | TBC |
| `border-radius` | TBC |
| `background`, `background-color` | TBC |
| `background-blend-mode` | TBC |
| `box-shadow` | TBC |
| `backdrop-filter` | `blur()` only |
| `transform` | `rotate()` only |
| `filter` | `blur()` only |


| Text Property | Support | Supported Options
| -- | -- | -- |
| `color` | ✅ Yes |  `red`, <br />`#F00`, `#FF0000`, <br />`rgb(255,0,0)`, `rgba(255,0,0,0.5)`,<br />`hsl(0, 100%, 50%)` |
| `font` shorthand | 🛑 None |
| `font-family` | 🛑 None |
| `font-size` | ✅ Yes | `px`, `rem`, `em`, `%`
| `font-style` | 🛑 None |
| `font-weight` | 🛑 None |
| `line-height` | ✅ Yes | `px`, `rem`, `em`, `%`, and unitless shorthand
| `letter-spacing` | 🛑 None |
| `text-align` | ✅ Yes | `left`, `center`, `right`, `justify` |
| `text-decoration` | ✅ Yes | `none`, `underline`, `line-through`, but not `overline` |
| `text-transform` | ✅ Yes | `none`, `lowercase`,`uppercase`, `capitalize` |
| `text-shadow` | ✅ Yes |


## Future releases
Borders, Background images: images, gradients(I'm in search of a good parser for the last one).

## Demonstration
https://youtu.be/zVazGBugYpA

## Contributors
| | | 
| :--: | -- |
| ![Jamil Lazarev](https://i.imgur.com/GnLTJh0.png) | **Jamil Lazarev** 🇦🇿<br /> Plugin creator and maintainer <br /> [Twitter](https://twitter.com/jamillazarev) \| [Github](https://github.com/jamillazarev) \| [Donate](https://gum.co/fromCSS) |
| ![Tait Brown](https://i.imgur.com/4AyJfy2.png) | **Tait Brown** 🇦🇺<br /> Added font support <br />[Twitter](https://twitter.com/taitems) \| [Github](https://github.com/taitems)  |
