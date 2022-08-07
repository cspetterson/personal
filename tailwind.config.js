module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        calajo: {
          100: "#607D8B",
          200: "#4B626D",
          300: "#41545E"
        }
      },
      fill: {
        white: "#FFF",
        calajo: "#607D8B"
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms')
  ]
}
