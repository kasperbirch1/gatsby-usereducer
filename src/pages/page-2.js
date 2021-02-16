import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import userContext from "../context/user/userContext"

const SecondPage = () => {
  const { logout } = useContext(userContext)

  return (
    <Layout>
      <SEO title="Page two" />
      <button onClick={logout}>logout</button>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
