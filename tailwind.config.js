/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-man)"],
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        circles:
          "url('https://res.cloudinary.com/swdb/image/upload/v1679350326/audiophile/home/desktop/pattern-circles_cs9vvx.svg')",
        // headphoneCat: "url('/headphone-cat.jpg')",
        zx7: "url('https://res.cloudinary.com/swdb/image/upload/v1679350325/audiophile/home/tablet/image-speaker-zx7_vwsdtj.jpg')",
        yx1: "url('https://res.cloudinary.com/swdb/image/upload/v1679350325/audiophile/home/tablet/image-earphones-yx1_labzch.jpg')",
        info: "url('https://res.cloudinary.com/swdb/image/upload/v1679350335/audiophile/shared/desktop/image-best-gear_dyb1hl.jpg')",
        deskInfo:
          "url('https://res.cloudinary.com/swdb/image/upload/v1679350335/audiophile/shared/desktop/image-best-gear_dyb1hl.jpg')",
        mobInfo:
          "url('https://res.cloudinary.com/swdb/image/upload/v1679350325/audiophile/shared/mobile/image-best-gear_b3nl3s.jpg')",
        deskHero:
          "url('https://res.cloudinary.com/swdb/image/upload/v1679350326/audiophile/home/desktop/image-hero_debazl.jpg')",
        tabHero:
          "url('https://res.cloudinary.com/swdb/image/upload/v1679350325/audiophile/home/tablet/image-header_anpubq.jpg')",
        mobHero:
          "url('https://res.cloudinary.com/swdb/image/upload/v1679350326/audiophile/home/mobile/image-header_cizuks.jpg')",
        zx9: "url('https://res.cloudinary.com/swdb/image/upload/v1679350326/audiophile/home/desktop/image-speaker-zx9_frwhwm.png')",
      },
      colors: {
        primary: "#D87D4A",
        primaryHover: "#fbaf85",
        seconday: {
          one: "#101010",
          two: "#F1F1F1",
          three: "#FAFAFA",
        },
        greys: {
          one: "#d9d9d9",
          two: "#f0f0f0",
        },

        // black: {
        //   800: "#151515",
        //   900: "#242424",
        // },
      },
    },
  },
  plugins: [],
};
