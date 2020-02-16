/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/color-js/color.js":
/*!****************************************!*\
  !*** ./node_modules/color-js/color.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright (c) 2008-2013, Andrew Brehaut, Tim Baumann, Matt Wilson, 
//                          Simon Heimler, Michel Vielmetter 
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// * Redistributions of source code must retain the above copyright notice,
//   this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

// color.js - version 1.0.1
//
// HSV <-> RGB code based on code from http://www.cs.rit.edu/~ncs/color/t_convert.html
// object function created by Douglas Crockford.
// Color scheme degrees taken from the colorjack.com colorpicker
//
// HSL support kindly provided by Tim Baumann - http://github.com/timjb

// create namespaces
/*global net */
if ("undefined" == typeof net) {
    var net = {};
}
if (!net.brehaut) {
    net.brehaut = {};
}

// this module function is called with net.brehaut as 'this'
(function() {
    "use strict";
    // Constants

    // css_colors maps color names onto their hex values
    // these names are defined by W3C
    
    var css_colors = {aliceblue:'#F0F8FF',antiquewhite:'#FAEBD7',aqua:'#00FFFF',aquamarine:'#7FFFD4',azure:'#F0FFFF',beige:'#F5F5DC',bisque:'#FFE4C4',black:'#000000',blanchedalmond:'#FFEBCD',blue:'#0000FF',blueviolet:'#8A2BE2',brown:'#A52A2A',burlywood:'#DEB887',cadetblue:'#5F9EA0',chartreuse:'#7FFF00',chocolate:'#D2691E',coral:'#FF7F50',cornflowerblue:'#6495ED',cornsilk:'#FFF8DC',crimson:'#DC143C',cyan:'#00FFFF',darkblue:'#00008B',darkcyan:'#008B8B',darkgoldenrod:'#B8860B',darkgray:'#A9A9A9',darkgrey:'#A9A9A9',darkgreen:'#006400',darkkhaki:'#BDB76B',darkmagenta:'#8B008B',darkolivegreen:'#556B2F',darkorange:'#FF8C00',darkorchid:'#9932CC',darkred:'#8B0000',darksalmon:'#E9967A',darkseagreen:'#8FBC8F',darkslateblue:'#483D8B',darkslategray:'#2F4F4F',darkslategrey:'#2F4F4F',darkturquoise:'#00CED1',darkviolet:'#9400D3',deeppink:'#FF1493',deepskyblue:'#00BFFF',dimgray:'#696969',dimgrey:'#696969',dodgerblue:'#1E90FF',firebrick:'#B22222',floralwhite:'#FFFAF0',forestgreen:'#228B22',fuchsia:'#FF00FF',gainsboro:'#DCDCDC',ghostwhite:'#F8F8FF',gold:'#FFD700',goldenrod:'#DAA520',gray:'#808080',grey:'#808080',green:'#008000',greenyellow:'#ADFF2F',honeydew:'#F0FFF0',hotpink:'#FF69B4',indianred:'#CD5C5C',indigo:'#4B0082',ivory:'#FFFFF0',khaki:'#F0E68C',lavender:'#E6E6FA',lavenderblush:'#FFF0F5',lawngreen:'#7CFC00',lemonchiffon:'#FFFACD',lightblue:'#ADD8E6',lightcoral:'#F08080',lightcyan:'#E0FFFF',lightgoldenrodyellow:'#FAFAD2',lightgray:'#D3D3D3',lightgrey:'#D3D3D3',lightgreen:'#90EE90',lightpink:'#FFB6C1',lightsalmon:'#FFA07A',lightseagreen:'#20B2AA',lightskyblue:'#87CEFA',lightslategray:'#778899',lightslategrey:'#778899',lightsteelblue:'#B0C4DE',lightyellow:'#FFFFE0',lime:'#00FF00',limegreen:'#32CD32',linen:'#FAF0E6',magenta:'#FF00FF',maroon:'#800000',mediumaquamarine:'#66CDAA',mediumblue:'#0000CD',mediumorchid:'#BA55D3',mediumpurple:'#9370D8',mediumseagreen:'#3CB371',mediumslateblue:'#7B68EE',mediumspringgreen:'#00FA9A',mediumturquoise:'#48D1CC',mediumvioletred:'#C71585',midnightblue:'#191970',mintcream:'#F5FFFA',mistyrose:'#FFE4E1',moccasin:'#FFE4B5',navajowhite:'#FFDEAD',navy:'#000080',oldlace:'#FDF5E6',olive:'#808000',olivedrab:'#6B8E23',orange:'#FFA500',orangered:'#FF4500',orchid:'#DA70D6',palegoldenrod:'#EEE8AA',palegreen:'#98FB98',paleturquoise:'#AFEEEE',palevioletred:'#D87093',papayawhip:'#FFEFD5',peachpuff:'#FFDAB9',peru:'#CD853F',pink:'#FFC0CB',plum:'#DDA0DD',powderblue:'#B0E0E6',purple:'#800080',rebeccapurple:'#663399',red:'#FF0000',rosybrown:'#BC8F8F',royalblue:'#4169E1',saddlebrown:'#8B4513',salmon:'#FA8072',sandybrown:'#F4A460',seagreen:'#2E8B57',seashell:'#FFF5EE',sienna:'#A0522D',silver:'#C0C0C0',skyblue:'#87CEEB',slateblue:'#6A5ACD',slategray:'#708090',slategrey:'#708090',snow:'#FFFAFA',springgreen:'#00FF7F',steelblue:'#4682B4',tan:'#D2B48C',teal:'#008080',thistle:'#D8BFD8',tomato:'#FF6347',turquoise:'#40E0D0',violet:'#EE82EE',wheat:'#F5DEB3',white:'#FFFFFF',whitesmoke:'#F5F5F5',yellow:'#FFFF00',yellowgreen:'#9ACD32'};


    // CSS value regexes, according to http://www.w3.org/TR/css3-values/
    var css_integer = '(?:\\+|-)?\\d+';
    var css_float = '(?:\\+|-)?\\d*\\.\\d+';
    var css_number = '(?:' + css_integer + ')|(?:' + css_float + ')';
    css_integer = '(' + css_integer + ')';
    css_float = '(' + css_float + ')';
    css_number = '(' + css_number + ')';
    var css_percentage = css_number + '%';
    var css_whitespace = '\\s*?';

    // http://www.w3.org/TR/2003/CR-css3-color-20030514/
    var hsl_hsla_regex = new RegExp([
        '^hsl(a?)\\(', css_number, ',', css_percentage, ',', css_percentage, '(,(', css_number, '))?\\)$'
    ].join(css_whitespace));
    var rgb_rgba_integer_regex = new RegExp([
        '^rgb(a?)\\(', css_integer, ',', css_integer, ',', css_integer, '(,(', css_number, '))?\\)$'
    ].join(css_whitespace));
    var rgb_rgba_percentage_regex = new RegExp([
        '^rgb(a?)\\(', css_percentage, ',', css_percentage, ',', css_percentage, '(,(', css_number, '))?\\)$'
    ].join(css_whitespace));

    // Package wide variables

    // becomes the top level prototype object
    var color;

    /* registered_models contains the template objects for all the
     * models that have been registered for the color class.
     */
    var registered_models = [];


    /* factories contains methods to create new instance of
     * different color models that have been registered.
     */
    var factories = {};

    // Utility functions

    /* object is Douglas Crockfords object function for prototypal
     * inheritance.
     */
    if (!this.object) {
        this.object = function(o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }
    var object = this.object;

    /* takes a value, converts to string if need be, then pads it
     * to a minimum length.
     */
    function pad(val, len) {
        val = val.toString();
        var padded = [];

        for (var i = 0, j = Math.max(len - val.length, 0); i < j; i++) {
            padded.push('0');
        }

        padded.push(val);
        return padded.join('');
    }


    /* takes a string and returns a new string with the first letter
     * capitalised
     */
    function capitalise(s) {
        return s.slice(0, 1).toUpperCase() + s.slice(1);
    }

    /* removes leading and trailing whitespace
     */
    function trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }

    /* used to apply a method to object non-destructively by
     * cloning the object and then apply the method to that
     * new object
     */
    function cloneOnApply(meth) {
        return function() {
            var cloned = this.clone();
            meth.apply(cloned, arguments);
            return cloned;
        };
    }


    /* registerModel is used to add additional representations
     * to the color code, and extend the color API with the new
     * operation that model provides. see before for examples
     */
    function registerModel(name, model) {
        var proto = object(color);
        var fields = []; // used for cloning and generating accessors

        var to_meth = 'to' + capitalise(name);

        function convertAndApply(meth) {
            return function() {
                return meth.apply(this[to_meth](), arguments);
            };
        }

        for (var key in model)
            if (model.hasOwnProperty(key)) {
                proto[key] = model[key];
                var prop = proto[key];

                if (key.slice(0, 1) == '_') {
                    continue;
                }
                if (!(key in color) && "function" == typeof prop) {
                    // the method found on this object is a) public and b) not
                    // currently supported by the color object. Create an impl that
                    // calls the toModel function and passes that new object
                    // onto the correct method with the args.
                    color[key] = convertAndApply(prop);
                } else if ("function" != typeof prop) {
                    // we have found a public property. create accessor methods
                    // and bind them up correctly
                    fields.push(key);
                    var getter = 'get' + capitalise(key);
                    var setter = 'set' + capitalise(key);

                    color[getter] = convertAndApply(
                        proto[getter] = (function(key) {
                            return function() {
                                return this[key];
                            };
                        })(key)
                    );

                    color[setter] = convertAndApply(
                        proto[setter] = (function(key) {
                            return function(val) {
                                var cloned = this.clone();
                                cloned[key] = val;
                                return cloned;
                            };
                        })(key)
                    );
                }
            } // end of for over model

            // a method to create a new object - largely so prototype chains dont
            // get insane. This uses an unrolled 'object' so that F is cached
            // for later use. this is approx a 25% speed improvement

        function F() {}
        F.prototype = proto;

        function factory() {
            return new F();
        }
        factories[name] = factory;

        proto.clone = function() {
            var cloned = factory();
            for (var i = 0, j = fields.length; i < j; i++) {
                var key = fields[i];
                cloned[key] = this[key];
            }
            return cloned;
        };

        color[to_meth] = function() {
            return factory();
        };

        registered_models.push(proto);

        return proto;
    } // end of registerModel

    // Template Objects

    /* color is the root object in the color hierarchy. It starts
     * life as a very simple object, but as color models are
     * registered it has methods programmatically added to manage
     * conversions as needed.
     */
    color = {
        /* fromObject takes an argument and delegates to the internal
         * color models to try to create a new instance.
         */
        fromObject: function(o) {
            if (!o) {
                return object(color);
            }

            for (var i = 0, j = registered_models.length; i < j; i++) {
                var nu = registered_models[i].fromObject(o);
                if (nu) {
                    return nu;
                }
            }

            return object(color);
        },

        toString: function() {
            return this.toCSS();
        }
    };

    var transparent = null; // defined with an RGB later.

    /* RGB is the red green blue model. This definition is converted
     * to a template object by registerModel.
     */
    registerModel('RGB', {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0,

        /* getLuminance returns a value between 0 and 1, this is the
         * luminance calcuated according to
         * http://www.poynton.com/notes/colour_and_gamma/ColorFAQ.html#RTFToC9
         */
        getLuminance: function() {
            return (this.red * 0.2126) + (this.green * 0.7152) + (this.blue * 0.0722);
        },

        /* does an alpha based blend of color onto this. alpha is the
         * amount of 'color' to use. (0 to 1)
         */
        blend: function(color, alpha) {
            color = color.toRGB();
            alpha = Math.min(Math.max(alpha, 0), 1);
            var rgb = this.clone();

            rgb.red = (rgb.red * (1 - alpha)) + (color.red * alpha);
            rgb.green = (rgb.green * (1 - alpha)) + (color.green * alpha);
            rgb.blue = (rgb.blue * (1 - alpha)) + (color.blue * alpha);
            rgb.alpha = (rgb.alpha * (1 - alpha)) + (color.alpha * alpha);

            return rgb;
        },

        /* fromObject attempts to convert an object o to and RGB
         * instance. This accepts an object with red, green and blue
         * members or a string. If the string is a known CSS color name
         * or a hexdecimal string it will accept it.
         */
        fromObject: function(o) {
            if (o instanceof Array) {
                return this._fromRGBArray(o);
            }
            if ("string" == typeof o) {
                return this._fromCSS(trim(o));
            }
            if (o.hasOwnProperty('red') &&
                o.hasOwnProperty('green') &&
                o.hasOwnProperty('blue')) {
                return this._fromRGB(o);
            }
            // nothing matchs, not an RGB object
        },

        _stringParsers: [
            // CSS RGB(A) literal:
            function(css) {
                css = trim(css);

                var withInteger = match(rgb_rgba_integer_regex, 255);
                if (withInteger) {
                    return withInteger;
                }
                return match(rgb_rgba_percentage_regex, 100);

                function match(regex, max_value) {
                    var colorGroups = css.match(regex);

                    // If there is an "a" after "rgb", there must be a fourth parameter and the other way round
                    if (!colorGroups || (!!colorGroups[1] + !!colorGroups[5] === 1)) {
                        return null;
                    }

                    var rgb = factories.RGB();
                    rgb.red = Math.min(1, Math.max(0, colorGroups[2] / max_value));
                    rgb.green = Math.min(1, Math.max(0, colorGroups[3] / max_value));
                    rgb.blue = Math.min(1, Math.max(0, colorGroups[4] / max_value));
                    rgb.alpha = !!colorGroups[5] ? Math.min(Math.max(parseFloat(colorGroups[6]), 0), 1) : 1;

                    return rgb;
                }
            },

            function(css) {
                var lower = css.toLowerCase();
                if (lower in css_colors) {
                    css = css_colors[lower];
                }

                if (!css.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)) {
                    return;
                }

                css = css.replace(/^#/, '');

                var bytes = css.length / 3;

                var max = Math.pow(16, bytes) - 1;

                var rgb = factories.RGB();
                rgb.red = parseInt(css.slice(0, bytes), 16) / max;
                rgb.green = parseInt(css.slice(bytes * 1, bytes * 2), 16) / max;
                rgb.blue = parseInt(css.slice(bytes * 2), 16) / max;
                rgb.alpha = 1;
                return rgb;
            },

            function(css) {
                if (css.toLowerCase() !== 'transparent') return;

                return transparent;
            }
        ],

        _fromCSS: function(css) {
            var color = null;
            for (var i = 0, j = this._stringParsers.length; i < j; i++) {
                color = this._stringParsers[i](css);
                if (color) return color;
            }
        },

        _fromRGB: function(RGB) {
            var newRGB = factories.RGB();

            newRGB.red = RGB.red;
            newRGB.green = RGB.green;
            newRGB.blue = RGB.blue;
            newRGB.alpha = RGB.hasOwnProperty('alpha') ? RGB.alpha : 1;

            return newRGB;
        },

        _fromRGBArray: function(RGB) {
            var newRGB = factories.RGB();

            newRGB.red = Math.max(0, Math.min(1, RGB[0] / 255));
            newRGB.green = Math.max(0, Math.min(1, RGB[1] / 255));
            newRGB.blue = Math.max(0, Math.min(1, RGB[2] / 255));
            newRGB.alpha = RGB[3] !== undefined ? Math.max(0, Math.min(1, RGB[3])) : 1;

            return newRGB;
        },

        // convert to a CSS string. defaults to two bytes a value
        toCSSHex: function(bytes) {
            bytes = bytes || 2;

            var max = Math.pow(16, bytes) - 1;
            var css = [
                "#",
                pad(Math.round(this.red * max).toString(16).toUpperCase(), bytes),
                pad(Math.round(this.green * max).toString(16).toUpperCase(), bytes),
                pad(Math.round(this.blue * max).toString(16).toUpperCase(), bytes)
            ];

            return css.join('');
        },

        toCSS: function(bytes) {
            if (this.alpha === 1) return this.toCSSHex(bytes);

            var max = 255;

            var components = [
                'rgba(',
                Math.max(0, Math.min(max, Math.round(this.red * max))), ',',
                Math.max(0, Math.min(max, Math.round(this.green * max))), ',',
                Math.max(0, Math.min(max, Math.round(this.blue * max))), ',',
                Math.max(0, Math.min(1, this.alpha)),
                ')'
            ];

            return components.join('');
        },

        toHSV: function() {
            var hsv = factories.HSV();
            var min, max, delta;

            min = Math.min(this.red, this.green, this.blue);
            max = Math.max(this.red, this.green, this.blue);
            hsv.value = max; // v

            delta = max - min;

            if (delta == 0) { // white, grey, black
                hsv.hue = hsv.saturation = 0;
            } else { // chroma
                hsv.saturation = delta / max;

                if (this.red == max) {
                    hsv.hue = (this.green - this.blue) / delta; // between yellow & magenta
                } else if (this.green == max) {
                    hsv.hue = 2 + (this.blue - this.red) / delta; // between cyan & yellow
                } else {
                    hsv.hue = 4 + (this.red - this.green) / delta; // between magenta & cyan
                }

                hsv.hue = ((hsv.hue * 60) + 360) % 360; // degrees
            }

            hsv.alpha = this.alpha;

            return hsv;
        },
        toHSL: function() {
            return this.toHSV().toHSL();
        },

        toRGB: function() {
            return this.clone();
        }
    });

    transparent = color.fromObject({
        red: 0,
        blue: 0,
        green: 0,
        alpha: 0
    });


    /* Like RGB above, this object describes what will become the HSV
     * template object. This model handles hue, saturation and value.
     * hue is the number of degrees around the color wheel, saturation
     * describes how much color their is and value is the brightness.
     */
    registerModel('HSV', {
        hue: 0,
        saturation: 0,
        value: 1,
        alpha: 1,

        shiftHue: cloneOnApply(function(degrees) {
            var hue = (this.hue + degrees) % 360;
            if (hue < 0) {
                hue = (360 + hue) % 360;
            }

            this.hue = hue;
        }),

        devalueByAmount: cloneOnApply(function(val) {
            this.value = Math.min(1, Math.max(this.value - val, 0));
        }),

        devalueByRatio: cloneOnApply(function(val) {
            this.value = Math.min(1, Math.max(this.value * (1 - val), 0));
        }),

        valueByAmount: cloneOnApply(function(val) {
            this.value = Math.min(1, Math.max(this.value + val, 0));
        }),

        valueByRatio: cloneOnApply(function(val) {
            this.value = Math.min(1, Math.max(this.value * (1 + val), 0));
        }),

        desaturateByAmount: cloneOnApply(function(val) {
            this.saturation = Math.min(1, Math.max(this.saturation - val, 0));
        }),

        desaturateByRatio: cloneOnApply(function(val) {
            this.saturation = Math.min(1, Math.max(this.saturation * (1 - val), 0));
        }),

        saturateByAmount: cloneOnApply(function(val) {
            this.saturation = Math.min(1, Math.max(this.saturation + val, 0));
        }),

        saturateByRatio: cloneOnApply(function(val) {
            this.saturation = Math.min(1, Math.max(this.saturation * (1 + val), 0));
        }),

        schemeFromDegrees: function(degrees) {
            var newColors = [];
            for (var i = 0, j = degrees.length; i < j; i++) {
                var col = this.clone();
                col.hue = (this.hue + degrees[i]) % 360;
                newColors.push(col);
            }
            return newColors;
        },

        complementaryScheme: function() {
            return this.schemeFromDegrees([0, 180]);
        },

        splitComplementaryScheme: function() {
            return this.schemeFromDegrees([0, 150, 320]);
        },

        splitComplementaryCWScheme: function() {
            return this.schemeFromDegrees([0, 150, 300]);
        },

        splitComplementaryCCWScheme: function() {
            return this.schemeFromDegrees([0, 60, 210]);
        },

        triadicScheme: function() {
            return this.schemeFromDegrees([0, 120, 240]);
        },

        clashScheme: function() {
            return this.schemeFromDegrees([0, 90, 270]);
        },

        tetradicScheme: function() {
            return this.schemeFromDegrees([0, 90, 180, 270]);
        },

        fourToneCWScheme: function() {
            return this.schemeFromDegrees([0, 60, 180, 240]);
        },

        fourToneCCWScheme: function() {
            return this.schemeFromDegrees([0, 120, 180, 300]);
        },

        fiveToneAScheme: function() {
            return this.schemeFromDegrees([0, 115, 155, 205, 245]);
        },

        fiveToneBScheme: function() {
            return this.schemeFromDegrees([0, 40, 90, 130, 245]);
        },

        fiveToneCScheme: function() {
            return this.schemeFromDegrees([0, 50, 90, 205, 320]);
        },

        fiveToneDScheme: function() {
            return this.schemeFromDegrees([0, 40, 155, 270, 310]);
        },

        fiveToneEScheme: function() {
            return this.schemeFromDegrees([0, 115, 230, 270, 320]);
        },

        sixToneCWScheme: function() {
            return this.schemeFromDegrees([0, 30, 120, 150, 240, 270]);
        },

        sixToneCCWScheme: function() {
            return this.schemeFromDegrees([0, 90, 120, 210, 240, 330]);
        },

        neutralScheme: function() {
            return this.schemeFromDegrees([0, 15, 30, 45, 60, 75]);
        },

        analogousScheme: function() {
            return this.schemeFromDegrees([0, 30, 60, 90, 120, 150]);
        },

        fromObject: function(o) {
            if (o.hasOwnProperty('hue') &&
                o.hasOwnProperty('saturation') &&
                o.hasOwnProperty('value')) {
                var hsv = factories.HSV();

                hsv.hue = o.hue;
                hsv.saturation = o.saturation;
                hsv.value = o.value;
                hsv.alpha = o.hasOwnProperty('alpha') ? o.alpha : 1;

                return hsv;
            }
            // nothing matches, not an HSV object
            return null;
        },

        _normalise: function() {
            this.hue %= 360;
            this.saturation = Math.min(Math.max(0, this.saturation), 1);
            this.value = Math.min(Math.max(0, this.value));
            this.alpha = Math.min(1, Math.max(0, this.alpha));
        },

        toRGB: function() {
            this._normalise();

            var rgb = factories.RGB();
            var i;
            var f, p, q, t;

            if (this.saturation === 0) {
                // achromatic (grey)
                rgb.red = this.value;
                rgb.green = this.value;
                rgb.blue = this.value;
                rgb.alpha = this.alpha;
                return rgb;
            }

            var h = this.hue / 60; // sector 0 to 5
            i = Math.floor(h);
            f = h - i; // factorial part of h
            p = this.value * (1 - this.saturation);
            q = this.value * (1 - this.saturation * f);
            t = this.value * (1 - this.saturation * (1 - f));

            switch (i) {
                case 0:
                    rgb.red = this.value;
                    rgb.green = t;
                    rgb.blue = p;
                    break;
                case 1:
                    rgb.red = q;
                    rgb.green = this.value;
                    rgb.blue = p;
                    break;
                case 2:
                    rgb.red = p;
                    rgb.green = this.value;
                    rgb.blue = t;
                    break;
                case 3:
                    rgb.red = p;
                    rgb.green = q;
                    rgb.blue = this.value;
                    break;
                case 4:
                    rgb.red = t;
                    rgb.green = p;
                    rgb.blue = this.value;
                    break;
                default: // case 5:
                    rgb.red = this.value;
                    rgb.green = p;
                    rgb.blue = q;
                    break;
            }

            rgb.alpha = this.alpha;

            return rgb;
        },
        toHSL: function() {
            this._normalise();

            var hsl = factories.HSL();

            hsl.hue = this.hue;
            var l = (2 - this.saturation) * this.value,
                s = this.saturation * this.value;
            if (l && 2 - l) {
                s /= (l <= 1) ? l : 2 - l;
            }
            l /= 2;
            hsl.saturation = s;
            hsl.lightness = l;
            hsl.alpha = this.alpha;

            return hsl;
        },

        toHSV: function() {
            return this.clone();
        }
    });

    registerModel('HSL', {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 1,

        darkenByAmount: cloneOnApply(function(val) {
            this.lightness = Math.min(1, Math.max(this.lightness - val, 0));
        }),

        darkenByRatio: cloneOnApply(function(val) {
            this.lightness = Math.min(1, Math.max(this.lightness * (1 - val), 0));
        }),

        lightenByAmount: cloneOnApply(function(val) {
            this.lightness = Math.min(1, Math.max(this.lightness + val, 0));
        }),

        lightenByRatio: cloneOnApply(function(val) {
            this.lightness = Math.min(1, Math.max(this.lightness * (1 + val), 0));
        }),

        fromObject: function(o) {
            if ("string" == typeof o) {
                return this._fromCSS(o);
            }
            if (o.hasOwnProperty('hue') &&
                o.hasOwnProperty('saturation') &&
                o.hasOwnProperty('lightness')) {
                return this._fromHSL(o);
            }
            // nothing matchs, not an RGB object
        },

        _fromCSS: function(css) {
            var colorGroups = trim(css).match(hsl_hsla_regex);

            // if there is an "a" after "hsl", there must be a fourth parameter and the other way round
            if (!colorGroups || (!!colorGroups[1] + !!colorGroups[5] === 1)) {
                return null;
            }

            var hsl = factories.HSL();
            hsl.hue = (colorGroups[2] % 360 + 360) % 360;
            hsl.saturation = Math.max(0, Math.min(parseInt(colorGroups[3], 10) / 100, 1));
            hsl.lightness = Math.max(0, Math.min(parseInt(colorGroups[4], 10) / 100, 1));
            hsl.alpha = !!colorGroups[5] ? Math.max(0, Math.min(1, parseFloat(colorGroups[6]))) : 1;

            return hsl;
        },

        _fromHSL: function(HSL) {
            var newHSL = factories.HSL();

            newHSL.hue = HSL.hue;
            newHSL.saturation = HSL.saturation;
            newHSL.lightness = HSL.lightness;

            newHSL.alpha = HSL.hasOwnProperty('alpha') ? HSL.alpha : 1;

            return newHSL;
        },

        _normalise: function() {
            this.hue = (this.hue % 360 + 360) % 360;
            this.saturation = Math.min(Math.max(0, this.saturation), 1);
            this.lightness = Math.min(Math.max(0, this.lightness));
            this.alpha = Math.min(1, Math.max(0, this.alpha));
        },

        toHSL: function() {
            return this.clone();
        },
        toHSV: function() {
            this._normalise();

            var hsv = factories.HSV();

            // http://ariya.blogspot.com/2008/07/converting-between-hsl-and-hsv.html
            hsv.hue = this.hue; // H
            var l = 2 * this.lightness,
                s = this.saturation * ((l <= 1) ? l : 2 - l);
            hsv.value = (l + s) / 2; // V
            hsv.saturation = ((2 * s) / (l + s)) || 0; // S
            hsv.alpha = this.alpha;

            return hsv;
        },
        toRGB: function() {
            return this.toHSV().toRGB();
        }
    });

    // Package specific exports

    /* the Color function is a factory for new color objects.
     */
    function Color(o) {
        return color.fromObject(o);
    }
    Color.isValid = function(str) {
        var key, c = Color(str);

        var length = 0;
        for (key in c) {
            if (c.hasOwnProperty(key)) {
                length++;
            }
        }

        return length > 0;
    };
    net.brehaut.Color = Color;
}).call(net.brehaut);

