import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'

export default function Banner() {
  return (
    <banner>
      <div className="grid grid-cols-1 items-center bg-gradient-to-r from-blue-500 to-red-500">
        <div className="mt-3 mb-3">
          <h4 className="text-md content-center items-center px-5 text-center text-white ">
            New Health Course Available:
          </h4>
          <div className="align-center place-items-center content-center justify-center text-center">
            <Image
              className="rounded-full"
              alt="Dr Suresh Khirwadkar"
              src="/steak.png"
              layout="intrinsic"
              height="25px"
              width="25px"
              priority
              objectFit="cover"
            />
            <a href="https://drsuresh.teachable.com">
              <h4 className="inline content-center items-center px-2 text-center text-lg font-extrabold text-white underline">
                30 Day Carnivore Challenge
              </h4>
            </a>
            <Image
              className="rounded-full"
              alt="Dr Suresh Khirwadkar"
              src="/steak.png"
              layout="intrinsic"
              height="25px"
              width="25px"
              priority
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </banner>
  )
}
