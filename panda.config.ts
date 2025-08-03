import { defineConfig } from "@pandacss/dev";
import youkanPreset from "./lib/styles/index.ts";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  // Use our custom preset (includes tokens, recipes, etc.)
  presets: [youkanPreset],

  // The output directory for your css system (src内に配置)
  outdir: "src/styled-system",
});