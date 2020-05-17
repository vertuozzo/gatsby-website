/** @jsx jsx */
import { Container, Header as ThemeHeader, jsx, Flex, Box, useColorMode, Styled } from "theme-ui"
import Logo from "../icons/logo"
import ThemeSwitch from "../icons/theme-switch"

const modes = [`light`, `dark`, `strangerThings`]

const Header = () => {
  const [mode, setMode] = useColorMode()

  const cycleMode = (e: any) => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <ThemeHeader>
      <Container sx={{ pb: 0 }}>
        <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexDirection: [`column`, `row`] }}>
          <Flex>
            <a
              aria-label="Link"
              sx={{ color: `text`, "&:hover": { color: `primary` } }}
              href="/"
            >
              <Logo sx={{ width: 12, height: 12 }} />
            </a>
            <Box
              aria-hidden="true"
              focusable="false"
              sx={{ height: 12, width: 1, backgroundColor: `primary`, borderRadius: `full`, mx: 3 }}
            />
            <Flex sx={{ flexDirection: `column` }}>
              <Box sx={{ fontSize: 3, fontWeight: `semibold`, lineHeight: `25px` }}>Торговля фьючерсами, опционами и акциями</Box>
              <Box sx={{ color: `dark` }}>на российских и зарубежных площадках</Box>
            </Flex>
          </Flex>
          <Flex sx={{ mt: [4, 0], alignItems: `center` }}>
            <Styled.a href="https://t.me/s/vertuozzo" target="_blank">
              Канал в Telegram
            </Styled.a>
			{/* <Styled.a href="https://t.me/vertuozzo_bot" target="_blank" sx={{ ml: 4 }}>
              Бот в Telegram
            </Styled.a> */}
          </Flex>
        </Flex>
      </Container>
    </ThemeHeader>
  )
}

export default Header
