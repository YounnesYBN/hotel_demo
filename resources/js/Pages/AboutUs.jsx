import { Typography, useMediaQuery } from "@mui/material";
import Footer from "./components/footer"
import Header from "./components/header"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Link } from "@inertiajs/react";
export default function AboutUs(second) {

    const IsPhone = useMediaQuery('(max-width:767px)');
    const IsLessThen470 = useMediaQuery('(max-width:459px)');
    const x = useMediaQuery('(min-width:1018px)');

    return (
        <div style={{
            backgroundColor:IsPhone?"white" : "#efeff4",
            border: "1px solid transparent"
        }}>
            <Header selected={"ABOUT US"} />
            <section style={{
                minHeight: IsPhone ?"400px":"350px",
                maxHeight: "fit-content",
                height: "fit-content",
                marginTop: IsLessThen470 ? "100px" : IsPhone ? "70px" : "115px",
                display: IsPhone ? null : "flex",
                justifyContent: "center",
                alignItems: "center"
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
                                        height: "44px",
                                        backgroundColor: "white",
                                        display: "flex",
                                        alignItems: "center",
                                        borderBottom : "1px solid rgb(239, 239, 244)"
                                    }
                                }>

                                    <Link href="/" style={{margin : "0 40% 0 2%",color:"black"}} ><ArrowBackIosRoundedIcon /></Link>

                                    <Typography >About Us</Typography>
                                </div>
                            ) : <Typography variant="h4" sx={{marginTop:"10px"}}>About Us</Typography>

                    }
                    <div style={{ height: "fit-content", padding: "20px", backgroundColor: "white", borderRadius: "5px", width: "100%" }}>
                        <p>
                            Chez Imnir has a garden, shared lounge, a terrace and restaurant in Ijjoukak. Boasting room service, this property also provides guests with a barbecue. There is free private parking and the property features paid airport shuttle service. At the inn, the rooms include a balcony with a mountain view. Featuring a private bathroom with a shower and free toiletries, rooms at Chez Imnir also feature a city view. At the accommodation rooms are fitted with a seating area. An à la carte, continental or vegetarian breakfast can be enjoyed at the property. Speaking Arabic, German, English and Spanish at the reception, staff are willing to help at any time of the day. The nearest airport is Marrakech-Menara Airport, 98 km from Chez Imnir.
                        </p>
                    </div>
                </div>
            </section >
            <Footer  isSmall={x} />
        </div >
    )
}