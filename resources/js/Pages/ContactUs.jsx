
import Header from "./components/header"
import { Typography, useMediaQuery } from "@mui/material";
import Footer from "./components/footer"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Link } from "@inertiajs/react";
import "leaflet/dist/leaflet.css";
import MapComponent from "./components/contactUs-Component/MapComponent";
import ContactComponent from "./components/contactUs-Component/ContactComponent";
import MessageComponent from "./components/contactUs-Component/MessageComponent";




export default function ContactUs(second) {
    const IsPhone = useMediaQuery('(max-width:767px)');
    const IsLessThen470 = useMediaQuery('(max-width:459px)');
    const x = useMediaQuery('(min-width:1018px)');
    return (
        <div style={{
            backgroundColor: IsPhone ? "white" : "#efeff4",
            border: "1px solid transparent"
        }}>
            <Header selected={"CONTACT US"} />
            <section style={{
                height: "fit-content",
                marginTop: IsLessThen470 ? "100px" : IsPhone ? "70px" : "115px",

            }}>
                <div style={{

                    minHeight: "1018px",
                    maxHeight: "fit-content",
                    width: "100%",
                    padding: "20px 10px 10px 10px",

                }}>
                    {
                        IsPhone ?
                            (
                                <div style={
                                    {
                                        width: "100%",
                                        height: "44px",
                                        backgroundColor: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        borderBottom: "1px solid rgb(239, 239, 244)",

                                    }
                                }>

                                    <Link href="/" style={{ margin: "0 40% 0 2%", color: "black" }} ><ArrowBackIosRoundedIcon /></Link>

                                    <Typography >Contact Us</Typography>
                                </div>
                            ) : <Typography variant="h4" sx={{ marginBlock: "10px" }}>Contact Us</Typography>

                    }
                    {/* // middle content */}
                    <div style={{ height: "fit-content", padding: "20px", borderRadius: "5px", width: "100%", display: (!x || IsPhone) ? null : "flex", justifyContent: "space-between" }}>


                        {
                            IsPhone ? (
                                <>
                                    <div style={{ width: "100%", }}>
                                        <ContactComponent />
                                    </div>
                                    <div style={{ width: "100%", height: "200px" }}>
                                        <MapComponent zoom={15} />
                                    </div>
                                    <div style={{ width: "100%", height: "fit-content" }}>
                                        <MessageComponent />
                                    </div>
                                </>
                            ) : !x ? (
                                <>
                                    {/* tablet */}
                                    <div style={{ width: "100%", minHeight: "fit-content", maxHeight: "300px", display: "flex", marginBottom: "20px", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", }}>
                                        <div style={{ width: "50%", minHeight: "fit-content", maxHeight: "100%", borderRadius: "5px 0 0 5px", backgroundColor: "white" }}>
                                            <ContactComponent />
                                        </div>
                                        <div style={{ width: "50%", height: "300px" }}>
                                            <MapComponent zoom={15} />
                                        </div>
                                    </div>
                                    <div style={{ width: "100%", minHeight: "fit-content", height: "fit-content", backgroundColor: "white", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", }}>
                                        <MessageComponent />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* //normal mode */}
                                    <div style={{
                                        width: "40%",
                                        height: "895px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }}>
                                        {/* // contact and send request */}
                                        <div style={
                                            {
                                                width: "100%",
                                                height: "33%",
                                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                                backgroundColor: "white",
                                                borderRadius: "5px"
                                            }
                                        }>
                                            <ContactComponent />
                                        </div>
                                        <div style={
                                            {
                                                width: "100%",
                                                height: "64%",
                                                backgroundColor: "white",
                                                borderRadius: "5px",
                                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",

                                            }
                                        }>
                                            <MessageComponent />
                                        </div>

                                    </div>
                                    <div style={{
                                        width: "58%",
                                        height: "895px",
                                        borderRadius: "5px",
                                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"

                                    }}>
                                        {/* // only map */}
                                        <MapComponent zoom={12} />

                                    </div>

                                </>
                            )
                        }



                    </div>
                </div>
            </section >
            <Footer isSmall={x} />
        </div >
    )
}