import React, {Component} from "react";
import tree from "../images/tree.jpg";
import tree2 from "../images/tree2.jpg"
import video from "../images/video.mp4";

class AppBody extends Component {
    
    render(){
        return(
            <body>
                <div 
            style={{
                backgroundColor: "#D8F6F9",
                height: "110%",
                width: "100%",
                position: "absolute",   
            }}>
            
                <h1 class="title" 
                    style={{
                        fontfamily: 'Times New Roman, Times, serif',
                        color: "#42585a",
                        fontfamily: "calibri-bold",
                        textAlign: "center"
                    }}>
                    Pagina web<br></br><br></br>
                </h1>
            <div
                style={{ 
                        float: "left",
                        backgroundColor: "#F436AF", 
                        height: "65%",
                        width: "40%",
                        marginLeft: "3%",
                        }}>

                <figure style={{marginLeft: "-8%", marginTop:"25%"}}>
                    <img 
                        src={tree}
                        style={{
                            float: "left",
                            marginLeft: "15%",	
                            width:"150px",
                            height:"200px"                         
                        }} 
                    />  
                </figure>

                <figure style={{marginLeft: "5%", marginTop:"25%"}}>
                    <img 
                        src={tree2}
                        style={{
                            float: "left",
                            marginLeft: "15%",	
                            width:"150px",
                            height:"200px" 
                        }} 
                    />  
                </figure>

            </div>
            <div 
                style={{ 
                    float: "left",
                    backgroundColor: "#F4EB36", 
                    height: "65%",
                    width: "40%",
                    marginLeft: "14%",
                    }}>
                        
                    <figure style={{marginTop: "25%", marginLeft: "10%"}}>
                    <video
                        src={video}
                        autoplay="true" muted="true" loop="true" 
                        style={{
                            width: "100%",                       
                        }} 
                    />  
                </figure>
            </div>   
                    
        </div>
            </body>
        );
    }}

export default AppBody;
