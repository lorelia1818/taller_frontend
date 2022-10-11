import React, {Component} from "react";
import user from "../images/profile.jpg";
import logo from "../images/logo.png";

class AppHeader extends Component {
    render(){
        return(            
        <header 
            id="hd" 
            style={{
                backgroundColor: "#82E0AA",
                border: "1px solid white",
                height: "100%",
                width: "100%",
            }}>
                <ul style={{
                    fontWeight:"600px",
                    fontSize:"20px",
                    marginTop:"3%",
                    fontSize:"10px"

                }}>
                    <a href="CLASS" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"10px"}}>
                        <b>Start</b></a>&nbsp;
                    <a href="Advertising" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"10px" }}>
                        <b>Advertising</b></a>&nbsp;
                    <a href="Contact" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"10px" }}>
                        <b>Contact</b></a>&nbsp;
                    <a href="Gallery" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"10px" }} >
                        <b>Gallery</b></a>&nbsp;
                    <a href="Products" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"10px" }}>
                        <b>Products</b></a>
                    
                    <span class="icon" style={{marginLeft:"25%"}}><i class="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search" /> 
                <figure style={{marginLeft: "90%", marginTop:"-50px"}}>
                
                    <img 
                        src={user}
                        style={{
                            marginLeft: "2%",	
                            width:"40px",
                            height:"40px"   
                        }}   
                    />  
                                             
                    <figcaption>profile</figcaption>
                </figure> 
                <figure style={{marginLeft: "70%", marginTop:"-90px"}}>
                    <img 
                        src={logo}
                        style={{
                            marginLeft: "2%",	
                            width:"100px",
                            height:"90px"  
                        }} 
                    />  
                </figure>                    
                </ul>                                
        </header>
        
        );
    }

}   

export default AppHeader;

