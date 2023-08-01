import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ContactForm from './contactForm'
import Button from '@material-ui/core/Button'
import chillGrillSign from '../images/chill_grill_background.jpg'
import iceCreamTwo from "../images/ice_cream_2.jpeg"
import iceCreamOne from "../images/ice_cream_1.jpeg"
import iceCreamSpoons from "../images/ice_cream_spoons.jpeg"
import burgerImage from "../images/grill_image_1.jpeg"
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import StarRateIcon from '@material-ui/icons/StarRate';
import SprinklesSvg from '../components/sprinkles'
import FacebookIcon from "../images/facebook_icon_60.png"
import InstagramIcon from "../images/instagram_icon.png"
import GoogleIcon from "../images/google_icon.png"
import "./main.css"

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "auto"

    },
    aboutBackgroundImage: {
        width: "100%",
    },
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#008a9c"
    },
    aboutWrapper: {
        display: "flex",
        margin: "auto",
        margin: "20px",
        color: "black",
        marginBottom: "50px",
        "@media(max-width: 600px)": {
            flexDirection: "column"
        }
    },
    servicesTitleHeader: {
        textAlign: "center",
        fontSize: "1.5rem",
        marginBottom: "20px"
    },
    aboutTextWrapper: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "960px",
        margin: "20px",
        "& p": {
            opacity: "1.0"
        }
    },
    aboutText: {
        color: "black"
    },
    aboutImage: {
        width: "50%",
        maxHeight: "500px",
        maxWidth: "500px",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    servicesText: {
        color: "black"
    },
    projectImage: {
        width: "25%",
        margin: "25px",
        maxHeight: "350px"
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        background: "white"
    },
    someOfWorkHeader: {
        textAlign: "center",
        fontSize: "2rem",
        color: "black",
        padding: "10px",
        width: "50%",
        margin: "auto",
        "@media(max-width: 600px)": {
            width: "90%"
        }
    },
    landingMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        opacity: "0.85",
        marginLeft: "0px",
        marginRight: "0px",
        height: "150px",
        "@media(max-width:650px)": {
            marginTop: "auto"
        }
    },
    landingPageHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "3.0em",
        fontWeight: "500",
        textAlign: "center",
        margin: "auto"
    },
    landingPageSubHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "2em",
        fontWeight: "500",
        fontFamily: "Angkor, sans-serif !important",
        textAlign: "center",
        margin: "auto",
        "@media(max-width: 600px)": {
            display: "none"
        }
    },
    landingPageSubHeaderMobile: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "block",
            color: "black",
            // background: "#3587de",
            marginLeft: "0px",
            marginRight: "0px",
            fontSize: "2em",
            fontWeight: "100",
            // fontFamily: "Raleway, sans-serif",
            textAlign: "center",
            margin: "auto"
        }
    },
    serviceDivider: {
        width: "15%",
        margin: "auto",
        marginTop: "1.5em",
        marginBottom: "1.5em",
        background: "white"
    },
    serviceWrapper: {
        paddingTop: "2.5em"
    },
    scrollToAbout: {
        height: "80px",
        background: "#ffffff"
    },
    scrollToServices: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    scrollToContact: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    servicesListWrapper: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "auto"
    },
    servicesCard: {
        width: "calc(50% - 2.5em)",
        height: "400px",
        boxShadow: "none",
        backgroundColor: "#1563b2",
        "@media(max-width: 736px)": {
            width: "100%",
            margin: "1.25em 0 0 0"
        }
    },
    servicesCardLast: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "flex",
            height: "100px",
            color: "transparent",
            backgroundColor: "transparent",
            boxShadow: "none"
        }
    },
    servicesCardContent: {
        position: "relative",
        textAlign: "center",
        color: "black",
        padding: 0,
        paddingBottom: "0 !important",
        margin: "10px",
        height: "400px"
    },
    servicesCardImage: {
        height: "100%",
        width: "100%",
    },
    servicesCardText: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "#add8e685"
    },
    phoneEmailWrapper: {
        display: "flex",
        justifyContent: "center",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            textAlign: "center"
        }
    },
    contactPhone: {
        color: "black",
        textDecoration: "none",
        // fontFamily: "Raleway, sans-serif",
    },
    contactButton: {
        margin: "20px",
        backgroundColor: "#333333",
        color: "white",
        borderColor: "#333333",
        borderRadius: "35px",
        padding: "15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        // width: "190px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#001841",
            boxShadow: 'none',
            cursor: "pointer"
        },
    },
    emailA: {
        marginBottom: "20px",
        textDecoration: "none"
    },
    reviewsWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center",
        alignItems: "center",
    },
    reviewClickText: {
        textTransform: "none"
    },
    reviewStarWrapper: {
        display: "flex",
        flexDirection: "column"
    },
    reviewLink: {
        textDecoration: "none"
    },
    reviewCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#white",
        width: "250px",
        minHeight: "100px",
        margin: "10px",
        padding: "10px"
    },
    reviewCardText: {
        fontSize: "0.75rem"
    },
    reviewCardsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "15%",
        "@media(max-width: 600px)": {
            justifyContent: "center",
            marginLeft: "unset"
        }
    },
    phoneIcon: {
        marginRight: "10px"
    },
    emailIcon: {
        marginRight: "10px"
    },
    bbbWrapper: {
        display: "flex",
        margin: "auto",
        marginTop: "0px",
        backgroundColor: "white",
        borderRadius: "14px",
        "@media(max-width:600px)": {
            flexDirection: "column",
            justifyContent: "center",
            height: "110px",
            marginBottom: "20px",
        }
    },
    bbbLink: {
        display: "flex",
        textDecoration: "none",
        padding: "10px",
    },
    bbbImage: {
        margin: "auto",
        padding: "10px",
        minWidth: "200px",
        maxWidth: "300px",
        maxHeight: "150px",
        borderRadius: "15px"
    },
    bbbYearsCircle: {
        width: "65px",
        height: "65px",
        backgroundColor: "#1f5a76",
        margin: "auto",
        marginRight: "10px",
        fontFamily: "proxima-nova, Helvetica, Arial, sans-serif",
        borderRadius: "14px"
    },
    bbbCirleText: {
        color: "white",
        opacity: "1 !important",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "2.0rem"
    },
    phBizCardWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    phBizCardImage: {
        maxWidth: "300px",
        maxHeight: "200px"
    },
    fiveStar: {
        color: "#f5b81c"
    },
    hourText: {
        display: "flex",
        color: "black",
        margin: "10px auto",
        justifyContent: "center",
        fontSize: "1.25rem"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuHeaderTextMenu: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuBlockWrapper: {
        display: "flex"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.75rem"
    },
    aboutTitleHeader: {
        textAlign: "center",
        fontSize: "2rem",
        color: "black",
        textTransform: "uppercase",
        marginBottom: 0
    },
    addressText: {
        textAlign: "center",
        margin: "40px 0"
    },
    aboutWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    scrollToLocation: {
        height: "100px",
        flexDirection: "column"
    },
    connectHeader: {
        fontSize: "2rem",
        textAlign: "center",
        color: "black",
        textTransform: "uppercase"
    },
    socialLinkWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0 40px 0"
    },
    aboutSectionWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& iframe": {
            "@media(max-width:600px)": {
                width: "90%",
                margin: "auto"
            }
        },

    },
    reviewHeader: {
        fontSize: "1.2rem",
        textTransform: "none",
        color: "white",
        margin: 0,
    },
    socialFooterMargin: {
        height: "40px",
        width: "40px",
        margin: "10px auto"
    },
    socialFooter: {
        height: "40px",
        width: "40px",
        margin: "0 10px"
    },
    socialFacebookSpacing: {
        height: "40px",
        width: "40px",
        margin: "0 10px",
        marginBottom: "2px"
    },
    socialLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    reviewButton: {
        backgroundColor: "#333333",
        borderRadius: "25px",
        padding: "20px",
        marginBottom: "20px",
        border: "none"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0"
    },
    containerMarginBottomSmall: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0",
        marginBottom: "80px"
    },
    landingImage: {
        width: "100%",
        objectFit: "cover",
        aspectRatio: "1/1",
        height: "100vh",
        marginTop: "112px"
    },
    mainBanner: {
        display: "flex",
        marginTop: "25%",
        marginLeft: "25%",
        marginRight: "15%",
        textAlign: "center",
        position: "absolute",
        backgroundColor: "white",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "35px",
        "@media(max-width:600px)": {
            marginTop: "50%",
            marginLeft: "15%",
            marginRight: "15%",
        }
    },
    
}))

