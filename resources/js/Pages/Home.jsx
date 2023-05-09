import { Backdrop, Button, Card, CardContent, CardMedia, Divider, IconButton, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import Header from "./components/header"
import { Carousel, Image, Grommet } from "grommet";
import { useState } from "react";
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import { Close } from "@mui/icons-material";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocalHotelRoundedIcon from '@mui/icons-material/LocalHotelRounded';
import "leaflet/dist/leaflet.css";
import Footer from "./components/footer";
import { Link } from "@inertiajs/react";


const SpliteArray = (x) => {
    var result = [];
    var parrentArray = [...x];
    while (parrentArray.length) {
        result.push(parrentArray.splice(0, 2))
    }

    return result;
}

export default function Home({ imgs, galeries, rooms }) {
    const [value, setValue] = useState(0);
    const [valueGallery, setValueGallery] = useState(0);
    const [imgBackDrop, setImgBackDrop] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const IsPhone = useMediaQuery('(max-width:767px)');
    const IssmallPhone = useMediaQuery('(max-width:470px)');
    const IsLessThen470 = useMediaQuery('(max-width:459px)');
    const x = useMediaQuery('(min-width:1018px)');
    const ContactBreakingPoint = useMediaQuery("(max-width:1182px)")
    const isSmallAboutUs = IsPhone ? {
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"

    } : {}

    const customTheme = {
        carousel: {
            icons: {
                color: 'white',
            },
        },
    };
    const contactChildrens = {
        minHeight: "33.33%",
        maxHeight: "fit-Content",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px"

    }

    const handleChange = (event, newValue, rooms) => {
        setValue(newValue);
    };
    const handleChangeGallery = (event, newValue) => {
        setValueGallery(newValue);
    };
    const openBackDrop = (url) => {
        setSelectedImg(url);
        setImgBackDrop(true);
    }
    const closeBackDrop = () => {
        setSelectedImg(null);
        setImgBackDrop(false);
    }

    return (
        <div>
            <Header selected={"HOME"}/>
            {/* parent one containes picture slides */}
            <div style={{ height: "fit-content", marginTop: IsLessThen470 ? "100px" : IsPhone ? "70px" : "115px", paddingBottom: "65px", backgroundColor: "white" }}>
                <div style={
                    {
                        height: x ? "500px" : "fit-content",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                    }
                }>
                    <Grommet theme={customTheme}>

                        <Carousel fill={x} >
                            {
                                imgs.map((img, index) => {
                                    return <Image key={index} fit="cover" src={img} />

                                })
                            }
                        </Carousel>
                    </Grommet>
                    <div style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "fit-content",
                            textAlign: "center",
                            position: "absolute",
                            top: "30%",
                            color: "#fff",
                            zIndex: "1",
                        }
                    }>
                        <label style={{ fontSize: IssmallPhone ? "20px" : IsPhone ? "30px" : "40px", textShadow: "3px 4px 7px rgba(81,67,21,0.8)", fontWeight: "bold" }}>
                            WELCOM TO CHEZ IMNIR
                        </label>
                        <label>Come Stay With Us</label>
                    </div>
                </div>

            </div>

            {/* parent two containes 
            -rooms
            -about us 
            -contacts  */}

            <section
                style={
                    {
                        backgroundColor: "#efeff4",
                        height: "fit-content",
                        width: "100%",
                        paddingTop: "20px",


                    }
                }>
                {/* containes rooms ---------------------------------------------------------------------------------------------*/}
                <div style={
                    {
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"

                    }
                }>
                    <div style={
                        {
                            width: IsPhone ? "100%" : "70%",
                            display: "flex",
                            paddingTop: "10px",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            padding: IsPhone ? "20px" : null

                        }
                    }>
                        <Typography variant={IsPhone ? "h5" : "h3"}>
                            Rooms
                        </Typography>
                        <Link href="/Rooms">
                            <Button sx={{ height: "fit-content", "&:hover": { textDecoration: "underline" } }} endIcon={<TrendingFlatRoundedIcon />}>see all</Button>
                        </Link>
                    </div>
                    <Tabs
                        indicatorColor="transparent "
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        sx={
                            {
                                width: IsPhone ? "100%" : "75%",
                            }
                        }
                    >
                        {
                            rooms.map((room, index) => {
                                return (
                                    <Tab key={index} label={(
                                        <Card>
                                            <CardMedia
                                                component={"img"}
                                                image={room.selected_image}
                                                width={328}
                                                height={218}
                                            />
                                            <CardContent sx={{ height: "180px" }}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {room.title}
                                                </Typography>
                                                <p className="breakText">
                                                    {room.discreption}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    )} />
                                )
                            })
                        }






                    </Tabs>

                </div>
                {/* containes about us content -----------------------------------------------------------------------------------*/}
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px",
                    padding: IsPhone ? "20px" : null

                }}>
                    <div style={
                        {
                            width: IsPhone ? "100%" : "70%",
                            display: "flex",
                            paddingTop: "10px",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            padding: IsPhone ? "20px" : null

                        }
                    }>
                        <Typography variant={IsPhone ? "h5" : "h3"}>
                            About Us
                        </Typography>
                        <Link href="/About us">

                            <Button sx={{ height: "fit-content", "&:hover": { textDecoration: "underline" } }} endIcon={<TrendingFlatRoundedIcon />}>see all</Button>
                        </Link>
                    </div>
                    <div style={
                        {
                            width: IsPhone ? "100%" : "70%",
                            padding: IsPhone ? "20px" : null,
                            lineHeight: "30px",
                            ...isSmallAboutUs

                        }
                    }>
                        Chez Imnir has a garden, shared lounge, a terrace and restaurant in Ijjoukak. Boasting room service, this property also provides guests with a barbecue. There is free private parking and the property features paid airport shuttle service.
                        At the inn, the rooms include a balcony with a mountain view. Featuring a private bathroom with a shower and free toiletries, rooms at Chez Imnir also feature a city view. At the accommodation rooms are fitted with a seating area.
                        An à la carte, continental or vegetarian breakfast can be enjoyed at the property.
                        Speaking Arabic, German, English and Spanish at the reception, staff are willing to help at any time of the day.
                        The nearest airport is Marrakech-Menara Airport, 98 km from Chez Imnir.
                    </div>
                </div>
                {/* containes all gallery------------------------------------------------------------------------------------------ */}
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px",
                    padding: IsPhone ? "20px" : null,
                    gap: "10px"

                }}>
                    <div style={
                        {
                            width: IsPhone ? "100%" : "70%",
                            display: "flex",
                            paddingTop: "10px",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            padding: IsPhone ? "20px" : null


                        }
                    }>
                        <Typography variant={IsPhone ? "h5" : "h3"}>
                            Gallery
                        </Typography>
                        <Link href="/Gallery">
                            <Button sx={{ height: "fit-content", "&:hover": { textDecoration: "underline" } }} endIcon={<TrendingFlatRoundedIcon />}>see all</Button>
                        </Link>
                    </div>
                    <div style={
                        {
                            width: IsPhone ? "100%" : "70%",
                            overflow: "hidden",
                            padding: IsPhone ? "20px" : null,
                            height: "fit-content",
                            justifyContent: "center",
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",

                        }
                    }>


                        {IsPhone
                            ?
                            (
                                <Tabs
                                    indicatorColor="transparent"
                                    value={valueGallery}
                                    onChange={handleChangeGallery}
                                    variant="scrollable"
                                    scrollButtons
                                    allowScrollButtonsMobile
                                    sx={
                                        {
                                            width: IsPhone ? "100%" : "75%",
                                        }
                                    }
                                >
                                    {
                                        SpliteArray(galeries).map((minArray, index) => {

                                            return <Tab label={(
                                                <div style={
                                                    {
                                                        width: "fit-content",
                                                        height: "fit-content",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "5px"
                                                    }
                                                }>
                                                    {
                                                        minArray.map((galery, index2) => {
                                                            return (

                                                                <img fit="cover" key={galery} onClick={() => {
                                                                    openBackDrop(galery)
                                                                }} src={galery} width="300px" height="140px" className="img-gallery-hover" style={{ objectFit: "cover", borderRadius: "5px", alignSelf: "center", transition: "350ms" }} />

                                                            )
                                                        })
                                                    }

                                                </div>
                                            )} />

                                        })
                                    }


                                </Tabs>
                            )
                            :
                            galeries.map((galery) => {
                                return <img fit="cover" key={galery} src={galery} onClick={() => {
                                    openBackDrop(galery)
                                }} width="300px" height="140px" className="img-gallery-hover" style={{ objectFit: "cover", borderRadius: "5px", alignSelf: "center", transition: "350ms" }} />
                            })
                        }

                    </div>
                </div>
                {/* containes contact -------------------------------------------------------------------------------- */}
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px",
                    padding: IsPhone ? "20px" : null,
                    paddingBottom: 20
                }}>
                    <div style={
                        {
                            width: IsPhone ? "100%" : "70%",
                            display: "flex",
                            paddingTop: "10px",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            padding: IsPhone ? "20px" : null

                        }
                    }>
                        <Typography variant={IsPhone ? "h5" : "h4"}>
                            We Would Love To Hear From You
                        </Typography>
                        <Link href="/Contact us" >
                            <Button sx={{ height: "fit-content", "&:hover": { textDecoration: "underline" } }} endIcon={<TrendingFlatRoundedIcon />}>see all</Button>
                        </Link>
                    </div>
                    <div style={
                        {
                            width: IsPhone ? "100%" : "70%",
                            display: "flex",
                            flexDirection: ContactBreakingPoint ? "column" : null,
                            paddingTop: "10px",
                            height: "fit-content"

                        }
                    }>
                        <div style={
                            {
                                minHeight: ContactBreakingPoint ? "200px" : "300px",
                                maxHeight: "fit-Content",
                                width: ContactBreakingPoint ? "100%" : "40%",
                                backgroundColor: "white",
                                borderRadius: ContactBreakingPoint ? "5px 5px 0px 0px " : "5px 0 0 5px",
                            }
                        }>
                            {/* //info : phone adress email */}
                            <div style={{ ...contactChildrens, }}>
                                <div>
                                    {/* info phone */}
                                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Telephone Number</h4>
                                    <span style={{ color: "black" }}>0666-025512</span>
                                </div>

                                <IconButton>
                                    <LocalPhoneRoundedIcon sx={{ color: "#06D6A0" }} fontSize="large" />
                                </IconButton>

                            </div>
                            <Divider variant="middle" />
                            <div style={{ ...contactChildrens, }}>
                                <div style={{ maxWidth: "80%" }}>
                                    {/* info adress */}
                                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Address</h4>
                                    <span style={{ color: "black" }}>
                                        Talat N'Yaaqoub Ijoukak, 42155 Ijjoukak, Morocco</span>
                                </div>

                                <IconButton>
                                    <MapRoundedIcon sx={{ color: "#06D6A0" }} fontSize="large" />
                                </IconButton>

                            </div>
                            <Divider variant="middle" />
                            <div style={{ ...contactChildrens, }}>
                                <div>
                                    {/* info email */}
                                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Email</h4>
                                    <span style={{ color: "black" }}>chezimnir@gmail.com</span>
                                </div>

                                <IconButton>
                                    <AttachEmailRoundedIcon sx={{ color: "#06D6A0" }} fontSize="large" />
                                </IconButton>

                            </div>
                        </div>
                        <div style={{
                            height: 300,
                            width: ContactBreakingPoint ? "100%" : "60%",
                        }}>

                            {/* // map  */}
                            <MapContainer style={{ width: "100%", height: 300, zIndex: 1 }} center={[30.987464054535906, -8.182425564904193]} zoom={15} scrollWheelZoom={true}>
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

                        </div>
                    </div>
                </div>
            </section >
            {/* // footer ------------------------------------------------------- */}
            < Footer isSmall={x} />

            {/* ---------------------------------------------------uneffect code -----------------------------------*/}
            < Backdrop
                open={imgBackDrop}
                sx={{ zIndex: 20, display: "flex", flexDirection: "column", padding: "5%" }
                }
                onClick={() => closeBackDrop()}
            >
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", paddingRight: "1%" }}>
                    <IconButton ><Close fontSize="large" sx={{ color: "white" }} /></IconButton>
                </div>


                <img src={selectedImg} alt="" onClick={(e) => e.stopPropagation()} style={{ objectFit: "cover", borderRadius: "5px", alignSelf: "center", minWidth: "70%", maxWidth: "100%", maxHeight: "600px", minHeight: "fit-content" }} />

            </Backdrop >
        </div >
    )
}