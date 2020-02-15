# fromCSS

Figma plugin. Write, paste, and apply CSS.

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
3. Save CSS notes to reuse in project.
4. Edit node properties fast

## In detail
* You can select a node or nodes before or after the plugin is launched. When you change the selection styles from the block .fromCSS will be applied immediately.
* Block .fromCSS must be the first. The name can be changed.
* When applying styles for effects and backgrounds, the plugin looks for conflicts and removes only effects and fills of the same type as you have in CSS, while all the others remain unchanged. Conflicts are searched individually for each selected node.
* If you add something inside the plugin, you will see changes, and if you decide to delete something via plugin nothing will happen, this is due to the specifics of the plugin: quickly add with removing conflicts, but do not replace the functionality of standard controls in Figma.

## What is supported (the rest is ignored by the plugin):
* width
* height
* opacity
* mix-blend-mode
* border-radius
* background, background-color
* background-blend-mode
* box-shadow, text-shadow
* backdrop-filter: blur()
* transform: rotate()
* filter: blur()

## Future releases:
Fonts, Borders, Background images: images, gradients(I'm in search of a good parser for the last one).

## Demonstration
