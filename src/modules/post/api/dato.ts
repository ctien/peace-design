import { fetchCmsAPI } from '@/lib/fetchCmsAPI'
import { PostAPI } from '@/modules/post'

const ALL_POSTS = `
  query MyQuery {
    allPosts {
      id
      slug
      title
      tags {
        slug
        name
      }
      coverImage{
        url
        alt
      }
    }
  }
`

const POST = `
  query MyQuery($slug: String = "") {
    post(filter: {slug: {eq: $slug}}) {
      id
      slug
      title
      tags {
        slug
        name
      }
      coverImage {
        url
        alt
      }
      content
      _seoMetaTags {
        tag
        attributes
        content
      }
      seoSettings {
        description
        title
        twitterCard
        image {
          alt
          url
        }
      }
    }
    _site {
      faviconMetaTags {
        tag
        attributes
        content
      }
    }
  }
`

const postAPI: PostAPI = {
  getAllPosts: async () => {
    const data = await fetchCmsAPI(ALL_POSTS)
    return { posts: data.allPosts }
  },
  getPost: async (slug) => {
    const data = await fetchCmsAPI(POST, { variables: { slug } })
    return { post: data.post }
  },
  getPostsRecent: (category: string, slug: string) => {},
  getPostsRelated: (slug: string) => {},
}

export default postAPI
