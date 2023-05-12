 'use client'

import { useHydration } from 'react-query'
import Header from'./Header';
import themes from './themes';
import styled,{ThemeProvider, createGlobalStyle} from 'styled-components'
import {useState, createContext} from 'react';
import '../../styles/global.css'

const App = createContext();



const Layout2 = ({children}) => {
  const [theme, setTheme] = useState('light');
  // const isClient = useHydration()
  const changeTheme = () => {
      setTheme(theme == "light" ? "dark" : "light");

      
  }
  const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
  `;
  const LayoutWrapper = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.theme.bgColor};
    background-image: ${(props) => props.theme.bgImage};
    color: ${(props) => props.theme.color}`;

  return (
    <App.Provider value={{changeTheme, theme}}>
    <ThemeProvider theme={themes[theme]}>
      <LayoutWrapper>
          <GlobalStyle />
          <Header/>
          
          {children}
      </LayoutWrapper>   
    </ThemeProvider>
    </App.Provider> 
  ) 
}

export default Layout2;
export {App};