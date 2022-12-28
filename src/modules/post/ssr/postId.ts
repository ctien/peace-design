import { GetStaticPaths, GetStaticProps } from 'next'
import { postAPI } from '../api'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug: string = params?.postid?.toString() || ''
  const { post } = await postAPI.getPost(slug)
  const { posts } = await postAPI.getAllPosts()
  return {
    props: {
      post,
      postsRelated: posts,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await postAPI.getAllPosts()
  const paths = posts.map((p: any) => ({
    params: { postid: p.slug.toString() },
  }))
  return { paths, fallback: 'blocking' }
}
