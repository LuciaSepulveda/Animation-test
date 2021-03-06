import React from "react"
import ReactDOM from "react-dom"
import {ChakraProvider, extendTheme, ThemeConfig, ColorModeScript} from "@chakra-ui/react"

import App from "./App"
import "./theme.css"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({config})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
