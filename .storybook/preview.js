import ThemeProvider from 'src/theme/ThemeProvider'
import defaultTheme from 'src/theme/defaultTheme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  },
]
