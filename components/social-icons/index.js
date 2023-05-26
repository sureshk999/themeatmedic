import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Instagram from './instagram.svg'
import applepodcasts from './applepodcasts.svg'
import googlepodcasts from './googlepodcasts.svg'
import rss from './rss.svg'
import spotify from './spotify.svg'
import amazonmusic from './amazonmusic.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  applePodcasts: applepodcasts,
  googlePodcasts: googlepodcasts,
  spotify: spotify,
  amazonmusic: amazonmusic,
  rss: rss,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-white text-gray-700 hover:text-blue-500 dark:fill-black dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
