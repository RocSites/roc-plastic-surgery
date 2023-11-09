import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import handBackground from "../images/hand-background.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../components/main.css"

const withStyles = makeStyles(() => ({

  mainBanner: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${handBackground})`,
    background: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: "60%",
    paddingTop: "33%",
    paddingRight: "30px",
    justifyContent: "flex-end",
    height: "100vh",
    padding: "20px",
    "@media(max-width:1200px)": {
      paddingTop: "30%",
    },
    "@media(max-width:800px)": {
      paddingTop: "50%",
      justifyContent: "center",
    },
    "@media(max-width:600px)": {
      paddingTop: "70%",
      backgroundPositionX: "66%",
      backgroundSize: "cover",
      backgroundPositionY: "70px"
    }
  },
  mainBannerText: {
    color: "black",
    // fontSize: "3rem",
    fontSize: "2.5rem",
    textAlign: "left",
    textTransform: "uppercase",
    fontWeight: 200,
    lineHeight: "1.25",
    paddingLeft: "30px",
    fontFamily: "Roboto, sans-serif !important",
    zIndex: 1,
    "@media(max-width:700px)": {
      fontSize: "2.5rem",
      textAlign: "center"
    }
  },
}));

const HandCenter = () => {

  const classes = withStyles();
  return (
    <Layout>
      <SEO title="Rochester Hand Center" />
      <div className={classes.mainBanner}>
        <div className="mainBannerTextWrapper">
          <Typography className={classes.mainBannerText}>
            The <br /> Rochester <br /> Hand Center
          </Typography>
          <button className="consultationButton">
            Schedule a Consultation
          </button>
        </div>
        <div className="arrowWrapper">
          <Link to="/">
            <ArrowBackIosIcon style={{ fontSize: "4rem", color: "#8f7311" }} />
          </Link>
          <Link to="/hand-center">
            <ArrowForwardIosIcon style={{ fontSize: "4rem", color: "#8f7311" }} />
          </Link>
        </div>
      </div>
    </Layout >
  )
}

export default HandCenter
