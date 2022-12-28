export interface IPost {
  title: string
  createAt: string
  content: string
  slug: string
  coverImage: Image
  tags: {
    tagName: string
    slug: string
  }[]
}

interface Image {
  alt: string
  url: string
}

export type PostAPI = {
  getAllPosts: () => any
  getPost: (slug: string) => any
  getPostsRecent: (category: string, slug: string) => any
  getPostsRelated: (slug: string) => any
}
