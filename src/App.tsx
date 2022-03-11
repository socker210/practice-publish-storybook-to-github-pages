import ThemeProvider from 'src/theme/ThemeProvider'
import defaultTheme from 'src/theme/defaultTheme'
import Typography from 'src/components/Typography'

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography />
    </ThemeProvider>
  )
}

export default App
