import { useMediaQuery, Typography, Tabs, Tab } from "@mui/material";
import { Image } from "grommet"
import Header from "./components/header";
import Footer from "./components/footer";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Link } from "@inertiajs/react";
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { useState } from "react";


export default function ShowRoom({ info }) {

    const IsPhone = useMediaQuery('(max-width:767px)');
    const IsLessThen470 = useMediaQuery('(max-width:459px)');
    const x = useMediaQuery('(min-width:1018px)');
    const [SelectedPhoto, setSelectedPhoto] = useState(null)
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue,) => {
        setValue(newValue);
    };


    return (
        <div style={{
            backgroundColor: IsPhone ? "white" : "#efeff4",
            border: "1px solid transparent"
        }}>
            <Header selected={"ROOMS"} />
            <section style={{
                minHeight: IsPhone ? "400px" : "350px",
                maxHeight: "fit-content",
                height: "fit-content",
                marginTop: IsLessThen470 ? "100px" : IsPhone ? "70px" : "115px",
                display: IsPhone ? null : "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "5px"
            }}>


                <div style={{

                    minHeight: "100%",
                    maxHeight: "fit-content",
                    width: IsPhone ? "100%" : "80%",

                }}>
                    {
                        IsPhone ?
                            (
                                <div style={
                                    {
                                        width: "100%",
                                        minHeight: "44px",
                                        maxHeight: "fit-center",
                                        backgroundColor: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        borderBottom: "1px solid rgb(239, 239, 244)"
                                    }
                                }>

                                    <Link href="/Rooms" style={{ margin: "0 30% 0 2%", color: "black" }} ><ArrowBackIosRoundedIcon /></Link>

                                    <Typography sx={{ textAlign: "center" }}>{info.title}</Typography>
                                </div>
                            ) : <Link href="/Rooms" onClick={()=>console.log('sheeesh')} style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                padding: "7px",
                                gap: "15px",
                                backgroundColor: "white",
                                alignSelf: "start",
                                height: "fit-content",
                                marginBlock: "10px",
                                borderRadius: "5px",
                                width: "fit-content",
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                color: "black", textDecoration: "none"

                            }}>
                                <ArrowCircleLeftRoundedIcon fontSize="medium" /> <p>See all rooms</p>
                            </Link>

                    }
                    <div style={{ height: "fit-content", padding: "20px", backgroundColor: "white", borderRadius: "5px", width: "100%" }}>
                        {
                            IsPhone ? null :
                                <Typography variant="h4" sx={{ marginBottom: "10px" }}>
                                    {info.title}
                                </Typography>
                        }
                        <div style={{ width: "100%", height: "fit-centent" }}>
                            <div style={{
                                width: "100%",
                                height: "450px",
                            }}>
                                <Image src={SelectedPhoto ? SelectedPhoto : info.gallery[0]} style={{ width: "100%", height: "100%", borderRadius: "5px" }} fit="cover" />
                            </div>
                            <div style={{
                                width: "100%",
                                height: "fit-content",
                                paddingTop: "20px"
                            }}>
                                <Tabs
                                    indicatorColor="transparent "
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons
                                    allowScrollButtonsMobile
                                    sx={
                                        {
                                            width: "100%",
                                            height: "fit-content"
                                        }
                                    }
                                >
                                    {
                                        info.gallery.map((img, index) => {
                                            return (
                                                <Tab
                                                    style={{
                                                        height: "100px",
                                                        width: "fit-content",
                                                        borderRadius : "3px",
                                                        padding : "0px",
                                                        marginInline : "11px"

                                                    }}
                                                    onClick={() => {
                                                        setSelectedPhoto(img)
                                                    }}
                                                    Skey={index}
                                                    label={(
                                                        <Image src={img} style={{ minHeight: "162px", maxWidth: "336px", height: "100%" }} fit="cover" />
                                                    )} />
                                            )
                                        })
                                    }






                                </Tabs>
                            </div>


                        </div>
                        <div>
                            {/* // room serveses --------------*/}
                            
                        </div>
                        <div>
                            {/*room discription------------------- */}
                        </div>
                    </div>
                </div>
            </section>
            <Footer isSmall={x} />

        </div>
    )
}