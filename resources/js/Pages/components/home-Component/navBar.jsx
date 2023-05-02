import { Link } from "@inertiajs/react"
import { Typography } from "@mui/material"

export default function NavBar({ selected, isSmall }) {

    const Hover = { "&:hover": { color: "#06D6A0" } }
    const OnSelect = "5px solid #06D6A0"



    if (!isSmall) {

        return (
            <div style={
                {
                    padding: "10px 0 0 0",
                    width: "100%",
                    height: "fit-content",
                    fontWeight: "normal",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: "5%",
                }
            }>
                <Link href="/" style={{textDecoration:"none",color:"black"}}> <Typography variant="h6" sx={{ ...Hover, borderBottom: "HOME" == selected ? OnSelect : "none", color: "HOME" == selected ? "#06D6A0" : "none" }}>HOME</Typography></Link>
                <Link href="/Gallery" style={{textDecoration:"none",color:"black"}}> <Typography variant="h6" sx={{ ...Hover, borderBottom: "GALLERY" == selected ? OnSelect : "none", color: "GALLERY" == selected ? "#06D6A0" : "none" }}>GALLERY</Typography></Link>
                <Link href="/Rooms" style={{textDecoration:"none",color:"black"}}> <Typography variant="h6" sx={{ ...Hover, borderBottom: "ROOMS" == selected ? OnSelect : "none", color: "ROOMS" == selected ? "#06D6A0" : "none" }}>ROOMS</Typography></Link>
                <Link href="/Contact us" style={{textDecoration:"none",color:"black"}}> <Typography variant="h6" sx={{ ...Hover, borderBottom: "CONTACT US" == selected ? OnSelect : "none", color: "CONTACT US" == selected ? "#06D6A0" : "none" }}>CONTACT US</Typography></Link>
                <Link href="/About us" style={{textDecoration:"none",color:"black"}}> <Typography variant="h6" sx={{ ...Hover, borderBottom: "ABOUT US" == selected ? OnSelect : "none", color: "ABOUT US" == selected ? "#06D6A0" : "none" }}>ABOUT US</Typography></Link>
            </div>
        )
    } else {
        return (
            <div style={
                {
                    width : "300px",
                    margin : "30px 0 0 20px",
                    height : "fit-content",
                    display : "flex",
                    flexDirection : "column",
                    gap : "20px",
                    
                    
                }
            }>
                <Link href="/" style={{textDecoration:"none",color:"black"}}><Typography 
                variant="h6" 
                sx={{ ...Hover, borderBottom: "HOME" == selected ? OnSelect : "none", color: "HOME" == selected ? "#06D6A0" : "none" }}>HOME</Typography></Link>
                <Link href="/Gallery" style={{textDecoration:"none",color:"black"}}><Typography 
                variant="h6" 
                sx={{ ...Hover, borderBottom: "GALLERY" == selected ? OnSelect : "none", color: "GALLERY" == selected ? "#06D6A0" : "none" }}>GALLERY</Typography></Link>
                <Link href="/Rooms" style={{textDecoration:"none",color:"black"}}><Typography 
                variant="h6" 
                sx={{ ...Hover, borderBottom: "ROOMS" == selected ? OnSelect : "none", color: "ROOMS" == selected ? "#06D6A0" : "none" }}>ROOMS</Typography></Link>
                <Link href="/Contact us" style={{textDecoration:"none",color:"black"}}><Typography 
                variant="h6" 
                sx={{ ...Hover, borderBottom: "CONTACT US" == selected ? OnSelect : "none", color: "CONTACT US" == selected ? "#06D6A0" : "none" }}>CONTACT US</Typography></Link>
                <Link href="/About us" style={{textDecoration:"none",color:"black"}}><Typography 
                variant="h6" 
                sx={{ ...Hover, borderBottom: "ABOUT US" == selected ? OnSelect : "none", color: "ABOUT US" == selected ? "#06D6A0" : "none" }}>ABOUT US</Typography></Link>
           
            </div> 
        )
    }
}