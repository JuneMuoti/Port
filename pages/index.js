import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>June Muoti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<h1>June Muoti</h1>
<div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
    Hello world
  </span>
</div>
<Header />
    </div>
  )
}
