"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/Channelislands.tsx
var import_react = __toESM(require("react"));

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030"
};
var stateCode = [
  "Alderney",
  "Brecqhou",
  "Castel",
  "Forest",
  "Herm",
  "Jethou",
  "Saint Andrew",
  "Saint Martin",
  "Saint Peter Port",
  "Saint Pierre du Bois",
  "Saint Sampson",
  "Saint Saviour",
  "Sark",
  "Torteval",
  "Vale",
  "Grouville",
  "Saint Brelade",
  "Saint Clement",
  "Saint Helier",
  "Saint John",
  "Saint Lawrence",
  "Saint Martin",
  "Saint Mary",
  "Saint Ouen",
  "Saint Peter",
  "Saint Saviour",
  "Trinity"
];
var drawPath = {
  Alderney: "M273.131,0l0.188,0.874h0.753l-0.188,0.87h-1.317l-0.754,0.873h-1.317l-0.377,-1.452h0.942l1.317,-0.582V0H273.131zM291.956,2.325l0.942,1.161v1.161l-0.565,0.291v1.161h-1.882l0.188,1.743l-2.635,-0.287l-0.942,0.869h-1.318l-0.375,-1.16h-0.754v0.578h-0.94l-0.942,2.325h-0.941l-0.565,-1.16V7.263l0.942,-1.165h1.129l1.317,-1.452l4.33,-0.87l0.377,-0.874L291.956,2.325zM339.204,2.616l2.635,2.03l-0.188,1.165l0.754,0.578l0.188,1.165l0.563,-0.291l0.565,-2.325h0.752l0.942,1.161l0.565,-1.739h1.129l0.188,1.16l0.563,0.292l0.188,-1.743h0.565V3.486h0.94l1.695,1.452l-0.94,0.582l-0.188,0.87h1.317V5.811l0.94,0.287l0.188,1.743l0.565,0.291l-0.942,0.874l0.188,0.869h0.565l0.377,-0.869l0.752,0.287l-0.188,1.456l-1.129,0.869l-1.129,-0.582v0.873l-0.753,0.291l-0.188,0.869l-1.129,-0.291l-1.506,3.485l-3.011,-0.582l-1.318,-1.16l-1.882,0.291l-0.566,1.16l1.695,1.452v3.193l-1.695,0.582l-0.375,2.324h-0.754l-0.188,-0.582l-2.823,-0.291v2.324l-1.694,-0.291l-0.188,1.451h-0.94l-0.565,0.869l-0.941,-0.287l0.377,1.451l-0.565,0.578h-1.506l-0.376,1.451l-0.941,0.873l-3.388,0.869l-4.707,0.291l-1.128,0.582l-1.318,2.029h-0.753l-0.188,-0.578l-1.129,0.578l-0.753,1.742h-0.752l-0.188,0.582l-0.565,-0.582h-1.318l-0.375,-0.578l-1.506,0.869l-0.753,-0.869v1.742l-0.752,0.578l-1.318,-0.578l-0.564,-1.164h-0.942l-0.564,-0.869h-0.565l-1.317,1.742l-1.129,-0.582h-1.318l-1.13,-1.16l-0.375,-1.742l-0.565,-0.291l0.565,-1.742l-1.13,-1.451v-1.16l0.942,0.291l0.188,-0.582l-1.13,-1.16l-0.188,-1.451l1.882,0.578l0.188,-1.742l0.565,0.582h0.941l0.752,-0.869l0.002,-1.164h-1.319l-0.375,0.873h-2.259l0.376,-2.615h5.647l1.317,-1.16h0.942l1.129,-1.451v-2.033h-1.506l0.377,-2.03l3.577,-0.582l0.752,0.869l1.883,-0.287v0.578h2.635l1.129,-0.578v-1.451h0.377l1.506,1.738h0.565l0.377,-2.029h-0.377l-0.188,-1.165l-0.941,-0.287v-0.873l0.375,-1.161h0.942l1.881,1.743l0.189,-0.873l-0.566,-0.87h-0.564V9.583l2.824,0.873v2.612l0.754,1.743l1.317,0.869h0.94l0.188,-0.578l1.129,-0.291h2.823l0.942,-2.034h0.565v-0.869l-0.188,-0.582h-1.131v-0.578h-0.377V8.132h1.883V5.229h0.942l0.188,-1.743h0.94l0.942,1.161l0.188,2.325h1.317l-0.188,-0.873l-0.753,-0.579v-1.16l0.753,-1.456L339.204,2.616zM206.309,13.651l0.941,0.578l-0.941,1.164h-1.13l-0.566,0.869h-0.94V15.68l-1.317,0.291l0.188,-1.16h0.566l0.94,-1.16H206.309zM346.544,16.845l0.754,1.451l-0.188,1.16l-0.565,0.291l-0.563,-0.582l-0.754,0.582l-0.376,-1.16l0.753,-1.451L346.544,16.845zM297.415,31.646l1.883,1.164v1.451h-3.202v-0.582h-0.563l0.377,-2.033H297.415zM317.557,40.024l1.129,0.04v0.873l-0.565,0.578h-0.752l-0.942,-1.16h-0.564v-0.582L317.557,40.024z",
  Brecqhou: "M197.837,313.274L197.837,313.563L199.531,313.854L200.097,314.428L200.097,315.585L200.849,315.871L200.849,317.603L201.226,317.892L201.037,319.335L200.661,319.335L200.284,319.045L198.026,319.045L197.649,319.045L197.46,319.624L198.966,319.913L198.966,320.777L196.332,320.777L196.332,320.492L193.319,320.203L193.319,319.045L194.826,319.045L195.014,319.335L195.203,318.76L194.826,318.182L193.131,318.471L193.131,318.182L191.437,317.892L190.685,317.028L190.685,315.871L191.625,315.585L191.625,315.296L192.379,315.585L192.754,314.143L194.826,314.143L194.826,313.854L196.896,314.143L197.272,313.274z",
  Castel: "M74.317,280.392L73.504,284.723L69.828,290.957L64.294,296.417L60.173,302.971L60.173,302.971L59.305,301.893L50.404,302.733L48.631,300.755L44.696,300.656L42.568,299.367L36.602,293.432L35.634,284.973L36.329,282.383L36.329,282.383L36.518,282.958L37.083,282.958L38.212,284.401L40.095,284.401L40.095,284.116L41.412,284.116L41.601,283.537L42.729,283.537L43.106,282.958L44.612,282.958L44.612,282.383L46.306,282.383L47.435,281.514L48.564,277.762L48.564,276.028L48.189,275.16L46.87,275.449L46.87,275.16L45.93,275.16L44.989,273.716L42.918,273.716L42.165,273.137L41.976,270.828L44.235,271.117L44.8,271.692L45.741,271.692L46.118,272.272L47.059,272.272L47.247,270.828L47.624,271.117L48.752,270.828L49.507,273.137L50.071,273.426L50.447,270.828L51.013,270.828L51.201,271.407L51.953,271.692L52.142,270.249L52.895,270.249L53.082,270.828L54.024,271.117L54.024,271.407L55.907,271.407L55.907,271.117L56.847,271.117L57.225,270.538L58.542,270.249L58.919,268.229L59.294,268.229L59.859,266.781L60.424,266.496L60.613,265.337L60.236,265.051L60.236,264.182L60.988,264.182L61.177,263.028L61.553,263.028L61.553,261.004L61.177,260.425L60.424,260.425L59.859,259.56L59.106,259.56L58.919,260.139L58.354,260.139L58.354,259.85L57.413,259.85L56.659,258.98L55.907,259.27L55.718,257.826L56.659,256.381L57.225,256.381L57.788,257.826L58.165,257.826L58.354,258.405L58.919,258.405L59.482,257.246L61.365,257.536L61.365,255.802L62.119,255.802L62.306,256.381L63.059,255.802L63.436,256.671L64.942,256.671L65.507,257.826L65.318,259.56L66.071,259.56L66.071,259.56L66.713,263.683L67.133,264.349L67.133,266.233L68.842,268.309L70.18,268.285L70.293,272.641L70.718,273.557L72.499,273.617L74.782,277.417L74.317,278.428z",
  Forest: "M46.946,317.698L47.217,316.156L50.042,315.74L54.661,312.91L54.661,312.91L64.422,312.125L64.422,312.125L64.586,314.289L66.279,315.276L68.456,314.535L69.343,315.276L68.295,319.108L66.198,320.469L69.021,320.841L69.262,321.828L67.247,322.568L66.825,324.819L66.825,324.819L65.882,324.53L65.13,326.263L64.753,326.263L64.753,326.841L65.318,327.415L65.13,328.568L64.942,328.857L63.625,328.857L63.436,328.568L63.436,329.726L63.059,330.3L62.119,330.3L61.742,329.726L61.553,330.59L60.8,330.59L60.613,329.726L60.236,330.3L59.106,330.015L59.482,331.742L59.859,332.032L59.671,333.474L59.294,333.474L58.919,332.61L58.73,332.899L57.225,332.61L56.847,331.457L56.094,331.457L56.095,331.168L53.459,331.457L53.459,331.168L51.201,330.879L50.824,330.015L48.752,330.879L48.564,330.3L47.624,330.015L47.435,329.437L46.306,330.3L45.364,331.742L45.364,332.321L44.8,332.321L44.8,332.032L44.8,332.032L44.188,328.501L43.463,327.638L42.979,324.796L43.543,322.695L46.285,320.223z",
  Herm: "M155.671,263.317L156.048,263.603L156.237,264.762L156.803,264.762L156.803,265.337L156.237,265.626L156.237,267.071L156.613,267.36L156.048,268.229L156.237,269.959L156.989,271.117L158.495,271.982L159.438,275.449L160.378,276.604L160.943,276.604L160.943,277.183L160.566,278.047L160.001,278.047L159.438,279.491L159.061,279.491L159.438,281.804L158.684,281.514L158.684,282.668L158.309,283.248L157.932,283.537L156.613,283.537L156.425,283.248L155.671,283.827L155.671,284.401L154.919,284.401L154.166,285.27L153.601,285.27L153.037,284.691L152.66,283.248L152.283,283.248L152.283,282.093L151.72,281.804L152.283,281.225L152.283,280.649L151.908,279.781L151.531,279.781L151.531,278.047L151.908,278.047L152.096,277.183L152.472,277.183L153.225,276.028L152.849,275.739L152.849,274.87L152.096,274.295L151.531,271.692L150.589,269.959L148.896,269.384L148.896,268.229L149.271,268.229L148.896,267.071L150.778,266.206L150.778,265.916L152.849,265.626L153.789,264.472L154.919,264.472L155.108,263.603z",
  Jethou: "M145.507,283.827l0.564,2.019l-0.94,0.29l-0.188,-0.575l-0.188,0.575h-0.564l-0.376,-1.154h-0.377v-0.864l0.188,-0.29H145.507zM147.202,286.135l0.377,0.579h0.563l0.188,1.154l0.752,0.579l-0.187,0.865l-0.566,0.289l-0.565,1.154l-0.752,0.29v0.579h-0.565l-0.376,0.865l-1.506,-0.29l-0.94,-2.308l0.377,-0.29l-0.188,-1.154l1.317,-1.443L147.202,286.135z",
  "Saint Andrew": "M81.659,298.471L80.305,300.192L80.228,303.34L74.229,307.436L74.113,309.513L70.205,312.002L64.422,312.125L64.422,312.125L54.661,312.91L54.661,312.91L57.148,307.34L60.173,302.971L60.173,302.971L64.294,296.417L69.828,290.957L73.504,284.723L74.317,280.392L74.317,280.392L75.974,280.046L75.974,280.046L76.651,285.44L80.553,292.662L81.198,297.658z",
  "Saint Martin": "M507.487,461.132l1.317,2.877l-3.011,-1.438l0.188,-1.154L507.487,461.132zM509.182,466.024l0.377,2.589l1.129,2.3l-1.883,1.442l-0.187,-6.047L509.182,466.024zM445.181,558.313l0.188,0.864l-1.317,0.859l0.377,1.148h0.564l0.941,-1.724l2.07,-0.572l0.564,-4.884l-1.129,-1.148h-1.694l-0.753,-0.575l-0.188,-1.725l1.505,-1.724v-0.86l-0.753,-0.288l-1.506,0.572l-0.752,-0.572l0.752,-2.873l-1.694,-0.287l-0.752,-2.873l-1.317,-0.864l-0.565,-2.585h1.128l0.566,-1.148l0.752,0.284l0.188,-1.437l-0.563,-0.572l1.506,-0.864l0.375,-0.572l2.071,-0.288l-0.188,-0.864l0.941,-0.572l3.201,1.437l0.563,0.86l2.636,0.288v-0.576l-2.447,-0.86l-0.565,-0.864l-3.011,-1.437l-0.753,0.288l-1.883,-1.725l-0.377,-3.45l-1.129,-0.86v-0.86l1.129,-0.864l-0.188,-0.861l-1.881,-0.576l-2.071,1.438l-0.188,-0.861h-0.941l-2.447,-2.013l-1.694,0.576l-0.375,-1.44h-3.577l-0.377,-0.995l0,0l-3.998,1.571l-0.813,-0.589l-2.902,0.885l-4.644,-0.943l-1.238,1.891l-1.394,5.969l-2.012,0.292l0.176,3.225l0,0l0.521,0.265l0.039,1.121l3.676,1.771l0.232,3.43l-1.818,3.248l0.541,2.481l3.754,0.884l0.852,1.771l-1.509,1.599l-2.594,0.646l-1.47,1.065l0.193,1.89l8.281,0.411l1.741,-1.357l1.974,-0.296l1.587,1.538l2.244,0.766l0.427,1.909l0,0l3.025,0.781l1.516,-0.493l0.871,1.133l1.354,-0.146l0.29,-0.888l0.839,-0.099l0.387,1.527l-0.839,2.805l1.097,0.347l0.337,0.816l0,0l0.572,-0.859l1.317,0.284l0.377,-0.572L445.181,558.313z",
  "Saint Peter Port": "M97.695,278.626L96.565,281.225L96.565,282.958L98.071,284.401L99.201,284.401L99.201,284.691L99.765,284.691L100.142,285.56L101.084,285.56L101.647,287.003L101.647,288.447L103.342,291.044L103.153,291.913L102.588,291.913L102.402,291.334L101.647,291.044L101.647,292.198L100.896,292.488L100.142,290.755L99.577,290.469L98.824,291.334L98.071,291.044L98.259,292.488L99.577,293.646L101.647,293.931L102.213,294.51L102.588,294.51L102.965,293.646L103.531,293.646L103.906,295.954L103.719,296.243L102.402,296.243L102.024,295.664L99.013,295.664L98.448,296.243L98.259,295.954L96.942,295.954L96.753,296.243L96.753,296.822L97.882,297.976L98.636,297.976L99.765,299.419L100.896,299.419L100.896,302.016L101.271,303.173L100.33,303.459L100.142,302.884L98.636,302.884L98.448,303.173L98.259,304.617L98.824,305.481L98.636,308.077L98.448,308.945L97.695,309.235L98.448,312.121L96.377,312.985L96.377,313.274L96.377,313.274L91.76,309.925L91.256,303.633L89.786,301.203L87.348,301.972L83.478,301.972L83.323,299.954L81.659,298.471L81.659,298.471L81.198,297.658L80.553,292.662L76.651,285.44L75.974,280.046L75.974,280.046L77.135,275.445L79.07,274.505L79.07,274.505L83.404,274.204L84.291,274.822L87.919,274.573L89.532,276.306z",
  "Saint Pierre du Bois": "M9.035,282.383l0.752,2.308l0.376,4.331l-0.563,1.447H9.035l-0.188,0.575H8.093l-0.752,-2.598l-0.376,-0.29H6.023l-0.376,0.579H4.894l-0.752,-0.869l-0.94,-0.29l-0.188,-1.733l0.752,-0.575l-0.564,-2.022l0.752,-0.29l0.377,0.579l2.069,0.864l0.565,-1.154l0.753,-0.579L9.035,282.383zM1.506,284.98l0.375,1.154h0.565l-0.188,1.733H1.506l-0.188,-0.864H0.375L0,286.424l0.375,-1.154L1.506,284.98zM37.472,329.147l-0.761,-3.508l-2.399,-0.555l-1.599,-1.304l-1.703,-3.439l-1.29,-1.328l-0.838,-1.74l-1.767,0.298l-0.619,0.872l-1.78,-0.1l-0.013,-1.605l-4.128,-2.667l-1.857,2.097l-1.557,3.408l2.37,1.376l2.683,3.289l0,0l-0.377,0.289l-1.129,-0.864h-0.752l-1.317,2.018h-0.754l-1.129,-0.864l-1.506,1.153h-0.565l0,0l-0.891,-2.013l-1.212,-1.348l1.638,-1.997l2.299,-1.174l-0.021,-0.353l-3.388,-3.437l-0.761,0.021l-1.251,-1.051l-0.555,-1.348l0,0v-0.289l1.506,-0.29l0.751,1.732h1.506l0.377,-1.153h-0.565l-0.188,-0.864l1.129,-0.868H16l0.188,-0.574v-0.29h-0.941v0.29l-0.753,-0.29l0.188,-0.868l0.753,-0.574l-0.188,-1.158l0.188,-0.285l1.694,0.285v-0.574h0.752l0.377,-0.579v-2.307l0.94,-3.176v-1.443l-0.94,-2.022l-0.377,-3.465l-2.069,-0.29l-0.188,0.579h-0.565l-0.941,-1.444h-1.13l-0.189,-0.579l-0.376,0.29l-1.129,-0.29l0.377,-1.443h0.377l0.563,-1.154h0.754l-0.188,-2.022l0.377,-0.579h0.752l0.377,1.158l1.129,0.286l0.753,1.158h0.565l0,0l8.455,3.72l0.194,2.732l2.244,4.984l3.561,0.06l1.161,2.613l0.155,5.458l1.548,1.011l2.206,-1.011l1.78,2.435l2.206,0.772l2.129,2.846l1.896,0.119l0.387,1.78h1.896l0,0l-0.662,2.524l-2.741,2.473l-0.564,2.101l0.484,2.842l0.726,0.863l0.612,3.531l0,0h-0.565l-0.188,-0.575l-1.129,-0.578v-0.864l-1.317,0.285v0.29h-0.753v-0.29l-1.318,0.29l-1.129,-1.442H37.472z",
  "Saint Sampson": "M69.083,252.337v-1.734l1.694,0.576l0.565,1.159h0.94v-0.869l-0.94,-1.155l-0.377,-1.445l0.377,-0.58l1.129,0.29L72.66,248h0.94l0.753,0.869h0.752l0.376,0.865l0.378,-0.29V248l0.752,-0.29l0.377,1.159l0.94,0.29v0.865l0.565,0.29l0.188,0.865l0.188,-0.29l1.883,0.29l0.752,-1.445l-0.377,-2.889l0.754,-0.58h0.94v0.29l2.823,0.58L85.836,248l-0.564,1.159h-0.377l0,0l-2.632,4.441l-1.186,0.631l0.048,0.706l-1.33,0.631l-1.137,1.853l-2.096,0.266l-0.806,0.924l-2.721,-2.163l-1.108,-0.31l-1.31,-2.167L69.083,252.337zM97.695,278.626l-8.164,-2.32l-1.613,-1.733l-3.628,0.25l-0.887,-0.619l-4.334,0.302l0,0l1.129,-1.583l-0.129,-5.447l-0.419,-1.04h-1.419l-0.774,-0.742l-0.129,-3.265l-0.903,-2.127l2,-1.687l2.645,-1.333l3.837,-0.893l2.247,-3.766l0,0v-0.286h0.942l0.563,0.865h0.377l0.565,1.444l1.317,0.29l0,0l1.773,1.028l0.871,1.04l0.403,2.103l1.322,-1.262l0.967,-0.052l1.096,1.583l1.871,0.794l1.742,-0.024l1.338,1.238l2.886,-0.075l0.983,1.758l3.005,0.536l0,0v0.579l0.753,0.869l1.129,0.286l0.754,-0.575l0.752,0.575l-0.189,0.579l0.566,0.29l0.375,1.155l-0.751,0.29v1.155l-0.94,0.29v0.579l0.188,0.286h1.315l0.566,-0.575l-0.377,1.733l-1.503,0.29l-0.188,-0.579h-0.754v-0.29h-2.069l-0.565,0.869h-0.565l-0.188,0.575l-2.258,-0.29l-0.188,0.58h-0.754v0.29l-0.94,-0.58v0.869h0.377l-0.377,0.575l-0.754,-0.575l-0.186,1.154h-0.566l-0.188,0.579l-0.94,0.286v-0.865h-0.565l-0.377,1.154h-0.752l-0.188,1.154h-0.565v1.733L97.695,278.626z",
  "Saint Saviour": "M393.645,581.861L392.829,576.94L394.028,576.881L394.415,577.413L394.841,576.408L396.157,576.467L396.543,572.334L395.886,571.506L396.195,570.623L397.124,570.209L397.24,568.911L395.847,567.905L393.448,568.971L392.364,566.667L392.325,563.771L393.603,562.179L394.879,557.749L395.77,557.808L398.285,554.088L400.723,552.849L401.961,550.013L401.961,550.013L402.182,548.048L400.729,546.631L401.133,543.68L400.447,543.309L401.294,542.756L403.673,542.879L404.681,541.584L406.293,542.385L407.22,540.538L409.8,539.493L410.203,535.803L410.969,534.753L410.203,534.2L410.404,533.34L411.977,533.34L412.299,531.615L413.297,531.11L413.297,531.11L413.817,531.375L413.856,532.496L417.532,534.268L417.765,537.697L415.946,540.945L416.487,543.427L420.241,544.311L421.093,546.082L419.584,547.681L416.99,548.327L415.521,549.393L415.714,551.282L423.995,551.693L425.736,550.336L427.71,550.04L429.297,551.578L431.541,552.344L431.968,554.253L431.968,554.253L430.317,556.463L429.511,556.608L429.285,555.871L424.545,554.442L419.675,556.66L416.418,556.167L416.354,557.102L413.612,557.839L415.645,561.188L415.676,564.285L415.289,565.318L414.677,565.318L414.387,564.384L413.161,564.336L413.29,565.224L412.322,566.106L413,574.716L410.42,577.031L409.484,576.782L409.13,577.473L407.904,577.275L407.146,577.93L407.146,577.93L403.113,578.498L403.336,579.851L402.046,579.973L400.675,581.447L398.438,581.356L397.45,580.65L397.43,579.787L396.261,579.605L394.003,581.171L393.825,581.861L393.825,581.861z",
  Sark: "M209.695,295.375l2.071,3.176v0.579h0.566l0.375,0.579v0.864l0.754,0.579h0.376l-0.188,-1.732l0.563,-0.29l0.377,0.868l-0.188,2.018l0.377,0.579l1.317,0.29v0.289l0.753,-0.289l0.188,0.575l3.011,0.868l0.188,1.154l0.752,0.29l-0.188,0.579h-0.564l0.564,3.46l0.942,-0.285v0.575l-0.754,0.578l0.188,0.29l2.447,-0.29l1.13,0.864h0.94l0.565,2.312l0.563,0.289l0.377,1.442l0.942,0.286l0.187,3.174l-1.317,0.29l-0.188,1.157l0.565,0.574l-0.188,0.868h-1.317l-1.506,1.731l0.377,2.018l-0.565,0.579l-0.753,0.289l-0.375,-2.021h-0.376v-0.864h-0.566v-0.289h-0.563l-0.754,0.864l-0.188,2.311l-0.375,0.574h-2.448l-0.376,-1.442h-1.317l-0.377,1.157l0.188,0.864h-0.94l-0.377,0.578v1.153l-0.566,-0.868l-0.187,0.579l-0.754,0.289l-0.188,0.863l-0.375,-0.285l-0.188,0.864l-0.566,0.289v0.574v0.29v1.731h-1.129l-0.565,0.867l-0.188,2.596h0.377v0.863l0.377,0.289l0.376,2.885l-0.188,0.289l-1.13,-0.289v-1.153l-1.317,0.289l-2.258,3.174h-0.565l-0.754,-0.864l-1.692,-0.578l-0.188,-1.442l-0.566,-0.867h-0.377l-0.752,-1.442l-1.694,-0.289v-0.285l-1.317,0.574l-0.188,-1.442l0.376,-0.863h0.752l0.188,0.574h0.376v-0.863l0.564,-0.289l1.507,-2.596l2.447,-2.021l1.317,-0.289l0.188,0.578h0.376v-2.311h0.564l0.377,0.579h1.317l0.188,-0.579l0.941,0.29l0.188,-0.579h0.377l-0.565,-0.574h-0.941l0.377,-0.579l-0.188,-0.863l0.377,-0.289l-0.188,-1.153h-0.753v-0.29l-0.94,0.29l-0.565,-1.157l-0.564,-0.286l-0.188,-0.867l-1.319,0.289l-0.752,-1.442l-0.751,-0.579l0.186,-1.153l1.317,0.29l0.002,-1.158l-0.565,-0.863l-2.072,0.289l-0.375,-0.868v-0.574l2.447,-0.579l-0.189,-0.578l0.566,-0.286l0.752,-1.731l0.942,-0.29l0.375,0.864h1.507l0.187,-0.574h0.565l-0.377,-1.443l-0.563,-0.289l0.188,-1.153l-0.377,-0.868l0.188,-0.29l1.129,0.29l0.752,-2.887h0.565l0.377,0.864h0.376l-0.188,-0.864l0.564,-0.289v-0.575l-0.752,-0.29l-1.13,-2.022l0.376,-2.022l0.565,-0.575v-1.443h-0.565l-0.375,-0.868l-0.565,-0.29v-3.176L209.695,295.375zM227.579,309.524l0.565,1.153h0.375v0.575l-0.564,0.579h-0.753l-0.752,-0.864v-0.579l0.375,-0.864H227.579zM210.826,347.324v0.285h0.752l-0.188,1.446l-0.564,1.152l-1.13,0.289v-2.599L210.826,347.324z",
  Torteval: "M14.682,325.973v0.29h-1.129l-0.565,-0.579l-0.377,0.289h-0.752v-0.289l-0.377,0.289H9.224l-0.565,-1.442l-0.752,0.289l-0.188,0.864H7.153l-0.188,-1.153l-0.941,-1.442H5.647l-0.188,-0.578H4.705l-0.187,-0.575l-1.129,-0.289l-0.188,-1.732l-1.131,-0.289l0.188,-2.596l-0.563,-1.157l0.189,-1.729l-0.377,-0.289v-0.868l0.564,0.578h0.565v-0.868l0.94,-1.153H4.33v-0.574h0.94v1.153l0.565,0.574h0.563l0.188,-0.574l1.319,-0.868l0.752,0.868h0.565v0.574l0.564,0.579h0.753l0,0l0.555,1.348l1.251,1.051l0.761,-0.021l3.388,3.437l0.021,0.353l-2.299,1.174l-1.638,1.997l1.212,1.348L14.682,325.973zM37.472,329.147l-0.766,0.289l-0.377,-0.579l-1.694,0.29l-0.752,-2.021h-0.565v0.868l-0.752,0.289l-0.188,-0.868h-0.565l-1.129,-1.731h-0.377l-0.188,0.579h-0.752l-0.376,0.863h-0.941v-0.285l-1.13,0.285l-0.94,-0.863l-0.188,-1.153h-1.882l-0.941,-1.157l-0.753,0.289l0,0l-2.683,-3.289l-2.37,-1.376l1.557,-3.408l1.857,-2.097l4.128,2.667l0.013,1.605l1.78,0.1l0.619,-0.872l1.767,-0.298l0.838,1.74l1.29,1.328l1.703,3.439l1.599,1.304l2.399,0.555L37.472,329.147z",
  Vale: "M109.177,263.603l-3.005,-0.536l-0.983,-1.758l-2.886,0.075l-1.338,-1.238l-1.742,0.024l-1.871,-0.794l-1.096,-1.583l-0.967,0.052l-1.322,1.262l-0.403,-2.103l-0.871,-1.04l-1.773,-1.028l0,0l0.376,-2.023l-0.565,-0.29v-0.865l0.565,-0.29l0.188,-2.024l-1.13,-0.286L90.166,248l2.07,-0.576l0.188,-3.179l0.377,-0.869l-1.694,-0.576v-0.869l-0.565,0.58h-0.564l-0.188,-0.58l-1.13,0.29l-0.187,-0.58l-1.13,-0.286l-0.188,-1.449l0.377,-0.865l2.259,-0.29l1.694,-1.445h0.752l0.565,0.58l0.752,-0.58l1.131,0.29l0.375,-1.155h0.565l1.317,2.021h0.753l0.564,-1.445l0.942,0.29v-1.155l0.752,-0.29l0.376,0.58l-0.188,1.735l-0.941,1.155v1.155h-0.753l-0.188,1.445h0.565l0.565,0.869h0.752l0.188,-0.869l1.317,0.29l0.565,1.735h1.881l0.566,-0.58l0.188,-1.155h1.129l0.188,-2.89h0.565l0.188,-0.58l0.941,-0.29v-0.576l-0.565,-0.29v-0.869l0.565,-0.866h0.565l0.752,0.866l0.942,0.29l0.188,1.159l0.563,0.576l-0.563,1.445l1.318,-0.29v0.29l0.94,0.29l0.188,-0.58h0.375l0.377,0.869h0.377l0.188,-0.58h0.94l0.754,-0.575l0.188,-1.445l1.506,0.286l0.188,1.159l0.563,0.286l-0.563,1.445l0.563,0.58v1.155l0.565,0.29l-0.565,2.024l0.188,0.29l0.565,-0.29l0.753,1.445L119.531,248h0.375l-0.375,2.024l0.375,1.734l-0.752,1.445l-0.188,2.313h1.129l0.188,1.155l-0.941,1.444h-1.694l-0.377,-0.29l-0.188,-1.155l-1.505,0.29l0.188,0.865h0.753l0.375,0.58l-0.188,0.865h-0.752l-0.376,0.58l0.565,2.599l-0.376,2.603h-0.377l-0.188,-0.58l-2.258,0.29l-0.377,-0.58h-2.072l-0.375,-0.579H109.177zM121.79,244.245l0.188,2.89h-0.752l-0.566,-1.155v-1.735H121.79zM87.153,252.623l-2.247,3.766l-3.837,0.893l-2.645,1.333l-2,1.687l0.903,2.127l0.129,3.265l0.774,0.742h1.419l0.419,1.04l0.129,5.447l-1.129,1.583l0,0l-1.935,0.94l-1.161,4.601l0,0l-1.657,0.345l0,0v-1.963l0.464,-1.011l-2.283,-3.8l-1.78,-0.06l-0.425,-0.917l-0.113,-4.356l-1.338,0.024l-1.709,-2.075v-1.884l-0.419,-0.667l-0.643,-4.123l0,0l0.566,-0.579h-0.377l-0.377,-0.865v-2.023l1.317,0.29v-0.29h0.943v-0.29l0.94,-0.286l-0.377,-0.58h-1.129l-0.377,-0.579h-0.563l-0.377,-1.155l2.824,-0.865l0,0l1.534,1.635l1.31,2.167l1.108,0.31l2.721,2.163l0.806,-0.924l2.096,-0.266l1.137,-1.853l1.33,-0.631l-0.048,-0.706l1.186,-0.631l2.632,-4.441l0,0l-0.189,2.021L87.153,252.623zM122.354,249.734l0.564,0.58l0.188,1.734l-0.377,0.575l-1.318,-0.286l-0.187,0.576h-0.754l0.188,-2.6l0.941,-0.29v-0.29H122.354z",
  Grouville: "M434.093,593.634L434.214,587.137L431.372,581.325L429.356,582.003L426.293,579.019L425.708,579.145L424.357,578.068L423.572,578.62L421.939,576.96L421.294,577.761L419.943,577.575L419.581,578.991L414.864,582.804L412.788,583.293L412.506,582.618L411.217,582.618L409.563,580.683L409.645,579.512L407.709,579.299L407.689,578.159L407.146,577.93L407.146,577.93L407.904,577.275L409.13,577.473L409.484,576.782L410.42,577.031L413,574.716L412.322,566.106L413.29,565.224L413.161,564.336L414.387,564.384L414.677,565.318L415.289,565.318L415.676,564.285L415.645,561.188L413.612,557.839L416.354,557.102L416.418,556.167L419.675,556.66L424.545,554.442L429.285,555.871L429.511,556.608L430.317,556.463L431.968,554.253L431.968,554.253L434.993,555.034L436.509,554.541L437.38,555.674L438.734,555.527L439.024,554.64L439.863,554.541L440.25,556.068L439.411,558.873L440.508,559.22L440.845,560.036L440.845,560.036L438.969,562.62L437.84,568.079L437.464,567.791L436.899,568.938L437.651,569.227L437.087,574.109L439.723,588.753L440.851,590.476L441.417,590.476L441.794,591.623L440.663,592.482L440.288,594.205L439.157,593.346L438.781,594.78L437.84,594.205L436.899,595.928L435.582,595.928z",
  "Saint Brelade": "M351.816,573.249l-0.753,1.72h-1.506l-0.563,-1.147v-0.86L351.816,573.249zM348.993,584.16v-1.151l-0.754,-0.859l-1.129,0.287l-0.377,-0.863l-0.565,0.288l0.188,-0.859l-1.129,-0.863l1.129,-2.583v-1.147l-1.129,-1.151l0.188,-1.436l0.377,-1.436l1.506,-0.288l-1.883,-3.159v-1.147l0.565,-1.436l0.94,-0.288l0.564,-1.724l3.563,-1.724l0,0l-0.189,-1.282l-0.774,0.296l-2.128,-0.592l-2.128,-1.534l-7.353,-0.884l-1.045,-0.888l-4.45,-0.236l-0.426,-0.532l0.232,-1.594l-0.658,-0.237l-2.593,1.243l-2.051,-0.77l-1.083,-1.238l-2.709,0.177l-0.696,-0.592l-2.128,-0.059l-0.658,0.592l-1.586,-0.296l-2.438,-1.594l-4.18,2.478l-4.426,1.389l0,0l-0.188,1.846l-1.506,0.576l-0.376,3.159l0.376,0.86l-0.94,-0.288l0.752,1.151h-1.318l0.189,3.16l-0.752,1.436l-1.131,0.283l-0.563,-0.571l-0.377,1.436l-1.317,-0.576l-0.565,0.864l-1.694,-0.864v1.724l1.319,2.299h-2.825l-1.317,2.296l-1.883,0.575l0.377,1.724h1.506l0.751,2.011l1.131,1.147h0.565l1.506,-2.299l0.94,2.299l0.94,0.859h0.942l0.376,1.436l4.518,1.436l0.187,0.575l2.071,-0.859l0.188,-0.576l2.446,-0.287l1.131,-1.724l1.129,-0.571h1.317l0.754,2.007h1.129v-1.436l0.752,-0.287l0.188,-1.147l0.942,-0.86h0.565l0.375,1.147h1.129l0.188,-2.87l0.566,-0.863l1.317,0.287l0.377,-1.147l-0.753,-2.299h0.565l0.188,-0.859h1.694l4.329,1.723l0.566,2.583l2.069,-0.287l1.883,4.021l-0.565,0.859l-2.258,0.288l-0.188,1.436l0.563,0.575h-1.317l0.188,0.859l0.94,0.288l0.566,1.723l-1.318,1.147l0.377,2.299l2.071,0.571l0.563,-1.147h0.754l1.317,0.576v-0.863l1.129,-0.86l0.376,-1.435l2.823,0.288l1.13,2.582h1.882l-0.188,1.147h-1.129l0.188,1.15l1.129,0.284l0.565,1.151h1.694l1.506,-1.436l0.752,-2.298l1.317,0.288l0.002,-0.863l-0.565,-0.284l0.565,-2.299l-0.754,-2.298L348.993,584.16z",
  "Saint Clement": "M427.299,609.99l0.565,0.863L427.487,612l-0.565,-0.859h-2.258v-0.862L427.299,609.99zM395.485,581.861l1.884,2.87l1.505,0.576l3.014,4.305l0.375,1.436l2.26,1.723l0.753,1.723l2.634,1.723l1.131,-0.288l0.188,-0.571h1.506l0.375,0.859h0.942l1.881,-3.733l3.954,-0.284l3.2,-2.01l0.376,-0.863h3.576l3.014,0.863l6.04,3.445l0,0l0.121,-6.497l-2.842,-5.812l-2.016,0.678l-3.063,-2.984l-0.585,0.126l-1.351,-1.076l-0.785,0.552l-1.633,-1.66l-0.646,0.801l-1.351,-0.186l-0.362,1.416l-4.717,3.813l-2.076,0.489l-0.282,-0.675h-1.289l-1.653,-1.936l0.081,-1.171l-1.936,-0.213l-0.02,-1.14l-0.544,-0.229l0,0l-4.032,0.568l0.223,1.353l-1.29,0.122l-1.371,1.475l-2.237,-0.091l-0.987,-0.706l-0.021,-0.863l-1.169,-0.182l-2.257,1.565l-0.179,0.69l0,0h0.532H395.485z",
  "Saint Helier": "M376.286,580.426l0.189,1.436l-0.565,0.863h-1.318v0.859l-1.694,-0.287l0.376,-1.724h0.752l0.753,-2.007l0.941,-0.863h1.131L376.286,580.426zM376.852,583.584v1.436l-0.754,-0.575l-0.752,0.287l0.375,1.151l-1.881,-0.863v-0.575L376.852,583.584zM368.192,561.473l3.388,1.724l0.752,1.436l1.13,0.288l0.564,0.859h1.13l1.695,2.012l2.446,1.147l0.94,3.735l-1.317,1.723l-0.565,2.296l0.188,2.586l1.13,1.724v1.147l1.505,-0.863l0.564,0.575l-0.188,0.863l-1.129,0.572v0.863h1.317l0.188,1.147l-2.258,-0.288v0.863l1.129,2.582l2.071,2.583l1.881,0.287l0.188,-0.859l-2.823,-1.435l-1.317,-2.874l3.2,0.863l0.565,1.723l2.07,-0.575l-0.565,1.435l0.565,0.288l0.754,-1.723l0.375,-5.169l0.565,-0.859h3.388l0.188,-0.576l1.734,0.288l0,0l-0.816,-4.921l1.2,-0.06l0.387,0.532l0.426,-1.005l1.316,0.059l0.387,-4.133l-0.658,-0.828l0.31,-0.883l0.929,-0.414l0.116,-1.298l-1.393,-1.006l-2.399,1.065l-1.084,-2.304l-0.039,-2.896l1.277,-1.593l1.277,-4.43l0.89,0.059l2.516,-3.72l2.438,-1.239l1.238,-2.836l0,0l-1.083,-0.06l-1.2,-2.951l-2.399,0.059l-1.006,0.588l-2.128,-0.942l-1.083,0.942l-2.631,-0.232l0.077,1.062l-0.929,0.355v1.298l-3.638,-2.186l-0.155,-1.121l0.89,-0.71l-1.471,-0.884l-1.703,0.646l-0.658,-4.604l-0.658,-1.949l-0.956,-0.324l0,0l-3.533,-0.623l0.116,0.888l0,0l-1.78,3.248l0.077,5.966l-1.471,-0.296l-0.851,-1.949l-0.697,-0.178l-0.813,4.431l-3.328,-0.71l0.348,4.135l-0.658,-0.178l-0.735,0.71l-0.155,5.137l-1.392,1.894H368.192z",
  "Saint John": "M381.23,538.999L377.697,538.376L377.813,539.264L377.813,539.264L377.813,539.264L377.813,539.264L377.366,537.725L378.697,533.356L377.608,527.94L378.092,524.681L377.407,523.264L374.988,523.078L372.005,521.724L369.707,521.969L365.797,521.108L363.136,522.154L362.975,521.538L359.508,520.247L357.775,520.37L358.025,519.77L358.025,519.77L359.428,518.092L358.944,516.615L357.734,516.244L356.001,514.029L354.751,514.274L350.761,517.906L350.72,515.135L351.849,513.042L352.535,513.228L353.26,512.612L354.308,510.827L354.268,509.532L354.994,509.781L355.477,509.043L354.913,506.33L353.139,505.283L351.97,505.899L351.245,505.161L349.108,504.667L348.463,502.883L344.271,501.776L343.533,500.912L343.533,500.912L343.91,499.68L345.039,499.392L345.604,497.954L346.733,497.093L351.063,497.093L350.308,494.218L350.686,492.491L351.439,492.491L352.003,493.929L353.886,495.367L354.451,494.79L355.016,495.078L355.768,494.218L355.768,493.064L356.522,492.779L357.085,494.218L358.028,494.218L358.028,495.078L360.663,495.943L361.228,498.818L362.545,498.818L362.734,499.392L363.674,499.392L364.24,500.256L366.686,501.405L369.323,501.405L371.769,500.545L374.592,501.693L375.346,500.833L377.227,500.256L378.733,501.693L378.545,503.992L379.11,504.568L381.933,505.146L383.627,502.843L385.887,505.146L386.793,505.146L386.793,505.146L386.839,506.393L385.912,507.38L384.421,507.38L384.501,508.241L383.897,508.305L383.897,510.396L384.421,511.136L384.179,513.966L383.131,514.274L383.373,515.384L382.566,516.366L383.816,516.675L384.139,518.277L384.421,516.86L385.469,517.599L385.792,520.185L384.864,521.045L385.348,525.17L384.743,525.972L384.945,528.802L386.598,532.74L385.832,534.65L386.396,537.113L384.703,537.852L382.365,537.974z",
  "Saint Lawrence": "M377.813,539.264L376.033,542.512L376.11,548.478L374.64,548.182L373.789,546.232L373.092,546.055L372.279,550.485L368.951,549.775L369.299,553.91L368.642,553.732L367.906,554.442L367.751,559.579L366.36,561.473L366.36,561.473L363.486,561.185L363.109,560.612L360.286,560.896L359.534,560.324L358.591,560.896L357.274,560.612L354.655,561.185L354.655,561.185L353.683,551.914L352.555,550.99L352.232,549.76L349.813,548.406L349.652,547.234L351.305,545.084L351.749,542.93L350.499,536.036L350.982,534.931L354.288,534.252L354.812,533.514L354.893,533.021L353.563,532.961L353.019,531.694L353.019,531.694L355.551,530.68L355.269,528.955L354.08,528.584L353.898,527.692L354.886,525.601L355.471,521.847L358.025,519.77L358.025,519.77L357.775,520.37L359.508,520.247L362.975,521.538L363.136,522.154L365.797,521.108L369.707,521.969L372.005,521.724L374.988,523.078L377.407,523.264L378.092,524.681L377.608,527.94L378.697,533.356L377.366,537.725z",
  "Saint Mary": "M358.025,519.77L355.471,521.847L354.886,525.601L353.898,527.692L354.08,528.584L355.269,528.955L355.551,530.68L353.019,531.694L353.019,531.694L351.912,530.751L350.122,531.047L348.155,532.401L348.139,533.707L346.607,533.19L345.269,534.422L344.656,534.173L343.833,531L342.544,531.517L340.931,531.221L340.528,528.193L340.979,528.095L340.915,527.207L340.334,526.224L338.916,525.829L338.851,523.809L336.867,521.554L336.867,521.554L337.594,520.902L337.594,520.117L336.658,519.474L337.335,517.212L334.594,516.126L332.627,516.275L329.918,514.452L328.048,514.255L324.468,511.25L323.318,508.309L323.318,508.309L325.086,506.871L327.157,507.731L326.78,506.871L327.532,506.583L327.721,505.718L328.851,505.718L329.792,506.871L331.673,506.871L332.427,505.718L333.369,505.718L333.933,506.871L335.25,506.871L335.438,506.006L336.38,506.006L337.321,504.568L340.71,505.146L340.71,503.708L341.462,502.555L343.533,500.912L343.533,500.912L344.271,501.776L348.463,502.883L349.108,504.667L351.245,505.161L351.97,505.899L353.139,505.283L354.913,506.33L355.477,509.043L354.994,509.781L354.268,509.532L354.308,510.827L353.26,512.612L352.535,513.228L351.849,513.042L350.72,515.135L350.761,517.906L354.751,514.274L356.001,514.029L357.734,516.244L358.944,516.615L359.428,518.092z",
  "Saint Ouen": "M336.867,521.554L333.658,522.45L333.594,523.484L331.884,525.454L330.466,525.506L329.95,526.935L329.337,526.836L330.208,533.384L329.466,533.925L329.466,535.057L327.724,537.618L325.112,539.339L324.725,540.866L320.436,541.359L316.534,544.264L315.179,543.475L315.083,541.655L314.019,539.982L305.697,541.28L305.697,541.28L304.756,534.753L303.062,531.88L302.309,531.592L301.933,529.579L301.179,528.719L301.367,527.854L299.862,526.705L298.921,524.692L298.167,524.692L297.792,522.968L296.473,521.818L296.473,519.232L295.721,518.084L293.461,516.932L293.275,515.782L291.392,516.07L290.638,517.508L288.944,517.22L289.321,514.922L288.567,514.922L288.38,514.057L289.321,513.196L289.321,512.332L287.815,510.318L288.003,509.457L286.686,506.871L287.062,502.555L287.626,501.693L288.944,501.405L288.944,500.256L291.015,498.818L291.956,496.517L296.096,496.517L297.604,497.669L297.415,498.242L298.921,498.242L299.673,499.107L301.744,499.392L301.933,498.818L302.873,498.818L303.25,495.078L304.379,495.078L304.945,493.929L306.262,493.641L306.451,496.517L309.462,497.669L310.215,499.107L314.168,500.545L314.92,501.405L316.051,500.833L316.991,501.693L317.557,503.42L319.439,503.42L319.814,505.146L322.075,506.583L322.263,507.731L323.318,508.309L323.318,508.309L324.468,511.25L328.048,514.255L329.918,514.452L332.627,516.275L334.594,516.126L337.335,517.212L336.658,519.474L337.594,520.117L337.594,520.902z",
  "Saint Peter": "M354.655,561.185L351.048,562.62L351.048,562.62L350.859,561.338L350.085,561.634L347.957,561.042L345.828,559.508L338.476,558.624L337.431,557.736L332.98,557.5L332.555,556.968L332.787,555.374L332.129,555.137L329.536,556.38L327.485,555.61L326.401,554.372L323.692,554.549L322.996,553.957L320.868,553.898L320.209,554.49L318.623,554.194L316.185,552.601L312.005,555.078L307.58,556.467L307.58,556.467L307.391,555.153L308.145,554.865L308.145,551.993L307.391,549.408L307.768,547.685L307.391,547.685L306.639,542.8L305.697,542.224L305.697,541.28L305.697,541.28L314.019,539.982L315.083,541.655L315.179,543.475L316.534,544.264L320.436,541.359L324.725,540.866L325.112,539.339L327.724,537.618L329.466,535.057L329.466,533.925L330.208,533.384L329.337,526.836L329.95,526.935L330.466,525.506L331.884,525.454L333.594,523.484L333.658,522.45L336.867,521.554L336.867,521.554L338.851,523.809L338.916,525.829L340.334,526.224L340.915,527.207L340.979,528.095L340.528,528.193L340.931,531.221L342.544,531.517L343.833,531L344.656,534.173L345.269,534.422L346.607,533.19L348.139,533.707L348.155,532.401L350.122,531.047L351.912,530.751L353.019,531.694L353.019,531.694L353.563,532.961L354.893,533.021L354.812,533.514L354.288,534.252L350.982,534.931L350.499,536.036L351.749,542.93L351.305,545.084L349.652,547.234L349.813,548.406L352.232,549.76L352.555,550.99L353.683,551.914z",
  Trinity: "M413.297,531.11L412.299,531.615L411.977,533.34L410.404,533.34L410.203,534.2L410.969,534.753L410.203,535.803L409.8,539.493L407.22,540.538L406.293,542.385L404.681,541.584L403.673,542.879L401.294,542.756L400.447,543.309L401.133,543.68L400.729,546.631L402.182,548.048L401.961,550.013L401.961,550.013L400.878,549.953L399.678,547.002L397.278,547.061L396.272,547.648L394.144,546.706L393.061,547.648L390.429,547.416L390.506,548.478L389.578,548.833L389.578,550.131L385.94,547.945L385.785,546.824L386.675,546.114L385.205,545.23L383.502,545.877L382.844,541.272L382.187,539.323L381.23,538.999L381.23,538.999L382.365,537.974L384.703,537.852L386.396,537.113L385.832,534.65L386.598,532.74L384.945,528.802L384.743,525.972L385.348,525.17L384.864,521.045L385.792,520.185L385.469,517.599L384.421,516.86L384.139,518.277L383.816,516.675L382.566,516.366L383.373,515.384L383.131,514.274L384.179,513.966L384.421,511.136L383.897,510.396L383.897,508.305L384.501,508.241L384.421,507.38L385.912,507.38L386.839,506.393L386.793,505.146L386.793,505.146L388.333,504.856L388.898,503.42L388.522,501.117L389.462,501.117L389.839,499.968L396.992,500.833L398.122,501.693L397.934,503.131L398.499,503.708L398.874,506.294L400.193,506.871L401.134,506.294L402.64,508.02L402.263,510.318L403.205,511.183L403.205,512.332L404.334,513.196L404.334,514.634L405.087,515.206L404.522,516.643L404.897,517.796L406.78,516.932L407.534,518.368L410.169,519.521L411.675,519.521L412.24,518.656L413.746,518.368L413.746,516.932L415.815,517.508L416.192,516.358L418.641,516.643L420.146,515.782L420.71,514.346L422.027,514.634L422.216,513.196L423.722,513.48L423.533,512.332L424.853,511.471L425.228,512.908L426.358,513.48L427.487,515.782L429.182,514.922L430.687,515.494L430.876,516.643L430.122,518.811L430.122,518.811L426.124,520.382L425.311,519.793L422.408,520.678L417.765,519.734L416.526,521.625L415.133,527.594L413.121,527.886z"
};

// src/Channelislands.tsx
var Channelislands = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect
}) => {
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId);
    if (path) {
      path.style.fill = mapColor || constants.MAPCOLOR;
    }
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox: "-30 -10 1500 650" }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react.default.createElement(
    "path",
    {
      key: index,
      onClick: () => onSelect(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: stateCode2,
      d: drawPath[stateCode2]
    }
  )))));
};
var Channelislands_default = Channelislands;

// src/index.ts
var src_default = Channelislands_default;
