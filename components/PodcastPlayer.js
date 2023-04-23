import { useEffect, useState } from 'react'
import Parser from 'rss-parser'

function LatestEpisode() {
  const [latestEpisode, setLatestEpisode] = useState({})

  useEffect(() => {
    const parser = new Parser()

    parser
      .parseURL('https://feeds.captivate.fm/the-meat-medic-podcast/')
      .then((feed) => {
        setLatestEpisode(feed.items[0])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>{latestEpisode.title}</h1>
      <p>{latestEpisode.contentSnippet}</p>
      {latestEpisode.enclosure && latestEpisode.enclosure.url && (
        <audio src={latestEpisode.enclosure.url} controls />
      )}
    </div>
  )
}

export default LatestEpisode
