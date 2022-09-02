import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux/actions";
// import Logo from "../assets/images/home/logo2.png";
import Logo from "../assets/images/iklogo2.png";
import TikTok from "../assets/images/tik-tok.png";
import TikTok2 from "../assets/images/kkk.jpeg";
import { enquireScreen } from "enquire-js";
import { useMergeState } from "../utils/helpers";
import { userLoggedIn } from "../utils/auth";
import { Fade } from "reactstrap"
import { Button, Popover } from 'antd';
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";
import * as Unicons from "@iconscout/react-unicons/index";

const content = (
    <div>
        <Link to={"/aboutuche"} style={{ color: "#000", fontSize: "13px" }}>
            <p style={{ color: "#000", fontSize: "10px" }}>&nbsp;</p>
        </Link>
        <Link to={"/profiles_"} style={{ color: "#000", fontSize: "13px" }}>
            <p style={{ color: "#000", fontSize: "12px" }}>            <p style={{ color: "#000", fontSize: "12px" }}>Profile</p>
</p>
        </Link>
        {/* <Link to={"/honors"} style={{ color: "#000", fontSize: "13px" }}>
            <p style={{ color: "#000", fontSize: "12px" }}>Position held</p>
        </Link>
        <Link to={"/achievements"} style={{ color: "#000", fontSize: "13px" }}>
            <p style={{ color: "#000", fontSize: "12px" }}>Achievements</p>
        </Link> */}

    </div>
);
let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const FrontHeader = (props) => {
    const [state, setState] = useMergeState({
        featured: [],
        attendants: [],
        shopSchedule: [],
        newsOpen: false,
        newsTitle: "",
        newsValue: "",
        myPosts: [],
        aboutMenu: false
    });
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    const [clear, setClear] = useState(false)

    const changeClear = () => setClear((prev) => !prev)


    const toggleAbout = () => {
        setState({
            aboutMenu: !state.aboutMenu
        })
    }
    require("antd/dist/antd.css");

    return (
        <>
            {/* <div class="icon-bar">
                <a href="https://web.facebook.com/EUcheIkonne" target={"_blank"} class="facebook"><i class="fa fa-facebook-official"></i></a>
                <a href="https://twitter.com/ikonne_uche?t=3_aLzAbeB-U9ypSsp2e5Lg&s=09" target={"_blank"} class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://instagram.com/uchendiabia2023?igshid=YmMyMTA2M2Y=" target={"_blank"} class="google"><i class="fa fa-instagram"></i></a>
                <a href="https://vm.tiktok.com/ZMNBaosmA/" target={"_blank"} class="linkedin">
                    <img src={TikTok} style={{ width: "70px" }} />
                </a>
                
            </div> */}
            <Navbar className="navbar-top " expand="md" style={{ position: "fixed", zIndex: "99999", background: "transparent", width: "100%" }}>
                <Container className="px-4">
                    {props.logoOut == null ? <NavbarBrand to="/" tag={Link}>
                        <img src={Logo} alt="" style={{ width: "7em" }} /> &nbsp;
                        {/* <span> e-Learn NG</span> */}
                    </NavbarBrand> : null}

                    {/* <button className="navbar-toggler" id="navbar-collapse-main" style={{color:"#fff"}}> */}
                    {/* <span className="navbar-toggler-icon" style={{color:"#fff"}}/> */}
                    {isMobile ? <i onClick={openNav} className="fa fa-bars" id="navbar-collapse-main" style={{ color: "#ffffffe6", fontSize: "29px" }} /> : null}
                    {/* </button> */}

                    {!isMobile ? <UncontrolledCollapse navbar toggler="#navbar-collapse-main">

                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="8">
                                    <Link to="/">
                                        <img src={Logo} alt="" style={{ height: 50 }} />
                                        <span> Uche Ndi Abia</span>
                                    </Link>
                                </Col>

                                <Col className="collapse-close" xs="4">
                                    <button className="navbar-toggler" id="navbar-collapse-main" >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>

                        <Nav className="ml-auto" navbar>
                            <NavItem className='ml-3' style={{ display: "flex" }}>

                                <NavLink className="nav-link-icon" to="/" tag={Link} >
                                    {/* <i className='fa fa-arrow-right'/> */}
                                    <span className="nav-link-inner--text">Home</span>
                                </NavLink>
                                <NavLink className="nav-link-icon" to="/profiles_" tag={Link}>
                                    {/* <i className='fa fa-arrow-right'/> */}

                                    {/* <Popover content={content} trigger="click"> */}
                                        <span className="nav-link-inner--text">Profile</span>  
                                        
                                        {/* &nbsp; <i className='fa fa-angle-down' /> */}
                                    {/* </Popover> */}

                                </NavLink>

                                <NavLink className="nav-link-icon" to="/mymandate" tag={Link} >
                                    {/* <i className='fa fa-arrow-right'/> */}
                                    <span className="nav-link-inner--text">My Mandate</span>
                                </NavLink>
                                {/* <NavLink className="nav-link-icon" to="/recruitment" tag={Link} >
                                   
                                    <span className="nav-link-inner--text">Recruitment</span>
                                </NavLink> */}
                                <NavLink className="nav-link-icon" to="/newsandmedia" tag={Link} >
                                    {/* <i className='fa fa-arrow-right'/> */}
                                    <span className="nav-link-inner--text">News/Media</span>
                                </NavLink>
                                <NavLink className="nav-link-icon" to="/events" tag={Link} >
                                    {/* <i className='fa fa-arrow-right'/> */}
                                    <span className="nav-link-inner--text">Events</span>
                                </NavLink>
                                <NavLink className="nav-link-icon" to="/contactus" tag={Link} >
                                    {/* <i className='fa fa-arrow-right'/> */}
                                    <span className="nav-link-inner--text">Contact us</span>
                                </NavLink>
                                <NavLink className="nav-link-icon" to="/admin_signin" tag={Link} >
                                    {/* <i className='fa fa-arrow-right'/> */}
                                    <span className="nav-link-inner--text">Admin</span>
                                </NavLink>
                                <NavLink className="nav-link-icon" to="/staff_authentication" tag={Link} >
                                    <span className="nav-link-inner--text">Staff Form</span>
                                </NavLink>




                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse> : null}
                    {/* <button type="button" onClick={openNav} className="menu-toggle" style={{zIndex:"99999", color:'#000', position:"fixed"}}><i className="fa fa-bars"  style={{font:"15px"}}/></button> */}
                    <div id="mySidenav" class="sidenav1" style={{ zIndex: '99999999' }}>
                        <a href="#" class="closebtn" onClick={closeNav}>&times;</a>
                        <Link to="/">Home</Link>
                        <Link to={"/profiles_"} onClick={toggleAbout}>Profile 
                        {/* &nbsp; &nbsp;<i className='fa fa-angle-down' /> */}
                        </Link>
                        {/* {state.aboutMenu ?
                            <Fade>
                                <ul style={{ listStyleType: "none" }} id="about__dd">
                                    <Link to="/aboutuche">
                                        <li className='text-white' style={{ fontSize: "12px" }}>Profile</li>
                                    </Link>
                                    
                                </ul>
                            </Fade>
                            : null} */}

                        <Link to={"/mymandate"}>My Mandate</Link>
                        <Link to="/newsandmedia">News/Media</Link>
                        <Link to="/events">Events</Link>
                        {/* <Link to="/recruitment">Recruitment</Link> */}
                        <Link to="/contactus">Contact us</Link>
                        <Link to="/admin_signin">Admin</Link>
                        <Link to="/staff_authentication">Staff Form</Link>

                        <br />
                        <br />
                       

                        <p>
                            <span className="text-white">
                                <a href="https://web.facebook.com/EUcheIkonne" className="text-white" target={"_blank"}>
                                    <i className="fa fa-facebook-official" style={{ fontSize: "28px", marginRight: "25px" }} />
                                </a>
                            </span>


                            <span className="text-white">
                                <a href="https://twitter.com/ikonne_uche?t=3_aLzAbeB-U9ypSsp2e5Lg&s=09" className="text-white" target={"_blank"}>
                                    <i className="fa fa-twitter-square" style={{ fontSize: "28px", marginRight: "25px" }} />
                                </a>
                            </span>

                            <span className="text-white">
                                <a href="https://instagram.com/uchendiabia2023?igshid=YmMyMTA2M2Y=" className="text-white" target={"_blank"}>

                                    <i className="fa fa-instagram" style={{ fontSize: "28px", marginRight: "25px" }} />

                                </a>

                            </span>

                            <span className="text-white">
                                <a href="https://vm.tiktok.com/ZMNBaosmA/" className="text-white" target={"_blank"}>

                                    {/* <i className="fa fa-instagram" style={{fontSize:"28px", marginRight:"25px"}}/> */}
                                    <img src={TikTok2} style={{ width: "30px" }} />

                                </a>

                            </span>
                        </p>
                        {/* <Link to="/aboutuche">About Uche Ikonne</Link> */}
                    </div>
                </Container>
            </Navbar>

        </>

    )
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontHeader);
