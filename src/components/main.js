import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import fiveStar from '../images/fiveStar.png'
import faceBackground from "../images/landing_background.jpg"
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import StarRateIcon from '@material-ui/icons/StarRate';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
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
        width: "100%",
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
        // fontFamily: "Angkor, sans-serif !important",
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
    scrollToSectionOne: {
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
    mainBanner: {
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${faceBackground})`,
        background: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right",
        paddingTop: "33%",
        paddingRight: "30px",
        justifyContent: "flex-start",
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

}))

const Main = () => {
    const classes = withStyles();

    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>
                <Typography className={classes.mainBannerText}>
                    The Art & <br /> Science of <br/> Transformation
                </Typography>
                <button className="consultationButton">
                    Request a Consultation
                </button>
            </div>


            <section class="sectionWrapper">
                <div className={classes.container}>
                    <div className={classes.container}>
                        <span className={classes.scrollToSectionOne} id="sectionOne"></span>
                    </div>
                    <div className={classes.containerMarginBottomSmall}>
                        <Typography className={classes.someOfWorkHeader}>Section 1 Header Line 1... <br /> Section 1 Line 2.</Typography>
                    </div>
                </div>

            </section>
            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionTwo"></span>
            </div>
            <section class="sectionWrapper">
                <Typography className={classes.someOfWorkHeader}>Section 2 Header Line 1... <br /> Section 2 Line 2.</Typography>

                <Link to="/chill-menu" class="menuContent menuLink chillBlock">
                    Page 2
                </Link>
                <Link to="/grill-menu" class="menuContent menuLink grillBlock">
                    Page 3
                </Link>
            </section>
            <span className={classes.scrollToLocation} id="sectionThree"></span>

            <section class="py-5 section-bubble3">
                <div className={classes.container}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>Section 3</Typography>
                            <Typography className={classes.addressText}>Section 3 subtext</Typography>
                        </div>
                    </div>
                </div>
            </section>

            <span className={classes.scrollToContact} id="contactForm"></span>
            <section class="py-5 section-bubble4">
                <div className={classes.container}>
                    <div>
                        <Typography className={classes.connectHeader}>Connect With Us</Typography>
                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    (123) 456-7890
                                </Button>
                            </a>
                            <div className={classes.socialLinkWrapper}>
                                <a href="" target="_blank" className={classes.socialLink}>
                                    <img className={classes.socialFooter} src={InstagramIcon} />
                                </a>
                                <a href="" target="_blank" className={classes.socialLink}>
                                    <img className={classes.socialFacebookSpacing} src={FacebookIcon} />
                                </a>
                            </div>

                        </div>
                        <div className={classes.reviewsWrapper}>
                            <a className={classes.reviewLink}
                                href=""
                                target="_blank"
                            >
                                <Button
                                    className={classes.reviewButton}
                                >
                                    <div className={classes.reviewStarWrapper}>
                                        <Typography className={classes.reviewHeader}>Leave us a review!</Typography>
                                        <img className={classes.socialFooterMargin} src={GoogleIcon} />
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
