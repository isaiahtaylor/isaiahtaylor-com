import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ThemeContext } from "../contexts/themeContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setColorMode("dark");
        } else {
          setColorMode("light");
        }
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", (e) => {
            setColorMode(e.matches ? "dark" : "light");
          });
      }
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        toggleTheme: () => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        },
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
