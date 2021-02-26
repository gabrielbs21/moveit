import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />

          <meta property="og:title" content="move.it" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://moveit-six.vercel.app/" />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:description" content="Um projeto para você manter o foco no seu trabalho em ciclos, 
          separados por pequenos desafios." />
          <meta name="theme-color" content="#FF0000" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}