import useTheme from 'src/theme/useTheme'

const Typography = () => {
  const theme = useTheme()

  return <h1 style={{ color: theme.color.red }}>HAHAHA</h1>
}

export default Typography
