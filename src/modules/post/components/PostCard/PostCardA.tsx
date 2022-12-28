import Image from 'next/image'
import Link from 'next/link'
import { IPost } from '../../types/post'

interface Props {
  post: IPost
}

export default function PostCardA({ post }: Props) {
  return (
    <div className="mb-2">
      <Link href={`/post/${post.slug}`}>
        <a className="flex h-fit items-stretch">
          <div className="relative h-24 w-24">
            <Image
              src={post.coverImage.url}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-gray-600 font-medium">{post.createAt}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
