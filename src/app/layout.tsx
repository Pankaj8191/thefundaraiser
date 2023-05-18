  'use client'

// import Header from '../../components/layoutt/Header';
// import StyledComponentsRegistry from './lib/registry';
// import {useState, createContext} from 'react';

// const App = createContext();


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {


//   const [theme, setTheme] = useState('light');

//   const changeTheme = () => {
//            setTheme(theme == "light" ? "dark" : "light");
    
          
//        }

//        const GlobalStyle = createGlobalStyle`
//             body {
//                 margin: 0;
//                 padding: 0;
//                 overflow-x: hidden;
//             }
//          `;

//      const LayoutWrapper = styled.div`
//      min-height: 100vh;
//      background-color: ${(props) => props.theme.bgColor};
//      background-image: ${(props) => props.theme.bgImage};
//      color: ${(props) => props.theme.color};`;       
         

//   return (
//     <html>
//       <body>
//         <StyledComponentsRegistry>
//           <Header/>
//           {children}
//           </StyledComponentsRegistry>
//       </body>
//     </html>
//   );
// }

// export {App};


import Header from '../../components/layoutt/Header';
import StyledComponentsRegistry from './lib/registry';
import {useState, createContext} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

const lightTheme = {
  bgColor: '#2271b1',
  bgImage: '',
  color: '#000',
};

const darkTheme = {
  bgColor: '#000',
  bgImage: '',
  color: '#fff',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      background-color: ${themeMode.bgColor};
      background-image: ${themeMode.bgImage};
      color: ${themeMode.color};
    }
  `;

  return (
    <ThemeProvider theme={themeMode}>
      <AppContext.Provider value={{ theme, toggleTheme }}>
        <html>
          <body>
            <ToastContainer />
            <GlobalStyle />
            <StyledComponentsRegistry>
              <Header />
              {children}
            </StyledComponentsRegistry>
          </body>
        </html>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export { AppContext };
