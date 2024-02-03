/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        export: "#ef596f",
        package: "#89ca78",
        import: "#d55fde",
        bracket: "#ABB2BF",
        titlebar: "#161922",
        scroll: {
          light: "#989EA7",
          dark: "#1C1E21"
        },
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
        },
        notif: {
          default: {
            toast: {
              dark: "#3D4046",
              light: "#B7BEC9"
            },
            progress: {
              dark: "#62676E",
              light: "#A7AEB9"
            }
          },
          success: {
            toast: "#4AB87A",
            progress: "#2B9158"
          },
          error: {
            toast: "#DB4F5B",
            progress: "#BD414B"
          },
          info: {
            toast: "#6D9DEC",
            progress: "#537EC4"
          },
          warning: {
            toast: "#EFA853",
            progress: "#D38F3E"
          },
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
        }
      },
      strokeWidth: {
        "1.5": "1.5"
      },
      animation: {
        scale: "scale 1.5s ease infinite"
      },
      fontFamily: {
        "code": ["DM Mono", "monospace"]
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

