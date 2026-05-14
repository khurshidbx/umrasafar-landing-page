export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  // SSG — Vercel static hosting
  ssr: true,
  nitro: {
    preset: 'vercel-static',
    prerender: {
      routes: ['/'],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'uz' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'UmraSafar CRM — Umra safarlarini professional boshqaring',
      meta: [
        {
          name: 'description',
          content: 'UmraSafar CRM — Umra safarlarini boshqarish uchun professional tizim. Ziyoratchilar, paketlar, to\'lovlar va mehmonxonalar barchasi bitta platformada.',
        },
        {
          name: 'keywords',
          content: 'umra safar, umra crm, umrasafar, umra boshqaruv tizimi, umra agentlik, haj umra crm, ziyorat tizimi, umra software',
        },
        { name: 'author', content: 'UmraSafar' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://umrasafar.uz' },
        { property: 'og:title', content: 'UmraSafar CRM — Umra safarlarini professional boshqaring' },
        {
          property: 'og:description',
          content: 'Ziyoratchilar, paketlar, to\'lovlar va mehmonxonalar — barchasi bitta tizimda.',
        },
        { property: 'og:image', content: 'https://umrasafar.uz/og-image.png' },
        { property: 'og:locale', content: 'uz_UZ' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'UmraSafar CRM' },
        {
          name: 'twitter:description',
          content: 'Umra safarlarini boshqarish uchun professional CRM tizimi.',
        },
      ],
      link: [
        { rel: 'canonical', href: 'https://umrasafar.uz' },
      ],
    },
  },
})
