import { GetStaticProps } from 'next'
import { postAPI } from '../api'

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await postAPI.getAllPosts()
  return {
    props: {
      posts,
      postsRelated: posts,
    },
    revalidate: 60,
  }
}
