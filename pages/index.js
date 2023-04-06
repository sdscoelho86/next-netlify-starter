import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ClickBarco APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ClickBarco" />
        <p className="description">
          Compre passagens de embarcações online!
        </p>
      </main>

      <Footer />
    </div>
  )
}
