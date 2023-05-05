
import Header from "./components/header"
import { Button, Divider, IconButton, TextField, Typography, useMediaQuery } from "@mui/material";
import Footer from "./components/footer"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Link } from "@inertiajs/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import LocalHotelRoundedIcon from '@mui/icons-material/LocalHotelRounded';

import "leaflet/dist/leaflet.css";
import { LocalPhoneRounded } from "@mui/icons-material";

const MapComponent = ({ zoom }) => {
    return (
        <MapContainer style={{ width: "100%", height: "100%", zIndex: 0, borderRadius: "5px" }} center={[30.987464054535906, -8.182425564904193]} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[30.987464054535906, -8.182425564904193]}>
                <Popup>
                    <div style={{ display: "flex" }}>
                        CHEZ IMNIR
                        <LocalHotelRoundedIcon color="primary" />
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )
}
const ContactComponent = () => {
    const IsPhone = useMediaQuery('(max-width:767px)');
    const contactChildrens = {
        minHeight: "33.33%",
        maxHeight: "fit-Content",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px"

    }
    return (
        <div style={
            {
                minHeight: "100%",
                maxHeight: "fit-Content",
                width: "100%",

                // borderRadius: ContactBreakingPoint ? "5px 5px 0px 0px " : "5px 0 0 5px",
            }
        }>
            {/* //info : phone adress email */}
            <div style={{ ...contactChildrens, }}>
                <div>
                    {/* info phone */}
                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Telephone Number</h4>
                    <span style={{ color: "black" ,fontSize:IsPhone?"12px":null}}>0666-025512</span>
                </div>

                <IconButton>
                    <LocalPhoneRounded sx={{ color: "#06D6A0" }} fontSize={IsPhone ? "medium":"large"} />
                </IconButton>

            </div>
            <Divider variant="middle" />
            <div style={{ ...contactChildrens, }}>
                <div style={{ maxWidth: "80%" }}>
                    {/* info adress */}
                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Address</h4>
                    <span style={{ color: "black" ,fontSize:IsPhone?"12px":null}}>
                        Talat N'Yaaqoub Ijoukak, 42155 Ijjoukak, Morocco</span>
                </div>

                <IconButton>
                    <MapRoundedIcon sx={{ color: "#06D6A0" }} fontSize={IsPhone ? "medium":"large"} />
                </IconButton>

            </div>
            <Divider variant="middle" />
            <div style={{ ...contactChildrens, }}>
                <div >
                    {/* info email */}
                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Email</h4>
                    <span style={{ color: "black" ,fontSize:IsPhone?"12px":null}}>chezimnir@gmail.com</span>
                </div>

                <IconButton>
                    <AttachEmailRoundedIcon sx={{ color: "#06D6A0" }} fontSize={IsPhone ? "medium":"large"} />
                </IconButton>

            </div>
        </div>


    )
}
const MessageComponent = () => {
    return (
        <div style={{
            width: "100%",
            minHeight: "100%",
            maxHeight: "fit-content",
            padding: "20px 20px 20px 20px ",

        }}>
            <Typography variant="h6" sx={{ marginBottom: "15px" }}>Send an Enquiry</Typography>
            <div style={{ width: "100%", marginBottom: "15px" }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: "100%" }} color="" />

            </div>
            <div style={{ width: "100%", marginBottom: "15px" }}>
                <TextField id="outlined-basic" label="telephon" variant="outlined" sx={{ width: "100%" }} />

            </div>
            <div style={{ width: "100%", marginBottom: "15px" }}>
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: "100%" }} />

            </div>

            <div style={{ width: "100%", marginBottom: "15px" }}>
                <TextField id="outlined-basic" label="Message" variant="outlined" sx={{ width: "100%" }}
                    multiline={true}
                    rows={8}
                    maxRows={8}

                />
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <Button sx={{ width: "80%" }} variant="contained">SEND</Button>
            </div>
        </div>
    )
}


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