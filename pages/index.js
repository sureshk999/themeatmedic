import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const NewsletterForm = dynamic(() => import('../components/NewsletterForm'))
const Tag = dynamic(() => import('../components/Tag'))

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetadata.title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <a href="https://drsuresh.com.au">
            <Image
              alt="health courses now available"
              src="/click.webp"
              layout="responsive"
              height="30vh"
              width="60vw"
              objectFit="cover"
              loading="eager"
            />
          </a>
        </div>
        <br></br>
        <hr></hr>
        <div className=" mb-5 dark:divide-gray-700">
          <h2 className="mt-2 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Book now for a consult
          </h2>
          <p className="prose mb-3 max-w-none text-gray-600 dark:text-gray-300">
            The Meat Medic Podcast is run by{' '}
            <a href="https://drsuresh.com.au">Dr Suresh Khirwadkar</a>, a Specialist GP and Board
            Certified Lifestyle Physician.
            <br />
            Dr Suresh specialises in helping patients through diet and nutrition
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://drsuresh.com.au"
              className="rounded-md bg-black py-2 px-4 text-xl font-bold text-white hover:bg-primary-500 dark:bg-white dark:text-black dark:hover:bg-primary-500 "
            >
              Book Now
            </a>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, image } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-start xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>

                      <dd className="mb-7 mt-1 mr-1 ml-0 text-base font-medium leading-6 text-gray-700 dark:text-gray-400">
                        <a href={`/blog/${slug}`}>
                          <Image
                            alt="health courses"
                            src="/CLICK.webp"
                            height={262}
                            width={466}
                            layout="responsive"
                            loading="lazy"
                          />
                        </a>
                      </dd>
                      <dd>
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>

                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="mb-2 text-4xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-700 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="font-bold text-red-700 hover:text-primary-700 dark:text-red-400 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                      <br></br>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-800 hover:text-primary-600 dark:text-primary-200 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
