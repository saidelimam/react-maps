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

// src/Middleeast.tsx
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
  "United Arab Emirates",
  "Bahrain",
  "Israel",
  "Iraq",
  "Iran",
  "Jordan",
  "Kuwait",
  "Lebanon",
  "Oman",
  "Palestinian Territories",
  "Qatar",
  "Saudi Arabia",
  "Syria",
  "Yemen"
];
var drawPath = {
  "United Arab Emirates": "M633.7,388.62l0.18,0.25l0.03,1.7l0.04,0.12l-0.1,0.02l-0.11,0.13l-0.13,0.2l-0.18,0.1l-0.14,0.12l-0.13,0.14l-0.12,0.03l-0.16,-0.18l-0.11,-0.19l0.03,-0.04l0.08,-0.01l0.03,-0.1l-0.04,-0.14l-0.11,-0.05l-0.13,0l-0.13,0.06l-0.13,0.12l-0.08,0.13l-0.01,0.27l0.04,0.3l0,0.15l-0.07,0.18l-0.03,0.27l0.05,0.21l0.05,0.12l0,0.1l-0.13,0.33l0.11,0.06l0.36,0.02l0.11,0.22l0.07,0.15l-0.02,0.09l-0.26,0.07l-0.32,0.07l-0.23,-0.02l-0.42,0.1l-0.22,0.15l0.07,0.1l0.08,0.07l0.04,0.2l-0.07,0.29l-0.12,0.28l-0.15,0.35l-0.17,0.4l-0.23,0.6l-0.2,0.47l-0.02,0.34l0,0.22l-0.02,0.44l-0.19,0.24l-0.04,0.01l-0.22,-0.03l-0.08,-0.01l-0.21,-0.03l-0.33,-0.04l-0.43,-0.06l-0.51,-0.07l-0.57,-0.07l-0.6,-0.08l-0.63,-0.08l-0.62,-0.08l-0.61,-0.08l-0.57,-0.07l-0.51,-0.07l-0.43,-0.06l-0.33,-0.04l-0.21,-0.03l-0.08,-0.01l-0.24,-0.03l-0.13,-0.16l-0.15,-0.2l-0.16,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.16,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.15,-0.2l-0.1,-0.13l-0.06,-0.15l-0.01,-0.4v-0.09l0.1,-0.16l0.05,0.11l0.12,0.16l0.2,-0.04l0.09,0.03l0.07,0.55l0.14,0.2l0.18,0.08l0.6,0.04l0.37,-0.07l0.73,-0.36l0.38,-0.13l1.06,0.02l0.85,0.15l1.33,0.09l0.26,-0.02l0.71,-0.29l0.44,-0.25l0.26,-0.07l0.17,-0.25l0.11,-0.32l0.1,-0.21l0.13,-0.1l0.12,-0.18l0.1,-0.29l0.25,-0.29l0.99,-0.71l0.58,-0.6l0.05,-0.19l0.31,-0.29l0.25,-0.32l1.17,-0.92l0.24,-0.38l0.14,-0.42l0.02,-0.03l0.1,-0.02l0.14,0.06l0.01,0.32l-0.05,0.3l-0.01,0.32l-0.02,0.17l0.11,0.14l0.19,0.06l0.08,-0.01L633.7,388.62zM633.65,389.9l0.02,-0.13l-0.03,-0.07l-0.12,-0.01l-0.05,0.11l-0.02,0.16l0.08,0.01L633.65,389.9zM628.56,392.34l-0.03,0.06l-0.08,-0.01l-0.2,-0.05l-0.06,-0.09l0.12,-0.1l0.05,-0.01l0.08,0.11L628.56,392.34zM625.38,392.9l-0.21,0.02l-0.19,-0.12l0.4,-0.16l0.11,-0.07l0.12,-0.14l0.09,0.12l-0.1,0.19l-0.07,0.08L625.38,392.9zM623.37,392.81l-0.05,0.02l-0.05,-0.17l0,-0.05l0.13,-0.08l0.08,0.14L623.37,392.81zM627.05,393.15l0,0.1l-0.29,-0.03l-0.08,0.05l-0.23,-0.03l-0.23,-0.08l0.16,-0.13l0.4,-0.15l0.17,0.13L627.05,393.15z",
  Bahrain: "M617.73,387.9L617.64,388.13L617.55,388.05L617.33,387.64L617.4,387.35L617.29,386.94L617.34,386.82L617.61,386.77L617.67,386.78L617.59,386.92L617.74,387.15L617.76,387.52z",
  Israel: "M576.14,365.93L575.99,365.95L575.64,366.11L575.6,366.16L575.53,366.25L575.52,366.32L575.47,367.06L575.29,367.04L575.06,366.88L575.01,366.74L574.94,366.69L574.78,366.67L574.47,366.6L574.11,366.84L573.96,367.25L573.93,367.44L573.8,367.83L573.85,368.08L573.87,368.39L573.9,368.65L573.87,368.8L573.8,368.89L573.82,368.95L573.88,368.97L574.08,368.9L574.28,368.97L574.48,369.1L574.5,369.19L574.36,369.24L574.02,369.44L573.79,369.67L573.73,369.89L573.57,370.34L573.59,370.44L573.67,370.49L574.21,370.44L574.7,370.26L575.07,370.06L575.19,370.07L575.11,370.58L575.12,370.58L575.05,370.89L575.08,370.94L575.16,371.21L575,371.7L574.83,372.09L574.76,372.28L574.59,372.7L574.42,373.19L574.32,373.52L574.34,373.64L574.3,374.25L574.32,374.42L574.12,374.95L574.08,375.21L573.99,375.57L573.85,376.31L573.66,376.56L573.56,376.28L573.34,375.49L573.18,374.94L572.97,374.26L572.61,373.44L572.57,373.24L572.5,372.95L572.25,372.2L572.04,371.66L571.81,370.96L572.1,370.68L572.1,370.46L572.6,369.92L572.59,369.87L572.46,369.73L572.48,369.7L573.02,368.71L573.38,367.72L573.71,366.33L573.94,365.63L574.14,365.16L574.23,364.77L574.55,364.75L574.79,364.79L575.08,364.8L575.31,364.65L575.42,364.22L575.55,364.15L575.62,364.25L575.69,364.13L575.99,363.94L576.14,363.82L576.29,363.66L576.37,363.61L576.32,363.82L576.28,363.95L576.28,364.12L576.34,364.22L576.42,364.41L576.47,364.6L576.36,364.76L576.37,364.92L576.4,365.06L576.49,365.22L576.33,365.51L576.18,365.78z",
  Iraq: "M601.33,350.91L601.33,350.93L601.43,351.18L601.66,352.11L601.79,352.22L601.94,352.32L602.05,352.46L602.09,352.59L602.07,352.81L602.08,353.06L602.14,353.25L602.23,353.39L602.31,353.46L602.43,353.47L602.57,353.5L602.67,353.65L602.98,354.69L603.01,354.83L603.14,354.87L603.35,354.85L603.57,354.96L603.8,355.13L604.02,355.44L604.17,355.5L604.63,355.45L605.27,355.5L605.57,355.66L605.53,355.76L605.31,355.88L604.9,356.01L604.78,356.23L604.72,356.52L604.73,356.68L604.83,356.86L605.11,357.21L605.13,357.34L605.18,357.52L605.23,357.64L605.17,357.88L604.92,358.04L604.58,358.21L603.89,359L603.84,359.17L603.85,359.63L603.78,359.76L603.57,359.76L603.4,359.74L603.39,359.9L603.28,360.11L603.22,360.3L603.47,360.74L603.51,360.98L603.48,361.19L603.24,361.55L603.11,361.8L603.14,361.86L603.32,361.95L603.88,362.76L604.06,363.04L604.3,362.96L604.39,362.97L604.46,363.01L604.5,363.11L604.5,363.23L604.44,363.41L604.74,363.48L604.85,363.66L605.21,364.29L605.19,364.47L605.02,364.76L605.02,364.96L605.06,365.13L605.11,365.19L605.63,365.22L605.86,365.29L606.4,365.6L607.01,366.09L607.52,366.49L607.95,366.82L608.4,366.8L608.53,366.86L608.65,366.96L608.78,367.24L609.04,367.87L609.26,368.07L609.61,368.57L609.93,369.04L609.72,369.67L609.51,370.33L609.51,371.18L609.51,371.63L609.95,371.65L610.44,371.67L610.44,372.21L610.45,372.76L610.45,373.38L610.6,373.4L610.83,373.53L610.92,373.73L611.05,373.84L611.19,373.86L611.34,373.96L611.48,374.14L611.54,374.27L611.5,374.36L611.53,374.53L611.63,374.76L611.75,374.87L611.94,375L611.69,375.08L611.41,375.02L610.81,374.75L610.62,374.74L610.36,374.84L610.35,374.94L609.72,374.63L609.49,374.57L609.41,374.57L609.05,374.57L608.53,374.62L608.23,374.75L608.02,374.88L607.93,375.01L607.89,375.07L607.73,375.45L607.54,375.93L607.34,376.37L606.96,376.98L606.75,377.26L606.29,377.78L605.8,377.89L604.66,377.78L603.39,377.67L602.13,377.55L601.2,377.47L601.12,377.44L600.2,376.7L599.46,376.11L598.55,375.37L597.62,374.61L596.67,373.84L595.98,373.28L595.14,372.56L594.38,371.9L593.78,371.38L593.01,370.92L592.41,370.56L591.53,370.04L590.83,369.63L590.23,369.27L589.3,368.71L589,368.56L588.04,368.38L587.13,368.22L586.19,368.06L585.56,367.95L585.97,367.56L585.85,367.21L585.55,367.27L585.27,367.36L585.1,366.8L585.31,366.74L585.12,366.01L584.91,365.27L584.72,364.55L584.52,363.81L585.31,363.33L585.91,362.98L586.74,362.48L587.54,362L588.3,361.54L589.14,361.04L589.89,360.58L590.58,360.4L590.73,360.25L591.04,359.63L591.31,359.1L591.32,358.98L591.33,358.22L591.37,357.33L591.46,356.85L591.62,356.43L591.76,356.12L591.77,355.83L591.76,355.54L591.61,355.09L591.45,354.63L591.47,354.18L591.5,353.94L591.6,353.55L591.76,353.27L591.94,353.1L592.59,352.92L592.98,352.81L593.5,352.31L593.81,352.01L594.24,351.54L594.55,351.19L594.58,351.07L594.58,351.02L594.85,350.95L595.36,350.53L595.65,350.13L595.75,350.1L596.01,350.23L596.2,350.27L596.64,350.12L596.9,350.19L597.12,350.29L597.24,350.3L597.83,350.55L597.97,350.58L598.28,350.61L598.73,350.62L599.02,350.46L599.22,350.3L599.37,350.31L599.51,350.35L599.62,350.41L599.72,350.53L599.77,350.69L599.75,351.22L599.8,351.36L599.87,351.46L599.98,351.48L600.1,351.37L600.31,351.2L600.58,351.02L600.77,350.85L600.89,350.79L601.06,350.8L601.24,350.83z",
  Iran: "M601.48,341.96l0.06,0.08l0.46,0.75l0.2,0.22l0.12,0.19l0.08,0.21l0.14,0.14l0.18,0.08l0.22,0.2l0.15,0.16l0.25,0.32l0.27,0.12l0.97,0.23l0.54,0.11l0.16,0.03l0.41,-0.16l0.49,0.02l0.18,0.01L607,344l0.19,-0.22l0.38,-0.11l0.21,-0.26l0.35,-0.32l0.42,-0.3l0.39,-0.27l0.3,-0.16l0.54,-0.38l0.33,-0.13l0.29,0l0.44,0.45l0.37,0.41l0.11,0.18l-0.18,0.16l-0.34,0.15l-0.06,0.11l-0.02,0.14l0.01,0.14l0.05,0.11l0.42,0.26l0.05,0.14l0,0.15l-0.05,0.09l-0.09,0.05l-0.29,0.07l-0.25,0.08l-0.09,0.08l-0.08,0.1l0.01,0.11l0.08,0.12l0.51,0.34l0.06,0.13l0.1,0.17l0.12,0.1l0.21,0.03l0.1,0.07l0.49,0.63l0.12,0.04l0.58,-0.14l0.08,0.01l0.01,0.15l0.09,0.89l0.07,0.46l0.1,0.44l0.16,0.4l0.18,0.38l0.25,0.24l0.56,0.28l0.27,0.08l0.72,0.06l0.71,0.13l0.42,0.13l0.13,0.09l0.11,0.14l0.35,0.67l0.55,0.47l1.11,0.71l0.54,0.24l1.81,0.45l1.2,-0.03l3.32,-0.86l1.1,-0.21h0.42l-0.25,0.17l-0.42,0.1l0.25,0.12l0.39,0.02l0.18,-0.02l0.13,-0.11l0.02,-0.18l-0.02,-0.18l-0.18,-0.8l-0.11,-0.57l0.78,0.04l0.3,-0.07l0.45,-0.19l0.34,-0.12l0.17,-0.02l0.17,-0.09l0.13,-0.11l0.29,-0.78l0.14,-0.2l0.49,-0.44l0.42,-0.28l0.44,-0.25l0.55,-0.17l0.74,0.02l0.59,0.06l0.34,0l0.16,0.02l0.12,-0.03l0.07,-0.05l0.08,-0.34l0.12,-0.11l0.21,-0.1l0.29,0l0.35,-0.02l0.29,0.02l0.37,0.13l0.48,0.01l0.32,-0.02l0.19,0.13l0.13,0.17l0.07,0.15l0.01,0.2l0,0.15l0.05,0.06l0.2,0.09l0.27,0.07l0.53,0.08l0.5,0.16l0.26,0.11l0.36,0.17l0.43,0.41l0.16,0.07l0.19,0.04l0.14,-0.01l0.32,-0.18l0.28,0.13l0.14,-0.02l0.32,-0.1l0.34,0.12l0.85,0.45l0.09,-0.01l0.08,0.05l0.07,0.1l0.05,0.13l0.06,0.39l0.25,0.28l0.3,0.26l0.35,0.14l0.73,0.34l0.32,0.28l0.32,0.47l0.4,0.61l0.06,0.06l1.03,-0.02l1.16,0l0.14,0.24l-0.03,0.48l0.04,0.5l0.1,0.34l0,0.32l-0.08,0.16l-0.07,0.18l-0.02,0.08l0.15,0.11l0.13,0.26l0.02,0.36l-0.06,0.19l0.01,0.16l0.07,0.14l0.06,0.23l-0.01,0.14l-0.09,0.14l-0.06,0.17l-0.07,0.22l-0.03,0.17l-0.14,0.08l-0.11,0.06l0.02,0.21l0.06,0.18l0.07,0.21l-0.07,0.15l-0.05,0.17l-0.1,0.27l0.03,0.23l-0.11,0.19l-0.14,0.17l-0.09,0.13l-0.02,0.19l-0.1,0.07l-0.2,0.16l-0.12,0.11l-0.18,0.03l-0.04,0.09l0.03,0.09l0.07,0.06l0.12,0.19l0.24,0.33l-0.69,0.04l-0.2,0.3l-0.24,0.42l0.12,0.85l-0.12,0.44l0.07,0.25l0.18,0.17l0.23,0.09l0.43,0.01l0.28,0.07l0.03,0.11l-0.16,0.16l-0.26,0.31l-0.14,0.13l-0.44,0.62l0,0.26l0.04,0.21l0.19,0.67l0.19,0.65l0.33,1.16l-0.01,0.27l-0.1,0.6l-0.01,0.36l0.05,0.47l-0.04,0.24l0.08,0.54l0.09,0.04l0.72,0.1l0.66,0.1l0.88,0.13l0.27,0.32l0.17,0.69l-0.01,0.52l-0.08,0.26l-0.63,0.76l-0.64,0.76l-0.64,0.76l-0.66,0.79l-0.07,0.08l0.54,0.63l0.33,0.39l0.47,0.55l0.06,0.13l0,0.21l0.48,0.83l0.17,0.43l0.15,0.25l0.38,0.39l0.37,0.39l0.4,0.18l0.27,0.04l0.62,0.2l0.23,0.16l0.37,0.41l0.43,-0.06h0.09l0.02,0.03l0.01,0.13l-0.06,0.63l0.12,0.64l0.08,0.96l-0.03,0.17l-0.1,0.28l0,0.18l-0.03,0.11l0.03,0.05l0.14,0.06l0.29,0.03l0.71,-0.11l0.08,0.03l0.17,0.11l0.13,0.18l0.01,0.08l-0.18,0.15l-0.03,0.25l0.05,0.37l-0.02,0.05l-0.16,0.08l-0.05,0.54l-0.03,0.05l-0.18,0.05l-0.86,-0.04l-0.1,0.02l-0.32,0.14l-0.55,0.1l-0.15,0.06l-0.2,0.16l-0.15,0.2l-0.03,0.18l-0.03,0.04l-0.32,-0.04l-0.1,0.16l-0.62,0.24l-0.08,0.05l-0.09,0.19l-0.08,0.53l-0.07,0.47l-0.05,0.07l-0.19,0.16l-0.02,0.05l0.03,0.18l-0.09,0.33l-0.07,0.92l-0.08,0.26l-0.15,0.02l-0.12,0.13l-0.22,0.16l-0.47,-0.12l-0.38,-0.13l-1.25,-0.3l-0.14,-0.15l-0.08,-0.26l-0.22,-0.07l-0.31,0.39l-1.05,-0.22l-0.36,0.07l-0.22,-0.12l-0.57,-0.01l-0.45,-0.24l-0.64,0.17l-0.51,0.03l-0.7,-0.42l-0.75,-0.12l-0.61,0.04l-0.31,-0.03l-0.51,-0.15l-0.24,-0.16l-0.39,0.12l-0.18,-0.22l-1.12,-0.21l-0.21,-0.4l-0.16,-0.37l-0.01,-0.38l-0.27,-0.66l-0.09,-0.96l-0.1,-0.38l-0.15,-0.33l-0.2,-0.28l-0.27,-0.3l-0.24,-0.12l-1.04,-0.23l-0.2,0.03l-0.47,0.15l-0.5,0.33l-0.82,0.19l-0.16,0.14l-0.21,0.32l-0.27,0.19l-0.36,-0.05l-0.39,0.19l-0.73,0.53l-0.38,0.16l-0.32,-0.01l-0.34,-0.25l-0.77,-0.34l-0.5,-0.11l-0.69,0.08l-0.33,-0.06l-0.56,-0.39l-0.15,-0.29l-0.32,-0.19l-1.01,-0.43l-0.82,-0.57l-0.15,-0.22l-0.1,-0.32l-0.36,-0.39l-0.8,-0.32l-0.45,-0.34l-0.53,-0.08l-0.49,0.01l-0.22,-0.06l-0.2,-0.14l-0.67,-0.7l-0.01,-0.28l-0.42,-0.69l-0.1,-0.24l-0.09,-0.68l-0.12,-0.18l-0.43,-0.28l-0.07,-0.18l0.09,-0.24v-0.19l-0.22,-0.17l-0.34,-0.09l-0.08,-0.21l0.06,-0.41l-0.05,-0.26l-0.3,-0.41l-0.44,-0.42l-0.44,-0.62l-0.17,-0.16l-0.11,-0.41l-0.16,-0.49l-0.25,-0.04l-1.2,0.58l-0.35,-0.33l-1.05,-0.57l-0.07,-0.09l-0.07,-0.13l0.13,-0.08l0.13,-0.03l0.26,0.1l0.16,-0.12l-0.06,-0.19l-0.26,-0.12l-0.36,0.01l0.1,0.18l-0.34,0.17l-0.07,0.23l0.05,0.28l0.03,0.39l-0.14,0.19l-0.11,0.09l-0.45,0.02l-0.21,0.17l-0.14,0.04l-0.19,-0.13l-0.12,-0.11l-0.1,-0.23l-0.03,-0.16l0.04,-0.09l-0.05,-0.13l-0.15,-0.18l-0.15,-0.1l-0.15,-0.02l-0.12,-0.11l-0.1,-0.2l-0.23,-0.13l-0.14,-0.03l0,-0.62l0,-0.54l0,-0.54l-0.49,-0.02l-0.44,-0.02v-0.45v-0.85l0.21,-0.66l0.21,-0.63l-0.32,-0.47l-0.35,-0.5l-0.22,-0.21l-0.26,-0.63l-0.13,-0.28l-0.12,-0.1l-0.13,-0.06l-0.46,0.02l-0.43,-0.34l-0.5,-0.4l-0.62,-0.48l-0.54,-0.32l-0.22,-0.07l-0.52,-0.02l-0.06,-0.06l-0.04,-0.17l0,-0.19l0.17,-0.29l0.01,-0.18l-0.35,-0.62l-0.11,-0.18l-0.3,-0.07l0.06,-0.18v-0.12l-0.04,-0.09l-0.07,-0.05l-0.09,0l-0.24,0.07l-0.18,-0.28l-0.56,-0.8l-0.18,-0.1l-0.03,-0.06l0.14,-0.25l0.23,-0.37l0.04,-0.21l-0.04,-0.23l-0.25,-0.44l0.06,-0.19l0.11,-0.22l0.01,-0.16l0.17,0.02l0.21,0l0.07,-0.13l0,-0.46l0.05,-0.17l0.68,-0.78l0.34,-0.18l0.26,-0.16l0.06,-0.24l-0.05,-0.12l-0.05,-0.18l-0.02,-0.13l-0.28,-0.35l-0.1,-0.18l-0.01,-0.16l0.07,-0.29l0.12,-0.22l0.4,-0.13l0.23,-0.11l0.03,-0.1l-0.3,-0.16l-0.63,-0.05l-0.46,0.05l-0.15,-0.05l-0.22,-0.32l-0.23,-0.17l-0.22,-0.11l-0.21,0.02l-0.13,-0.04l-0.03,-0.14l-0.31,-1.04l-0.1,-0.14l-0.14,-0.04l-0.12,-0.01l-0.08,-0.07l-0.09,-0.14l-0.06,-0.19l0,-0.25l0.01,-0.21l-0.04,-0.14l-0.11,-0.14l-0.15,-0.1l-0.13,-0.12l-0.23,-0.93l-0.09,-0.25l0,-0.03l0,-0.05l-0.02,-0.21l0.11,-0.18l-0.01,-0.07l-0.22,-0.23l-0.31,-0.23l-0.08,-0.04l0,-0.25l0.01,-0.19l-0.03,-0.17l-0.06,-0.1l0,-0.08l0.13,-0.18l-0.08,-0.12l-0.46,-0.3l-0.17,-0.15l-0.32,-0.03l-0.03,-0.1l0.05,-0.21l0.11,-0.25l0.17,-0.25l0.05,-0.13l0.07,-0.23l0.02,-0.16l0.19,-0.22l0,-0.06l-0.05,-0.08l-0.15,-0.05l-0.16,-0.02l-0.06,-0.04l-0.02,-0.12l0.02,-0.49l-0.05,-0.3l-0.06,-0.21l0.04,-0.49l-0.11,-0.1l-0.17,-0.26l-0.07,-0.22l0.04,-0.08l0.04,-0.14l0.02,-0.19l-0.01,-0.13l-0.16,-0.13l-0.12,-0.14l-0.01,-0.15l-0.05,-0.18l-0.07,-0.15l-0.03,-0.1l0.06,-0.06l0.23,-0.04l0.33,0.03l0.27,0l0.15,-0.09l0.19,-0.89l0.17,-0.23l0.2,-0.14l0.39,0.32l0.16,0.11L601.48,341.96zM633.39,384.66l-0.26,0.38l-0.39,0.31l-0.17,-0.1l-0.13,0l-0.28,0.12l-0.2,0.02l-0.37,0.21l-0.34,0.11l-0.23,-0.01l-0.08,-0.02l-0.05,-0.15l0,-0.06l0.14,0.03l0.52,-0.19l0.65,-0.32l0.06,-0.14l-0.1,-0.23l0.03,-0.05l0.42,0.12l0.47,-0.23l0.39,-0.06l0.18,0.16L633.39,384.66z",
  Jordan: "M585.56,367.95L585.14,368.34L585.05,368.38L584.51,368.54L583.4,368.87L582.66,369.08L581.71,369.36L580.92,369.59L580.14,369.82L579.42,370.03L579.83,370.48L580.46,371.16L580.88,371.61L581.38,372.2L581.82,372.71L582.29,373.26L581.96,373.45L581.42,373.76L581.36,373.81L581.32,373.87L581.09,374.41L580.92,374.84L580.86,374.9L580.1,375.05L579.33,375.21L578.85,375.31L578.71,375.42L578.39,375.96L578.07,376.5L577.53,376.95L576.93,377.45L576.78,377.48L576.34,377.4L575.6,377.27L574.88,377.15L574.39,377.06L573.79,376.96L573.88,376.54L573.85,376.31L573.99,375.57L574.08,375.21L574.12,374.95L574.32,374.42L574.3,374.25L574.34,373.64L574.32,373.52L574.42,373.19L574.59,372.7L574.76,372.28L574.83,372.09L575,371.7L575.16,371.21L575.08,370.94L575.05,370.89L575.12,370.58L575.11,370.58L575.19,370.07L575.23,369.8L575.33,369.44L575.5,369.14L575.42,368.41L575.43,368.02L575.53,367.58L575.47,367.06L575.52,366.32L575.53,366.25L575.6,366.16L575.64,366.11L575.99,365.95L576.14,365.93L576.44,366L576.61,366.16L576.9,366.6L577.35,366.73L577.53,366.85L577.78,367.09L578.08,367.17L579.03,367.32L579.79,366.83L580.43,366.41L581.16,365.94L581.66,365.62L582.5,365.07L583.06,364.72L583.79,364.26L584.52,363.81L584.72,364.55L584.91,365.27L585.12,366.01L585.31,366.74L585.1,366.8L585.27,367.36L585.55,367.27L585.85,367.21L585.97,367.56z",
  Kuwait: "M610.35,374.94l-0.01,0.12l0.09,0.35l0.2,0.39l0.17,0.31l0.02,0.15l-0.15,-0.02l-0.12,-0.06l-0.22,-0.06l-0.43,0.42l-0.26,0.23l-0.01,0.08l0.34,0.09l0.25,0l0.18,-0.06l0.15,0.1l0.1,0.26l0.04,0.21l0.23,0.74l0.19,0.25l0.24,0.44l0.09,0.23l0.05,0.19l0.15,0.28l-0.49,0.01l-0.61,0.01l-0.5,0.01l-0.56,0.01l-0.25,-0.3l-0.08,-0.33l-0.09,-0.34l-0.25,-0.48l-0.83,-0.12l-0.44,-0.06l-0.72,-0.09l-0.54,-0.07l0.46,-0.52l0.21,-0.28l0.38,-0.61l0.2,-0.43l0.19,-0.48l0.16,-0.38l0.03,-0.07l0.1,-0.13l0.21,-0.13l0.3,-0.12l0.52,-0.05l0.36,0l0.08,0.01l0.23,0.06L610.35,374.94zM611.18,376.09l-0.16,0.07l-0.11,-0.03l-0.1,-0.17l-0.17,-0.43l0.09,-0.16l0,-0.07l0.02,-0.05l0.05,-0.03l0.06,-0.2l0.07,-0.06l0.12,0.14l0.34,0.49l0,0.2l-0.02,0.08L611.18,376.09z",
  Lebanon: "M576.37,363.61L576.29,363.66L576.14,363.82L575.99,363.94L575.69,364.13L575.62,364.25L575.55,364.15L575.42,364.22L575.31,364.65L575.08,364.8L574.79,364.79L574.55,364.75L574.23,364.77L574.36,364.52L574.5,364.19L574.63,363.74L574.87,363.37L575.36,362.11L575.64,361.59L575.75,360.86L576.18,360.22L576.51,360.04L576.67,359.85L576.67,359.57L577.16,359.58L577.47,359.56L577.56,359.41L577.81,359.48L577.95,359.63L577.82,359.79L577.65,359.97L577.66,360.01L577.79,360.03L578.01,360.13L578.15,360.24L578.38,360.96L578.23,361.25L578.02,361.51L577.92,361.53L577.73,361.66L577.57,361.84L577.51,361.95L577.53,362.06L577.75,362.19L577.76,362.24L577.71,362.28L577.53,362.26L577.29,362.24L577.15,362.24L576.99,362.27L576.79,362.43L576.69,362.53L576.64,362.6L576.57,362.82L576.65,362.97L576.81,363.05L576.83,363.1L576.8,363.17L576.64,363.27L576.53,363.38L576.49,363.5z",
  Oman: "M633.7,388.62l-0.05,0.07l-0.08,0.01l-0.19,-0.06l-0.11,-0.14l0.02,-0.17l0.01,-0.32l0.05,-0.3l-0.01,-0.32l-0.14,-0.06l-0.1,0.02l0.24,-0.45l0.09,-0.07l0.09,0.03l0.22,-0.05l0.11,-0.24l0.09,-0.13l0.1,0.02l0.05,0.07l-0.03,0.37l0,0.31l-0.12,0.94l-0.12,0.16l-0.06,0.13L633.7,388.62zM633.65,389.9l-0.12,0.08l-0.08,-0.01l0.02,-0.16l0.05,-0.11l0.12,0.01l0.03,0.07L633.65,389.9zM624.68,415.58l-0.17,-0.38l-0.17,-0.38l-0.17,-0.38l-0.17,-0.38l-0.12,-0.27l-0.2,-0.09l-0.12,-0.29l-0.12,-0.29l-0.12,-0.29l-0.12,-0.29l-0.12,-0.29l-0.13,-0.29l-0.12,-0.29l-0.12,-0.29l-0.12,-0.29l-0.13,-0.29l-0.12,-0.29l-0.12,-0.29l-0.12,-0.29l-0.12,-0.29l-0.13,-0.29L621.7,409l-0.12,-0.29l0.4,-0.14l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.48,-0.17l0.3,-0.11l0.12,-0.4l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.1,-0.33l0.09,-0.31l-0.18,-0.29l-0.24,-0.4l-0.25,-0.41l-0.23,-0.39l-0.17,-0.28l-0.21,-0.34l0.02,-0.44l0,-0.22l0.02,-0.34l0.2,-0.47l0.23,-0.6l0.17,-0.4l0.15,-0.35l0.12,-0.28l0.07,-0.29l-0.04,-0.2l-0.08,-0.07l-0.07,-0.1l0.22,-0.15l0.42,-0.1l0.23,0.02l0.32,-0.07l0.26,-0.07l0.02,-0.09l-0.07,-0.15l-0.11,-0.22l-0.36,-0.02l-0.11,-0.06l0.13,-0.33l0,-0.1l-0.05,-0.12l-0.05,-0.21l0.03,-0.27l0.07,-0.18l0,-0.15l-0.04,-0.3l0.01,-0.27l0.08,-0.13l0.13,-0.12l0.13,-0.06l0.13,0l0.11,0.05l0.04,0.14l-0.03,0.1l-0.08,0.01l-0.03,0.04l0.11,0.19l0.16,0.18l0.12,-0.03l0.13,-0.14l0.14,-0.12l0.18,-0.1l0.13,-0.2l0.11,-0.13l0.1,-0.02l0.29,0.81l0.42,0.76l0.37,0.42l0.39,0.56l0.59,0.52l0.27,0.18l1.1,0.36l0.6,0.14l0.83,0.13l0.57,0.28l0.19,0.02l0.3,-0.08l0.22,0.01l0.55,0.38l0.16,0.36l0.23,0.19l0.2,0.3l0.13,0.32l0.46,0.48l0.33,0.54l0.33,0.4l0.3,0.25l0.45,0.1l0.36,0.11l0.04,0.27l-0.04,0.35l-0.07,0.26l-0.33,0.5l-0.08,0.31l-0.38,0.51l-0.41,0.85l-0.19,0.19l-0.66,0.44l-0.49,0.53l-0.58,0.91l-0.44,0.9l-0.17,0.29l-0.35,0.06l-0.23,-0.03l-0.16,-0.08l0.06,-0.25l0.04,-0.27l-0.21,0.03l-0.19,0.06l-0.44,0.68l-0.24,0.3l-0.05,0.38l-0.12,0.48l-0.17,0.45l-0.08,0.37l0,0.21l0.13,0.52l0.01,0.53l0.07,0.32l0.06,0.38l-0.21,0.12l-0.18,0.06l-0.7,0.04l-0.71,0.12l-0.62,0.22l-0.37,0.22l-0.48,0.49l-0.29,1.24l-0.47,0.52l-0.32,0.11l-0.76,0.05l-1.08,0.14l-0.38,0.13l-0.63,0.75l-0.05,0.24l0.12,0.17l0.04,0.19l-0.06,0.18l-0.29,0.48l-0.31,0.35l-0.82,0.22l-0.3,-0.13l-0.28,-0.07l-0.53,-0.01l-0.87,0.08l-0.32,0.26l-0.5,0.18l-0.46,0.28l-0.88,0.11L624.68,415.58zM640.5,405.08l-0.18,0.04l-0.05,-0.02l0,-0.38l0.41,-0.47l0.27,-0.55l0.19,0.49l-0.33,0.27l-0.18,0.47L640.5,405.08z",
  "Palestinian Territories": "M572.1,370.68l-0.29,0.28l-0.09,-0.27l-0.04,-0.1l0.53,-0.53l0.25,-0.33l0.13,0.14l0,0.05l-0.49,0.53L572.1,370.68zM575.42,368.41l0.08,0.72l-0.17,0.31l-0.1,0.36l-0.04,0.27l-0.12,-0.01l-0.37,0.2l-0.49,0.19l-0.54,0.05l-0.08,-0.06l-0.02,-0.09l0.16,-0.46l0.06,-0.22l0.23,-0.23l0.33,-0.2l0.14,-0.05l-0.02,-0.09l-0.2,-0.13l-0.21,-0.07l-0.2,0.07l-0.06,-0.02l-0.02,-0.06l0.07,-0.08l0.03,-0.15l-0.03,-0.26l-0.02,-0.31l-0.04,-0.24l0.12,-0.4l0.03,-0.19l0.15,-0.4l0.36,-0.25l0.31,0.07l0.16,0.02l0.07,0.05l0.04,0.14l0.23,0.16l0.19,0.02l0.06,0.52l-0.1,0.44L575.42,368.41z",
  Qatar: "M619.58,391.83L619.33,391.9L619.09,391.96L618.89,391.96L618.74,391.93L618.63,391.87L618.42,391.61L618.28,391.27L618.37,391.09L618.4,390.97L618.21,390.08L618.14,389.39L618.17,389.25L618.28,389.09L618.46,388.73L618.56,388.39L618.84,387.59L619.13,387.28L619.57,387.06L619.92,387.5L620.35,387.84L620.44,388.21L620.31,388.52L620.19,389.01L620.26,389.23L620.29,389.42L620.41,389.75L620.52,390.17L620.54,390.46L620.48,390.73L620.33,390.96L620.03,391.65L619.94,391.72z",
  "Saudi Arabia": "M606.29,377.78l0.54,0.07l0.72,0.09l0.44,0.06l0.83,0.12l0.25,0.48l0.09,0.34l0.08,0.33l0.25,0.3l0.56,-0.01l0.5,-0.01l0.61,-0.01l0.49,-0.01l0.16,0.3l0.07,0.3l0.29,0.7l0.41,0.55l0.1,0.2l0.07,0.3l-0.07,0.11l-0.03,0.13l0.31,0.3l0.51,0.25l0.2,0.06l0.22,0.11l-0.17,0.17l0.3,0.4l0.35,0.41l0.37,0.09l0.5,0.61l0.76,0.4l0.46,0.52l-0.04,0.01l-0.13,-0.05l-0.17,-0.07l-0.05,0.06l0.01,0.22l0.04,0.26l0.23,0.22l0.21,0.16l0.08,0.3l-0.16,0.65l-0.06,0l-0.11,-0.06l-0.12,-0.01l-0.06,0.04l0.14,0.46l0.14,0.36l0.17,0.28l0.14,0.41l0.12,0.18l0.49,0.44l0.15,0.36l0.14,0.68l0.31,0.38l0.17,0.29l0.22,0.25l0.14,0.34l0.2,0.26l0.11,0.06l0.16,0.03l0.2,0l0.24,-0.07l0.25,-0.06l0.2,0.13l0.2,-0.02l0.02,0.12l-0.14,0.17l-0.17,0.42l0.24,0.07l0.23,0.03l0.16,0.07h0.09v0.09l0.01,0.4l0.06,0.15l0.1,0.13l0.15,0.2l0.15,0.2l0.15,0.2l0.15,0.2l0.15,0.2l0.16,0.2l0.15,0.2l0.15,0.2l0.15,0.2l0.15,0.2l0.15,0.2l0.15,0.2l0.15,0.2l0.15,0.2l0.16,0.2l0.15,0.2l0.13,0.16l0.24,0.03l0.08,0.01l0.21,0.03l0.33,0.04l0.43,0.06l0.51,0.07l0.57,0.07l0.61,0.08l0.62,0.08l0.63,0.08l0.6,0.08l0.57,0.07l0.51,0.07l0.43,0.06l0.33,0.04l0.21,0.03l0.08,0.01l0.22,0.03l0.04,-0.01l0.19,-0.24l0.21,0.34l0.17,0.28l0.23,0.39l0.25,0.41l0.24,0.4l0.18,0.29l-0.09,0.31l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.1,0.33l-0.12,0.4l-0.3,0.11l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.48,0.17l-0.4,0.14l-0.66,0.09l-0.64,0.09l-0.72,0.1l-0.87,0.12l-0.68,0.1l-0.99,0.14l-0.89,0.13l-0.83,0.12l-0.83,0.12l-0.71,0.1l-0.42,0.12l-0.5,0.25l-0.76,0.39l-0.78,0.4l-0.4,0.21l-0.42,0.53l-0.21,0.27l-0.39,0.48l-0.29,0.36l-0.35,0.43l-0.15,0.39l-0.23,0.6l-0.2,0.15l-0.33,0.19l-0.3,0.14l-0.47,-0.02l-0.27,-0.37l-0.28,-0.39l-0.14,-0.16l-0.13,-0.01l-0.47,0.05l-0.57,0.06l-0.67,-0.06l-0.78,-0.07l-0.73,-0.07l-0.36,-0.05l-0.48,-0.25l-0.12,-0.05l-0.13,-0.01l-0.57,-0.01l-0.56,-0.01l-0.56,0.08l-0.54,-0.03l-0.56,0.05l-0.2,0.1l-0.22,-0.01l-0.14,0.08l-0.12,0.04l-0.14,-0.07l-0.17,0.02l-0.26,-0.06l-0.17,-0.16l-0.16,-0.15l-0.16,-0.08l-0.18,-0.05l-0.16,0l-0.2,0.09l-0.12,0.09l-0.31,0.28l-0.01,0.1l0.14,0.17l-0.04,0.08l-0.18,0.1l-0.06,0.27l-0.03,0.15l-0.03,0.35l0.08,0.28l0.11,0.1l0,0.12l-0.06,0.24l-0.17,0.07l-0.12,0.23l-0.08,0.11l-0.13,0.12l-0.52,0.4l-0.03,-0.23l-0.17,-0.34l-0.01,-0.24l-0.08,-0.24l-0.14,-0.19l-0.27,-0.2l-0.02,-0.27l-0.19,-0.26l-0.26,-0.21l-0.14,-0.39l-0.11,-0.52l-0.68,-0.69l-0.85,-0.63l-0.26,-0.36l-0.42,-0.73l-0.21,-0.58l-0.57,-0.67l-0.02,-0.26l-0.08,-0.31l-0.13,-0.35l-0.08,-0.27l-0.57,-1.21l-0.18,-0.19l-0.16,-0.27l-0.04,-0.21l-0.05,-0.11l-0.4,-0.2l-0.38,-0.51l-1.13,-0.81l-0.55,-0.08l-0.44,-0.29l-0.32,-0.38l-0.34,-0.65l-0.6,-0.71l-0.51,-1.01l0.16,-0.37l-0.01,-0.26l-0.16,-0.44l-0.17,-0.34l-0.12,-0.32l0.09,-0.46l0.04,-0.51l0.1,-0.27l0.07,-0.3l-0.1,-0.6l-0.17,-0.32l0.02,-0.21l-0.19,-0.1l-0.16,-0.23l0.16,0l-0.3,-0.32l-0.11,-0.18l-0.11,-0.44l-0.14,-0.34l-0.46,-0.77l-0.22,-0.47l-0.49,-0.61l-0.53,-0.45l-0.34,-0.2l-0.16,-0.19l-0.28,-0.01l-0.3,-0.27l-0.21,-0.01l-0.27,-0.04l-0.31,-0.51l-0.26,-0.48l-0.44,-0.63l0.11,-0.16l0.13,-0.27l-0.06,-0.35l-0.07,-0.24l-0.19,-0.43l-0.64,-1.08l-0.17,-0.16l-0.27,-0.18l-0.17,-0.47l-0.08,-0.42l-0.44,-0.21l-0.76,-1.53l-0.44,-0.53l-0.17,-0.36l-0.51,-0.59l-0.25,-0.59l-0.51,-0.55l-0.44,-0.95l-0.68,-0.95l-0.29,-0.16l-0.7,-0.07l-0.3,-0.07l-0.27,0.21l-0.02,-0.27l0.19,-0.37l0.27,-0.77l0.05,-0.68l0.43,-2.02l0.6,0.1l0.49,0.09l0.72,0.13l0.74,0.13l0.44,0.08l0.15,-0.03l0.6,-0.5l0.54,-0.45l0.32,-0.55l0.31,-0.53l0.14,-0.11l0.48,-0.1l0.76,-0.16l0.76,-0.16l0.06,-0.05l0.18,-0.43l0.22,-0.55l0.05,-0.06l0.06,-0.06l0.54,-0.31l0.33,-0.19l-0.47,-0.55l-0.44,-0.52l-0.5,-0.58l-0.42,-0.45l-0.63,-0.68l-0.41,-0.45l0.72,-0.21l0.78,-0.23l0.79,-0.23l0.95,-0.28l0.74,-0.22l1.11,-0.33l0.54,-0.16l0.1,-0.04l0.42,-0.39l0.63,0.11l0.94,0.16l0.91,0.16l0.96,0.18l0.31,0.15l0.92,0.55l0.6,0.36l0.7,0.42l0.88,0.52l0.6,0.36l0.77,0.46l0.6,0.52l0.76,0.66l0.84,0.72l0.69,0.56l0.95,0.77l0.93,0.76l0.92,0.74l0.73,0.59l0.93,0.75l0.07,0.03l0.94,0.08l1.26,0.11l1.27,0.11l1.14,0.1L606.29,377.78zM578.4,388.42l-0.03,0.04l-0.12,-0.11l0.01,-0.24l0.1,-0.14l-0.01,0.19l0.04,0.19L578.4,388.42zM579.26,389.44h-0.07l-0.2,-0.21l-0.12,-0.15l-0.12,-0.1l-0.54,-0.21l-0.07,-0.13l0.08,-0.13l0.06,0.13l0.1,0.08l0.45,0.19l0.5,0.41l0.09,0.03L579.26,389.44zM593.54,415.39l0.22,0.02l-0.09,-0.09l-0.02,-0.05l0.09,-0.13l0.31,0.28l-0.01,0.33l-0.03,0.07l-0.08,-0.07l-0.05,-0.07l-0.02,-0.07l-0.09,-0.08l-0.3,0.05l-0.19,-0.09l-0.27,-0.28l-0.07,-0.2l0.11,-0.04l0.12,-0.1l0.07,-0.16l-0.07,-0.16l0.16,0.03l0.09,0.17l0.02,0.38l0.02,0.08l-0.04,0.09L593.54,415.39z",
  Syria: "M594.58,351.02L594.58,351.07L594.55,351.19L594.24,351.54L593.81,352.01L593.5,352.31L592.98,352.81L592.59,352.92L591.94,353.1L591.76,353.27L591.6,353.55L591.5,353.94L591.47,354.18L591.45,354.63L591.61,355.09L591.76,355.54L591.77,355.83L591.76,356.12L591.62,356.43L591.46,356.85L591.37,357.33L591.33,358.22L591.32,358.98L591.31,359.1L591.04,359.63L590.73,360.25L590.58,360.4L589.89,360.58L589.14,361.04L588.3,361.54L587.54,362L586.74,362.48L585.91,362.98L585.31,363.33L584.52,363.81L583.79,364.26L583.06,364.72L582.5,365.07L581.66,365.62L581.16,365.94L580.43,366.41L579.79,366.83L579.03,367.32L578.08,367.17L577.78,367.09L577.53,366.85L577.35,366.73L576.9,366.6L576.61,366.16L576.44,366L576.14,365.93L576.18,365.78L576.33,365.51L576.49,365.22L576.4,365.06L576.37,364.92L576.36,364.76L576.47,364.6L576.42,364.41L576.34,364.22L576.28,364.12L576.28,363.95L576.32,363.82L576.37,363.61L576.49,363.5L576.53,363.38L576.64,363.27L576.8,363.17L576.83,363.1L576.81,363.05L576.65,362.97L576.57,362.82L576.64,362.6L576.69,362.53L576.79,362.43L576.99,362.27L577.15,362.24L577.29,362.24L577.53,362.26L577.71,362.28L577.76,362.24L577.75,362.19L577.53,362.06L577.51,361.95L577.57,361.84L577.73,361.66L577.92,361.53L578.02,361.51L578.23,361.25L578.38,360.96L578.15,360.24L578.01,360.13L577.79,360.03L577.66,360.01L577.65,359.97L577.82,359.79L577.95,359.63L577.81,359.48L577.56,359.41L577.47,359.56L577.16,359.58L576.67,359.57L576.45,358.82L576.42,358.49L576.42,358.11L576.57,357.55L576.5,357.29L576.5,357.11L576.46,356.87L576.07,356.36L576.28,355.4L576.43,355.17L576.64,355.19L577.09,355.46L577.16,355.45L577.3,355.1L577.43,354.97L577.71,354.87L577.79,354.29L577.92,354.18L578.07,354.12L578.31,354.11L578.52,354.07L578.53,353.97L578.24,353.3L578.27,353.13L578.41,352.45L578.5,352.18L578.58,352.09L578.91,352.13L579.38,352.25L579.5,352.44L579.73,352.62L580.07,352.61L580.46,352.64L580.76,352.65L581.01,352.53L581.56,352.3L581.84,352.22L582.08,352.12L582.88,351.75L583.2,351.78L583.42,351.83L583.59,351.89L583.97,352.14L584.28,352.4L584.5,352.48L584.89,352.47L585.46,352.52L586.15,352.52L586.56,352.44L587.08,352.32L588,352.01L589.22,351.37L589.94,351.06L590.25,351.03L590.65,351.02L591.05,351.1L591.51,351.16L591.72,351.16L592.21,351.09L592.85,350.96L593.25,350.86L593.74,350.68L594.04,350.39L594.14,350.36L594.27,350.41L594.33,350.43L594.45,350.6z",
  Yemen: "M624.68,415.58l-1.42,0.52l-0.37,0.23l-0.34,0.28l-0.25,0.35l-0.18,0.62l0.13,0.57l-0.01,0.3l-0.37,0.2l-0.34,0.15l-0.38,0.22l-0.23,0.06l-0.19,0.18l-0.22,0.12l-0.79,0.32l-0.86,0.25l-1.37,0.3l-0.53,0.32l-0.48,0.22l-0.73,0.07l-1,0.31l-0.56,0.24l-0.69,0.4l-0.15,0.13l-0.12,0.29l-0.21,0.25l-0.42,0.41l-0.31,0.21l-0.21,0.01l-0.41,0.12l-0.48,0.02l-0.81,-0.15l-0.21,0.1l-0.17,0.16l-0.62,0.28l-0.63,0.56l-0.46,0.15l-0.75,0.18l-0.52,0.23l-0.35,0.09l-0.45,0.05l-0.84,-0.02l-0.8,0.08l-0.74,0.16l-0.35,0.3l-0.39,0.48l-0.64,0.2l-0.15,0.17l-0.2,0.35l-0.42,0.09l-0.38,0.06l-0.39,-0.15l-0.73,0.42l-0.27,0.07l-0.42,0.02l-0.3,0.09l-0.21,-0.03l-0.26,-0.17l-0.56,-0.2l-0.41,0.13l-0.03,-0.4l-0.68,-1.23l0.14,-1.07v-0.15l-0.14,-0.48l-0.41,-0.44l0.01,-0.55l-0.14,-0.4l-0.11,-0.41l0.04,-0.11l0.01,-0.1l-0.21,-0.63l-0.07,-0.13l-0.03,-0.13l0.07,-0.1l0,-0.12l-0.11,-0.19l-0.12,-0.37l-0.56,-0.29l0.11,-0.27l0.11,0.09l0.15,0.08l0.03,-0.17l0,-0.13l-0.23,-0.82l0.34,-1.09l-0.11,-0.99l0.52,-0.4l0.13,-0.12l0.08,-0.11l0.12,-0.23l0.17,-0.07l0.06,-0.24l0,-0.12l-0.11,-0.1l-0.08,-0.28l0.03,-0.35l0.03,-0.15l0.06,-0.27l0.18,-0.1l0.04,-0.08l-0.14,-0.17l0.01,-0.1l0.31,-0.28l0.12,-0.09l0.2,-0.09l0.16,0l0.18,0.05l0.16,0.08l0.16,0.15l0.17,0.16l0.26,0.06l0.17,-0.02l0.14,0.07l0.12,-0.04l0.14,-0.08l0.22,0.01l0.2,-0.1l0.56,-0.05l0.54,0.03l0.56,-0.08l0.56,0.01l0.57,0.01l0.13,0.01l0.12,0.05l0.48,0.25l0.36,0.05l0.73,0.07l0.78,0.07l0.67,0.06l0.57,-0.06l0.47,-0.05l0.13,0.01l0.14,0.16l0.28,0.39l0.27,0.37l0.47,0.02l0.3,-0.14l0.33,-0.19l0.2,-0.15l0.23,-0.6l0.15,-0.39l0.35,-0.43l0.29,-0.36l0.39,-0.48l0.21,-0.27l0.42,-0.53l0.4,-0.21l0.78,-0.4l0.76,-0.39l0.5,-0.25l0.42,-0.12l0.71,-0.1l0.83,-0.12l0.83,-0.12l0.89,-0.13l0.99,-0.14l0.68,-0.1l0.87,-0.12l0.72,-0.1l0.64,-0.09l0.66,-0.09l0.12,0.29l0.12,0.29l0.13,0.29l0.12,0.29l0.12,0.29l0.12,0.29l0.12,0.29l0.13,0.29l0.12,0.29l0.12,0.29l0.12,0.29l0.13,0.29l0.12,0.29l0.12,0.29l0.12,0.29l0.12,0.29l0.12,0.29l0.2,0.09l0.12,0.27l0.17,0.38l0.17,0.38l0.17,0.38L624.68,415.58zM595.23,419.49l-0.09,0.06l-0.03,-0.11l0.06,-0.25l0.09,-0.07l0.06,0.19l-0.04,0.1L595.23,419.49zM595.78,423.33l-0.04,0.06l-0.05,-0.01l-0.17,-0.15l0.19,-0.17l0.1,0.16L595.78,423.33zM595.69,424.09l-0.19,0.09l0.13,-0.23l0.13,-0.05l0.04,0.01L595.69,424.09zM626.58,427.15l0.17,0.03l0.26,-0.1l0.75,-0.01l0.91,0.32l-0.17,0.08l-0.1,0.11l-0.4,0.1l-0.4,0.25l-1.15,0.12l-0.34,-0.07l-0.28,-0.24l-0.51,-0.31l0.2,-0.2l0.04,-0.09l0.08,-0.09l0.29,-0.15l0.29,0.02L626.58,427.15z"
};

// src/Middleeast.tsx
var Middleeast = ({
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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ import_react.default.createElement("svg", { version: "1.1", id: "svg2", x: "0px", y: "0px", viewBox: "530 300 500 150" }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ import_react.default.createElement(
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
var Middleeast_default = Middleeast;

// src/index.ts
var src_default = Middleeast_default;
