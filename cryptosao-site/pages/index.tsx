import Head from 'next/head'
import Image from 'next/image'
import NewsletterForm from '../components/NewsletterForm'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) document.documentElement.classList.add(stored)
    else document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    if (root.classList.contains('dark')) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <>
      <Head>
        <title>CryptoSao — Blockchain Engineering Podcast</title>
        <meta name="description" content="Deep-dive episodes on Ethereum, Arbitrum, DeFi, and Web3 — hosted by Mehdi Salehi." />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-cs-gradient text-white dark:bg-cs-bg min-h-screen transition duration-300">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-black/80 dark:bg-cs-bg/90 backdrop-blur border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/cryptosao-logo.png"
              alt="CryptoSao Logo"
              width={52}
              height={52}
              className="rounded-lg shadow-sm"
            />
            <span className="text-xl font-bold tracking-tight">CryptoSao</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/episodes">Episodes</Link>
            <button onClick={toggleTheme} className="hover:text-white transition">
              Toggle Theme
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-24">
          <Image
            src="/cryptosao-logo.png"
            alt="CryptoSao Host"
            width={400}
            height={400}
            className="rounded-xl shadow-lg mb-6"
          />
          <p className="text-gray-400 max-w-xl mt-4 text-lg">
            Deep-dives into Ethereum, Arbitrum, Layer 2 scaling, DeFi, and smart contract security.
          </p>

          <div className="mt-10 w-full max-w-md">
            <NewsletterForm />
          </div>

          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <a
              href="https://www.youtube.com/@CryptoSao21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              🎥 Watch on YouTube
            </a>
            <a
              href="https://x.com/offchainpomi?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              🐦 Follow on X
            </a>
            <Link
              href="/episodes"
              className="border border-gray-500 px-6 py-3 rounded-full font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              📚 Episodes
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 py-6 text-center border-t border-gray-800">
          &copy; {new Date().getFullYear()} CryptoSao — created by Mehdi Salehi.
        </footer>
      </main>
    </>
  )
}
