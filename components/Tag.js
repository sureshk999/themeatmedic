import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-xl font-medium uppercase text-blue-900 hover:text-primary-600 dark:text-blue-100 dark:hover:text-primary-300">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
