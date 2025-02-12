// https://nuxt.com/docs/api/configuration/nuxt-config
import {tailwindConfig} from "./tailwind.config";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {enabled: true},
  css: ["/public/style.css"],
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: tailwindConfig
  }
});
