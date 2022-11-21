import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailormade boilerplate 2.0</title>
        <meta name="description" content="Tailormade boilerplate 2.0" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className="text-3xl text-center p-10">
        Starter
      </main>
    </div>
  )
}