/* Export to CommonJS
 */
if (true) {
    module.exports = net.brehaut.Color;
}

/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-js */ "./node_modules/color-js/color.js");
/* harmony import */ var color_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color_js__WEBPACK_IMPORTED_MODULE_0__);

figma.showUI(__html__, { width: 400, height: 440 });
figma.on("selectionchange", () => {
    figma.ui.postMessage({ selection: figma.currentPage.selection });
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
            figma.ui.postMessage({ selection: figma.currentPage.selection });
            console.log(figma.currentPage.selection);
            break;
        case 'getNotes':
            figma.ui.postMessage({ notes: figma.root.getPluginData('notes') });
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
                                    const c = color_js__WEBPACK_IMPORTED_MODULE_0__(styleChild.color);
                                    styleChild.color = {
                                        r: c.getRed() ? c.getRed() : 0,
                                        g: c.getGreen() ? c.getGreen() : 0,
                                        b: c.getBlue() ? c.getBlue() : 0,
                                        a: c.getAlpha() ? c.getAlpha() : 1
                                    };
                                }
                                else {
                                    styleChild.color = { r: 0, g: 0, b: 0, a: 1 };
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
                                });
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
                                    let c = color_js__WEBPACK_IMPORTED_MODULE_0__(fill.color);
                                    const color = {
                                        r: c.getRed() ? c.getRed() : 0,
                                        g: c.getGreen() ? c.getGreen() : 0,
                                        b: c.getBlue() ? c.getBlue() : 0
                                    };
                                    addedFills.push({
                                        blendMode: blendMode,
                                        color: color,
                                        opacity: c.getAlpha() ? c.getAlpha() : 1,
                                        type: "SOLID",
                                        visible: true
                                    });
                                }
                            }
                            ;
                            break;
                        case 'filterBlurParsed':
                            removedEffects.push.apply(removedEffects, ["LAYER_BLUR"]);
                            styles.filterBlurParsed = Number(styles.filterBlurParsed) ? Number(styles.filterBlurParsed) : 0;
                            addedEffects.push({
                                type: "LAYER_BLUR",
                                radius: styles.filterBlurParsed,
                                visible: true
                            });
                            break;
                        case 'backdropFilterBlurParsed':
                            removedEffects.push.apply(removedEffects, ["BACKGROUND_BLUR"]);
                            styles.backdropFilterBlurParsed = Number(styles.backdropFilterBlurParsed) ? Number(styles.backdropFilterBlurParsed) : 0;
                            addedEffects.push({
                                type: "BACKGROUND_BLUR",
                                radius: styles.backdropFilterBlurParsed,
                                visible: true
                            });
                            break;
                        case 'mixBlendModeParsed':
                            let inside = false;
                            const checkArr = blends;
                            inside = checkArr.includes(styles.mixBlendModeParsed);
                            styles.mixBlendModeParsed = inside ? styles.mixBlendModeParsed : checkArr[0];
                            otherParameters.push({
                                name: "blendMode",
                                value: styles.mixBlendModeParsed
                            });
                            break;
                        case 'opacityParsed':
                            styles.opacityParsed = Number(styles.opacityParsed) ? Number(styles.opacityParsed) : 1;
                            otherParameters.push({
                                name: "opacity",
                                value: styles.opacityParsed
                            });
                            break;
                        case 'widthParsed':
                            if (styles.widthParsed) {
                                styles.widthParsed = Number(styles.widthParsed) > 0 ? Number(styles.widthParsed) : 1;
                            }
                            otherParameters.push({
                                name: "width",
                                value: styles.widthParsed
                            });
                            break;
                        case 'heightParsed':
                            if (styles.heightParsed) {
                                styles.heightParsed = Number(styles.heightParsed) > 0 ? Number(styles.heightParsed) : 1;
                            }
                            otherParameters.push({
                                name: "height",
                                value: styles.heightParsed
                            });
                            break;
                        case 'transformRotateParsed':
                            styles.transformRotateParsed = Number(styles.transformRotateParsed) ? Number(styles.transformRotateParsed) : 0;
                            otherParameters.push({
                                name: "rotation",
                                value: styles.transformRotateParsed * -1
                            });
                            break;
                        case 'borderRadiusParsed':
                            for (const br in styles.borderRadiusParsed) {
                                styles.borderRadiusParsed[br] = Number(styles.borderRadiusParsed[br]);
                            }
                            if (styles.borderRadiusParsed.length == 1) {
                                otherParameters.push({
                                    name: "cornerRadius",
                                    value: styles.borderRadiusParsed[0] ? styles.borderRadiusParsed[0] : 0
                                });
                            }
                            else if (styles.borderRadiusParsed.length == 2) {
                                otherParameters.push({
                                    name: "topLeftRadius",
                                    value: styles.borderRadiusParsed[0] ? styles.borderRadiusParsed[0] : 0
                                });
                                otherParameters.push({
                                    name: "topRightRadius",
                                    value: styles.borderRadiusParsed[1] ? styles.borderRadiusParsed[1] : 0
                                });
                                otherParameters.push({
                                    name: "bottomRightRadius",
                                    value: styles.borderRadiusParsed[0] ? styles.borderRadiusParsed[0] : 0
                                });
                                otherParameters.push({
                                    name: "bottomLeftRadius",
                                    value: styles.borderRadiusParsed[1] ? styles.borderRadiusParsed[1] : 0
                                });
                            }
                            else if (styles.borderRadiusParsed.length > 2) {
                                otherParameters.push({
                                    name: "topLeftRadius",
                                    value: styles.borderRadiusParsed[0] ? styles.borderRadiusParsed[0] : 0
                                });
                                otherParameters.push({
                                    name: "topRightRadius",
                                    value: styles.borderRadiusParsed[1] ? styles.borderRadiusParsed[1] : 0
                                });
                                otherParameters.push({
                                    name: "bottomRightRadius",
                                    value: styles.borderRadiusParsed[2] ? styles.borderRadiusParsed[2] : 0
                                });
                                otherParameters.push({
                                    name: "bottomLeftRadius",
                                    value: styles.borderRadiusParsed[3] ? styles.borderRadiusParsed[3] : styles.borderRadiusParsed[1]
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
                                    inside = true;
                                }
                            }
                            if (!inside) {
                                filteredEffects.push(effect);
                            }
                        }
                    }
                    node.effects = filteredEffects;
                    node.effects = node.effects.concat(addedEffects.reverse());
                    if (node.fills.length > 0) {
                        for (const f in node.fills) {
                            const fill = node.fills[f];
                            let inside = false;
                            for (const rf in removedFills) {
                                if (fill.type === removedFills[rf]) {
                                    inside = true;
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
                        }
                        else if (na == "width") {
                            node.resize(va, node.height);
                        }
                        else if (na == "height") {
                            node.resize(node.width, va);
                        }
                    }
                }
            }
            break;
    }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWpzL2NvbG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtCQUErQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCOzs7QUFHdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCxPQUFPO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLE9BQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUF5RCxPQUFPO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLEVBQUUsYUFBYSxFQUFFO0FBQ2hFO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELE9BQU87QUFDbEU7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBLGFBQWEsT0FBTztBQUNwQjs7QUFFQTtBQUNBLCtEQUErRDtBQUMvRCxpQkFBaUI7QUFDakIsaUVBQWlFO0FBQ2pFLGlCQUFpQjtBQUNqQixrRUFBa0U7QUFDbEU7O0FBRUEsdURBQXVEO0FBQ3ZEOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLElBQTZCO0FBQ2pDO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbDFCQTtBQUFBO0FBQUE7QUFBa0M7QUFDbEMsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBLDBCQUEwQix5Q0FBeUM7QUFDbkUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx5Q0FBeUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJDQUEyQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxxQ0FBSztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUNBQUs7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMDgtMjAxMywgQW5kcmV3IEJyZWhhdXQsIFRpbSBCYXVtYW5uLCBNYXR0IFdpbHNvbiwgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgU2ltb24gSGVpbWxlciwgTWljaGVsIFZpZWxtZXR0ZXIgXG4vL1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuLy9cbi8vICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuLy8gICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4vLyAgIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbi8vICAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbi8vIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbi8vIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4vLyBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkVcbi8vIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1Jcbi8vIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4vLyBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1Ncbi8vIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4vLyBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuLy8gQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbi8vIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vLyBjb2xvci5qcyAtIHZlcnNpb24gMS4wLjFcbi8vXG4vLyBIU1YgPC0+IFJHQiBjb2RlIGJhc2VkIG9uIGNvZGUgZnJvbSBodHRwOi8vd3d3LmNzLnJpdC5lZHUvfm5jcy9jb2xvci90X2NvbnZlcnQuaHRtbFxuLy8gb2JqZWN0IGZ1bmN0aW9uIGNyZWF0ZWQgYnkgRG91Z2xhcyBDcm9ja2ZvcmQuXG4vLyBDb2xvciBzY2hlbWUgZGVncmVlcyB0YWtlbiBmcm9tIHRoZSBjb2xvcmphY2suY29tIGNvbG9ycGlja2VyXG4vL1xuLy8gSFNMIHN1cHBvcnQga2luZGx5IHByb3ZpZGVkIGJ5IFRpbSBCYXVtYW5uIC0gaHR0cDovL2dpdGh1Yi5jb20vdGltamJcblxuLy8gY3JlYXRlIG5hbWVzcGFjZXNcbi8qZ2xvYmFsIG5ldCAqL1xuaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIG5ldCkge1xuICAgIHZhciBuZXQgPSB7fTtcbn1cbmlmICghbmV0LmJyZWhhdXQpIHtcbiAgICBuZXQuYnJlaGF1dCA9IHt9O1xufVxuXG4vLyB0aGlzIG1vZHVsZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBuZXQuYnJlaGF1dCBhcyAndGhpcydcbihmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAvLyBDb25zdGFudHNcblxuICAgIC8vIGNzc19jb2xvcnMgbWFwcyBjb2xvciBuYW1lcyBvbnRvIHRoZWlyIGhleCB2YWx1ZXNcbiAgICAvLyB0aGVzZSBuYW1lcyBhcmUgZGVmaW5lZCBieSBXM0NcbiAgICBcbiAgICB2YXIgY3NzX2NvbG9ycyA9IHthbGljZWJsdWU6JyNGMEY4RkYnLGFudGlxdWV3aGl0ZTonI0ZBRUJENycsYXF1YTonIzAwRkZGRicsYXF1YW1hcmluZTonIzdGRkZENCcsYXp1cmU6JyNGMEZGRkYnLGJlaWdlOicjRjVGNURDJyxiaXNxdWU6JyNGRkU0QzQnLGJsYWNrOicjMDAwMDAwJyxibGFuY2hlZGFsbW9uZDonI0ZGRUJDRCcsYmx1ZTonIzAwMDBGRicsYmx1ZXZpb2xldDonIzhBMkJFMicsYnJvd246JyNBNTJBMkEnLGJ1cmx5d29vZDonI0RFQjg4NycsY2FkZXRibHVlOicjNUY5RUEwJyxjaGFydHJldXNlOicjN0ZGRjAwJyxjaG9jb2xhdGU6JyNEMjY5MUUnLGNvcmFsOicjRkY3RjUwJyxjb3JuZmxvd2VyYmx1ZTonIzY0OTVFRCcsY29ybnNpbGs6JyNGRkY4REMnLGNyaW1zb246JyNEQzE0M0MnLGN5YW46JyMwMEZGRkYnLGRhcmtibHVlOicjMDAwMDhCJyxkYXJrY3lhbjonIzAwOEI4QicsZGFya2dvbGRlbnJvZDonI0I4ODYwQicsZGFya2dyYXk6JyNBOUE5QTknLGRhcmtncmV5OicjQTlBOUE5JyxkYXJrZ3JlZW46JyMwMDY0MDAnLGRhcmtraGFraTonI0JEQjc2QicsZGFya21hZ2VudGE6JyM4QjAwOEInLGRhcmtvbGl2ZWdyZWVuOicjNTU2QjJGJyxkYXJrb3JhbmdlOicjRkY4QzAwJyxkYXJrb3JjaGlkOicjOTkzMkNDJyxkYXJrcmVkOicjOEIwMDAwJyxkYXJrc2FsbW9uOicjRTk5NjdBJyxkYXJrc2VhZ3JlZW46JyM4RkJDOEYnLGRhcmtzbGF0ZWJsdWU6JyM0ODNEOEInLGRhcmtzbGF0ZWdyYXk6JyMyRjRGNEYnLGRhcmtzbGF0ZWdyZXk6JyMyRjRGNEYnLGRhcmt0dXJxdW9pc2U6JyMwMENFRDEnLGRhcmt2aW9sZXQ6JyM5NDAwRDMnLGRlZXBwaW5rOicjRkYxNDkzJyxkZWVwc2t5Ymx1ZTonIzAwQkZGRicsZGltZ3JheTonIzY5Njk2OScsZGltZ3JleTonIzY5Njk2OScsZG9kZ2VyYmx1ZTonIzFFOTBGRicsZmlyZWJyaWNrOicjQjIyMjIyJyxmbG9yYWx3aGl0ZTonI0ZGRkFGMCcsZm9yZXN0Z3JlZW46JyMyMjhCMjInLGZ1Y2hzaWE6JyNGRjAwRkYnLGdhaW5zYm9ybzonI0RDRENEQycsZ2hvc3R3aGl0ZTonI0Y4RjhGRicsZ29sZDonI0ZGRDcwMCcsZ29sZGVucm9kOicjREFBNTIwJyxncmF5OicjODA4MDgwJyxncmV5OicjODA4MDgwJyxncmVlbjonIzAwODAwMCcsZ3JlZW55ZWxsb3c6JyNBREZGMkYnLGhvbmV5ZGV3OicjRjBGRkYwJyxob3RwaW5rOicjRkY2OUI0JyxpbmRpYW5yZWQ6JyNDRDVDNUMnLGluZGlnbzonIzRCMDA4MicsaXZvcnk6JyNGRkZGRjAnLGtoYWtpOicjRjBFNjhDJyxsYXZlbmRlcjonI0U2RTZGQScsbGF2ZW5kZXJibHVzaDonI0ZGRjBGNScsbGF3bmdyZWVuOicjN0NGQzAwJyxsZW1vbmNoaWZmb246JyNGRkZBQ0QnLGxpZ2h0Ymx1ZTonI0FERDhFNicsbGlnaHRjb3JhbDonI0YwODA4MCcsbGlnaHRjeWFuOicjRTBGRkZGJyxsaWdodGdvbGRlbnJvZHllbGxvdzonI0ZBRkFEMicsbGlnaHRncmF5OicjRDNEM0QzJyxsaWdodGdyZXk6JyNEM0QzRDMnLGxpZ2h0Z3JlZW46JyM5MEVFOTAnLGxpZ2h0cGluazonI0ZGQjZDMScsbGlnaHRzYWxtb246JyNGRkEwN0EnLGxpZ2h0c2VhZ3JlZW46JyMyMEIyQUEnLGxpZ2h0c2t5Ymx1ZTonIzg3Q0VGQScsbGlnaHRzbGF0ZWdyYXk6JyM3Nzg4OTknLGxpZ2h0c2xhdGVncmV5OicjNzc4ODk5JyxsaWdodHN0ZWVsYmx1ZTonI0IwQzRERScsbGlnaHR5ZWxsb3c6JyNGRkZGRTAnLGxpbWU6JyMwMEZGMDAnLGxpbWVncmVlbjonIzMyQ0QzMicsbGluZW46JyNGQUYwRTYnLG1hZ2VudGE6JyNGRjAwRkYnLG1hcm9vbjonIzgwMDAwMCcsbWVkaXVtYXF1YW1hcmluZTonIzY2Q0RBQScsbWVkaXVtYmx1ZTonIzAwMDBDRCcsbWVkaXVtb3JjaGlkOicjQkE1NUQzJyxtZWRpdW1wdXJwbGU6JyM5MzcwRDgnLG1lZGl1bXNlYWdyZWVuOicjM0NCMzcxJyxtZWRpdW1zbGF0ZWJsdWU6JyM3QjY4RUUnLG1lZGl1bXNwcmluZ2dyZWVuOicjMDBGQTlBJyxtZWRpdW10dXJxdW9pc2U6JyM0OEQxQ0MnLG1lZGl1bXZpb2xldHJlZDonI0M3MTU4NScsbWlkbmlnaHRibHVlOicjMTkxOTcwJyxtaW50Y3JlYW06JyNGNUZGRkEnLG1pc3R5cm9zZTonI0ZGRTRFMScsbW9jY2FzaW46JyNGRkU0QjUnLG5hdmFqb3doaXRlOicjRkZERUFEJyxuYXZ5OicjMDAwMDgwJyxvbGRsYWNlOicjRkRGNUU2JyxvbGl2ZTonIzgwODAwMCcsb2xpdmVkcmFiOicjNkI4RTIzJyxvcmFuZ2U6JyNGRkE1MDAnLG9yYW5nZXJlZDonI0ZGNDUwMCcsb3JjaGlkOicjREE3MEQ2JyxwYWxlZ29sZGVucm9kOicjRUVFOEFBJyxwYWxlZ3JlZW46JyM5OEZCOTgnLHBhbGV0dXJxdW9pc2U6JyNBRkVFRUUnLHBhbGV2aW9sZXRyZWQ6JyNEODcwOTMnLHBhcGF5YXdoaXA6JyNGRkVGRDUnLHBlYWNocHVmZjonI0ZGREFCOScscGVydTonI0NEODUzRicscGluazonI0ZGQzBDQicscGx1bTonI0REQTBERCcscG93ZGVyYmx1ZTonI0IwRTBFNicscHVycGxlOicjODAwMDgwJyxyZWJlY2NhcHVycGxlOicjNjYzMzk5JyxyZWQ6JyNGRjAwMDAnLHJvc3licm93bjonI0JDOEY4Ricscm95YWxibHVlOicjNDE2OUUxJyxzYWRkbGVicm93bjonIzhCNDUxMycsc2FsbW9uOicjRkE4MDcyJyxzYW5keWJyb3duOicjRjRBNDYwJyxzZWFncmVlbjonIzJFOEI1Nycsc2Vhc2hlbGw6JyNGRkY1RUUnLHNpZW5uYTonI0EwNTIyRCcsc2lsdmVyOicjQzBDMEMwJyxza3libHVlOicjODdDRUVCJyxzbGF0ZWJsdWU6JyM2QTVBQ0QnLHNsYXRlZ3JheTonIzcwODA5MCcsc2xhdGVncmV5OicjNzA4MDkwJyxzbm93OicjRkZGQUZBJyxzcHJpbmdncmVlbjonIzAwRkY3Ricsc3RlZWxibHVlOicjNDY4MkI0Jyx0YW46JyNEMkI0OEMnLHRlYWw6JyMwMDgwODAnLHRoaXN0bGU6JyNEOEJGRDgnLHRvbWF0bzonI0ZGNjM0NycsdHVycXVvaXNlOicjNDBFMEQwJyx2aW9sZXQ6JyNFRTgyRUUnLHdoZWF0OicjRjVERUIzJyx3aGl0ZTonI0ZGRkZGRicsd2hpdGVzbW9rZTonI0Y1RjVGNScseWVsbG93OicjRkZGRjAwJyx5ZWxsb3dncmVlbjonIzlBQ0QzMid9O1xuXG5cbiAgICAvLyBDU1MgdmFsdWUgcmVnZXhlcywgYWNjb3JkaW5nIHRvIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtdmFsdWVzL1xuICAgIHZhciBjc3NfaW50ZWdlciA9ICcoPzpcXFxcK3wtKT9cXFxcZCsnO1xuICAgIHZhciBjc3NfZmxvYXQgPSAnKD86XFxcXCt8LSk/XFxcXGQqXFxcXC5cXFxcZCsnO1xuICAgIHZhciBjc3NfbnVtYmVyID0gJyg/OicgKyBjc3NfaW50ZWdlciArICcpfCg/OicgKyBjc3NfZmxvYXQgKyAnKSc7XG4gICAgY3NzX2ludGVnZXIgPSAnKCcgKyBjc3NfaW50ZWdlciArICcpJztcbiAgICBjc3NfZmxvYXQgPSAnKCcgKyBjc3NfZmxvYXQgKyAnKSc7XG4gICAgY3NzX251bWJlciA9ICcoJyArIGNzc19udW1iZXIgKyAnKSc7XG4gICAgdmFyIGNzc19wZXJjZW50YWdlID0gY3NzX251bWJlciArICclJztcbiAgICB2YXIgY3NzX3doaXRlc3BhY2UgPSAnXFxcXHMqPyc7XG5cbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAzL0NSLWNzczMtY29sb3ItMjAwMzA1MTQvXG4gICAgdmFyIGhzbF9oc2xhX3JlZ2V4ID0gbmV3IFJlZ0V4cChbXG4gICAgICAgICdeaHNsKGE/KVxcXFwoJywgY3NzX251bWJlciwgJywnLCBjc3NfcGVyY2VudGFnZSwgJywnLCBjc3NfcGVyY2VudGFnZSwgJygsKCcsIGNzc19udW1iZXIsICcpKT9cXFxcKSQnXG4gICAgXS5qb2luKGNzc193aGl0ZXNwYWNlKSk7XG4gICAgdmFyIHJnYl9yZ2JhX2ludGVnZXJfcmVnZXggPSBuZXcgUmVnRXhwKFtcbiAgICAgICAgJ15yZ2IoYT8pXFxcXCgnLCBjc3NfaW50ZWdlciwgJywnLCBjc3NfaW50ZWdlciwgJywnLCBjc3NfaW50ZWdlciwgJygsKCcsIGNzc19udW1iZXIsICcpKT9cXFxcKSQnXG4gICAgXS5qb2luKGNzc193aGl0ZXNwYWNlKSk7XG4gICAgdmFyIHJnYl9yZ2JhX3BlcmNlbnRhZ2VfcmVnZXggPSBuZXcgUmVnRXhwKFtcbiAgICAgICAgJ15yZ2IoYT8pXFxcXCgnLCBjc3NfcGVyY2VudGFnZSwgJywnLCBjc3NfcGVyY2VudGFnZSwgJywnLCBjc3NfcGVyY2VudGFnZSwgJygsKCcsIGNzc19udW1iZXIsICcpKT9cXFxcKSQnXG4gICAgXS5qb2luKGNzc193aGl0ZXNwYWNlKSk7XG5cbiAgICAvLyBQYWNrYWdlIHdpZGUgdmFyaWFibGVzXG5cbiAgICAvLyBiZWNvbWVzIHRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9iamVjdFxuICAgIHZhciBjb2xvcjtcblxuICAgIC8qIHJlZ2lzdGVyZWRfbW9kZWxzIGNvbnRhaW5zIHRoZSB0ZW1wbGF0ZSBvYmplY3RzIGZvciBhbGwgdGhlXG4gICAgICogbW9kZWxzIHRoYXQgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgZm9yIHRoZSBjb2xvciBjbGFzcy5cbiAgICAgKi9cbiAgICB2YXIgcmVnaXN0ZXJlZF9tb2RlbHMgPSBbXTtcblxuXG4gICAgLyogZmFjdG9yaWVzIGNvbnRhaW5zIG1ldGhvZHMgdG8gY3JlYXRlIG5ldyBpbnN0YW5jZSBvZlxuICAgICAqIGRpZmZlcmVudCBjb2xvciBtb2RlbHMgdGhhdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZC5cbiAgICAgKi9cbiAgICB2YXIgZmFjdG9yaWVzID0ge307XG5cbiAgICAvLyBVdGlsaXR5IGZ1bmN0aW9uc1xuXG4gICAgLyogb2JqZWN0IGlzIERvdWdsYXMgQ3JvY2tmb3JkcyBvYmplY3QgZnVuY3Rpb24gZm9yIHByb3RvdHlwYWxcbiAgICAgKiBpbmhlcml0YW5jZS5cbiAgICAgKi9cbiAgICBpZiAoIXRoaXMub2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gZnVuY3Rpb24obykge1xuICAgICAgICAgICAgZnVuY3Rpb24gRigpIHt9XG4gICAgICAgICAgICBGLnByb3RvdHlwZSA9IG87XG4gICAgICAgICAgICByZXR1cm4gbmV3IEYoKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG9iamVjdCA9IHRoaXMub2JqZWN0O1xuXG4gICAgLyogdGFrZXMgYSB2YWx1ZSwgY29udmVydHMgdG8gc3RyaW5nIGlmIG5lZWQgYmUsIHRoZW4gcGFkcyBpdFxuICAgICAqIHRvIGEgbWluaW11bSBsZW5ndGguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcGFkKHZhbCwgbGVuKSB7XG4gICAgICAgIHZhbCA9IHZhbC50b1N0cmluZygpO1xuICAgICAgICB2YXIgcGFkZGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1heChsZW4gLSB2YWwubGVuZ3RoLCAwKTsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgcGFkZGVkLnB1c2goJzAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhZGRlZC5wdXNoKHZhbCk7XG4gICAgICAgIHJldHVybiBwYWRkZWQuam9pbignJyk7XG4gICAgfVxuXG5cbiAgICAvKiB0YWtlcyBhIHN0cmluZyBhbmQgcmV0dXJucyBhIG5ldyBzdHJpbmcgd2l0aCB0aGUgZmlyc3QgbGV0dGVyXG4gICAgICogY2FwaXRhbGlzZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYXBpdGFsaXNlKHMpIHtcbiAgICAgICAgcmV0dXJuIHMuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLyogcmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gICAgfVxuXG4gICAgLyogdXNlZCB0byBhcHBseSBhIG1ldGhvZCB0byBvYmplY3Qgbm9uLWRlc3RydWN0aXZlbHkgYnlcbiAgICAgKiBjbG9uaW5nIHRoZSBvYmplY3QgYW5kIHRoZW4gYXBwbHkgdGhlIG1ldGhvZCB0byB0aGF0XG4gICAgICogbmV3IG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsb25lT25BcHBseShtZXRoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZWQgPSB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgICBtZXRoLmFwcGx5KGNsb25lZCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvKiByZWdpc3Rlck1vZGVsIGlzIHVzZWQgdG8gYWRkIGFkZGl0aW9uYWwgcmVwcmVzZW50YXRpb25zXG4gICAgICogdG8gdGhlIGNvbG9yIGNvZGUsIGFuZCBleHRlbmQgdGhlIGNvbG9yIEFQSSB3aXRoIHRoZSBuZXdcbiAgICAgKiBvcGVyYXRpb24gdGhhdCBtb2RlbCBwcm92aWRlcy4gc2VlIGJlZm9yZSBmb3IgZXhhbXBsZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZWdpc3Rlck1vZGVsKG5hbWUsIG1vZGVsKSB7XG4gICAgICAgIHZhciBwcm90byA9IG9iamVjdChjb2xvcik7XG4gICAgICAgIHZhciBmaWVsZHMgPSBbXTsgLy8gdXNlZCBmb3IgY2xvbmluZyBhbmQgZ2VuZXJhdGluZyBhY2Nlc3NvcnNcblxuICAgICAgICB2YXIgdG9fbWV0aCA9ICd0bycgKyBjYXBpdGFsaXNlKG5hbWUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRBbmRBcHBseShtZXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGguYXBwbHkodGhpc1t0b19tZXRoXSgpLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtb2RlbClcbiAgICAgICAgICAgIGlmIChtb2RlbC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcHJvdG9ba2V5XSA9IG1vZGVsW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBwcm90b1trZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zbGljZSgwLCAxKSA9PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBjb2xvcikgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBtZXRob2QgZm91bmQgb24gdGhpcyBvYmplY3QgaXMgYSkgcHVibGljIGFuZCBiKSBub3RcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudGx5IHN1cHBvcnRlZCBieSB0aGUgY29sb3Igb2JqZWN0LiBDcmVhdGUgYW4gaW1wbCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxzIHRoZSB0b01vZGVsIGZ1bmN0aW9uIGFuZCBwYXNzZXMgdGhhdCBuZXcgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIC8vIG9udG8gdGhlIGNvcnJlY3QgbWV0aG9kIHdpdGggdGhlIGFyZ3MuXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yW2tleV0gPSBjb252ZXJ0QW5kQXBwbHkocHJvcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBmb3VuZCBhIHB1YmxpYyBwcm9wZXJ0eS4gY3JlYXRlIGFjY2Vzc29yIG1ldGhvZHNcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGJpbmQgdGhlbSB1cCBjb3JyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdldHRlciA9ICdnZXQnICsgY2FwaXRhbGlzZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGVyID0gJ3NldCcgKyBjYXBpdGFsaXNlKGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29sb3JbZ2V0dGVyXSA9IGNvbnZlcnRBbmRBcHBseShcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvW2dldHRlcl0gPSAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KShrZXkpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29sb3Jbc2V0dGVyXSA9IGNvbnZlcnRBbmRBcHBseShcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvW3NldHRlcl0gPSAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmVkID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWRba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoa2V5KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gLy8gZW5kIG9mIGZvciBvdmVyIG1vZGVsXG5cbiAgICAgICAgICAgIC8vIGEgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgLSBsYXJnZWx5IHNvIHByb3RvdHlwZSBjaGFpbnMgZG9udFxuICAgICAgICAgICAgLy8gZ2V0IGluc2FuZS4gVGhpcyB1c2VzIGFuIHVucm9sbGVkICdvYmplY3QnIHNvIHRoYXQgRiBpcyBjYWNoZWRcbiAgICAgICAgICAgIC8vIGZvciBsYXRlciB1c2UuIHRoaXMgaXMgYXBwcm94IGEgMjUlIHNwZWVkIGltcHJvdmVtZW50XG5cbiAgICAgICAgZnVuY3Rpb24gRigpIHt9XG4gICAgICAgIEYucHJvdG90eXBlID0gcHJvdG87XG5cbiAgICAgICAgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRigpO1xuICAgICAgICB9XG4gICAgICAgIGZhY3Rvcmllc1tuYW1lXSA9IGZhY3Rvcnk7XG5cbiAgICAgICAgcHJvdG8uY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZWQgPSBmYWN0b3J5KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGZpZWxkcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZmllbGRzW2ldO1xuICAgICAgICAgICAgICAgIGNsb25lZFtrZXldID0gdGhpc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb2xvclt0b19tZXRoXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlcmVkX21vZGVscy5wdXNoKHByb3RvKTtcblxuICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgfSAvLyBlbmQgb2YgcmVnaXN0ZXJNb2RlbFxuXG4gICAgLy8gVGVtcGxhdGUgT2JqZWN0c1xuXG4gICAgLyogY29sb3IgaXMgdGhlIHJvb3Qgb2JqZWN0IGluIHRoZSBjb2xvciBoaWVyYXJjaHkuIEl0IHN0YXJ0c1xuICAgICAqIGxpZmUgYXMgYSB2ZXJ5IHNpbXBsZSBvYmplY3QsIGJ1dCBhcyBjb2xvciBtb2RlbHMgYXJlXG4gICAgICogcmVnaXN0ZXJlZCBpdCBoYXMgbWV0aG9kcyBwcm9ncmFtbWF0aWNhbGx5IGFkZGVkIHRvIG1hbmFnZVxuICAgICAqIGNvbnZlcnNpb25zIGFzIG5lZWRlZC5cbiAgICAgKi9cbiAgICBjb2xvciA9IHtcbiAgICAgICAgLyogZnJvbU9iamVjdCB0YWtlcyBhbiBhcmd1bWVudCBhbmQgZGVsZWdhdGVzIHRvIHRoZSBpbnRlcm5hbFxuICAgICAgICAgKiBjb2xvciBtb2RlbHMgdG8gdHJ5IHRvIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIGZyb21PYmplY3Q6IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgIGlmICghbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QoY29sb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHJlZ2lzdGVyZWRfbW9kZWxzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBudSA9IHJlZ2lzdGVyZWRfbW9kZWxzW2ldLmZyb21PYmplY3Qobyk7XG4gICAgICAgICAgICAgICAgaWYgKG51KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmplY3QoY29sb3IpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvQ1NTKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHRyYW5zcGFyZW50ID0gbnVsbDsgLy8gZGVmaW5lZCB3aXRoIGFuIFJHQiBsYXRlci5cblxuICAgIC8qIFJHQiBpcyB0aGUgcmVkIGdyZWVuIGJsdWUgbW9kZWwuIFRoaXMgZGVmaW5pdGlvbiBpcyBjb252ZXJ0ZWRcbiAgICAgKiB0byBhIHRlbXBsYXRlIG9iamVjdCBieSByZWdpc3Rlck1vZGVsLlxuICAgICAqL1xuICAgIHJlZ2lzdGVyTW9kZWwoJ1JHQicsIHtcbiAgICAgICAgcmVkOiAwLFxuICAgICAgICBncmVlbjogMCxcbiAgICAgICAgYmx1ZTogMCxcbiAgICAgICAgYWxwaGE6IDAsXG5cbiAgICAgICAgLyogZ2V0THVtaW5hbmNlIHJldHVybnMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIHRoaXMgaXMgdGhlXG4gICAgICAgICAqIGx1bWluYW5jZSBjYWxjdWF0ZWQgYWNjb3JkaW5nIHRvXG4gICAgICAgICAqIGh0dHA6Ly93d3cucG95bnRvbi5jb20vbm90ZXMvY29sb3VyX2FuZF9nYW1tYS9Db2xvckZBUS5odG1sI1JURlRvQzlcbiAgICAgICAgICovXG4gICAgICAgIGdldEx1bWluYW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucmVkICogMC4yMTI2KSArICh0aGlzLmdyZWVuICogMC43MTUyKSArICh0aGlzLmJsdWUgKiAwLjA3MjIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qIGRvZXMgYW4gYWxwaGEgYmFzZWQgYmxlbmQgb2YgY29sb3Igb250byB0aGlzLiBhbHBoYSBpcyB0aGVcbiAgICAgICAgICogYW1vdW50IG9mICdjb2xvcicgdG8gdXNlLiAoMCB0byAxKVxuICAgICAgICAgKi9cbiAgICAgICAgYmxlbmQ6IGZ1bmN0aW9uKGNvbG9yLCBhbHBoYSkge1xuICAgICAgICAgICAgY29sb3IgPSBjb2xvci50b1JHQigpO1xuICAgICAgICAgICAgYWxwaGEgPSBNYXRoLm1pbihNYXRoLm1heChhbHBoYSwgMCksIDEpO1xuICAgICAgICAgICAgdmFyIHJnYiA9IHRoaXMuY2xvbmUoKTtcblxuICAgICAgICAgICAgcmdiLnJlZCA9IChyZ2IucmVkICogKDEgLSBhbHBoYSkpICsgKGNvbG9yLnJlZCAqIGFscGhhKTtcbiAgICAgICAgICAgIHJnYi5ncmVlbiA9IChyZ2IuZ3JlZW4gKiAoMSAtIGFscGhhKSkgKyAoY29sb3IuZ3JlZW4gKiBhbHBoYSk7XG4gICAgICAgICAgICByZ2IuYmx1ZSA9IChyZ2IuYmx1ZSAqICgxIC0gYWxwaGEpKSArIChjb2xvci5ibHVlICogYWxwaGEpO1xuICAgICAgICAgICAgcmdiLmFscGhhID0gKHJnYi5hbHBoYSAqICgxIC0gYWxwaGEpKSArIChjb2xvci5hbHBoYSAqIGFscGhhKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJnYjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiBmcm9tT2JqZWN0IGF0dGVtcHRzIHRvIGNvbnZlcnQgYW4gb2JqZWN0IG8gdG8gYW5kIFJHQlxuICAgICAgICAgKiBpbnN0YW5jZS4gVGhpcyBhY2NlcHRzIGFuIG9iamVjdCB3aXRoIHJlZCwgZ3JlZW4gYW5kIGJsdWVcbiAgICAgICAgICogbWVtYmVycyBvciBhIHN0cmluZy4gSWYgdGhlIHN0cmluZyBpcyBhIGtub3duIENTUyBjb2xvciBuYW1lXG4gICAgICAgICAqIG9yIGEgaGV4ZGVjaW1hbCBzdHJpbmcgaXQgd2lsbCBhY2NlcHQgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBmcm9tT2JqZWN0OiBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICBpZiAobyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zyb21SR0JBcnJheShvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zyb21DU1ModHJpbShvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eSgncmVkJykgJiZcbiAgICAgICAgICAgICAgICBvLmhhc093blByb3BlcnR5KCdncmVlbicpICYmXG4gICAgICAgICAgICAgICAgby5oYXNPd25Qcm9wZXJ0eSgnYmx1ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zyb21SR0Iobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBub3RoaW5nIG1hdGNocywgbm90IGFuIFJHQiBvYmplY3RcbiAgICAgICAgfSxcblxuICAgICAgICBfc3RyaW5nUGFyc2VyczogW1xuICAgICAgICAgICAgLy8gQ1NTIFJHQihBKSBsaXRlcmFsOlxuICAgICAgICAgICAgZnVuY3Rpb24oY3NzKSB7XG4gICAgICAgICAgICAgICAgY3NzID0gdHJpbShjc3MpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHdpdGhJbnRlZ2VyID0gbWF0Y2gocmdiX3JnYmFfaW50ZWdlcl9yZWdleCwgMjU1KTtcbiAgICAgICAgICAgICAgICBpZiAod2l0aEludGVnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpdGhJbnRlZ2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2gocmdiX3JnYmFfcGVyY2VudGFnZV9yZWdleCwgMTAwKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4LCBtYXhfdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yR3JvdXBzID0gY3NzLm1hdGNoKHJlZ2V4KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiBcImFcIiBhZnRlciBcInJnYlwiLCB0aGVyZSBtdXN0IGJlIGEgZm91cnRoIHBhcmFtZXRlciBhbmQgdGhlIG90aGVyIHdheSByb3VuZFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbG9yR3JvdXBzIHx8ICghIWNvbG9yR3JvdXBzWzFdICsgISFjb2xvckdyb3Vwc1s1XSA9PT0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJnYiA9IGZhY3Rvcmllcy5SR0IoKTtcbiAgICAgICAgICAgICAgICAgICAgcmdiLnJlZCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGNvbG9yR3JvdXBzWzJdIC8gbWF4X3ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIHJnYi5ncmVlbiA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGNvbG9yR3JvdXBzWzNdIC8gbWF4X3ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIHJnYi5ibHVlID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgY29sb3JHcm91cHNbNF0gLyBtYXhfdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmdiLmFscGhhID0gISFjb2xvckdyb3Vwc1s1XSA/IE1hdGgubWluKE1hdGgubWF4KHBhcnNlRmxvYXQoY29sb3JHcm91cHNbNl0pLCAwKSwgMSkgOiAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZ2I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZnVuY3Rpb24oY3NzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvd2VyID0gY3NzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGxvd2VyIGluIGNzc19jb2xvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzID0gY3NzX2NvbG9yc1tsb3dlcl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjc3MubWF0Y2goL14jKFswLTlhLWZBLUZdezN9fFswLTlhLWZBLUZdezZ9KSQvKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3NzID0gY3NzLnJlcGxhY2UoL14jLywgJycpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGJ5dGVzID0gY3NzLmxlbmd0aCAvIDM7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWF4ID0gTWF0aC5wb3coMTYsIGJ5dGVzKSAtIDE7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmdiID0gZmFjdG9yaWVzLlJHQigpO1xuICAgICAgICAgICAgICAgIHJnYi5yZWQgPSBwYXJzZUludChjc3Muc2xpY2UoMCwgYnl0ZXMpLCAxNikgLyBtYXg7XG4gICAgICAgICAgICAgICAgcmdiLmdyZWVuID0gcGFyc2VJbnQoY3NzLnNsaWNlKGJ5dGVzICogMSwgYnl0ZXMgKiAyKSwgMTYpIC8gbWF4O1xuICAgICAgICAgICAgICAgIHJnYi5ibHVlID0gcGFyc2VJbnQoY3NzLnNsaWNlKGJ5dGVzICogMiksIDE2KSAvIG1heDtcbiAgICAgICAgICAgICAgICByZ2IuYWxwaGEgPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiByZ2I7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmdW5jdGlvbihjc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3NzLnRvTG93ZXJDYXNlKCkgIT09ICd0cmFuc3BhcmVudCcpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcblxuICAgICAgICBfZnJvbUNTUzogZnVuY3Rpb24oY3NzKSB7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBudWxsO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aGlzLl9zdHJpbmdQYXJzZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5fc3RyaW5nUGFyc2Vyc1tpXShjc3MpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xvcikgcmV0dXJuIGNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9mcm9tUkdCOiBmdW5jdGlvbihSR0IpIHtcbiAgICAgICAgICAgIHZhciBuZXdSR0IgPSBmYWN0b3JpZXMuUkdCKCk7XG5cbiAgICAgICAgICAgIG5ld1JHQi5yZWQgPSBSR0IucmVkO1xuICAgICAgICAgICAgbmV3UkdCLmdyZWVuID0gUkdCLmdyZWVuO1xuICAgICAgICAgICAgbmV3UkdCLmJsdWUgPSBSR0IuYmx1ZTtcbiAgICAgICAgICAgIG5ld1JHQi5hbHBoYSA9IFJHQi5oYXNPd25Qcm9wZXJ0eSgnYWxwaGEnKSA/IFJHQi5hbHBoYSA6IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdSR0I7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2Zyb21SR0JBcnJheTogZnVuY3Rpb24oUkdCKSB7XG4gICAgICAgICAgICB2YXIgbmV3UkdCID0gZmFjdG9yaWVzLlJHQigpO1xuXG4gICAgICAgICAgICBuZXdSR0IucmVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgUkdCWzBdIC8gMjU1KSk7XG4gICAgICAgICAgICBuZXdSR0IuZ3JlZW4gPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBSR0JbMV0gLyAyNTUpKTtcbiAgICAgICAgICAgIG5ld1JHQi5ibHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgUkdCWzJdIC8gMjU1KSk7XG4gICAgICAgICAgICBuZXdSR0IuYWxwaGEgPSBSR0JbM10gIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIFJHQlszXSkpIDogMTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld1JHQjtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBjb252ZXJ0IHRvIGEgQ1NTIHN0cmluZy4gZGVmYXVsdHMgdG8gdHdvIGJ5dGVzIGEgdmFsdWVcbiAgICAgICAgdG9DU1NIZXg6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICAgICAgICBieXRlcyA9IGJ5dGVzIHx8IDI7XG5cbiAgICAgICAgICAgIHZhciBtYXggPSBNYXRoLnBvdygxNiwgYnl0ZXMpIC0gMTtcbiAgICAgICAgICAgIHZhciBjc3MgPSBbXG4gICAgICAgICAgICAgICAgXCIjXCIsXG4gICAgICAgICAgICAgICAgcGFkKE1hdGgucm91bmQodGhpcy5yZWQgKiBtYXgpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpLCBieXRlcyksXG4gICAgICAgICAgICAgICAgcGFkKE1hdGgucm91bmQodGhpcy5ncmVlbiAqIG1heCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCksIGJ5dGVzKSxcbiAgICAgICAgICAgICAgICBwYWQoTWF0aC5yb3VuZCh0aGlzLmJsdWUgKiBtYXgpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpLCBieXRlcylcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiBjc3Muam9pbignJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9DU1M6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbHBoYSA9PT0gMSkgcmV0dXJuIHRoaXMudG9DU1NIZXgoYnl0ZXMpO1xuXG4gICAgICAgICAgICB2YXIgbWF4ID0gMjU1O1xuXG4gICAgICAgICAgICB2YXIgY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgICAgICAncmdiYSgnLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgTWF0aC5yb3VuZCh0aGlzLnJlZCAqIG1heCkpKSwgJywnLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgTWF0aC5yb3VuZCh0aGlzLmdyZWVuICogbWF4KSkpLCAnLCcsXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4LCBNYXRoLnJvdW5kKHRoaXMuYmx1ZSAqIG1heCkpKSwgJywnLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMuYWxwaGEpKSxcbiAgICAgICAgICAgICAgICAnKSdcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzLmpvaW4oJycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvSFNWOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBoc3YgPSBmYWN0b3JpZXMuSFNWKCk7XG4gICAgICAgICAgICB2YXIgbWluLCBtYXgsIGRlbHRhO1xuXG4gICAgICAgICAgICBtaW4gPSBNYXRoLm1pbih0aGlzLnJlZCwgdGhpcy5ncmVlbiwgdGhpcy5ibHVlKTtcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KHRoaXMucmVkLCB0aGlzLmdyZWVuLCB0aGlzLmJsdWUpO1xuICAgICAgICAgICAgaHN2LnZhbHVlID0gbWF4OyAvLyB2XG5cbiAgICAgICAgICAgIGRlbHRhID0gbWF4IC0gbWluO1xuXG4gICAgICAgICAgICBpZiAoZGVsdGEgPT0gMCkgeyAvLyB3aGl0ZSwgZ3JleSwgYmxhY2tcbiAgICAgICAgICAgICAgICBoc3YuaHVlID0gaHN2LnNhdHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gY2hyb21hXG4gICAgICAgICAgICAgICAgaHN2LnNhdHVyYXRpb24gPSBkZWx0YSAvIG1heDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlZCA9PSBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaHN2Lmh1ZSA9ICh0aGlzLmdyZWVuIC0gdGhpcy5ibHVlKSAvIGRlbHRhOyAvLyBiZXR3ZWVuIHllbGxvdyAmIG1hZ2VudGFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JlZW4gPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGhzdi5odWUgPSAyICsgKHRoaXMuYmx1ZSAtIHRoaXMucmVkKSAvIGRlbHRhOyAvLyBiZXR3ZWVuIGN5YW4gJiB5ZWxsb3dcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoc3YuaHVlID0gNCArICh0aGlzLnJlZCAtIHRoaXMuZ3JlZW4pIC8gZGVsdGE7IC8vIGJldHdlZW4gbWFnZW50YSAmIGN5YW5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoc3YuaHVlID0gKChoc3YuaHVlICogNjApICsgMzYwKSAlIDM2MDsgLy8gZGVncmVlc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoc3YuYWxwaGEgPSB0aGlzLmFscGhhO1xuXG4gICAgICAgICAgICByZXR1cm4gaHN2O1xuICAgICAgICB9LFxuICAgICAgICB0b0hTTDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0hTVigpLnRvSFNMKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9SR0I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJhbnNwYXJlbnQgPSBjb2xvci5mcm9tT2JqZWN0KHtcbiAgICAgICAgcmVkOiAwLFxuICAgICAgICBibHVlOiAwLFxuICAgICAgICBncmVlbjogMCxcbiAgICAgICAgYWxwaGE6IDBcbiAgICB9KTtcblxuXG4gICAgLyogTGlrZSBSR0IgYWJvdmUsIHRoaXMgb2JqZWN0IGRlc2NyaWJlcyB3aGF0IHdpbGwgYmVjb21lIHRoZSBIU1ZcbiAgICAgKiB0ZW1wbGF0ZSBvYmplY3QuIFRoaXMgbW9kZWwgaGFuZGxlcyBodWUsIHNhdHVyYXRpb24gYW5kIHZhbHVlLlxuICAgICAqIGh1ZSBpcyB0aGUgbnVtYmVyIG9mIGRlZ3JlZXMgYXJvdW5kIHRoZSBjb2xvciB3aGVlbCwgc2F0dXJhdGlvblxuICAgICAqIGRlc2NyaWJlcyBob3cgbXVjaCBjb2xvciB0aGVpciBpcyBhbmQgdmFsdWUgaXMgdGhlIGJyaWdodG5lc3MuXG4gICAgICovXG4gICAgcmVnaXN0ZXJNb2RlbCgnSFNWJywge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICBhbHBoYTogMSxcblxuICAgICAgICBzaGlmdEh1ZTogY2xvbmVPbkFwcGx5KGZ1bmN0aW9uKGRlZ3JlZXMpIHtcbiAgICAgICAgICAgIHZhciBodWUgPSAodGhpcy5odWUgKyBkZWdyZWVzKSAlIDM2MDtcbiAgICAgICAgICAgIGlmIChodWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgaHVlID0gKDM2MCArIGh1ZSkgJSAzNjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaHVlID0gaHVlO1xuICAgICAgICB9KSxcblxuICAgICAgICBkZXZhbHVlQnlBbW91bnQ6IGNsb25lT25BcHBseShmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBNYXRoLm1pbigxLCBNYXRoLm1heCh0aGlzLnZhbHVlIC0gdmFsLCAwKSk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIGRldmFsdWVCeVJhdGlvOiBjbG9uZU9uQXBwbHkoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0aC5taW4oMSwgTWF0aC5tYXgodGhpcy52YWx1ZSAqICgxIC0gdmFsKSwgMCkpO1xuICAgICAgICB9KSxcblxuICAgICAgICB2YWx1ZUJ5QW1vdW50OiBjbG9uZU9uQXBwbHkoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0aC5taW4oMSwgTWF0aC5tYXgodGhpcy52YWx1ZSArIHZhbCwgMCkpO1xuICAgICAgICB9KSxcblxuICAgICAgICB2YWx1ZUJ5UmF0aW86IGNsb25lT25BcHBseShmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBNYXRoLm1pbigxLCBNYXRoLm1heCh0aGlzLnZhbHVlICogKDEgKyB2YWwpLCAwKSk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIGRlc2F0dXJhdGVCeUFtb3VudDogY2xvbmVPbkFwcGx5KGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gTWF0aC5taW4oMSwgTWF0aC5tYXgodGhpcy5zYXR1cmF0aW9uIC0gdmFsLCAwKSk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIGRlc2F0dXJhdGVCeVJhdGlvOiBjbG9uZU9uQXBwbHkoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBNYXRoLm1pbigxLCBNYXRoLm1heCh0aGlzLnNhdHVyYXRpb24gKiAoMSAtIHZhbCksIDApKTtcbiAgICAgICAgfSksXG5cbiAgICAgICAgc2F0dXJhdGVCeUFtb3VudDogY2xvbmVPbkFwcGx5KGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gTWF0aC5taW4oMSwgTWF0aC5tYXgodGhpcy5zYXR1cmF0aW9uICsgdmFsLCAwKSk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIHNhdHVyYXRlQnlSYXRpbzogY2xvbmVPbkFwcGx5KGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gTWF0aC5taW4oMSwgTWF0aC5tYXgodGhpcy5zYXR1cmF0aW9uICogKDEgKyB2YWwpLCAwKSk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIHNjaGVtZUZyb21EZWdyZWVzOiBmdW5jdGlvbihkZWdyZWVzKSB7XG4gICAgICAgICAgICB2YXIgbmV3Q29sb3JzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGRlZ3JlZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbCA9IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICBjb2wuaHVlID0gKHRoaXMuaHVlICsgZGVncmVlc1tpXSkgJSAzNjA7XG4gICAgICAgICAgICAgICAgbmV3Q29sb3JzLnB1c2goY29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdDb2xvcnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcGxlbWVudGFyeVNjaGVtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWVGcm9tRGVncmVlcyhbMCwgMTgwXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3BsaXRDb21wbGVtZW50YXJ5U2NoZW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtZUZyb21EZWdyZWVzKFswLCAxNTAsIDMyMF0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNwbGl0Q29tcGxlbWVudGFyeUNXU2NoZW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtZUZyb21EZWdyZWVzKFswLCAxNTAsIDMwMF0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNwbGl0Q29tcGxlbWVudGFyeUNDV1NjaGVtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWVGcm9tRGVncmVlcyhbMCwgNjAsIDIxMF0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRyaWFkaWNTY2hlbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lRnJvbURlZ3JlZXMoWzAsIDEyMCwgMjQwXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xhc2hTY2hlbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lRnJvbURlZ3JlZXMoWzAsIDkwLCAyNzBdKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0ZXRyYWRpY1NjaGVtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWVGcm9tRGVncmVlcyhbMCwgOTAsIDE4MCwgMjcwXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm91clRvbmVDV1NjaGVtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWVGcm9tRGVncmVlcyhbMCwgNjAsIDE4MCwgMjQwXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm91clRvbmVDQ1dTY2hlbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lRnJvbURlZ3JlZXMoWzAsIDEyMCwgMTgwLCAzMDBdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaXZlVG9uZUFTY2hlbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lRnJvbURlZ3JlZXMoWzAsIDExNSwgMTU1LCAyMDUsIDI0NV0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpdmVUb25lQlNjaGVtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWVGcm9tRGVncmVlcyhbMCwgNDAsIDkwLCAxMzAsIDI0NV0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpdmVUb25lQ1NjaGVtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWVGcm9tRGVncmVlcyhbMCwgNTAsIDkwLCAyMDUsIDMyMF0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpdmVUb25lRFNjaGVtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWVGcm9tRGVncmVlcyhbMCwgNDAsIDE1NSwgMjcwLCAzMTBdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaXZlVG9uZUVTY2hlbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lRnJvbURlZ3JlZXMoWzAsIDExNSwgMjMwLCAyNzAsIDMyMF0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNpeFRvbmVDV1NjaGVtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWVGcm9tRGVncmVlcyhbMCwgMzAsIDEyMCwgMTUwLCAyNDAsIDI3MF0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNpeFRvbmVDQ1dTY2hlbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lRnJvbURlZ3JlZXMoWzAsIDkwLCAxMjAsIDIxMCwgMjQwLCAzMzBdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBuZXV0cmFsU2NoZW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVtZUZyb21EZWdyZWVzKFswLCAxNSwgMzAsIDQ1LCA2MCwgNzVdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhbmFsb2dvdXNTY2hlbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZW1lRnJvbURlZ3JlZXMoWzAsIDMwLCA2MCwgOTAsIDEyMCwgMTUwXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZnJvbU9iamVjdDogZnVuY3Rpb24obykge1xuICAgICAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoJ2h1ZScpICYmXG4gICAgICAgICAgICAgICAgby5oYXNPd25Qcm9wZXJ0eSgnc2F0dXJhdGlvbicpICYmXG4gICAgICAgICAgICAgICAgby5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHZhciBoc3YgPSBmYWN0b3JpZXMuSFNWKCk7XG5cbiAgICAgICAgICAgICAgICBoc3YuaHVlID0gby5odWU7XG4gICAgICAgICAgICAgICAgaHN2LnNhdHVyYXRpb24gPSBvLnNhdHVyYXRpb247XG4gICAgICAgICAgICAgICAgaHN2LnZhbHVlID0gby52YWx1ZTtcbiAgICAgICAgICAgICAgICBoc3YuYWxwaGEgPSBvLmhhc093blByb3BlcnR5KCdhbHBoYScpID8gby5hbHBoYSA6IDE7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaHN2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbm90aGluZyBtYXRjaGVzLCBub3QgYW4gSFNWIG9iamVjdFxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX25vcm1hbGlzZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmh1ZSAlPSAzNjA7XG4gICAgICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSBNYXRoLm1pbihNYXRoLm1heCgwLCB0aGlzLnNhdHVyYXRpb24pLCAxKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCgwLCB0aGlzLnZhbHVlKSk7XG4gICAgICAgICAgICB0aGlzLmFscGhhID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgdGhpcy5hbHBoYSkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvUkdCOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuX25vcm1hbGlzZSgpO1xuXG4gICAgICAgICAgICB2YXIgcmdiID0gZmFjdG9yaWVzLlJHQigpO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgZiwgcCwgcSwgdDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2F0dXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGFjaHJvbWF0aWMgKGdyZXkpXG4gICAgICAgICAgICAgICAgcmdiLnJlZCA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgcmdiLmdyZWVuID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICByZ2IuYmx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgcmdiLmFscGhhID0gdGhpcy5hbHBoYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmdiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaCA9IHRoaXMuaHVlIC8gNjA7IC8vIHNlY3RvciAwIHRvIDVcbiAgICAgICAgICAgIGkgPSBNYXRoLmZsb29yKGgpO1xuICAgICAgICAgICAgZiA9IGggLSBpOyAvLyBmYWN0b3JpYWwgcGFydCBvZiBoXG4gICAgICAgICAgICBwID0gdGhpcy52YWx1ZSAqICgxIC0gdGhpcy5zYXR1cmF0aW9uKTtcbiAgICAgICAgICAgIHEgPSB0aGlzLnZhbHVlICogKDEgLSB0aGlzLnNhdHVyYXRpb24gKiBmKTtcbiAgICAgICAgICAgIHQgPSB0aGlzLnZhbHVlICogKDEgLSB0aGlzLnNhdHVyYXRpb24gKiAoMSAtIGYpKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICByZ2IucmVkID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmdiLmdyZWVuID0gdDtcbiAgICAgICAgICAgICAgICAgICAgcmdiLmJsdWUgPSBwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJnYi5yZWQgPSBxO1xuICAgICAgICAgICAgICAgICAgICByZ2IuZ3JlZW4gPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZ2IuYmx1ZSA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgcmdiLnJlZCA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHJnYi5ncmVlbiA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJnYi5ibHVlID0gdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZ2IucmVkID0gcDtcbiAgICAgICAgICAgICAgICAgICAgcmdiLmdyZWVuID0gcTtcbiAgICAgICAgICAgICAgICAgICAgcmdiLmJsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHJnYi5yZWQgPSB0O1xuICAgICAgICAgICAgICAgICAgICByZ2IuZ3JlZW4gPSBwO1xuICAgICAgICAgICAgICAgICAgICByZ2IuYmx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IC8vIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmdiLnJlZCA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJnYi5ncmVlbiA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHJnYi5ibHVlID0gcTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJnYi5hbHBoYSA9IHRoaXMuYWxwaGE7XG5cbiAgICAgICAgICAgIHJldHVybiByZ2I7XG4gICAgICAgIH0sXG4gICAgICAgIHRvSFNMOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuX25vcm1hbGlzZSgpO1xuXG4gICAgICAgICAgICB2YXIgaHNsID0gZmFjdG9yaWVzLkhTTCgpO1xuXG4gICAgICAgICAgICBoc2wuaHVlID0gdGhpcy5odWU7XG4gICAgICAgICAgICB2YXIgbCA9ICgyIC0gdGhpcy5zYXR1cmF0aW9uKSAqIHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgcyA9IHRoaXMuc2F0dXJhdGlvbiAqIHRoaXMudmFsdWU7XG4gICAgICAgICAgICBpZiAobCAmJiAyIC0gbCkge1xuICAgICAgICAgICAgICAgIHMgLz0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsIC89IDI7XG4gICAgICAgICAgICBoc2wuc2F0dXJhdGlvbiA9IHM7XG4gICAgICAgICAgICBoc2wubGlnaHRuZXNzID0gbDtcbiAgICAgICAgICAgIGhzbC5hbHBoYSA9IHRoaXMuYWxwaGE7XG5cbiAgICAgICAgICAgIHJldHVybiBoc2w7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9IU1Y6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVnaXN0ZXJNb2RlbCgnSFNMJywge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogMCxcbiAgICAgICAgYWxwaGE6IDEsXG5cbiAgICAgICAgZGFya2VuQnlBbW91bnQ6IGNsb25lT25BcHBseShmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHRoaXMubGlnaHRuZXNzID0gTWF0aC5taW4oMSwgTWF0aC5tYXgodGhpcy5saWdodG5lc3MgLSB2YWwsIDApKTtcbiAgICAgICAgfSksXG5cbiAgICAgICAgZGFya2VuQnlSYXRpbzogY2xvbmVPbkFwcGx5KGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5saWdodG5lc3MgPSBNYXRoLm1pbigxLCBNYXRoLm1heCh0aGlzLmxpZ2h0bmVzcyAqICgxIC0gdmFsKSwgMCkpO1xuICAgICAgICB9KSxcblxuICAgICAgICBsaWdodGVuQnlBbW91bnQ6IGNsb25lT25BcHBseShmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHRoaXMubGlnaHRuZXNzID0gTWF0aC5taW4oMSwgTWF0aC5tYXgodGhpcy5saWdodG5lc3MgKyB2YWwsIDApKTtcbiAgICAgICAgfSksXG5cbiAgICAgICAgbGlnaHRlbkJ5UmF0aW86IGNsb25lT25BcHBseShmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHRoaXMubGlnaHRuZXNzID0gTWF0aC5taW4oMSwgTWF0aC5tYXgodGhpcy5saWdodG5lc3MgKiAoMSArIHZhbCksIDApKTtcbiAgICAgICAgfSksXG5cbiAgICAgICAgZnJvbU9iamVjdDogZnVuY3Rpb24obykge1xuICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZnJvbUNTUyhvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KCdodWUnKSAmJlxuICAgICAgICAgICAgICAgIG8uaGFzT3duUHJvcGVydHkoJ3NhdHVyYXRpb24nKSAmJlxuICAgICAgICAgICAgICAgIG8uaGFzT3duUHJvcGVydHkoJ2xpZ2h0bmVzcycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Zyb21IU0wobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBub3RoaW5nIG1hdGNocywgbm90IGFuIFJHQiBvYmplY3RcbiAgICAgICAgfSxcblxuICAgICAgICBfZnJvbUNTUzogZnVuY3Rpb24oY3NzKSB7XG4gICAgICAgICAgICB2YXIgY29sb3JHcm91cHMgPSB0cmltKGNzcykubWF0Y2goaHNsX2hzbGFfcmVnZXgpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBcImFcIiBhZnRlciBcImhzbFwiLCB0aGVyZSBtdXN0IGJlIGEgZm91cnRoIHBhcmFtZXRlciBhbmQgdGhlIG90aGVyIHdheSByb3VuZFxuICAgICAgICAgICAgaWYgKCFjb2xvckdyb3VwcyB8fCAoISFjb2xvckdyb3Vwc1sxXSArICEhY29sb3JHcm91cHNbNV0gPT09IDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBoc2wgPSBmYWN0b3JpZXMuSFNMKCk7XG4gICAgICAgICAgICBoc2wuaHVlID0gKGNvbG9yR3JvdXBzWzJdICUgMzYwICsgMzYwKSAlIDM2MDtcbiAgICAgICAgICAgIGhzbC5zYXR1cmF0aW9uID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocGFyc2VJbnQoY29sb3JHcm91cHNbM10sIDEwKSAvIDEwMCwgMSkpO1xuICAgICAgICAgICAgaHNsLmxpZ2h0bmVzcyA9IE1hdGgubWF4KDAsIE1hdGgubWluKHBhcnNlSW50KGNvbG9yR3JvdXBzWzRdLCAxMCkgLyAxMDAsIDEpKTtcbiAgICAgICAgICAgIGhzbC5hbHBoYSA9ICEhY29sb3JHcm91cHNbNV0gPyBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBwYXJzZUZsb2F0KGNvbG9yR3JvdXBzWzZdKSkpIDogMTtcblxuICAgICAgICAgICAgcmV0dXJuIGhzbDtcbiAgICAgICAgfSxcblxuICAgICAgICBfZnJvbUhTTDogZnVuY3Rpb24oSFNMKSB7XG4gICAgICAgICAgICB2YXIgbmV3SFNMID0gZmFjdG9yaWVzLkhTTCgpO1xuXG4gICAgICAgICAgICBuZXdIU0wuaHVlID0gSFNMLmh1ZTtcbiAgICAgICAgICAgIG5ld0hTTC5zYXR1cmF0aW9uID0gSFNMLnNhdHVyYXRpb247XG4gICAgICAgICAgICBuZXdIU0wubGlnaHRuZXNzID0gSFNMLmxpZ2h0bmVzcztcblxuICAgICAgICAgICAgbmV3SFNMLmFscGhhID0gSFNMLmhhc093blByb3BlcnR5KCdhbHBoYScpID8gSFNMLmFscGhhIDogMTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld0hTTDtcbiAgICAgICAgfSxcblxuICAgICAgICBfbm9ybWFsaXNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaHVlID0gKHRoaXMuaHVlICUgMzYwICsgMzYwKSAlIDM2MDtcbiAgICAgICAgICAgIHRoaXMuc2F0dXJhdGlvbiA9IE1hdGgubWluKE1hdGgubWF4KDAsIHRoaXMuc2F0dXJhdGlvbiksIDEpO1xuICAgICAgICAgICAgdGhpcy5saWdodG5lc3MgPSBNYXRoLm1pbihNYXRoLm1heCgwLCB0aGlzLmxpZ2h0bmVzcykpO1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHRoaXMuYWxwaGEpKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0hTTDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpO1xuICAgICAgICB9LFxuICAgICAgICB0b0hTVjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLl9ub3JtYWxpc2UoKTtcblxuICAgICAgICAgICAgdmFyIGhzdiA9IGZhY3Rvcmllcy5IU1YoKTtcblxuICAgICAgICAgICAgLy8gaHR0cDovL2FyaXlhLmJsb2dzcG90LmNvbS8yMDA4LzA3L2NvbnZlcnRpbmctYmV0d2Vlbi1oc2wtYW5kLWhzdi5odG1sXG4gICAgICAgICAgICBoc3YuaHVlID0gdGhpcy5odWU7IC8vIEhcbiAgICAgICAgICAgIHZhciBsID0gMiAqIHRoaXMubGlnaHRuZXNzLFxuICAgICAgICAgICAgICAgIHMgPSB0aGlzLnNhdHVyYXRpb24gKiAoKGwgPD0gMSkgPyBsIDogMiAtIGwpO1xuICAgICAgICAgICAgaHN2LnZhbHVlID0gKGwgKyBzKSAvIDI7IC8vIFZcbiAgICAgICAgICAgIGhzdi5zYXR1cmF0aW9uID0gKCgyICogcykgLyAobCArIHMpKSB8fCAwOyAvLyBTXG4gICAgICAgICAgICBoc3YuYWxwaGEgPSB0aGlzLmFscGhhO1xuXG4gICAgICAgICAgICByZXR1cm4gaHN2O1xuICAgICAgICB9LFxuICAgICAgICB0b1JHQjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0hTVigpLnRvUkdCKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFBhY2thZ2Ugc3BlY2lmaWMgZXhwb3J0c1xuXG4gICAgLyogdGhlIENvbG9yIGZ1bmN0aW9uIGlzIGEgZmFjdG9yeSBmb3IgbmV3IGNvbG9yIG9iamVjdHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29sb3Iobykge1xuICAgICAgICByZXR1cm4gY29sb3IuZnJvbU9iamVjdChvKTtcbiAgICB9XG4gICAgQ29sb3IuaXNWYWxpZCA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICB2YXIga2V5LCBjID0gQ29sb3Ioc3RyKTtcblxuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICAgICAgZm9yIChrZXkgaW4gYykge1xuICAgICAgICAgICAgaWYgKGMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlbmd0aCA+IDA7XG4gICAgfTtcbiAgICBuZXQuYnJlaGF1dC5Db2xvciA9IENvbG9yO1xufSkuY2FsbChuZXQuYnJlaGF1dCk7XG5cbi8qIEV4cG9ydCB0byBDb21tb25KU1xuICovXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG5ldC5icmVoYXV0LkNvbG9yO1xufSIsImltcG9ydCAqIGFzIENvbG9yIGZyb20gXCJjb2xvci1qc1wiO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA0MDAsIGhlaWdodDogNDQwIH0pO1xuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgc2VsZWN0aW9uOiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gfSk7XG59KTtcbmNvbnN0IGJsZW5kcyA9IFtcbiAgICBcIlBBU1NfVEhST1VHSFwiLFxuICAgIFwiTk9STUFMXCIsXG4gICAgXCJEQVJLRU5cIixcbiAgICBcIk1VTFRJUExZXCIsXG4gICAgXCJMSU5FQVJfQlVSTlwiLFxuICAgIFwiQ09MT1JfQlVSTlwiLFxuICAgIFwiTElHSFRFTlwiLFxuICAgIFwiU0NSRUVOXCIsXG4gICAgXCJMSU5FQVJfRE9ER0VcIixcbiAgICBcIkNPTE9SX0RPREdFXCIsXG4gICAgXCJPVkVSTEFZXCIsXG4gICAgXCJTT0ZUX0xJR0hUXCIsXG4gICAgXCJIQVJEX0xJR0hUXCIsXG4gICAgXCJESUZGRVJFTkNFXCIsXG4gICAgXCJFWENMVVNJT05cIixcbiAgICBcIkhVRVwiLFxuICAgIFwiU0FUVVJBVElPTlwiLFxuICAgIFwiQ09MT1JcIixcbiAgICBcIkxVTUlOT1NJVFlcIlxuXTtcbmNvbnN0IGJnQmxlbmRzID0gW1xuICAgIFwiTk9STUFMXCIsXG4gICAgXCJEQVJLRU5cIixcbiAgICBcIk1VTFRJUExZXCIsXG4gICAgXCJMSU5FQVJfQlVSTlwiLFxuICAgIFwiQ09MT1JfQlVSTlwiLFxuICAgIFwiTElHSFRFTlwiLFxuICAgIFwiU0NSRUVOXCIsXG4gICAgXCJMSU5FQVJfRE9ER0VcIixcbiAgICBcIkNPTE9SX0RPREdFXCIsXG4gICAgXCJPVkVSTEFZXCIsXG4gICAgXCJTT0ZUX0xJR0hUXCIsXG4gICAgXCJIQVJEX0xJR0hUXCIsXG4gICAgXCJESUZGRVJFTkNFXCIsXG4gICAgXCJFWENMVVNJT05cIixcbiAgICBcIkhVRVwiLFxuICAgIFwiU0FUVVJBVElPTlwiLFxuICAgIFwiQ09MT1JcIixcbiAgICBcIkxVTUlOT1NJVFlcIlxuXTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbXNnLnNlbGVjdGlvbjtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2dldFNlbGVjdGlvbic6XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHNlbGVjdGlvbjogZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdnZXROb3Rlcyc6XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IG5vdGVzOiBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoJ25vdGVzJykgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2V0Tm90ZXMnOlxuICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKCdub3RlcycsIG1zZy5ub3Rlcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2V0U3R5bGVzJzpcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IG1zZy5zdHlsZXM7XG4gICAgICAgICAgICBpZiAoc3R5bGVzICYmIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBvdGhlclBhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgYWRkZWRFZmZlY3RzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkRWZmZWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCByZW1vdmVkRWZmZWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBhZGRlZEZpbGxzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkRmlsbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlZEZpbGxzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwIGluIHN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSBzdHlsZXNbcF07XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm94U2hhZG93UGFyc2VkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkRWZmZWN0cy5wdXNoLmFwcGx5KHJlbW92ZWRFZmZlY3RzLCBbXCJJTk5FUl9TSEFET1dcIiwgXCJEUk9QX1NIQURPV1wiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZUNoaWxkID0gc3R5bGVbY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlQ2hpbGQub2Zmc2V0WCA9IE51bWJlcihzdHlsZUNoaWxkLm9mZnNldFgpID8gTnVtYmVyKHN0eWxlQ2hpbGQub2Zmc2V0WCkgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUNoaWxkLm9mZnNldFkgPSBOdW1iZXIoc3R5bGVDaGlsZC5vZmZzZXRZKSA/IE51bWJlcihzdHlsZUNoaWxkLm9mZnNldFkpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVDaGlsZC5ibHVyUmFkaXVzID0gTnVtYmVyKHN0eWxlQ2hpbGQuYmx1clJhZGl1cykgPyBzdHlsZUNoaWxkLmJsdXJSYWRpdXMgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVDaGlsZC5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IENvbG9yKHN0eWxlQ2hpbGQuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVDaGlsZC5jb2xvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiBjLmdldFJlZCgpID8gYy5nZXRSZWQoKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogYy5nZXRHcmVlbigpID8gYy5nZXRHcmVlbigpIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiBjLmdldEJsdWUoKSA/IGMuZ2V0Qmx1ZSgpIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiBjLmdldEFscGhhKCkgPyBjLmdldEFscGhhKCkgOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVDaGlsZC5jb2xvciA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGVkRWZmZWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHN0eWxlQ2hpbGQuaW5zZXQgPyBcIklOTkVSX1NIQURPV1wiIDogXCJEUk9QX1NIQURPV1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHN0eWxlQ2hpbGQuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzdHlsZUNoaWxkLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc3R5bGVDaGlsZC5vZmZzZXRZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBzdHlsZUNoaWxkLmJsdXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JhY2tncm91bmRQYXJzZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxscyA9IHN0eWxlcy5iYWNrZ3JvdW5kUGFyc2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZiBpbiBmaWxscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxsID0gZmlsbHNbZl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibGVuZE1vZGUgPSBiZ0JsZW5kc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlcy5iYWNrZ3JvdW5kQmxlbmRNb2RlUGFyc2VkICYmIHN0eWxlcy5iYWNrZ3JvdW5kQmxlbmRNb2RlUGFyc2VkW2ZdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zaWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja0FyciA9IGJnQmxlbmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zaWRlID0gY2hlY2tBcnIuaW5jbHVkZXMoc3R5bGVzLmJhY2tncm91bmRCbGVuZE1vZGVQYXJzZWRbZl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxlbmRNb2RlID0gaW5zaWRlID8gc3R5bGVzLmJhY2tncm91bmRCbGVuZE1vZGVQYXJzZWRbZl0gOiBjaGVja0FyclswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbC5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZEZpbGxzLnB1c2guYXBwbHkocmVtb3ZlZEZpbGxzLCBbXCJTT0xJRFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IENvbG9yKGZpbGwuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogYy5nZXRSZWQoKSA/IGMuZ2V0UmVkKCkgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IGMuZ2V0R3JlZW4oKSA/IGMuZ2V0R3JlZW4oKSA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogYy5nZXRCbHVlKCkgPyBjLmdldEJsdWUoKSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZEZpbGxzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogYmxlbmRNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBjLmdldEFscGhhKCkgPyBjLmdldEFscGhhKCkgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmaWx0ZXJCbHVyUGFyc2VkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkRWZmZWN0cy5wdXNoLmFwcGx5KHJlbW92ZWRFZmZlY3RzLCBbXCJMQVlFUl9CTFVSXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuZmlsdGVyQmx1clBhcnNlZCA9IE51bWJlcihzdHlsZXMuZmlsdGVyQmx1clBhcnNlZCkgPyBOdW1iZXIoc3R5bGVzLmZpbHRlckJsdXJQYXJzZWQpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZEVmZmVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTEFZRVJfQkxVUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHN0eWxlcy5maWx0ZXJCbHVyUGFyc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdiYWNrZHJvcEZpbHRlckJsdXJQYXJzZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRFZmZlY3RzLnB1c2guYXBwbHkocmVtb3ZlZEVmZmVjdHMsIFtcIkJBQ0tHUk9VTkRfQkxVUlwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmJhY2tkcm9wRmlsdGVyQmx1clBhcnNlZCA9IE51bWJlcihzdHlsZXMuYmFja2Ryb3BGaWx0ZXJCbHVyUGFyc2VkKSA/IE51bWJlcihzdHlsZXMuYmFja2Ryb3BGaWx0ZXJCbHVyUGFyc2VkKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWRFZmZlY3RzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkJBQ0tHUk9VTkRfQkxVUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHN0eWxlcy5iYWNrZHJvcEZpbHRlckJsdXJQYXJzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21peEJsZW5kTW9kZVBhcnNlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc2lkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQXJyID0gYmxlbmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZSA9IGNoZWNrQXJyLmluY2x1ZGVzKHN0eWxlcy5taXhCbGVuZE1vZGVQYXJzZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5taXhCbGVuZE1vZGVQYXJzZWQgPSBpbnNpZGUgPyBzdHlsZXMubWl4QmxlbmRNb2RlUGFyc2VkIDogY2hlY2tBcnJbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJsZW5kTW9kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3R5bGVzLm1peEJsZW5kTW9kZVBhcnNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3BhY2l0eVBhcnNlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm9wYWNpdHlQYXJzZWQgPSBOdW1iZXIoc3R5bGVzLm9wYWNpdHlQYXJzZWQpID8gTnVtYmVyKHN0eWxlcy5vcGFjaXR5UGFyc2VkKSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm9wYWNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0eWxlcy5vcGFjaXR5UGFyc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd3aWR0aFBhcnNlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlcy53aWR0aFBhcnNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMud2lkdGhQYXJzZWQgPSBOdW1iZXIoc3R5bGVzLndpZHRoUGFyc2VkKSA+IDAgPyBOdW1iZXIoc3R5bGVzLndpZHRoUGFyc2VkKSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ3aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3R5bGVzLndpZHRoUGFyc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdoZWlnaHRQYXJzZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZXMuaGVpZ2h0UGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5oZWlnaHRQYXJzZWQgPSBOdW1iZXIoc3R5bGVzLmhlaWdodFBhcnNlZCkgPiAwID8gTnVtYmVyKHN0eWxlcy5oZWlnaHRQYXJzZWQpIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImhlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3R5bGVzLmhlaWdodFBhcnNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndHJhbnNmb3JtUm90YXRlUGFyc2VkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMudHJhbnNmb3JtUm90YXRlUGFyc2VkID0gTnVtYmVyKHN0eWxlcy50cmFuc2Zvcm1Sb3RhdGVQYXJzZWQpID8gTnVtYmVyKHN0eWxlcy50cmFuc2Zvcm1Sb3RhdGVQYXJzZWQpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicm90YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0eWxlcy50cmFuc2Zvcm1Sb3RhdGVQYXJzZWQgKiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm9yZGVyUmFkaXVzUGFyc2VkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJyIGluIHN0eWxlcy5ib3JkZXJSYWRpdXNQYXJzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZFticl0gPSBOdW1iZXIoc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZFticl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvcm5lclJhZGl1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0eWxlcy5ib3JkZXJSYWRpdXNQYXJzZWRbMF0gPyBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzBdIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclBhcmFtZXRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvcExlZnRSYWRpdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzBdID8gc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZFswXSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG9wUmlnaHRSYWRpdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzFdID8gc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZFsxXSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYm90dG9tUmlnaHRSYWRpdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzBdID8gc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZFswXSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYm90dG9tTGVmdFJhZGl1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0eWxlcy5ib3JkZXJSYWRpdXNQYXJzZWRbMV0gPyBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzFdIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZC5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG9wTGVmdFJhZGl1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0eWxlcy5ib3JkZXJSYWRpdXNQYXJzZWRbMF0gPyBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzBdIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b3BSaWdodFJhZGl1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0eWxlcy5ib3JkZXJSYWRpdXNQYXJzZWRbMV0gPyBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzFdIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJib3R0b21SaWdodFJhZGl1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0eWxlcy5ib3JkZXJSYWRpdXNQYXJzZWRbMl0gPyBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzJdIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJQYXJhbWV0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJib3R0b21MZWZ0UmFkaXVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3R5bGVzLmJvcmRlclJhZGl1c1BhcnNlZFszXSA/IHN0eWxlcy5ib3JkZXJSYWRpdXNQYXJzZWRbM10gOiBzdHlsZXMuYm9yZGVyUmFkaXVzUGFyc2VkWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG4gaW4gc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChzZWxlY3Rpb25bbl0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEVmZmVjdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRGaWxscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5lZmZlY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZSBpbiBub2RlLmVmZmVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZmZlY3QgPSBub2RlLmVmZmVjdHNbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc2lkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmUgaW4gcmVtb3ZlZEVmZmVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVmZmVjdC50eXBlID09PSByZW1vdmVkRWZmZWN0c1tyZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRFZmZlY3RzLnB1c2goZWZmZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RzID0gZmlsdGVyZWRFZmZlY3RzO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmVmZmVjdHMgPSBub2RlLmVmZmVjdHMuY29uY2F0KGFkZGVkRWZmZWN0cy5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5maWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGYgaW4gbm9kZS5maWxscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGwgPSBub2RlLmZpbGxzW2ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnNpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJmIGluIHJlbW92ZWRGaWxscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbC50eXBlID09PSByZW1vdmVkRmlsbHNbcmZdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRmlsbHMucHVzaChmaWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5maWxscyA9IGZpbHRlcmVkRmlsbHM7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZmlsbHMgPSBub2RlLmZpbGxzLmNvbmNhdChhZGRlZEZpbGxzLnJldmVyc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW0gaW4gb3RoZXJQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYSA9IG90aGVyUGFyYW1ldGVyc1twYXJhbV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhID0gb3RoZXJQYXJhbWV0ZXJzW3BhcmFtXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYSAhPSBcIndpZHRoXCIgJiYgbmEgIT0gXCJoZWlnaHRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbbmFdID0gdmE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYSA9PSBcIndpZHRoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlc2l6ZSh2YSwgbm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmEgPT0gXCJoZWlnaHRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVzaXplKG5vZGUud2lkdGgsIHZhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9