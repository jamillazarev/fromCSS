import * as Color from "color-js";

figma.showUI(__html__, { width: 400, height: 440 });

figma.on("selectionchange", () => {
  figma.ui.postMessage(
      { selection: figma.currentPage.selection}
  );
});

const blends = [
  "PASS_THROUGH",
  "NORMAL",
  "DARKEN",
  "MULTIPLY",
  "LINEAR_BURN",
  "COLOR_BURN",
  "LIGHTEN",
  "SCREEN",
  "LINEAR_DODGE",
  "COLOR_DODGE",
  "OVERLAY",
  "SOFT_LIGHT",
  "HARD_LIGHT",
  "DIFFERENCE",
  "EXCLUSION",
  "HUE",
  "SATURATION",
  "COLOR",
  "LUMINOSITY"
];

const bgBlends = [
  "NORMAL",
  "DARKEN",
  "MULTIPLY",
  "LINEAR_BURN",
  "COLOR_BURN",
  "LIGHTEN",
  "SCREEN",
  "LINEAR_DODGE",
  "COLOR_DODGE",
  "OVERLAY",
  "SOFT_LIGHT",
  "HARD_LIGHT",
  "DIFFERENCE",
  "EXCLUSION",
  "HUE",
  "SATURATION",
  "COLOR",
  "LUMINOSITY"
];


