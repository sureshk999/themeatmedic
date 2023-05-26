import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NewsletterForm from './NewsletterFormFooter'

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-white">
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
        <div className="flex">
          <a href="https://drsuresh.com.au">
            <p className="mb-5 text-white dark:text-black"> Dr Suresh Khirwadkar | </p>
          </a>
          <a href="https://themeatmedic.com">
            <p className="mb-5 text-white dark:text-black">| The Meat Medic | </p>
          </a>
          <a href="https://sureshkhirwadkar.com">
            <p className="mb-5 text-white dark:text-black">| Suresh Khirwadkar </p>
          </a>
        </div>
      </div>
    </footer>
  )
}
