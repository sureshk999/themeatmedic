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
        {/* <div className="space-y-2 pt-6 pb-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetadata.title} Podcast
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div> */}
        <div>
          <div className="flex grid flex-wrap px-0 py-5 dark:text-black sm:grid-cols-2  ">
            <div className="col-span-1 py-2 sm:py-5 ">
              <div className="relative col-span-1 float-right my-1 flex items-center justify-center sm:hidden">
                <Image
                  className="rounded-full"
                  alt="Dr Suresh Khirwadkar"
                  src="/suresh.webp"
                  layout="intrinsic"
                  height="100px"
                  width="100px"
                  priority
                  objectFit="cover"
                />
              </div>

              <h1 className=" mb-5 mt-5 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:mt-0 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 lg:py-10 xl:text-5xl">
                Hello and Welcome! <br></br>
                I'm Dr Suresh Khirwadkar
              </h1>

              <div>
                <p className="md:text-md mb-5 mr-5 mb-3 max-w-none text-lg text-gray-800 dark:text-gray-300 md:mb-0 lg:text-lg xl:text-xl">
                  I'm an author, YouTuber, Podcaster, Doctor, a Father and a Husband.
                  <br />
                  <br />
                  The Meat Medic Podcast is <b>free</b> and it's available for you to optomise your
                  physical and mental health through species-appropriate diet, nutrition and
                  lfestyle changes.
                  <br />
                  <br />
                  I've also created in-depth, no-nonsense <b>health courses</b> for you to learn how
                  to improve your health, saving your <b>time</b> and <b>money</b>
                </p>

                <div className="mb-5 mr-2 flex grid grid-cols-1 grid-rows-1 flex-wrap place-items-center gap-x-2 gap-y-5 sm:mt-7 md:grid-cols-2 lg:mt-5 ">
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge"
                      className="rounded-xl border-4 border-double border-white bg-black py-2 px-4 text-xl font-bold text-white hover:bg-primary-500 dark:border-black dark:bg-white dark:text-black dark:hover:bg-primary-500 "
                    >
                      Podcast &rarr;
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge"
                      className="rounded-xl border-4 border-double border-black bg-white py-2 px-4 text-xl font-bold text-black hover:bg-primary-500 dark:border-white dark:bg-black dark:text-white dark:hover:bg-primary-500 "
                    >
                      Courses &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative col-span-1 my-1 flex hidden items-center justify-center sm:grid">
              <Image
                className="rounded-2xl"
                alt="Dr Suresh Khirwadkar"
                src="/suresh.webp"
                layout="intrinsic"
                height="550px"
                width="550px"
                priority
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex-grid grid-col-6 grid py-5"></div>
        </div>

        <div className="">
          <h2 className="mt-5 mb-10 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Want to start a carnivore diet?
          </h2>
          <p className=" mb-3 max-w-none text-lg text-gray-800 dark:text-gray-300">
            New to the Carnivore Diet and not sure what to do? The best way to start is by{' '}
            <Link
              href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge"
              className="text-blue-800 dark:text-blue-500"
            >
              clicking here
            </Link>
            . My guide has over 100 pages of high quality, evidence based, highly researched
            information and is available via Teachables course or downloadable eBook.
          </p>

          <div className="mb-10">
            <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">
              <Image
                alt="30 day carnivore challenge"
                src="/htc.webp"
                layout="responsive"
                height="30vh"
                width="60vw"
                objectFit="cover"
                loading="lazy"
              />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge"
              className="rounded-xl bg-black py-2 px-4 text-xl font-bold text-white hover:bg-primary-500 dark:bg-white dark:text-black dark:hover:bg-primary-500 "
            >
              Enrol Now
            </a>
          </div>
          <div className="mt-5 py-5">
            <h2 className="mt-10 mb-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
              Listen to the Meat Medic Podcast for free
            </h2>
            <p className="mb-5 text-lg ">
              Consistently in the Top 50 Health and Nutrition Podcasts,{' '}
              <i>The Meat Medic Podcast</i> is 5* rated on Apple Podcasts and is an excellent source
              of information on Low Carb, Keto and Carnivore Diet. I also discuss wider health
              topics like sleep, stress, exercise and integrative, functional and lifestyle
              medicine.
            </p>
            <div className="xs:grid-cols-6 flex grid flex-wrap place-items-center gap-x-2 gap-y-5 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
              <a
                href="https://podcasts.apple.com/au/podcast/the-meat-medic-podcast/id1667140036"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <Image
                    alt="Apple Podcasts"
                    src="/applepodcasts.png"
                    layout="intrinsic"
                    height="40px"
                    width="40px"
                    objectFit="contain"
                    loading="lazy"
                  />
                  <p className="px-5">Apple Podcasts</p>
                </div>
              </a>

              <a
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vdGhlLW1lYXQtbWVkaWMtcG9kY2FzdC8?sa=X&ved=0CAIQ9sEGahcKEwiQqKH3xdr8AhUAAAAAHQAAAAAQFA"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <Image
                    alt="Google Podcasts"
                    src="/googlepodcasts.png"
                    layout="intrinsic"
                    height="40px"
                    width="40px"
                    objectFit="contain"
                    loading="lazy"
                  />
                  <p className="px-5">Google Podcasts</p>
                </div>
              </a>

              <a
                href="https://music.amazon.com.au/podcasts/cc5d2830-14d2-4e7c-bfb9-78f25c4f0aee/the-meat-medic-podcast"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <Image
                    alt="Amazon Music"
                    src="/amazonmusic.png"
                    layout="intrinsic"
                    height="40px"
                    width="40px"
                    objectFit="contain"
                    loading="lazy"
                  />
                  <p className="px-5">Amazon Music</p>
                </div>
              </a>

              <a
                href="https://open.spotify.com/show/4vqppR122LTxV6DKrehzMA"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <Image
                    alt="Spotify Podcasts"
                    src="/spotify.png"
                    layout="intrinsic"
                    height="40px"
                    width="40px"
                    objectFit="contain"
                    loading="lazy"
                  />
                  <p className="px-5">Spotify</p>
                </div>
              </a>

              <a
                href="https://feeds.captivate.fm/the-meat-medic-podcast/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <Image
                    alt="RSS"
                    src="/rss.png"
                    layout="intrinsic"
                    height="40px"
                    width="40px"
                    objectFit="contain"
                    loading="lazy"
                  />

                  <p className="px-5">RSS Feed</p>
                </div>
              </a>

              <a href="https://youtube.com/@themeatmedic" target="_blank" rel="noreferrer">
                <div className="flex w-60 flex-wrap items-center justify-center rounded-xl border-2 border-black px-2 py-2 text-black dark:bg-white">
                  <Image
                    alt="YouTube"
                    src="/youtube.png"
                    layout="intrinsic"
                    height="40px"
                    width="40px"
                    objectFit="contain"
                    loading="lazy"
                  />
                  <p className="px-5">YouTube</p>
                </div>
              </a>
            </div>
          </div>
          <h2 className="mt-10 mb-10 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Health Courses
          </h2>
          <div className="grid px-0 py-5 dark:text-black sm:grid-cols-3  ">
            <div className="col-span-1 py-2 px-2">
              <div>
                <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">
                  <Image
                    alt="Insulin Resistance"
                    src="/insulin_resistance.jpg"
                    layout="responsive"
                    height="180px"
                    width="320px"
                    objectFit="contain"
                    loading="lazy"
                  />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-bold dark:text-gray-200">Insulin Resistance</h3>
              <ul>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Fatigued or low energy? </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Struggling with your weight?{' '}
                </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Low energy levels or fatigue?
                </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Acne?</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Arthritis?</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">PCOS?</li>
              </ul>
              <br></br>
              <p className="font-bold text-gray-800 dark:text-gray-200">You need this course </p>
            </div>

            <div className="col-span-1 py-2 px-2">
              <div>
                <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">
                  <Image
                    alt="30 day carnivore challenge"
                    src="/htc.webp"
                    layout="responsive"
                    height="180px"
                    width="320px"
                    objectFit="contain"
                    loading="lazy"
                  />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-bold dark:text-gray-200">Carnivore Challenge</h3>
              <ul>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Do you have autoimmune issues?{' '}
                </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Chronic Pain?</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Can't lose weight no matter what?{' '}
                </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Acne or eczema that just won't go away?
                </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Irritable Bowel Syndrome?</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Struggling to get pregnant?
                </li>
              </ul>
              <br></br>
              <p className="font-bold text-gray-800 dark:text-gray-200">This course is for you</p>
            </div>
            <div className="col-span-1 py-2 px-2">
              <div>
                <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">
                  <Image
                    alt="Metabolic Syndrome"
                    src="/metabolic_syndrome.jpg"
                    layout="responsive"
                    height="180px"
                    width="320px"
                    objectFit="contain"
                    loading="lazy"
                  />
                </a>
              </div>
              <h3 className="mt-5 text-xl font-bold dark:text-gray-200 ">Metabolic Syndrome</h3>
              <ul>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Erectile Dysfunction? </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Feeling sluggish or tired?
                </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Skin Tags?</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Huge Belly?</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  PCOS or Erectile Dysfunction?
                </li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Heart Disease?</li>
              </ul>
              <br></br>
              <p className="font-bold text-gray-800 dark:text-gray-200">
                This course will help you{' '}
              </p>
            </div>
          </div>

          <p className=" mb-3  max-w-none text-lg text-gray-800 dark:text-gray-300">
            If you need more help with your health then please check out my other health courses by{' '}
            <a href="https://drsuresh.teachable.com" className="text-blue-800 dark:text-blue-500">
              clicking here.
            </a>
            <br />
            Simple and easy to understand, my health courses have been designed to teach you how to
            perfect your health. My courses cover a wide range of topics including diet, nutrition
            and metabolic health, including obesity, weight loss, metabolic syndrome and autoimmune
            conditions.
          </p>
        </div>

        <h4 className="mt-10 mb-10 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
          Join My Health Newsletter
        </h4>
        <p className="text-lg md:px-36">
          Join thousands of others in my Newsletter. I regularly send updates on health topics, my
          podcast, my social media activities, new health courses, <b>discount codes</b> for my
          courses, and affiliate coupons.
          <br />
          <br />
          As a bonus I'll send you my <b>free</b>{' '}
          <i>Introduction to Low Carb, Keto and Carnivore eBook</i> just for signing up. You can
          cancel any time.
        </p>

        {siteMetadata.newsletter.provider !== '' && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}

        <br></br>
        <div className=" mb-3">
          <h2 className="mt-10 mb-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Need even more help? Book for a consult
          </h2>
          <p className=" mb-3 max-w-none text-lg text-gray-600 dark:text-gray-300">
            The Meat Medic Podcast is run by myself -{' '}
            <a href="https://drsuresh.com.au" className="text-blue-800 dark:text-blue-500">
              Dr Suresh Khirwadkar
            </a>
            . I'm a Specialist GP and Board Certified Lifestyle Physician.
            <br />I specialise in helping patients through diet, nutrition and lifestyle changes and
            I practices a mix of conventional medicine, lifestyle medicine, integrative medicine and
            functional medicine to help my patients. You can read more about me on my
            <Link href="/about" className="text-blue-800 dark:text-blue-500">
              about page
            </Link>
            .
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://drsuresh.com.au"
              className="rounded-xl bg-black py-2 px-4 text-xl font-bold text-white hover:bg-primary-500 dark:bg-white dark:text-black dark:hover:bg-primary-500 "
            >
              Book Now
            </a>
          </div>
        </div>
        <div>
          <div>
            <h3 className="mt-10 mb-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
              The Meat Medic Podcast
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

              <p className=" mb-3 max-w-none text-gray-800 dark:text-gray-300">
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
          <h4 className="mt-10 mb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Episode
          </h4>

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
          <h1 className="mt-10 mb-10 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            Membership Options
          </h1>
          <p className="mb-3 max-w-none text-center text-lg text-gray-800 dark:text-gray-300 sm:px-36">
            Do you want extra from The Meat Medic Podcast? Check out the membership options. From
            general support to private discord servers and more!
          </p>
          <div className="grid px-0 py-5 dark:text-black sm:grid-cols-3  ">
            <div className="col-span-1 py-2 px-2">
              <div>
                <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">
                  <Image
                    className="rounded-xl"
                    alt="Bronze Member"
                    src="/bronze_member.jpg"
                    layout="responsive"
                    height="180px"
                    width="320px"
                    objectFit="contain"
                    loading="lazy"
                  />
                </a>
              </div>
              <h2 className="ml-2 mt-5 text-xl font-bold text-gray-800 dark:text-gray-200">
                Bronze Member
              </h2>
              <ul>
                <li className="ml-2 text-gray-800 dark:text-gray-200">General Financial Support</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">YouTube Badges</li>
              </ul>
            </div>
            <div className="col-span-1 py-2 px-2">
              <div>
                <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">
                  <Image
                    className="rounded-xl"
                    alt="Silver Member"
                    src="/silver_member.jpg"
                    layout="responsive"
                    height="180px"
                    width="320px"
                    objectFit="contain"
                    loading="lazy"
                  />
                </a>
              </div>
              <h2 className="ml-2 mt-5 text-xl font-bold text-gray-800 dark:text-gray-200">
                Silver Member
              </h2>
              <ul>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Bronze Perks</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Early Access and Exclusive Content
                </li>
              </ul>
            </div>
            <div className="col-span-1 py-2 px-2">
              <div>
                <a href="https://drsuresh.teachable.com/p/30-day-carnivore-challenge">
                  <Image
                    className="rounded-xl"
                    alt="Gold Member"
                    src="/gold_member.jpg"
                    layout="responsive"
                    height="180px"
                    width="320px"
                    objectFit="contain"
                    loading="lazy"
                  />
                </a>
              </div>
              <h2 className="ml-2 mt-5 text-xl font-bold text-gray-800 dark:text-gray-200">
                Gold Member
              </h2>
              <ul>
                <li className="ml-2 text-gray-800 dark:text-gray-200">Silver Perks</li>
                <li className="ml-2 text-gray-800 dark:text-gray-200">
                  Private Discord Server For Coaching
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
