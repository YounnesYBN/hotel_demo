import Header from "./components/header"
import { Typography, useMediaQuery } from "@mui/material";
import { Link,router } from "@inertiajs/react";
import { ArrowBackIosRounded } from "@mui/icons-material";
import Footer from "./components/footer";
import { Carousel, Image } from "grommet"

export default function Rooms({ AllRoomsPros }) {
    const IsTablet = useMediaQuery('(max-width:767px)');
    const IsSmallPhone = useMediaQuery('(max-width:459px)');
    const x = useMediaQuery('(min-width:1018px)');


    return (
        <div style={{ backgroundColor: "#efeff4" }}>
            <Header selected={"ROOMS"} />
            <section style={{
                height: "fit-content",
                marginTop: IsSmallPhone ? "100px" : IsTablet ? "70px" : "115px",
                display: IsTablet ? null : "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div style={{

                    minHeight: "320px", //default hight for page
                    maxHeight: "fit-content",
                    width: !x ? "100%" : "80%",
                    padding: IsTablet ? null : "20px 10px 10px 10px",

                }}>
                    {
                        IsTablet ?
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

                                    <Link href="/" style={{ margin: "0 40% 0 2%", color: "black" }} ><ArrowBackIosRounded /></Link>

                                    <Typography >Rooms</Typography>
                                </div>
                            ) : <Typography variant="h4" sx={{ marginBlock: "10px" }}>Rooms</Typography>

                    }
                    {/* // all rooms  */}
                    <div style={
                        {
                            width: "100%",
                            height: "fit-content",
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "20px",
                            margin: IsTablet ? "20px 0 0 0" : null

                        }
                    }>
                        {
                            AllRoomsPros.map((roomItem, index) => {
                                return (
                                    <Link href={`Rooms/${roomItem.id_room}`} preserveScroll preserveState style={{ textDecoration: "none", margin: IsTablet ? "0 20px 0 20px" : null }}>
                                        <div key={index} className="roomCard" style={                        //component room
                                            {
                                                width: IsTablet ? "100%" : "357px",
                                                height: IsTablet ? "400px" : "350px",
                                                border: "1px",
                                                borderRadius: "5px",
                                                overflow: "hidden",
                                                backgroundColor: "white",




                                            }
                                        }>
                                            <div style={{                   //* silde photo 
                                                width: "100%",
                                                height: "50%",

                                            }}>
                                                {/* <Carousel fill>

                                                {roomItem.gallery.map((photo, index2) => {
                                                    return <Image key={index2} fit="cover" src={photo} />
                                                })}
                                            </Carousel> */}
                                                <Image fit="cover" src={roomItem.gallery} style={{ width: "100%", height: "100%" }} />
                                            </div>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-evenly",
                                                width: "100%",
                                                height: "50%",
                                                padding: "2% 4% 0 4% "
                                            }}>
                                                <p style={{
                                                    width: "100%",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    letterSpacing: "1px",
                                                    color: "black"

                                                }}>
                                                    {roomItem.title}
                                                </p>
                                                <div style={
                                                    {
                                                        width: "100%",
                                                        height: IsSmallPhone ? "50%" : "53%",
                                                    }
                                                }
                                                    className="breakTextInRoomPage"
                                                >

                                                    {roomItem.discreption}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }




                    </div>
                </div>
            </section >
            <Footer isSmall={x} />
        </div >
    )
}