import { PostAPI } from '../types/post'

export const postAPI: PostAPI = {
  getAllPosts: async () => {},
  getPost: async (slug) => {},
  getPostsRecent: (category: string, slug: string) => {},
  getPostsRelated: (slug: string) => {},
}
