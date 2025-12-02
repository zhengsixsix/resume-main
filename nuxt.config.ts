// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  app: {
    buildAssetsDir: "static", //修改站点资产的文件夹名称，默认是_nuxt
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  experimental: {
    payloadExtraction: false, //启用此选项时（默认情况下）提取使用nuxt generate生成的页面的有效负载
  },
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/variables.scss" as *;'
        }
      }
    }
  }
});
