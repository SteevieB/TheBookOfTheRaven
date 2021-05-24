import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        subTitle={data.site.siteMetadata?.description || `Description`}
      />
      <div className="bg-gradient-to-t p-2 from-gray-300 via-white to-gray-300">
        <div className="max-w-screen-lg px-2 sm:px-6 lg:px-8 mx-auto">
          <main className="">{children}</main>
        </div>
      </div>
      <Footer author={data.site.siteMetadata?.author || `Author`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
