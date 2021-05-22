import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.css"

const PostPage = ({ postTitle, postSubTitle, content, shorthand }) => (
  <Layout>
    <Seo title={postTitle} description={shorthand} />
    <h1>{postTitle}</h1>
    <h2>{postSubTitle}</h2>
    <p>{content}</p>
  </Layout>
)
export default PostPage
