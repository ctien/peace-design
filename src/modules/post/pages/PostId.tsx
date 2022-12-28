import { Seo } from '@/modules/common'
import { IPost, PostCard, PostCardA, PostView } from '@/modules/post'
import { BreadCrumb, Container, Text } from '@/modules/ui'
import Image from 'next/image'

interface Props {
  post?: IPost
  postsRelated: IPost[]
}

export default function PostPage({ post, postsRelated }: Props) {
  return (
    <div className="pb-16">
      <Seo />
      <div className="relative lg:h-[300px] h-[200px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <Image
          src={post?.coverImage.url || ''}
          layout="fill"
          objectFit="cover"
          alt=''
        />
      </div>
      <Container className="py-2 border-b">
        <BreadCrumb />
      </Container>
      <Container className="mt-6 mb-16">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-0">
          <div className="col-span-2 mb-16">
            {post && <PostView post={post} />}
          </div>
          <div>
            {postsRelated && (
              <div className="mb-16">
                <Text variant="sectionTitle1" className="mb-4">
                  Related News
                </Text>
                {postsRelated.map((post, i) => (
                  <PostCardA post={post} key={i} />
                ))}
              </div>
            )}
            <iframe
              name="f3cb8efd385639"
              width="1000px"
              height="1000px"
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              frameBorder="0"
              allowFullScreen={true}
              scrolling="no"
              allow="encrypted-media"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTanisimex&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              className="h-[500px] w-[340px] mb-16"
            />
          </div>

          {/* <div>
            <div className="mb-16">
              <PostRecent posts={postsRelated} />
            </div>
            <PostRecent posts={postsRelated} />
          </div> */}
        </div>
      </Container>
      {postsRelated && (
        <Container>
          <Text variant="sectionTitle" className="text-center">
            Related News
          </Text>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {postsRelated.map((post, i) => (
              <PostCard post={post} key={i} />
            ))}
          </div>
        </Container>
      )}
    </div>
  )
}
