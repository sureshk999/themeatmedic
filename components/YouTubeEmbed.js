import { useEffect, useState } from 'react'
import axios from 'axios'

const YouTubeEmbed = ({ videoId, apiKey }) => {
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [videoThumbnail, setVideoThumbnail] = useState('')

  useEffect(() => {
    if (!videoId) return

    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
      .then((response) => {
        const data = response.data

        if (data.items && data.items.length > 0) {
          const snippet = data.items[0].snippet
          setVideoTitle(snippet.title)
          setVideoDescription(snippet.description)
          setVideoThumbnail(snippet.thumbnails.medium.url)
        }
      })
      .catch((error) => {
        console.error('Error fetching YouTube video data:', error)
      })
  }, [videoId, apiKey])

  return (
    <div>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          loading="lazy"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          // nonce="GENERATED_NONCE"
        />
      </div>
      <h2>{videoTitle}</h2>
      <p>{videoDescription}</p>
      <img src={videoThumbnail} alt={videoTitle} />
    </div>
  )
}

export default YouTubeEmbed
