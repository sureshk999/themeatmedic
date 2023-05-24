import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'

const SocialShareButtons = () => {
  const router = useRouter()

  useEffect(() => {
    const url = window.location.href
    router.prefetch(url)
  }, [router])

  return (
    <div className="flex grid flex-wrap place-items-center overflow-hidden px-5 xl:items-start">
      <h1>Share This</h1>
      <div className="py-2">
        <FacebookShareButton
          url={typeof window !== 'undefined' && window.location.href}
          quote={'share the article'}
          hashtag={'#themeatmedic'}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={typeof window !== 'undefined' && window.location.href}
          quote={'share the article'}
          hashtag={'#themeatmedic'}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <RedditShareButton url={'http://localhost:3000'}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton url={'http://localhost:3000'}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={'http://localhost:3000'}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default SocialShareButtons
