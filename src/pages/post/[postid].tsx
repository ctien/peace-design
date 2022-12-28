import { Layout } from '@/modules/common'

import {
  PostId,
  getStaticPropsPostId,
  getStaticPathsPostId,
} from '@/modules/post'
export {
  getStaticPropsPostId as getStaticProps,
  getStaticPathsPostId as getStaticPaths,
}
;(PostId as any).Layout = Layout
export default PostId
