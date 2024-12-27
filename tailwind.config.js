/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        verdeOs: "#027373",
        verdeMe: "#038C7F",
        verdeCl: "#A9D9D0",
        crema: "#F2E7DC",
        negro: "#0D0D0D"
      },
      backgroundImage: {
        "fondoPrincipal": "url('./src/media/images/klinicFondo.webp')"
      }
    },
  },
  plugins: [],
};
