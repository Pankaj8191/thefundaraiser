 'use client'

import Header from '../../components/layoutt/Header';
import Layout from '../../components/layoutt/Layout2';
import '../../styles/global.css'

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    
      <Layout >
        {children}
      </Layout>
      
  
  )
}



// function MyApp({ Component, pageProps }) {
//   return (
//   <Layout>
//     <Component {...pageProps} />
//   </Layout>
//   );
// }

// export default MyApp;