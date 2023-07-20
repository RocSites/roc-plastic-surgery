import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import chillMenu from "../images/chill_menu.jpeg"
import "../components/main.css"


const ChillMenu = () => (
  <Layout>
    <SEO title="Chill Menu" />
    <h1 class="menuHeader">Chill Menu</h1>
    <img class="menuImage" src={chillMenu}/>
  </Layout>
)

export default ChillMenu
