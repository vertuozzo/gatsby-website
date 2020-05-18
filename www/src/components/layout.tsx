import React from "react"
import { Global } from "@emotion/core"
import { Main, css, Styled, Footer, useColorMode } from "theme-ui"
import "typeface-ibm-plex-sans"
import "../fonts/benguiat.css"
import SEO from "./seo"
import Header from "./header"

type LayoutProps = { children: React.ReactNode; className?: string; newsletter?: boolean }

const Layout = ({ children, className, newsletter }: LayoutProps) => {
  const [mode] = useColorMode()

  let headingStyles = {}

  if (mode === `strangerThings`) {
    headingStyles = {
      "h1, h2, h3": {
        fontFamily: `Benguiat Bold !important`,
        textShadow: `-0.05rem -0.05rem 1px #ed2b12,
        0.05rem -0.05rem 1px #ed2b12,
        -0.05rem 0.05rem 1px #ed2b12,
        0.05rem 0.05rem 1px #ed2b12,
        0 0 15px #630100,
        0 0 20px #450100`,
      },
    }
  }

  return (
    <>
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            fontSize: `18px`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
            color: `text`,
            backgroundColor: `background`,
            fontFamily: `body`,
            lineHeight: `body`,
            fontWeight: `body`,
          },
          "::selection": {
            backgroundColor: `text`,
            color: `background`,
          },
          "#___gatsby": {
            position: `relative`,
            overflowX: `hidden`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            textDecoration: `none`,
            outline: `none`,
            "&:focus": {
              boxShadow: `outline`,
            },
          },
          ...headingStyles,
        })}
      />
      {!newsletter && <SEO />}
      <Header />
      <Main className={className}>{children}</Main>
      <Footer>
        &copy; {new Date().getFullYear()} <Styled.a href="/">vertuozzo.com</Styled.a>. Все права защищены.
      </Footer>
    </>
  )
}

export default Layout
