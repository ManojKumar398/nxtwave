import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import User from './components/User';
import Req from './components/Req';
function App() {
  const theme ={
    colors:{
      bg:"#ECECEC",
      black: " #212529"
    },
    media:{mobile:'900px' }
  }
  return (
    <ThemeProvider theme={theme}>
    
    <GlobalStyle />
    
    <Routes>
      <Route path='/nxtwave-assignment' element={<Home />}/>
      <Route path='/nxtwave-assignment/add' element={<Add />}/>
      <Route path='/nxtwave-assignment/user' element={<User />}/>
      <Route path='/nxtwave-assignment/request' element={<Req />}/>
    </Routes>
    
    </ThemeProvider>
  );
}

export default App;
