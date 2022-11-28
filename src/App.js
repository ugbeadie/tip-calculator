import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Main from './components/Main'

const theme = {
  colors: {
    body: 'hsl(185, 41%, 84%)',
  },
  tablet: '768px',
  mobile: '500px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <Main/>
      </>
    </ThemeProvider>
  );
}

export default App;
