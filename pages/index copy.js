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
        <div className="space-y-2 pt-6 pb-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetadata.title} Podcast
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="mt-4 divide-y divide-gray-200 dark:divide-gray-700">
          <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">
            <Image
              alt="30 day carnivore challenge"
              src="/htc.webp"
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
        <div className=" mb-3 dark:divide-gray-700">
          <h2 className="mt-4 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Want to start a carnivore diet?
          </h2>
          <p className="prose mb-3 max-w-none text-gray-600 dark:text-gray-300">
            Check out my simple guide to starting a carnivore diet by{' '}
            <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">clicking here</a>
            <br />
            Over 100 pages of high quality, evidence based information
            <br />
            Available by Teachables course or downloadable eBook
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge"
              className="rounded-md bg-black py-2 px-4 text-xl font-bold text-white hover:bg-primary-500 dark:bg-white dark:text-black dark:hover:bg-primary-500 "
            >
              Buy Now
            </a>
          </div>
          <div className="mt-4 py-5">
            <h2 className="py-2 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Listen to the Meat Medic Podcast for free
            </h2>
            <div className="xs:grid-cols-6 flex grid flex-wrap place-items-center gap-x-2 gap-y-5 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
              <a
                href="https://podcasts.apple.com/au/podcast/the-meat-medic-podcast/id1667140036"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <img src="/applepodcasts.png" />
                  <p className="px-5">Apple Podcasts</p>
                </div>
              </a>

              <a
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vdGhlLW1lYXQtbWVkaWMtcG9kY2FzdC8?sa=X&ved=0CAIQ9sEGahcKEwiQqKH3xdr8AhUAAAAAHQAAAAAQFA"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <img src="/googlepodcasts.png" />
                  <p className="px-5">Google Podcasts</p>
                </div>
              </a>

              <a
                href="https://music.amazon.com.au/podcasts/cc5d2830-14d2-4e7c-bfb9-78f25c4f0aee/the-meat-medic-podcast"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <img src="/amazonmusic.png" />
                  <p className="px-5">Amazon Music</p>
                </div>
              </a>

              <a
                href="https://open.spotify.com/show/4vqppR122LTxV6DKrehzMA"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <img src="/spotify.png" />
                  <p className="px-5">Spotify</p>
                </div>
              </a>

              <a
                href="https://feeds.captivate.fm/the-meat-medic-podcast/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <img src="/rss.png" />

                  <p className="px-5">RSS Feed</p>
                </div>
              </a>

              <a href="https://youtube.com/@themeatmedic" target="_blank" rel="noreferrer">
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <img src="/youtube.png" />
                  <p className="px-5">YouTube</p>
                </div>
              </a>
            </div>
          </div>
          <h2 className="mt-2 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Need help with your health?
          </h2>
          <p className="prose mb-3 max-w-none text-gray-600 dark:text-gray-300">
            Check out my other health courses by{' '}
            <a href="https://drsuresh.teachable.com">clicking here</a>
            <br />
            Simple and easy to understand, these health courses have been designed by myself to
            teach you how to perfect your health
            <br />
            Covering diet, nutrition and metabolic health there are mutliple courses available
            including how to treat insulin resistance, metabolic syndrome and how to lose weight for
            good.
          </p>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <a href="https://drsuresh.teachable.com">
            <Image
              alt="health courses now available"
              src="/click.webp"
              layout="responsive"
              height="30vh"
              width="60vw"
              objectFit="cover"
              loading="lazy"
            />
          </a>
        </div>
        <br></br>
        <hr></hr>
        <div className=" mb-3 dark:divide-gray-700">
          <h2 className="mt-4 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Book now for a consult
          </h2>
          <p className="prose mb-3 max-w-none text-gray-600 dark:text-gray-300">
            The Meat Medic Podcast is run by{' '}
            <a href="https://drsuresh.com.au">Dr Suresh Khirwadkar</a>, a Specialist GP and Board
            Certified Lifestyle Physician.
            <br />
            Dr Suresh specialises in helping patients through diet, nutrition and lifestyle changes
            and he practices a mix of conventional medicine, lifestyle medicine, integrative
            medicine and functional medicine.
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
        <div>
          <div>
            <h3 className="mt-2 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
              About
            </h3>
            <div className=" w-full">
              <div className="float-left mr-3">
                <Image
                  className="rounded-3xl"
                  alt="Dr Suresh Khirwadkar"
                  src="/mmp.webp"
                  layout="fixed"
                  height="350px"
                  width="350px"
                  loading="lazy"
                />
              </div>

              <p className="prose mb-3 max-w-none text-gray-600 dark:text-gray-300">
                The Meat Medic Podcast Optimising physical and mental health through optimum diet,
                nutrition and lifestyle Welcome to The Meat Medic Podcast. I'm your host Dr Suresh
                Khirwadkar. I'm a GP and Lifestyle Physician and I'm a practicing carnivore. I've
                had great success myself and with patients by following a carnivore diet, and want
                to spread the word about how to achieve optimal health through diet, nutrition and
                lifestyle changes.
                <br />
                <br />
                In this podcast we discuss all things related to diet and nutrition and how you can
                improve your physical and mental health by following good principles.
                <br />
                <br />
                All of the information is thoroughly researched by myself, as well as drawing on
                over 10 years of experience and training. I am a Specialist GP as well as a Board
                Certified Lifestyle Physician, and I have quite extensive training in nutrition
                having studies with ASLM, IBLM, ACNEM and Diet Doctor.
                <br />
                <br />
                I work extensively with low carb nutrition in my usual practice, and it use to help
                people with a vast array of issues, and my focus is on holistic care, preferring to
                avoid medication prescriptions where possible and instead utilizing lifestyle
                interventions.
                <br />
                <br />
                My real passion though is helping people to help themselves. I'm a huge believer in
                educating my patients and empowering them to prevent and treat chronic diseases
                themselves. My goal is to get to the point where my patients never actually need me.
                Then my job is done.
              </p>
            </div>
          </div>
        </div>
        <div className=" dark:divide-gray-700">
          <h2 className="mt-2 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Episode
          </h2>

          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, 1).map((frontMatter) => {
              const { slug, date, title, summary, tags, images } = frontMatter
              return (
                <li key={slug} className="pt-3 pb-1">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-3 xl:items-start xl:space-x-4 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>

                        <dd className="mb-3 mt-1 text-base font-medium leading-6 text-gray-700 dark:text-gray-400">
                          <a href={`/blog/${slug}`}>
                            <img
                              src={images}
                              alt={`${title}`}
                              height={260}
                              width={462}
                              layout="responsive"
                              loading="lazy"
                            />
                          </a>
                        </dd>
                        <dd>
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>

                      <div className="space-y-2 xl:col-span-2">
                        <div className="space-y-6">
                          <div>
                            <h2 className="mb-2 text-3xl font-bold leading-8 tracking-tight">
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
          <h4 className=" text-3xl font-bold leading-8 tracking-tight">Prefer to listen?</h4>
          <div className="w-full; h-min; overflow: hidden;">
            <iframe
              title="podcast"
              className="mb-2 h-60 w-full rounded-3xl py-2"
              src="https://player.captivate.fm/show/1004517b-ed99-4d48-911a-5fc046f4877f/latest/"
            ></iframe>
            <hr></hr>
          </div>
        </div>

        <div className="mt-4 divide-y divide-gray-200 dark:divide-gray-700">
          <h5 className=" mt-2 py-2 text-3xl font-bold leading-8 tracking-tight">
            Membership Available
          </h5>
          <a href="https://bit.ly/42Qswb9">
            <Image
              alt="memberships"
              src="/membership.png"
              layout="responsive"
              height="30vh"
              width="60vw"
              objectFit="fill"
              loading="eager"
            />
          </a>
        </div>

        <h5 className=" mt-2 py-2 text-3xl font-bold leading-8 tracking-tight">
          Previous Episodes
        </h5>
        <ul className=" divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <li key={slug} className="pt-3 pb-1">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-start xl:space-x-4 xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>

                      <dd className="mb-3 mt-1 text-base font-medium leading-6 text-gray-700 dark:text-gray-400">
                        <a href={`/blog/${slug}`}>
                          <img
                            src={images}
                            alt={`${title}`}
                            height={260}
                            width={462}
                            layout="responsive"
                            loading="lazy"
                          />
                        </a>
                      </dd>
                      <dd>
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>

                    <div className="space-y-2 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="mb-2 text-3xl font-bold leading-8 tracking-tight">
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
