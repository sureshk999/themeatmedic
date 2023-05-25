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
      <div className=" ">
        <div className="space-y-2 pt-6 pb-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetadata.title} Podcast
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap place-items-center items-center overflow-hidden px-0 py-5 dark:text-black sm:grid sm:grid-cols-1 sm:items-start lg:grid-cols-5 xl:grid-cols-2 ">
            <div className="mt-0 md:col-span-2 md:mt-0 md:px-0 xl:col-span-1">
              <h2 className="mb-10 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:mt-0 sm:text-4xl sm:leading-10 md:mb-0 md:text-4xl md:leading-14 xl:my-5 xl:text-5xl">
                I'm Dr Suresh Khirwadkar
              </h2>

              <p className="md:text-md mb-10 mr-5 mb-3 max-w-none text-xl text-gray-600 dark:text-gray-300 md:mb-0 lg:text-lg xl:text-xl">
                And welcome to The Meat Medic Podcast where we discuss all things related to
                nutrition, diet, health and lifestyle, with a focus on <b>meat</b> as a primary
                nutrition source.
                <br /> <br />
                I'm an author, YouTuber, Podcaster, Doctor, Specialist GP, Board Certified Lifestyle
                Physician (IBLM), and above all, a father and husband.
                <br />
                <br />
                I've created in-depth <b>health courses</b>, curated my <b>shop</b> and of course my{' '}
                <b>free podcast</b> is available for you to optomise your physical and mental health
                through species-appropriate diet, nutrition and lfestyle changes.
              </p>

              <div className="xs:grid-rows-1 mb-10 mr-2 flex grid grid-cols-3 flex-wrap place-items-center gap-x-2 gap-y-5 sm:mt-7 md:grid-cols-3 lg:mt-5 ">
                <div className="flex flex-col items-center justify-center">
                  <a
                    href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge"
                    className="rounded-md bg-black py-2 px-4 text-xl font-bold text-white hover:bg-primary-500 dark:bg-white dark:text-black dark:hover:bg-primary-500 "
                  >
                    Buy Now
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <a
                    href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge"
                    className="rounded-md bg-black py-2 px-4 text-xl font-bold text-white hover:bg-primary-500 dark:bg-white dark:text-black dark:hover:bg-primary-500 "
                  >
                    Buy Now
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <a
                    href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge"
                    className="rounded-md bg-black py-2 px-4 text-xl font-bold text-white hover:bg-primary-500 dark:bg-white dark:text-black dark:hover:bg-primary-500 "
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="my-1 flex w-full items-center justify-center sm:col-span-3 md:col-span-3 xl:col-span-1">
              <Image
                className="rounded-2xl"
                alt="Dr Suresh Khirwadkar"
                src="/suresh.webp"
                layout="fixed"
                height="500px"
                width="500px"
                loading="eager"
              />
            </div>
          </div>

          <div className="flex-grid grid-col-6 grid py-5"></div>
        </div>

        <hr />

        <div className="">
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
        <div className="">
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

        <div className="">
          <a href="https://drsuresh.teachable.com">
            <Image
              alt="health courses now available"
              src="/click.jpg"
              layout="responsive"
              height="30vh"
              width="60vw"
              objectFit="cover"
              loading="lazy"
            />
          </a>
        </div>
        <br></br>
        <div className=" mb-3">
          <h2 className="mt-10 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Need more help? Book for a consult
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
            <h3 className="mt-10 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
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
        <div className=" ">
          <h2 className="mt-10 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Episode
          </h2>

          <ul className="">
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
                            <Image
                              src={`${images}`}
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
        </div>

        <div className="mt-4">
          <h5 className=" mt-10 py-5 text-3xl font-bold leading-8 tracking-tight">
            Memberships Available
          </h5>
          <a href="https://bit.ly/42Qswb9">
            <Image
              alt="memberships"
              src="/membership.webp"
              layout="responsive"
              height="30vh"
              width="60vw"
              objectFit="fill"
              loading="eager"
            />
          </a>
        </div>
      </div>

      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
