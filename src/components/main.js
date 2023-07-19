import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ContactForm from './contactForm'
import Button from '@material-ui/core/Button'
import liner1 from '../images/ph_liner_install_done.jpeg'
import liner2 from '../images/ph_pool_kids.jpeg'
import liner3 from '../images/liner_drone.jpg'
import liner4 from '../images/ph_liner_2_river.jpeg'
import liner5 from '../images/liner_install_1.jpeg'
import liner6 from '../images/liner6.jpeg'
import linerFlower from '../images/liner_flower.jpg'
import bbbLogo from '../images/AB-seal-horz.svg'
import poolVacuum from '../images/pool_cleaning.jpg'
import poolPump from '../images/pool_pump.jpg'
import poolEquipmentSales from '../images/poolEquipmentSales.jpg'
import phBizCard from '../images/phBizCard.jpeg'
import poolSafety from '../images/pool_safety2.jpg'
import chillGrillSign from '../images/chill_grill_background.jpg'
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import Avatar from '@material-ui/core/Avatar'
import StarRateIcon from '@material-ui/icons/StarRate';
import SprinklesSvg from '../images/sprinkles.svg'
import "./main.css"

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column"
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "auto"

    },
    bannerImage: {
        width: "100%",
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
    aboutSectionWrapper: {
        display: "flex",
        width: "50%",
        flexDirection: "column",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    aboutTitleHeader: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "black"
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
    servicesBulletsWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "black",
        // fontFamily: "Raleway, sans-serif",
        margin: "20px"
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
    contactHeader: {
        fontSize: "2.0rem",
        textAlign: "center",
        color: "#333333"
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
    reviewButton: {
        backgroundColor: "#0074eb",
        borderRadius: "25px",
        padding: "20px",
        marginBottom: "20px"
    },
    reviewHeader: {
        fontSize: "1.2rem",
        color: "#333333",
        fontWeight: "bold",
        textTransform: "none"
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
        justifyContent: "center"
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
    }
}))

const Main = () => {
    const classes = withStyles();
    const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query { 
      desktopImage: file(relativePath: { eq: "ice_cream_1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "ice_cream_1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
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
            <section class="py-5 section-bubble1">
                <div class="container">
                    {/* TODO, move cone down so tip is under nav */}
                    <BackgroundImage
                        fluid={sources}
                        className={classes.bannerImage}
                    >
                        <div className={classes.landingWrapper}>
                            <div className={classes.landingMessageWrapper}>
                                {/* <Typography className={classes.landingPageHeader}>Chill & Grill</Typography>
                                <Typography className={classes.landingPageSubHeader}>Old Fashioned Ice Cream & Great Food</Typography>
                                <Typography className={classes.landingPageSubHeaderMobile}>Old Fashioned Ice Cream</Typography>
                                <Typography className={classes.landingPageSubHeaderMobile}>& Great Food</Typography> */}
                            </div>
                        </div>
                    </BackgroundImage>

                </div>
            </section>

            <span className={classes.scrollToServices} id="services"></span>
            <section class="py-5 section-bubble2">

                <div class="container">
                    <Typography className={classes.someOfWorkHeader}>Family owned and operated, Chill & Grill serves old fashioned ice cream & great food.</Typography>
                    <Divider className={classes.serviceDivider} />
                    <div class="container">
                        SPRINKLES
                        {/* <SprinklesSvg/> */}
                    </div>
                    <div class="container">
                        <Typography className={classes.hourlyHeaderText}>OPEN DAILY</Typography>
                        <Typography className={classes.hourText}>Monday-Saturday: 11am-9pm </Typography>
                        <Typography className={classes.hourText}> Sunday: 12pm-9pm</Typography>
                        <Typography className={classes.hourText}>Grill closes at 8pm everyday!</Typography>
                    </div>
                    <div class="container">
                        SPRINKLES
                        {/* <SprinklesSvg/> */}
                    </div>
                    <div className={classes.servicesBulletsWrapper}>
                        <Typography className={classes.menuHeaderTextMenu}>MENUS</Typography>
                        <Button>Chill Menu</Button>
                        <Button>Grill Menu</Button>
                    </div>
                </div>



                <div class="container">
                    <div className={classes.serviceWrapper}>
                        <div>Add new pictures here, alternate with words like mitchells dougDesignText</div>
                        <div className={classes.servicesListWrapper}>
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner4} alt="pool with cover" />
                                    <Typography className={classes.servicesCardText}>Title of image</Typography>
                                </CardContent>
                            </Card>
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner2} alt="child swimming" />
                                    <Typography className={classes.servicesCardText}>Title of image</Typography>
                                </CardContent>
                            </Card>
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner6} alt="pool liner" />
                                    <Typography className={classes.servicesCardText}>Title of image</Typography>
                                </CardContent>
                            </Card>
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={linerFlower} alt="pool liner" />
                                    {/* <Typography className={classes.servicesCardText}>Custom Pool Liners by PH</Typography> */}
                                </CardContent>
                            </Card>
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner5} alt="pool liner install" />
                                    <Typography className={classes.servicesCardText}>Title of image</Typography>
                                </CardContent>
                            </Card>
                            <Card className={classes.servicesCard}>
                                <CardContent className={classes.servicesCardContent}>
                                    <img className={classes.servicesCardImage} src={liner1} alt="pool liner install" />
                                    {/* <Typography className={classes.servicesCardText}>Major Pool Renovation</Typography> */}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <span className={classes.scrollToAbout} id="about"></span>

            <section class="py-5 section-bubble3">
                <div class="container">
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                            <div className={classes.aboutTextWrapper}>
                                <p className={classes.aboutText}>About CG content here, Stevens family, etc.</p>
                                <p className={classes.aboutText}>About content</p>
                                <p className={classes.aboutText}>About content</p>
                                <p className={classes.aboutText}>About content</p>
                            </div>
                        </div>
                        <img className={classes.aboutImage} src={chillGrillSign} alt="photo of a river" />
                    </div>
                </div>
            </section>

            {/* </BackgroundImage> */}
            <span className={classes.scrollToContact} id="contactForm"></span>
            <section class="py-5 section-bubble4">
                <div class="container">
                    <div>
                        <Typography className={classes.contactHeader}>Connect with us!</Typography>
                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:(315) 597-8946" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    Give us a Call!
                                </Button>
                            </a>
                            <a href="" className={classes.emailA}>
                                <Button className={classes.contactButton}>
                                    PUT INSTAGRAM HERE
                                </Button>
                            </a>
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
