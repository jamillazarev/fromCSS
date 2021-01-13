<template>
  <div>
    <codemirror v-model="cssInitial" :options="cmOptions" @input="setNotes"></codemirror>
    <button id="clear" @click="clear">Clear</button><button id="beautify" @click="beautify">Beautify</button>
    <span ref="kostyl"></span>
  </div>
</template>

<script>
import * as cssBoxShadow from "css-box-shadow";
import * as mensch from "mensch";
const bgParse = require('css-background-parser');
const beautify_css = require('js-beautify').css;

import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css.js';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/selection/active-line.js';

const NUMERIC_REGEXP = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;

const toUnit = (str, isLineHeight) => {
  const value = str.match(NUMERIC_REGEXP)[0];
  if (!value) return null;
  if (str.match('px')) {
    return {
      value,
      unit: 'PIXELS'
    }
  }
  else if (str.match('rem')) {
    return {
      value: value * 16,
      unit: 'PIXELS'
    }
  }
  else if (str.match('em')) {
    return {
      value: value * 100,
      unit: 'PERCENT'
    }
  }
  else if (str.match('%')) {
    return {
      value,
      unit: 'PERCENT'
    }
  }
  else if (str.match(NUMERIC_REGEXP)) {
    if (isLineHeight) {
      return {
        value: value * 100,
        unit: 'PERCENT'
      }
    } else {
      return {
        value,
        unit: 'PIXELS'
      }
    }
  }
  else {
    return null;
  }
}

const toPx = (str) => {
  const { unit, value } = toUnit(str);
  const result = unit === 'PERCENT' ? (value/100) * 16 : value;
  // This is strange, if I return the raw number it breaks
  return result.toString();
}

