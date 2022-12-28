// import { Tags } from '@/components/icons'
import { IPost } from '@/modules/post'
import Link from 'next/link'
import s from './PostView.module.css'

interface Props {
  post: IPost
}

export default function PostView({ post }: Props) {
  return (
    <>
      <div>
        <h1 className={s.title}>{post.title}</h1>
        <p className="text-sm my-4 flex items-center gap-2 text-gray-600">
          {post.createAt}
        </p>
      </div>

      <div
        className={s.content}
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />

      <div className="flex mt-16">
        <div className="text-gray-700 mr-4">{/* <Tags /> */}</div>
        <ul>
          {post.tags.map(({ tagName }, i) => {
            return (
              <Link href="/" key={i}>
                <a className="text-xs font-normal bg-gray-200 px-3 py-1 rounded-full">
                  {tagName}
                </a>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}
