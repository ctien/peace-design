import { Seo } from '@/modules/common'
import { IPost, PostCard, PostCardA } from '@/modules/post'
import { BreadCrumb, Container, Text } from '@/modules/ui'

interface Props {
  posts?: IPost[]
  postsRelated?: IPost[]
}

export default function PostPage({ posts, postsRelated }: Props) {
  return (
    <>
      <Seo />
      <Container className="border-b py-2">
        <BreadCrumb />
      </Container>

      <Container className="py-8">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12">
          <div className="col-span-2">
            {posts && (
              <div>
                <Text variant="sectionTitle1" className="text-center">
                  MARKET NEWS
                </Text>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                  {posts.map((post, i) => (
                    <PostCard post={post} key={i} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="mb-16">
              {postsRelated && (
                <>
                  <Text className="mb-4" variant="sectionTitle1">
                    Related News
                  </Text>
                  <div className="grid grid-cols-1 gap-4">
                    {postsRelated.map((post, i) => (
                      <PostCardA post={post} key={i} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