figma.ui.onmessage = msg => {
  const selection = msg.selection;

  switch (msg.type) {

    case 'getSelection':
      figma.ui.postMessage({selection: figma.currentPage.selection});
      console.log(figma.currentPage.selection);
      break;

    case 'getNotes':
      figma.ui.postMessage({notes: figma.root.getPluginData('notes')});
      break;

    case 'setNotes':
      figma.root.setPluginData('notes', msg.notes);
      break;

    case 'setStyles':
      const styles = msg.styles;

      if (styles && selection) {
        let otherParameters = [];

        let addedEffects = [];
        let filteredEffects = [];
        let removedEffects = [];

        let addedFills = [];
        let filteredFills = [];
        let removedFills = [];

        for (const p in styles) {
          let style = styles[p];

          switch (p) {
            case 'boxShadowParsed':
              removedEffects.push.apply(removedEffects, ["INNER_SHADOW", "DROP_SHADOW"]);

              for (const c in style) {
                let styleChild = style[c];
                styleChild.offsetX = Number(styleChild.offsetX) ? Number(styleChild.offsetX) : 0;
                styleChild.offsetY = Number(styleChild.offsetY) ? Number(styleChild.offsetY) : 0;
                styleChild.blurRadius = Number(styleChild.blurRadius) ? styleChild.blurRadius : 0;

                if (styleChild.color) {
                  const c = Color(styleChild.color);
                  styleChild.color = {
                    r: c.getRed() ? c.getRed() : 0,
                    g: c.getGreen() ? c.getGreen() : 0,
                    b: c.getBlue() ? c.getBlue() : 0,
                    a: c.getAlpha() ? c.getAlpha() : 1
                  }
                } else {
                  styleChild.color = {r:0, g:0, b:0, a:1};
                }

                addedEffects.push({
                  type: styleChild.inset ? "INNER_SHADOW" : "DROP_SHADOW",
                  color: styleChild.color,
                  blendMode: "NORMAL",
                  offset: {
                    x: styleChild.offsetX,
                    y: styleChild.offsetY
                  },
                  radius: styleChild.blurRadius,
                  visible: true
                })
              }
              break;
            case 'backgroundParsed':
              let fills = styles.backgroundParsed;

              for (const f in fills) {
                const fill = fills[f];
                let blendMode = bgBlends[0];

                if (styles.backgroundBlendModeParsed && styles.backgroundBlendModeParsed[f]) {
                  let inside = false;
                  const checkArr = bgBlends;
                  inside = checkArr.includes(styles.backgroundBlendModeParsed[f]);
                  blendMode = inside ? styles.backgroundBlendModeParsed[f] : checkArr[0];
                }

                if (fill.color) {
                  removedFills.push.apply(removedFills, ["SOLID"]);

                  let c = Color(fill.color);

                  const color = {
                    r: c.getRed() ? c.getRed() : 0,
                    g: c.getGreen() ? c.getGreen() : 0,
                    b: c.getBlue() ? c.getBlue() : 0
                  }

                  addedFills.push({
                    blendMode: blendMode,
                    color: color,
                    opacity: c.getAlpha() ? c.getAlpha() : 1,
                    type: "SOLID",
                    visible: true
                  })
                }
              };
              break;
            case 'filterBlurParsed':
              removedEffects.push.apply(removedEffects, ["LAYER_BLUR"]);

              styles.filterBlurParsed = Number(styles.filterBlurParsed) ? Number(styles.filterBlurParsed) : 0;

              addedEffects.push({
                type: "LAYER_BLUR",
                radius:  styles.filterBlurParsed,
                visible: true
              })
              break;
            case 'backdropFilterBlurParsed':
              removedEffects.push.apply(removedEffects, ["BACKGROUND_BLUR"]);

              styles.backdropFilterBlurParsed = Number(styles.backdropFilterBlurParsed) ? Number(styles.backdropFilterBlurParsed) : 0

              addedEffects.push({
                type: "BACKGROUND_BLUR",
                radius:  styles.backdropFilterBlurParsed,
                visible: true
              })
              break;
            case 'mixBlendModeParsed':
              let inside = false;
              const checkArr = blends;
              inside = checkArr.includes(styles.mixBlendModeParsed);

              styles.mixBlendModeParsed = inside ? styles.mixBlendModeParsed : checkArr[0]

              otherParameters.push({
                name: "blendMode",
                value:  styles.mixBlendModeParsed
              })
              break;
            case 'opacityParsed':
              styles.opacityParsed = Number(styles.opacityParsed) ? Number(styles.opacityParsed) : 1;

              otherParameters.push({
                name: "opacity",
                value:  styles.opacityParsed
              })
              break;
            case 'widthParsed':
              if (styles.widthParsed) {
                styles.widthParsed = Number(styles.widthParsed) > 0 ? Number(styles.widthParsed) : 1;
              }

              otherParameters.push({
                name: "width",
                value:  styles.widthParsed
              })
              break;
            case 'heightParsed':
              if (styles.heightParsed) {
                styles.heightParsed = Number(styles.heightParsed) > 0 ? Number(styles.heightParsed) : 1;
              }

              otherParameters.push({
                name: "height",
                value:  styles.heightParsed
              })
              break;
            case 'transformRotateParsed':
              styles.transformRotateParsed = Number(styles.transformRotateParsed) ? Number(styles.transformRotateParsed): 0;

              otherParameters.push({
                name: "rotation",
                value:  styles.transformRotateParsed * -1
              })
              break;
            case 'borderRadiusParsed':
              for (const br in styles.borderRadiusParsed) {
                styles.borderRadiusParsed[br] = Number(styles.borderRadiusParsed[br])
              }
              if (styles.borderRadiusParsed.length == 1) {
                otherParameters.push({
                  name: "cornerRadius",
                  value:  styles.borderRadiusParsed[0] ? styles.borderRadiusParsed[0] : 0
                })
              } else if (styles.borderRadiusParsed.length == 2) {
                otherParameters.push({
                  name: "topLeftRadius",
                  value:  styles.borderRadiusParsed[0] ? styles.borderRadiusParsed[0] : 0
                });
                otherParameters.push({
                  name: "topRightRadius",
                  value:  styles.borderRadiusParsed[1] ? styles.borderRadiusParsed[1] : 0
                });
                otherParameters.push({
                  name: "bottomRightRadius",
                  value:  styles.borderRadiusParsed[0] ? styles.borderRadiusParsed[0] : 0
                });
                otherParameters.push({
                  name: "bottomLeftRadius",
                  value:  styles.borderRadiusParsed[1] ? styles.borderRadiusParsed[1] : 0
                });
              }
              else if (styles.borderRadiusParsed.length > 2) {
                otherParameters.push({
                  name: "topLeftRadius",
                  value:  styles.borderRadiusParsed[0] ? styles.borderRadiusParsed[0] : 0
                });
                otherParameters.push({
                  name: "topRightRadius",
                  value:  styles.borderRadiusParsed[1] ? styles.borderRadiusParsed[1] : 0
                });
                otherParameters.push({
                  name: "bottomRightRadius",
                  value:  styles.borderRadiusParsed[2] ? styles.borderRadiusParsed[2] : 0
                });
                otherParameters.push({
                  name: "bottomLeftRadius",
                  value:  styles.borderRadiusParsed[3] ? styles.borderRadiusParsed[3] : styles.borderRadiusParsed[1]
                });
              }

              break;
          }
        }

        for (const n in selection) {
          const node = figma.getNodeById(selection[n].id);
          filteredEffects = [];
          filteredFills = [];

          if (node.effects.length > 0) {
            for (const e in node.effects) {
              const effect = node.effects[e];

              let inside = false;
              for (const re in removedEffects) {
                if (effect.type === removedEffects[re]) {
                  inside = true
                }
              }
              if (!inside) {
                filteredEffects.push(effect);
              }
            }
          }
          node.effects = filteredEffects;
          node.effects = node.effects.concat(addedEffects.reverse())

          if (node.fills.length > 0) {
            for (const f in node.fills) {
              const fill = node.fills[f];

              let inside = false;
              for (const rf in removedFills) {
                if (fill.type === removedFills[rf]) {
                  inside = true
                }
              }
              if (!inside) {
                filteredFills.push(fill);
              }
            }
          }
          node.fills = filteredFills;
          node.fills = node.fills.concat(addedFills.reverse());

          for (const param in otherParameters) {
            const na = otherParameters[param].name;
            const va = otherParameters[param].value;

            if (na != "width" && na != "height") {
              node[na] = va;
            } else if (na == "width") {
              node.resize(va, node.height);
            } else if (na == "height") {
              node.resize(node.width, va);
            }
          }
        }
      }

      break;
  }
};