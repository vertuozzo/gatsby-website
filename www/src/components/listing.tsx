/** @jsx jsx */
import { Flex, Box, jsx, Styled, Container, useColorMode } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ChildImageSharp } from "../types"
import { Circle, Donut } from "./shapes"
import iconExternal from "../icons/icon-external-window.svg"

type Props = {
  allResults: {
    nodes: {
      title: string
      url: string
      preview: string
      description: string
      shapes: {
        color: string
        type: string
        size: string[]
        xOffset: string[]
        yOffset: string[]
        opacity: number
      }[]
      image: ChildImageSharp
    }[]
  }
}

const cardStyle = {
  position: `relative`,
  borderRadius: `lg`,
  transition: `all 0.3s ease-in-out`,
  display: `block`,
  boxShadow: [`md`, `md`, `lg`],
  zIndex: 2,
  "&:hover": {
    transform: `translateY(-4px)`,
    boxShadow: [`lg`, `lg`, `xl`],
    "[data-name='card-overlay']": {
      opacity: 1,
    },
  },
  ".gatsby-image-wrapper": {
    borderRadius: `lg`,
  },
  "[data-name='card-overlay']": {
    position: `absolute`,
    borderRadius: `lg`,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: `rgba(90, 103, 216, 0.9)`,
    color: `white`,
    fontFamily: `body`,
    fontSize: 4,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    transition: `all 0.3s ease-in-out`,
    opacity: 0,
  },
}

const Listing = () => {
  const {
    allResults: { nodes: results },
  } = useStaticQuery<Props>(ListingQuery)

  const [mode] = useColorMode()

  let buttonStyles = {}
  let overlayStyles = {}

  if (mode === `strangerThings`) {
    buttonStyles = {
      background: `black`,
      border: `2px solid #E7251D`,
    }
    overlayStyles = {
      backgroundColor: `rgba(231, 37, 29, 0.9)`,
    }
  }

  return (
    <Container sx={{ py: 4 }}>
      {results.map((result, index) => {
        const isEven = index % 2 === 0

        return (
          <Box
            key={result.title}
            sx={{
              py: [5, 5, 6],
              display: `grid`,
              gridTemplateColumns: [`1fr`, `1fr`, `1fr 1fr`],
              gridGap: [3, 4, 5],
              alignItems: `flex-start`,
            }}
          >
            <div
              sx={{
                width: `100%`,
                maxWidth: [`600px`, `900px`, `600px`],
                position: `relative`,
                order: isEven ? 1 : [1, 1, 2],
              }}
            >
              {result.shapes.map(shape => {
                switch (shape.type) {
                  case `circle`:
                    return (
                      <Circle
                        key={`${shape.size}-${shape.color}-${shape.xOffset}`}
                        size={shape.size}
                        color={shape.color}
                        left={isEven ? shape.xOffset : `unset`}
                        right={isEven ? `unset` : shape.xOffset}
                        top={shape.yOffset}
                        sx={{ zIndex: 0, opacity: shape.opacity }}
                      />
                    )
                  case `donut`:
                    return (
                      <Donut
                        key={`${shape.size}-${shape.color}-${shape.xOffset}`}
                        width="20px"
                        size={shape.size}
                        color={shape.color}
                        left={isEven ? shape.xOffset : `unset`}
                        right={isEven ? `unset` : shape.xOffset}
                        top={shape.yOffset}
                        sx={{ zIndex: 0, opacity: shape.opacity }}
                      />
                    )
                  default:
                    return null
                }
              })}
              <a
                href={result.preview}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`Visit a preview of result ${result.title}`}
                sx={{
                  ...cardStyle,
                  "[data-name='card-overlay']": {
                    ...cardStyle[`[data-name='card-overlay']`],
                    ...overlayStyles,
                  },
                }}
              >
                <div data-name="card-overlay" aria-hidden>
                  <div sx={{ display: `flex`, alignItems: `center` }}>
                    <img width="40" height="40" sx={{ mr: 3 }} alt="" src={iconExternal} /> Просмотреть
                  </div>
                </div>
                <Img fluid={result.image.childImageSharp.fluid} />
              </a>
            </div>
            <Flex sx={{ flexDirection: `column`, alignItems: `flex-start`, order: isEven ? 2 : [2, 2, 1] }}>
              <Styled.h1 as="h3">{result.title}</Styled.h1>
              <Styled.p>{result.description}</Styled.p>
              <a href={result.url} rel="noopener noreferrer" target="_blank" sx={{ variant: `buttons.primary`, mt: 3, ...buttonStyles }}>
                Получить отчёт
              </a>
            </Flex>
          </Box>
        )
      })}
      <p sx={{ mt: 6, fontSize: [1, 2, 2, 3], textAlign: `center` }}>
        <span sx={{ fontWeight: `bold` }}>Брокерские отчёты появятся в ближайшее время ...</span>
      </p>
    </Container>
  )
}

export default Listing

const ListingQuery = graphql`
  query {
    allResults(sort: { fields: title, order: ASC }) {
      nodes {
        title
        url
        preview
        description
        shapes {
          color
          type
          size
          xOffset
          yOffset
          opacity
        }
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