const Main = () => {
    const classes = withStyles();
    const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query { 
      desktopImage: file(relativePath: { eq: "ice_cream_1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "ice_cream_1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

    const sources = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 650px)`
        }
    ]

    const FiveStar = () => {
        return (
            <div className={classes.fiveStar}>
                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
            </div>
        )
    }


    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>We are closed Tuesday, August 1st. We will reopen Wednesday, August 2nd</div>

            <img src={iceCreamOne} className={classes.landingImage} />
            <section class="py-5 section-bubble1">
            </section>

            <span className={classes.scrollToServices} id="services"></span>
            <section class="py-5 section-bubble2">

                <div className={classes.container}>
                    <Typography className={classes.someOfWorkHeader}>Family owned and operated, <br /> Chill & Grill serves old-fashioned ice cream & great food.</Typography>
                    <Divider className={classes.serviceDivider} />
                    <div className={classes.container}>
                        <SprinklesSvg />
                        <span className={classes.scrollToAbout} id="hours"></span>
                    </div>
                    <div className={classes.containerMarginBottomSmall}>
                        <Typography className={classes.hourlyHeaderText}>OPEN DAILY</Typography>
                        <Typography className={classes.hourText}>Monday - Saturday: 11am-9pm </Typography>
                        <Typography className={classes.hourText}> Sunday: 12pm-9pm</Typography>
                        <Typography className={classes.hourText}>Grill closes at 8pm</Typography>
                    </div>
                    <div className={classes.container}>
                        <SprinklesSvg />
                        <span className={classes.scrollToAbout} id="menus"></span>
                    </div>

                    <div class="menuBlockWrapper">
                        <Link to="/chill-menu" class="menuContent menuLink chillBlock">
                            Chill Menu
                        </Link>
                        <div class="menuContent">
                            <img src={iceCreamSpoons} />
                        </div>
                    </div>
                    <div class="menuBlockWrapper">
                        <div class="menuContent">
                            <img src={burgerImage} />
                        </div>
                        <Link to="/grill-menu" class="menuContent menuLink grillBlock">
                            Grill Menu
                        </Link>
                    </div>
                </div>

            </section>
            <span className={classes.scrollToLocation} id="location"></span>

            <section class="py-5 section-bubble3">
                <div className={classes.container}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>Location</Typography>
                            <Typography className={classes.addressText}>616 E. Main Street, Palmyra, NY 14522</Typography>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11285.550307357447!2d-77.22038615666283!3d43.06138775705887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d12ac7aa77f46f%3A0xef195eaca8ebfd95!2sChill%20%26%20Grill!5e0!3m2!1sen!2sus!4v1689823831901!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* </BackgroundImage> */}
            <span className={classes.scrollToContact} id="contactForm"></span>
            <section class="py-5 section-bubble4">
                <div className={classes.container}>
                    <div>
                        <Typography className={classes.connectHeader}>Connect With Us</Typography>
                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:(315) 597-8946" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    (315) 597-8946
                                </Button>
                            </a>
                            <div className={classes.socialLinkWrapper}>
                                <a href="https://www.instagram.com/thatsasmall/?hl=en" target="_blank" className={classes.socialLink}>
                                    <img className={classes.socialFooter} src={InstagramIcon} />
                                </a>
                                <a href="https://www.facebook.com/ChillNGrillPal" target="_blank" className={classes.socialLink}>
                                    <img className={classes.socialFacebookSpacing} src={FacebookIcon} />
                                </a>
                            </div>

                        </div>
                        <div className={classes.reviewsWrapper}>
                            <a className={classes.reviewLink}
                                href="https://www.google.com/search?q=chill+grill+palmyra&sxsrf=AB5stBhx8d0odqQLN5k6zp0SbZv3yaggCQ%3A1689826878596&ei=Pra4ZMn5I9Gk5NoPvum8mA0&oq=chill+gril&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmNoaWxsIGdyaWwqAggAMgQQIxgnMgQQIxgnMgQQIxgnMgUQABiABDIWEC4YgAQYFBiHAhixAxiDARjHARivATIFEAAYgAQyCBAuGNQCGIAEMgUQABiABDIQEC4YFBivARjHARiHAhiABDILEC4YgAQYxwEYrwFI9xxQkApYwBJwA3gBkAEAmAGmAaABmAqqAQQwLjEwuAEByAEA-AEBwgIKEAAYRxjWBBiwA8ICBxAjGIoFGCfCAggQABiKBRiRAsICCxAAGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIHEC4YigUYQ8ICERAuGIMBGMcBGLEDGNEDGIAEwgIOEC4YgAQYsQMYxwEY0QPCAhAQLhiABBgUGIcCGMcBGK8BwgIOEAAYgAQYsQMYgwEYyQPCAggQABiKBRiSA8ICBxAAGIoFGEPCAgoQABiABBgUGIcCwgIQEC4YgAQYsQMYxwEY0QMYCsICExAuGBQYrwEYxwEYhwIYsQMYgATCAgsQLhiABBixAxiDAcICDRAAGIAEGLEDGIMBGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#lrd=0x89d12ac7aa77f46f:0xef195eaca8ebfd95,1,,,,"
                                target="_blank"
                            >
                                <Button
                                    className={classes.reviewButton}
                                >
                                    <div className={classes.reviewStarWrapper}>
                                        <Typography className={classes.reviewHeader}>Leave us a review!</Typography>
                                        <img className={classes.socialFooterMargin} src={GoogleIcon} />
                                        <FiveStar />
                                    </div>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
