import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import grillMenu from "../images/grill_menu.jpeg"

const GrillMenu = () => (
  <Layout>
    <SEO title="Grill Menu" />
    <h1 class="menuHeader">Grill Menu</h1>
    <img class="menuImage"  src={grillMenu}/>
  </Layout>
)

export default GrillMenu
