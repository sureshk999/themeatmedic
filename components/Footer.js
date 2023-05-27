import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NewsletterForm from './NewsletterFormFooter'

export default function Footer() {
  return (
    <footer className="bg-slate-700 dark:bg-white">
      <div className="mt-10 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-200 dark:text-gray-900">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-200 dark:text-gray-800">
          {siteMetadata.newsletter.provider !== '' && (
            <div className="flex items-center justify-center pt-4">
              <NewsletterForm />
            </div>
          )}
        </div>
        <div className="flex grid px-2 sm:w-1/2 sm:grid-cols-3">
          <div className="mb-2 grid-cols-1 text-left">
            <p className="sm:text-md mb-3 text-sm font-extrabold text-white dark:text-black">
              Courses
            </p>
            <a href="https://drsuresh.com.au">
              <p className="sm:text-md mb-3 text-sm text-white dark:text-black ">
                Insulin Resistance
              </p>
            </a>
            <a href="https://themeatmedic.com">
              <p className="sm:text-md mb-3 text-sm text-white dark:text-black ">
                30 Day Carnivore
              </p>
            </a>
            <a href="https://sureshkhirwadkar.com">
              <p className="mb-3 text-sm text-white dark:text-black ">Metabolic Syndrome</p>
            </a>
          </div>

          <div className="mb-2 grid text-left sm:grid-cols-1">
            <p className="sm:text-md mb-3 text-sm font-extrabold text-white dark:text-black">
              The Meat Medic
            </p>
            <a href="https://drsuresh.com.au">
              <p className="sm:text-md mb-3 text-sm text-white dark:text-black ">About</p>
            </a>
            <a href="https://themeatmedic.com">
              <p className="sm:text-md mb-3 text-sm text-white dark:text-black ">Home</p>
            </a>
            <a href="https://sureshkhirwadkar.com">
              <p className="sm:text-md mb-3 text-sm text-white dark:text-black ">Blog</p>
            </a>
          </div>

          <div className="grid-cols-1 text-left">
            <p className="sm:text-md mb-3 text-sm font-extrabold text-white dark:text-black">
              Websites
            </p>
            <a href="https://drsuresh.com.au">
              <p className="sm:text-md mb-3 text-sm text-white dark:text-black ">
                Dr Suresh Khirwadkar
              </p>
            </a>
            <a href="https://themeatmedic.com">
              <p className="sm:text-md mb-3 text-sm text-white dark:text-black ">The Meat Medic</p>
            </a>
            <a href="https://sureshkhirwadkar.com">
              <p className="mb-3 text-sm text-white dark:text-black ">Suresh Khirwadkar</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
