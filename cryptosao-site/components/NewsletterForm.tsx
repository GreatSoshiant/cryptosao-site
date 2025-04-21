export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row items-center justify-center gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        window.location.href = `mailto:info@cryptosao.com?subject=Subscribe to CryptoSao Podcast&body=Please add me to your newsletter.`
      }}
    >
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="w-full px-4 py-2 rounded-md bg-white text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="mt-2 sm:mt-0 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-md"
      >
        Subscribe
      </button>
    </form>
  )
}
