import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import userContext from "../context/user/userContext"

const Header = ({ siteTitle }) => {
  const { user } = useContext(userContext)

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      {<pre>{JSON.stringify(user, null, 2)}</pre>}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
