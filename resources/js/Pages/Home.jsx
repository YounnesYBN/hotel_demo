import { useMediaQuery } from "@mui/material";
import Header from "./components/header"

export default function Home(second) {
    const IsPhone = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <Header selected={"HOME"}/>
            <div style={{height:"800px",marginTop:IsPhone?"68px":"115px",border:"1px solid red"}}>
                
            </div>
        </div>
    )
}