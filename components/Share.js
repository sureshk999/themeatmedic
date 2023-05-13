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
} from 'next-share'

const SocialShareButtons = () => {
  const router = useRouter()

  useEffect(() => {
    const url = window.location.href
    router.prefetch(url)
  }, [router])

  return (
    <>
      <FacebookShareButton url={typeof window !== 'undefined' && window.location.href}>
        Share on Facebook
      </FacebookShareButton>
      <FacebookShareButton
        url={typeof window !== 'undefined' && window.location.href}
        quote={'share the article'}
        hashtag={'#themeatmedic'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </>
  )
}

export default SocialShareButtons
