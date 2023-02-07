import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { presetWind } from "unocss";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      presets: [presetWind()],
    }),
  ],
});

