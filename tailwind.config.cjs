/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#EBEFF7",
          dark: "#383C41"
        },
        secondary: {
          light: "#DBDFE7",
          dark: "#595E65"
        },
        btn: {
          light: "#C6C9D0",
          dark: "#494D54"
        },
        nav: {
          light: "#D5DBE5",
          dark: "#232529"
        },
        border: {
          light: "#393C43",
          dark: "#B0BABF"
        }
      },
      textColor: {
        primary: {
          light: "#000",
          dark: "#fff"
        },
        secondary: {
          light: "#5C6163",
          dark: "#A6AAAC"
        },
        import: "#d55fde",
        bracket: "#ABB2BF",
        export: "#ef596f",
        package: "#89ca78",
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

