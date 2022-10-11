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
                    <a href="CLASS" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"15px"}}><b>INICIO</b></a>&nbsp;
                    <a href="PUBLICIDAD" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"15px" }}><b>PUBLICIDAD</b></a>&nbsp;
                    <a href="CONTACTO" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"15px" }}><b>CONTACTO</b></a>&nbsp;
                    <a href="GALERIA" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"15px" }} ><b>GALERIA</b></a>&nbsp;
                    <a href="PRODUCTOS" style={{ color: "#050605 ",  textDecorationLine:'none', margin:"15px" }}><b>PRODUCTOS</b></a>
                    

                    <span class="icon" style={{marginLeft:"31%"}}><i class="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search" />
                
                <figure style={{marginLeft: "90%", marginTop:"-60px"}}>
                    <img 
                        src={user}
                        style={{
                            marginLeft: "5%",	
                            width:"45px",
                            height:"45px"   
                        }}   
                    />  
                                             
                    <figcaption>PERFIL</figcaption>
                </figure> 
                <figure style={{marginLeft: "79%", marginTop:"-90px"}}>
                    <img 
                        src={logo}
                        style={{
                            marginLeft: "3%",	
                            width:"90px",
                            height:"80px"  
                        }} 
                    />  
                </figure>                    
                </ul>                                
        </header>
        
        );
    }

}   

export default AppHeader;

