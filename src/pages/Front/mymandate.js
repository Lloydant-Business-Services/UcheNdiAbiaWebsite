import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/actions";
import { useMergeState } from "../../utils/helpers";
import Logo from "../../assets/images/iklogo2.png";
import { PulseSpinner } from "react-spinners-kit";

import Particles from "react-particles-js";
import Test from "../../assets/images/home/test.svg";
import Report from "../../assets/images/home/report.svg";
import Ikonne from "../../assets/images/Uchenna-Ikonne.jpeg";
import $ from "jquery";
import Go from "../../assets/images/home/go.svg";
import Prof1 from "../../assets/images/home/prof1.jpg";
import Prof2 from "../../assets/images/home/prof2.jpg";
import Laptop from "../../assets/images/home/laptop2.png";
import Header from "../../layouts/FrontHeader";
import Footer from "../../layouts/Footer";
import { enquireScreen } from "enquire-js";
import App from "../../assets/images/home/hero.png";
import BackBlue from "../../assets/images/IKONNEHEROBLUE.png";
import Marquee from "react-fast-marquee";

// enquireScreen((b) => {
//     this.setState({
//       isMobile: b,
//     });
//   });

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
const Mandate = (props) => {
    const [state, setState] = useMergeState({
        featured: [],
        attendants: [],
        shopSchedule: [],
    });

    const HeroStyle = {
        width: "100%",
        minHeight: "29vh",
        // minHeight: "81vh",
        // backgroundImage: "url(" + Hero + ")",
        backgroundColor: "#EAECEF",
        position: "relative",
        overflow: "hidden",
    };
    const HeroStyleMobile = {
        width: "100%",
        minHeight: "30vh",
        // backgroundImage: "url(" + Hero + ")",
        backgroundColor: "#EAECEF",
        position: "relative",
        overflow: "hidden",
        marginTop: "-2em",
    };
    const Abs = {
        width: "100%",
        minHeight: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    };

    const HeroContent = {
        zIndex: 10,
    };

    const VertCenter = {
        paddingTop: "30%",
    };

    const ImgStyles = {
        height: 300,
    };

    const Br1 = {
        // backgroundColor: "#4040bf",
        duration: ".1s",
    };

    const Br2 = {
        backgroundColor: "#bf4060",
        duration: ".5s",
    };

    const Be = {
        totalDuration: "1.2s",
    };

    const show = () => {
        this.setState({
            btn: true,
        });
    };

    const toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index,
        });
    };

    useEffect(() => {
        setTimeout(() => {
         $("#preloader").fadeOut()
        }, 2000);
     }, []);

    return (
        <>
            <div id="preloader">
                <div id="status">
                    <center>
                    <PulseSpinner color="white" backColor="#FFF" frontColor="#FFF" size={45} />


                    </center>
                </div>
            </div>
            <div className="min-vh-100">
                <Header />

                <div style={!isMobile ? HeroStyle : HeroStyleMobile}>
                    <div style={Abs}>
                        <div className="hero-image2">
                            <div className={"container"} style={HeroContent}>
                                <div className={"row"}>
                                    <div className={"col-lg-6"} style={isMobile ? { marginTop: "0em" } : null}>
                                        <div style={VertCenter}>
                                            {/* <h3 className="fade-in one font-weight-600" style={{color:"#fff"}}>
                                           Accelerated Development
                                        </h3> */}

                                            <h1 className="h1-custom home-title" style={isMobile ? { color: "#ffffffde", marginTop: "60px", fontSize: "23px" } : { color: "#ffffffde", marginTop: "22px" }}>
                                                <span className="monte" style={isMobile ? { fontSize: "19px" } : null}>
                                                 My mandate
                                                </span>
                                            </h1>

                                            {/* <h2 className="fade-in two maitree display-4" style={{color:"#ffffffde", fontSize:"22px"}}>Prof. Eleazar Uchenna Ikonne</h2> */}
                                        </div>
                                    </div>

                                    {/* {!isMobile ? <div className="col-lg-6 text-right">
                                    <img src={App} alt="" className="mt-6 fade-in one" />
                                </div> : null} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center" style={{ width: "100%", height: "29px", background: "#95262c", marginTop: "0px", paddingTop: "0px", paddingBottom: "0px" }}>
                    <Marquee gradient={false} speed={40} style={{ zIndex: "9999" }}>
                        <p style={{ fontSize: "13px", color: "#f3f3f3cf" }} className="text-white">
                            <i className="fa fa-star" /> &nbsp; Vote change &nbsp; &nbsp; &nbsp; &nbsp;
                            <i className="fa fa-star" /> &nbsp; &nbsp; Vote for accelerated development &nbsp; &nbsp; &nbsp;
                            <i className="fa fa-star" /> &nbsp; &nbsp; Vote Prof. Uchenna Ikonne &nbsp; &nbsp; &nbsp;
                            <i className="fa fa-star" /> &nbsp; &nbsp; Vote Growth &nbsp; &nbsp; &nbsp;
                            <b></b>&nbsp; &nbsp; &nbsp; &nbsp;
                        </p>
                        <p>&nbsp;</p>
                    </Marquee>
                </div>

                {/*         
            <span class="image full-bg" style={{backgroundImage: `url(https://cdn.donaldjtrump.com/djtweb/general/callout_about.jpeg)`}}>


            </span>
            */}

                <div className="bg-sky bg__two" style={isMobile ? { padding: "24px", color:"#000" } : { padding: "63px" }}>
                    <div className="row justify-content-center">
                        
                    <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#000" }}>
                                #1 
                                
                                {/* Trade */}
                            </h2>
                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#000", marginTop: "-13px" } : { fontSize: "14px", color: "#000" }}>
                                {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>T</span> */}
                                Good governance that is participatory, transparent, accountable, effective, efficient, equitable, responsive, inclusive and respects rule of law.
                               
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#000" }}>
                                #2 
                                {/* Industrialization */}
                            </h2>

                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#000", marginTop: "-13px" } : { fontSize: "14px", color: "#000" }}>
                            {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>I</span> */}

                            Education and human capital development with a focus on all decisions to improve Elife expectancy, per capita income, and overall quality of lives.
                            
                           
                            </p>
                        </div>

                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#000" }}>
                                #3
                            </h2>

                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#000", marginTop: "-13px" } : { fontSize: "14px", color: "#000" }}>
                            {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>G</span> */}
                            
                            Industrialisation enabled by economic infrastructure, access to cutting edge knowledge, talent and resources to ensure productivity and competitiveness.
                            </p>
                        </div>


                       
                        
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#000" }}>
                                #4
                            </h2>

                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#000", marginTop: "-13px" } : { fontSize: "14px", color: "#000" }}>
                            {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>E</span> */}
                            Rural developement and integration focused on improved socio-economic well-being of those living in our rural areas and closing the decades old disparities.
                           
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h2 className="font-weight-bolder monte " style={{ fontSize: "16px", color: "#000" }}>
                                #5
                            </h2>

                            <p className="font-weight-400 mt-2 mb-5" style={isMobile ? { fontSize: "11px", color: "#000", marginTop: "-13px" } : { fontSize: "14px", color: "#000" }}>
                            {/* <span className="font-weight-bolder monte" style={{fontSize:"20px"}}>R</span> */}
                            Trade promotion with a focus on access to finance, market access, regional linkages, trade and investment promotion, ease of doing business.
                           
                           
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Mandate);
