import Image from 'next/image'
import Link from 'next/link'
import { IPost } from '../../types/post'

interface Props {
  post: IPost
}

export default function PostCard({ post }: Props) {
  return (
    <div className="mb-2">
      <Link href={`/post/${post.slug}`}>
        <a>
          <div className="relative h-48 w-full mb-4">
            <Image
              src={post.coverImage.url}
              layout="fill"
              objectFit="cover"
              alt="alt"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-medium mb-4">{post.title}</h3>
            <p className="text-sm text-gray-600 font-medium">{post.createAt}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
