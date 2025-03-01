
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#131528" />
        <meta name="author" content="Kulwinder Singh" />
        <meta name="robots" content="index, follow" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Kulwinder Singh | Blockchain Developer Portfolio" />
        <meta name="description" content="Blockchain and Fullstack Developer with 7+ years of experience in Ethereum, Solidity, Web3, React, and Node.js. View my projects and expertise." />
        <meta name="keywords" content="blockchain developer, ethereum, solidity, web3, smart contracts, dapp development, fullstack developer, react developer, node.js" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kulwindersingh.com/" />
        <meta property="og:title" content="Kulwinder Singh | Blockchain Developer Portfolio" />
        <meta property="og:description" content="Blockchain and Fullstack Developer with 7+ years of experience in Ethereum, Solidity, Web3, React, and Node.js." />
        <meta property="og:image" content="https://kulwindersingh.com/images/portfolio-preview.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kulwindersingh.com/" />
        <meta property="twitter:title" content="Kulwinder Singh | Blockchain Developer Portfolio" />
        <meta property="twitter:description" content="Blockchain and Fullstack Developer with 7+ years of experience in Ethereum, Solidity, Web3, React, and Node.js." />
        <meta property="twitter:image" content="https://kulwindersingh.com/images/portfolio-preview.jpg" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
