import { Layout } from '@/modules/common'
import { getStaticPropsPostPage, PostPage } from '@/modules/post'
export { getStaticPropsPostPage as getStaticProps }
;(PostPage as any).Layout = Layout
export default PostPage
