import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Tag from '@/components/Tag'

const DEFAULT_LAYOUT = 'PostPage'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('pages', ['community'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
