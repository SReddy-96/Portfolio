import './styles/App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './Theme'
import ResponsiveDrawer from './sidebar'


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer />
      </ThemeProvider >
    </>
  )
}

export default App
