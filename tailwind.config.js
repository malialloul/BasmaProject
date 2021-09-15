module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#614ca9",
      secondary: "#ffed4a",
      danger: "#e3342f",
      green: "#67DB88",
      blue: "#395185",
      pink: "#FF7E7E",
      inputColor: "#FDFDFD",
      lightGreen: "#95CC1F",
      lightBlue: "#48ACCC",
      dargGray: "#382c44",
      orange:"#ffac04"
    }),

    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#614ca9",
      secondary: "#ffed4a",
      danger: "#e3342f",
      green: "#67DB88",
      lightBlue: "#48ACCC",
      lightGreen: "#95CC1F",
      black: "#263238",
      liked: "#E23588"
    }),
    
    

    extend: {
      screens: {
        sm: "200px",
        md: "1380px",
        lg: "2000px",
        xl: "1280px",
        xxl: "1600px"
      },
      height: {
        '528': "528px",
        '400': "400px",
        '132': "132px"
      },
      width: {
        '500': "500px",
        '300': "300px",
        '132': "132px"

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
