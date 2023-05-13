import React from 'react'
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

export default function Text() {
  return (
    <div className="flex grid grid-cols-1 flex-wrap place-items-center overflow-hidden px-5 xl:items-start">
      <h1>Share This Article</h1>
      <div className="py-2">
        <FacebookShareButton url={'window.location.href'}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <PinterestShareButton url={'http://localhost:3000'}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>
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
