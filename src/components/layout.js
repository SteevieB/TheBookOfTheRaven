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
      <div className="min-h-screen bg-gradient-to-t from-gray-200 via-white to-gray-200 flex flex-col justify-between">
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          subTitle={data.site.siteMetadata?.description || `Description`}
        />
        <div className="p-2">
          <div className="max-w-screen-lg px-2 sm:px-6 lg:px-8 mx-auto">
            <main className="">{children}</main>
          </div>
        </div>

        <Footer author={data.site.siteMetadata?.author || `Author`} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
