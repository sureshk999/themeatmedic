import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'

export default function Banner() {
  return (
    <banner>
      <div className="grid grid-cols-1 items-center bg-red-400">
        <div className="mt-3 mb-3 space-x-4">
          <h4 className="content-center items-center px-5 text-center text-xl ">
            I've just launched a new health course:
          </h4>
          <div className="align-center content-center justify-center text-center">
            <Image
              className="rounded-full"
              alt="Dr Suresh Khirwadkar"
              src="/steak.png"
              layout="intrinsic"
              height="15px"
              width="15px"
              loading="eager"
              objectFit="cover"
            />
            <h4 className="inline content-center items-center px-5 text-center text-xl ">
              30 Day Carnivore Challenge
            </h4>
          </div>
        </div>
      </div>
    </banner>
  )
}
