import { Backdrop, IconButton, Typography, useMediaQuery } from "@mui/material";
import Header from "./components/header"
import Footer from "./components/footer";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Link } from "@inertiajs/react";
import { Image } from "grommet";
import { Close } from "@mui/icons-material";
import { useState } from "react";




export default function Gallery({ AllGalleriesProps }) {

    const [imgBackDrop, setImgBackDrop] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const IsPhone = useMediaQuery('(max-width:767px)');
    const IsLessThen470 = useMediaQuery('(max-width:459px)');
    const x = useMediaQuery('(min-width:1018px)');
    const openBackDrop = (url) => {
        setSelectedImg(url);
        setImgBackDrop(true);
    }
    const closeBackDrop = () => {
        setImgBackDrop(false);
        setTimeout(()=>setSelectedImg(null),500)
        
    }
    return (
        <div style={
            {
                backgroundColor: IsPhone ? "white" : "#efeff4",
            }
        }>
            <Header selected={"GALLERY"} />
            <section style={{
                height: "fit-content",
                marginTop: IsLessThen470 ? "100px" : IsPhone ? "70px" : "115px",
                display: IsPhone ? null : "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div style={
                    {
                        width: IsPhone ? "100%" : "80%",
                        maxHeight: "fit-content",
                        minHeight: "320px",
                        paddingInline: "10px",


                    }
                }>
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
                                        borderBottom: "1px solid rgb(239, 239, 244)"
                                    }
                                }>

                                    <Link href="/" style={{ margin: "0 40% 0 2%", color: "black" }} ><ArrowBackIosRoundedIcon /></Link>

                                    <Typography >Gallery</Typography>
                                </div>
                            ) : <Typography variant="h4" sx={{ marginTop: "10px" }}>Gallery</Typography>

                    }
                    {/* //all gallery */}
                    <div style={
                        {
                            width: '100%',
                            height: "fit-content",
                            display: "flex",
                            flexDirection: IsLessThen470 ? "column" : "row",
                            flexWrap: "wrap",
                            gap: "10px",
                            backgroundColor: "white",
                            padding: IsPhone ? null : "20px",
                            borderRadius: "5px",
                            boxShadow: IsPhone ? null : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            marginTop: "10px"

                        }
                    }>
                        {AllGalleriesProps.map((photo, index) => {
                            return (

                                <Image key={index} fit="cover" src={photo}
                                    onClick={()=>{
                                            IsLessThen470?null: openBackDrop(photo)
                                    }}
                                    style={{ minWidth: IsLessThen470 ? "100%" : 200, maxWidth: IsLessThen470 ? "100%" : 394, height: IsLessThen470 ? 150 : 200, borderRadius: "5px", "&:hover": { cursor: "pointer" } }}
                                />

                            )

                        })}
                    </div>
                </div>
            </section>
            <Footer isSmall={x} />



            < Backdrop
                open={imgBackDrop}
                sx={{ zIndex: 20, display: "flex", flexDirection: "column", padding: "5%" }
                }
                onClick={() => closeBackDrop()}
                onScroll={(e)=>e.preventDefault()}
            >
                <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", paddingRight: "1%" }}>
                    <IconButton ><Close fontSize="large" sx={{ color: "white" }} /></IconButton>
                </div>


                <img src={selectedImg} alt="" onClick={(e) => e.stopPropagation()} style={{ objectFit: "cover", borderRadius: "5px", alignSelf: "center", minWidth: "70%", maxWidth: "100%", maxHeight: "600px", minHeight: "fit-content" }} />

            </Backdrop >
        </div>
    )
}