import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import chillGrillLogoOG from '../images/chill_logo_og.jpeg'
import coneIcon from "../images/cone_icon.png"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "../images/facebook_icon_60.png"
import InstagramIcon from "../images/instagram_icon.png"

const withStyles = makeStyles(() => ({
  "@global": {
    "*": {
      fontFamily: "Angkor !important",
      fontWeight: "100"
    }
  },
  navBarRoot: {
    position: "fixed",
    display: "flex",
    background: "#ffffff",
    color: "black",
    justifyContent: "space-between",
    width: "100%",
    height: "112px",
    top: 0,
    boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
    zIndex: "1",
    opacity: "0.85"
  },
  navBarTitle: {
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  },
  navButton: {
    color: "black",
    fontWeight: "bold",
    textTransform: "none"
  },
  navBarButtonWrapper: {
    display: "flex",
    color: "white",
    margin: "10px",
    "@media(max-width: 600px)": {
      display: "none"
    }
  },
  navBarHamburgerDrawerWrapper: {
    display: "none",
    "@media(max-width: 601px)": {
      display: "flex",
      margin: "auto 10px"
    }
  },
  navLogo: {
    display: "flex",
    width: "60px",
    margin: "auto",
    borderRadius: "30px"
  },
  drawerItem: {
    "&:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "black"
    },
    "&:selected:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "black"
    }
  },
  list: {
    width: "250px"
  },
  hamburgerIcon: {
    margin: "20px",
    fontSize: "2.5rem",
    color: "red",
    "@media(min-width: 601px)": {
      display: "none"
    }
  },
  navLeftWrapper: {
    display: "flex",
  }
}))


const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  const handleClick = (id) => {
    let scrollToId = id
    setTimeout(() => scrollTo(scrollToId), 100)
  }

  return (
    <header
      className={classes.navBarRoot}
    >
      <div className={classes.navLeftWrapper}>
        <div className={classes.navBarTitle}>
          <Link to="/" style={{ color: '#001841', textDecoration: `none` }}>
            {/* <img className={classes.navLogo} src={chillGrillLogoOG} alt="chill grill logo" /> */}
            <img className={classes.navLogo} src={coneIcon} alt="chill grill logo" />
          </Link>
        </div>
        <div className={classes.navBarButtonWrapper}>
          <Button
            className={classes.navButton}
            onClick={() => scrollTo('#hours')}

          >
            Hours
          </Button>
          <Button
            className={classes.navButton}
            onClick={() => scrollTo('#menus')}

          >
            Menus
          </Button>
          <Button
            className={classes.navButton}
            onClick={() => scrollTo('#location')}

          >
            Location
          </Button>
          {/* < Button
            className={classes.navButton}
            onClick={() => scrollTo('#about')}

          >
            About Us
          </Button> */}
        </div>
      </div>

      <div class="socialLinkWrapperNav">
        <a href="https://www.instagram.com/thatsasmall/?hl=en" target="_blank" class="socialLink">
          <img class="socialNav" src={InstagramIcon} />
        </a>
        <a href="https://www.facebook.com/ChillNGrillPal" target="_blank" class="socialLink">
          <img class="socialNav" src={FacebookIcon} />
        </a>
      </div>
      <div className={classes.navBarHamburgerDrawerWrapper}>
        <MenuIcon
          className={classes.hamburgerIcon}
          onClick={toggleDrawer}
        />
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer}
          anchor="right"
          className={classes.drawerRoot}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              <ListItem
                className={classes.drawerItem}
                button
                onClick={() => handleClick('#hours')}
              >
                <ListItemText primary={"Hours"} />
              </ListItem>
              <ListItem
                className={classes.drawerItem}
                button
                onClick={() => handleClick('#menus')}
              >
                <ListItemText primary={"Menus"} />
              </ListItem>
              <ListItem
                className={classes.drawerItem}
                button
                // onClick={() => scrollTo('#about')}
                onClick={() => handleClick("#location")}
              >
                <ListItemText primary={"Location"} />
              </ListItem>
              {/* <ListItem
                className={classes.drawerItem}
                button
                // onClick={() => scrollTo('#about')}
                onClick={() => handleClick("#about")}
              >
                <ListItemText primary={"About Us"} />
              </ListItem> */}
              <Button
                class="drawerItemLogin"
                target="_blank" href="tel:(315) 597-8946"
              >
                <PhoneIcon class="drawerPhoneIcon" />
                Call Us
              </Button>
              <div class="socialLinkWrapperNavMobile">
                <a href="https://www.instagram.com/thatsasmall/?hl=en" target="_blank" class="socialLink">
                  <img class="socialDrawer" src={InstagramIcon} />
                </a>
                <a href="https://www.facebook.com/ChillNGrillPal" target="_blank" class="socialLink">
                  <img class="socialDrawer" src={FacebookIcon} />
                </a>
              </div>
            </List>

          </div>
        </Drawer>

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