export default {
  name: "App",
  components: {
    codemirror
  },
  data() {
    return {
      cmOptions: {
        styleActiveLine: true,
        mode: 'text/css',
        theme: 'dracula',
        lineNumbers: true,
        line: true,
        showCursorWhenSelecting: true
      },
      cleared:
              "/*\n" +
              "🗞\n" +
              "Select node/nodes to apply .fromCSS styles.\n" +
              "After plugin relaunch .fromCSS block will be blank\n\n" +
              "☄️\n" +
              "Write your notes below .fromCSS block.\n" +
              "Notes will be saved in the same place after\n" +
              "plugin, project or even Figma relaunch.\n" +
              "*/\n\n" +
              ".fromCSS {\n  \n" +
              "}"
      ,
      selection: "",
      notes: "",

      cssInitial: "",
      cssParsed: "",

      newStyles: {
        boxShadowInitial: "",
        boxShadowParsed: "",

        backgroundInitial: "",
        backgroundParsed: "",

        borderRadiusInitial: "",
        borderRadiusParsed: "",

        filterBlurInitial: "",
        filterBlurParsed: "",

        backdropFilterBlurInitial: "",
        backdropFilterBlurParsed: "",

        transformRotateInitial: "",
        transformRotateParsed: "",

        widthInitial: "",
        widthParsed: "",

        heightInitial: "",
        heightParsed: "",

        opacityInitial: "",
        opacityParsed: "",

        mixBlendModeInitial: "",
        mixBlendModeParsed: "",

        backgroundBlendModeInitial: "",
        backgroundBlendModeParsed: "",

        boxSizingInitial: "",
        boxSizingParsed: "",

        fontSizeInitial: "",
        fontSizeParsed: "",

        lineHeightInitial: "",
        lineHeightParsed: "",
        lineHeightUnit: "",

        colorInitial: "",
        colorParsed: "",

        textAlignInitial: "",
        textAlignParsed: "",

        textTransformInitial: "",
        textTransformParsed: "",

        textDecorationInitial: "",
        textDecorationParsed: ""
      }
    };
  },
  methods: {
    beautify() {
      this.cssInitial = beautify_css(this.cssInitial, {
        indent_size: 2
      });
    },
    clear() {
      this.notes = "";
      this.cssInitial = this.cleared;
    },
    addNotesToCssInitial() {
      this.cssInitial = this.cleared + this.notes;
    },
    setNotes() {
      if (this.cssInitial.indexOf("}")) {
        let str = this.cssInitial.substr(this.cssInitial.indexOf("}")+1);

        parent.postMessage(
                { pluginMessage: {type: "setNotes", notes: str } },
                "*"
        );
      }
    },
    getSelection() {
      parent.postMessage(
              { pluginMessage: { type: "getSelection" } },
              "*"
      );
    },
    getNotes() {
      parent.postMessage(
              { pluginMessage: { type: "getNotes" } },
              "*"
      );
    },
    setStyles() {
      parent.postMessage(
              { pluginMessage: { type: "setStyles", styles: this.getStyles(), selection: this.selection } },
              "*"
      );
    },
    getStyles() {
      let res = {};

      for (const i in this.newStyles) {
        if (this.newStyles[i].length > 0) {
          res[i] = this.newStyles[i]
        }
      }

      return res
    },
    globalPreparing(parse) {
      if (parse && mensch.parse(this.cssInitial).stylesheet.rules[0] && mensch.parse(this.cssInitial).stylesheet.rules[0].declarations) this.newStyles = {}; this.cssParsed = mensch.parse(this.cssInitial).stylesheet.rules[0].declarations;

      if (this.cssParsed) {
        for (const ccsp in this.cssParsed) {
          switch (this.cssParsed[ccsp].name) {
            case 'box-shadow':
            case 'text-shadow':
              if (parse) this.newStyles.boxShadowInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.boxShadowInitial.length > 0) {
                this.newStyles.boxShadowParsed = cssBoxShadow.parse(this.newStyles.boxShadowInitial);
              }
              break;

            case 'filter':
              if (this.cssParsed[ccsp].value.substr(0, 4) == "blur") {
                if (parse) this.newStyles.filterBlurInitial = this.cssParsed[ccsp].value;

                if (this.newStyles.filterBlurInitial.length > 0) {
                  this.newStyles.filterBlurParsed = this.newStyles.filterBlurInitial.match(NUMERIC_REGEXP)[0];
                }
              }
              break;

            case 'backdrop-filter':
              if (this.cssParsed[ccsp].value.substr(0, 4) == "blur") {
                if (parse) this.newStyles.backdropFilterBlurInitial = this.cssParsed[ccsp].value;

                if (this.newStyles.backdropFilterBlurInitial.length > 0) {
                  this.newStyles.backdropFilterBlurParsed = this.newStyles.backdropFilterBlurInitial.match(NUMERIC_REGEXP)[0];
                }
              }
              break;

            case 'mix-blend-mode':
              if (parse) this.newStyles.mixBlendModeInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.mixBlendModeInitial.length > 0) {
                this.newStyles.mixBlendModeParsed = this.newStyles.mixBlendModeInitial.replace(/-/g, '_').toUpperCase();
              }
              break;
            case 'opacity':
              if (parse) this.newStyles.opacityInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.opacityInitial.length > 0) {
                this.newStyles.opacityParsed = this.newStyles.opacityInitial;
              }
              break;

            case 'width':
              if (parse) this.newStyles.widthInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.widthInitial.length > 0) {
                this.newStyles.widthParsed = this.newStyles.widthInitial.match(NUMERIC_REGEXP)[0];
              }
              break;

            case 'height':
              if (parse) this.newStyles.heightInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.heightInitial.length > 0) {
                this.newStyles.heightParsed = this.newStyles.heightInitial.match(NUMERIC_REGEXP)[0];
              }
              break;

            case 'transform':
              if (this.cssParsed[ccsp].value.substr(0, 6) == "rotate") {
                if (parse) this.newStyles.transformRotateInitial = this.cssParsed[ccsp].value;

                if (this.newStyles.transformRotateInitial.length > 0) {
                  this.newStyles.transformRotateParsed = this.newStyles.transformRotateInitial.match(NUMERIC_REGEXP)[0];
                }
              }
              break;

            case 'border-radius':
              if (parse) this.newStyles.borderRadiusInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.borderRadiusInitial.length > 0) {
                this.newStyles.borderRadiusParsed = this.newStyles.borderRadiusInitial.match(NUMERIC_REGEXP);
              }
              break;

            case 'background-blend-mode':
              if (parse) this.newStyles.backgroundBlendModeInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.backgroundBlendModeInitial.length > 0) {
                this.newStyles.backgroundBlendModeParsed = this.newStyles.backgroundBlendModeInitial.replace(/-/g, '_').replace(/\s+/g, '').toUpperCase().split(",");
              }
              break;

            case 'box-sizing':
              if (parse) this.newStyles.boxSizingInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.boxSizingInitial.length > 0) {
                this.newStyles.boxSizingParsed = this.newStyles.boxSizingInitial;
              }
              break;

            case 'background-color':
            case 'background':
              if (parse) this.newStyles.backgroundInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.backgroundInitial.length > 0) {
                this.$refs.kostyl.style.background = this.newStyles.backgroundInitial;
                this.newStyles.backgroundParsed = bgParse.parseElementStyle(this.$refs.kostyl.style).backgrounds;
              }
              break;

            case 'font-size':
              if (parse) this.newStyles.fontSizeInitial = this.cssParsed[ccsp].value;
              if (parseFloat(this.newStyles.fontSizeInitial) > 0) {
                this.newStyles.fontSizeParsed = toPx(this.newStyles.fontSizeInitial)
              }
              break;

            case 'line-height':
              if (parse) this.newStyles.lineHeightInitial = this.cssParsed[ccsp].value;
              if (this.newStyles.lineHeightInitial) {
                const { unit, value } = toUnit(this.newStyles.lineHeightInitial, true);
                this.newStyles.lineHeightUnit = unit;
                this.newStyles.lineHeightParsed = value.toString(); 
              }
              break;

            case 'color':
              if (parse) this.newStyles.colorInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.colorInitial.length > 0) {
                this.newStyles.colorParsed = this.newStyles.colorInitial;
              }
              break;

            case 'text-align':
              if (parse) this.newStyles.textAlignInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.textAlignInitial.length > 0) {
                this.newStyles.textAlignParsed = this.newStyles.textAlignInitial;
              }
              break;

            case 'text-transform':
              if (parse) this.newStyles.textTransformInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.textTransformInitial.length > 0) {
                this.newStyles.textTransformParsed = this.newStyles.textTransformInitial;
              }
              break;

            case 'text-decoration':
              if (parse) this.newStyles.textDecorationInitial = this.cssParsed[ccsp].value;

              if (this.newStyles.textDecorationInitial.length > 0) {
                this.newStyles.textDecorationParsed = this.newStyles.textDecorationInitial;
              }
              break;

          }
        }
      }

      this.setStyles();
    }
  },
  watch: {
    notes: function() {
      this.addNotesToCssInitial();
    },
    selection: function() {
      if(this.cssInitial != this.cleared && this.cssInitial != (this.cleared + this.notes)) this.globalPreparing(false);
    },
    cssInitial: function() {
      if(this.cssInitial != this.cleared && this.cssInitial != (this.cleared + this.notes)) this.globalPreparing(true);
    }
  },
  created() {
    this.clear();
    this.getSelection();
    this.getNotes();
    onmessage = (event) => {
      if (event.data.pluginMessage.selection) {
        this.selection = event.data.pluginMessage.selection;
      }
      if (event.data.pluginMessage.notes) {
        this.notes = event.data.pluginMessage.notes;
      }
    }
  }
};
</script>

<style>
body {
  margin: 4%;
  text-align: left;
  overflow: hidden;
}
* {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 13px;
  line-height: 20px;
}
label {
  display: block;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  width: 100%;
  margin: 0 auto 8px auto;
  text-align: left;
  color: #393838;
}
.vue-codemirror {
  border-radius: 4px !important;
  overflow: hidden;
  height: 362px !important;
}
.CodeMirror {
  height: 362px !important;
}
button {
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  border: none;
  height: 32px;
  width: 48%;
  outline: none;
  cursor: pointer;
  margin: 4% 0 0 4%;
  padding: 0;
  color: #282a36;
  display: inline-block;
}
button#clear {
  margin-left: 0;
  background-color: #ff79c6;
}
button#beautify {
  background-color: #50fa7b;
}
button#clear:active {
  outline: none;
  background: #E06AAE;
}
button#beautify:active {
  outline: none;
  background: #46DB6C;
}
body > div > span {
  display: none;
}
</style>