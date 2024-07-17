import localFont from "next/font/local";

const SFPro = localFont({
  src: [
    {
      path: "../assets/fonts/SFProDisplay-Regular.woff",
      weight: "400",
      style: "normal"
    },

    {
      path: "../assets/fonts/SFProDisplay-Medium.woff",
      weight: "500",
      style: "normal"
    },

    {
      path: "../assets/fonts/SFProDisplay-Semibold.woff",
      weight: "600",
      style: "normal"
    },

    {
      path: "../assets/fonts/SFProDisplay-Bold.woff",
      weight: "700",
      style: "normal"
    }
  ],

  variable: '--font-sfpro-display'
});

export {SFPro}