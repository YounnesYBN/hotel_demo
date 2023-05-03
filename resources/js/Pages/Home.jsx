import { Backdrop, Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import Header from "./components/header"
import { Carousel, Image, Grommet } from "grommet";
import { useState } from "react";
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import { Close } from "@mui/icons-material";

const SpliteArray = (x) => {
    var result = [];
    var parrentArray = [...x];
    while (parrentArray.length) {
        result.push(parrentArray.splice(0, 2))
    }

    return result;
}

export default function Home({ imgs, galeries }) {
    const [value, setValue] = useState(0);
    const [valueGallery, setValueGallery] = useState(0);
    const [imgBackDrop, setImgBackDrop] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const IsPhone = useMediaQuery('(max-width:600px)');
    const IssmallPhone = useMediaQuery('(max-width:470px)');
    const IsLessThen470 = useMediaQuery('(max-width:459px)');
    const x = useMediaQuery('(min-width:1018px)');
    const isSmallAboutUs = IsPhone ? {
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"

    } : {}
    const RoomsHover = {
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        transform: "translateY(-5px)",


    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeGallery = (event, newValue) => {
        setValueGallery(newValue);
    };
    const customTheme = {
        carousel: {
            icons: {
                color: 'white',
            },
        },
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
            <Header selected={"HOME"} />
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
                                imgs.map(img => {
                                    return <Image fit="cover" src={img} />

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
                        <Button sx={{ height: "fit-content", "&:hover": { textDecoration: "underline" } }} endIcon={<TrendingFlatRoundedIcon />}>see all</Button>
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
                        <Tab label={(
                            // all cards------------------------------------------------------------------------------------
                            <Card className="rooms-hover" sx={{ padding: "0px", transition: "350ms" }}>
                                <CardMedia
                                    component={"img"}

                                    image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        One Bedroom Cabin 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        )} />
                        <Tab label={(
                            <Card>
                                <CardMedia
                                    component={"img"}

                                    image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        One Bedroom Cabin 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        )} />
                        <Tab label={(
                            <Card>
                                <CardMedia
                                    component={"img"}

                                    image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        One Bedroom Cabin 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        )} />
                        <Tab label={(
                            <Card>
                                <CardMedia
                                    component={"img"}

                                    image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        One Bedroom Cabin 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        )} />


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
                        <Button sx={{ height: "fit-content", "&:hover": { textDecoration: "underline" } }} endIcon={<TrendingFlatRoundedIcon />}>see all</Button>
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
                        <Button sx={{ height: "fit-content", "&:hover": { textDecoration: "underline" } }} endIcon={<TrendingFlatRoundedIcon />}>see all</Button>
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

                                                                <img fit="cover" onClick={() => {
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
                                return <img fit="cover" src={galery} onClick={() => {
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
                        <Button sx={{ height: "fit-content", "&:hover": { textDecoration: "underline" } }} endIcon={<TrendingFlatRoundedIcon />}>see all</Button>
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
            </section>


            {/* ---------------------------------------------------uneffect code -----------------------------------*/}
            <Backdrop
                open={imgBackDrop}
                // onClick={}
                sx={{ zIndex: 20, display: "flex", flexDirection: "column", padding: "5%" }}
                onClick={() => closeBackDrop()}
            >
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", paddingRight: "1%" }}>
                    <IconButton ><Close fontSize="large" sx={{ color: "white" }} /></IconButton>
                </div>


                <img src={selectedImg} alt="" onClick={(e) => e.stopPropagation()} style={{ objectFit: "cover", borderRadius: "5px", alignSelf: "center", minWidth: "70%", maxWidth: "100%", maxHeight: "600px", minHeight: "fit-content" }} />

            </Backdrop>
        </div >
    )
}