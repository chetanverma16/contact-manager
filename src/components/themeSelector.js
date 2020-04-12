import React from 'react';

const themeSelector = () =>{

    const changeTheme = (color) => {
        document.documentElement.style.setProperty('--primary-color', color.primary)
        document.documentElement.style.setProperty('--secondary-color', color.secondary)
        document.documentElement.style.setProperty('--contrast-color', color.contrast)
    }

    return(
        <div className="theme_selector">
        <button
            className="theme"
            onClick={() =>
              changeTheme({
                primary: "#b71c1c",
                secondary: "#c62828",
                contrast: "#d32f2f"
              })
            }
          >
          Red
        </button>
        <button
            className="theme"
            onClick={() =>
              changeTheme({
                primary: "#880e4f",
                secondary: "#ad1457",
                contrast: "#c2185b"
              })
            }
          >
          Pink
        </button>
        <button
            className="theme"
            onClick={() =>
              changeTheme({
                primary: "#4a148c",
                secondary: "#6a1b9a",
                contrast: "#7b1fa2"
              })
            }
          >
          Purple
        </button>
        <button
            className="theme"
            onClick={() =>
              changeTheme({
                primary: "#311b92",
                secondary: "#4527a0",
                contrast: "#512da8"
              })
            }
          >
          Deep Purple
        </button>
        <button
            className="theme"
            onClick={() =>
              changeTheme({
                primary: "#0d47a1",
                secondary: "#1565c0",
                contrast: "#1976d2"
              })
            }
          >
          Blue
        </button>
        <button
            className="theme"
            onClick={() =>
              changeTheme({
                primary: "#006064",
                secondary: "#00838f",
                contrast: "#0097a7"
              })
            }
          >
          Cyan
        </button>
        <button
            className="theme"
            onClick={() =>
              changeTheme({
                primary: "#f57f17",
                secondary: "#f9a825",
                contrast: "#fbc02d"
              })
            }
          >
          Yellow
          </button>

        <button
            className="theme"
            onClick={() =>
              changeTheme({
                primary: "#212121",
                secondary: "#424242",
                contrast: "#616161"
              })
            }
          >
          Grey
          </button>
        </div>
    )
}

export default themeSelector