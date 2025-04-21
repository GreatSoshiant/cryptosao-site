type Props = {
    id: string
    title: string
    link: string
  }
  
  export default function EpisodeCard({ id, title, link }: Props) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition"
      >
        <img
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
      </a>
    )
  }
  