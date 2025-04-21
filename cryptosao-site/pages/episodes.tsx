import Head from 'next/head'
import EpisodeCard from '../components/EpisodeCard'

const episodes = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Intro to CryptoSao: Why Blockchain Engineers Matter',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'ePpPVE-GGJw',
    title: 'Understanding Arbitrum’s Sequencer — Deep Dive',
    link: 'https://www.youtube.com/watch?v=ePpPVE-GGJw',
  },
  {
    id: 'kXYiU_JCYtU',
    title: 'Layer 2 Scaling Explained Simply',
    link: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
  },
]

export default function Episodes() {
  return (
    <>
      <Head>
        <title>Episodes | CryptoSao Podcast</title>
        <meta name="description" content="All episodes of the CryptoSao Podcast — hosted by Mehdi Salehi" />
      </Head>

      <main className="bg-black text-white min-h-screen px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">🎙️ Episodes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* ✅ Here’s the updated render */}
          {episodes.map((ep) => (
            <EpisodeCard key={ep.id} {...ep} />
          ))}
        </div>
      </main>
    </>
  )
}
