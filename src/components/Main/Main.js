import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }

  handleBeforeChange = (oldIndex, newIndex) => {
    this.setState({ currentSlide: newIndex });
  };

  handleDotClick = (index) => {
    this.slider.slickGoTo(index);
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 3500000000000000,
      beforeChange: this.handleBeforeChange
    };

    return (
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          
          <div>
            
            <div style={{textAlign:"center",position:"absolute",top:"50%",width:"100vw",display:"inline-block"}}>
              <h style={{ color: "white", fontSize: "3.5vw", fontFamily:'GangwonEduPowerExtraBoldA'}}>3D로</h>
              <h style={{ color: "rgb(255, 185, 0)", fontSize: "3.5vw", fontFamily:'GangwonEduPowerExtraBoldA'}}> 이상</h>
              <h style={{ color: "white", fontSize: "3.5vw", fontFamily:'GangwonEduPowerExtraBoldA'}}>을 표현하다</h>
            </div>
            
            <video muted autoPlay loop style={{ width: "100%", height: "100vh", objectFit: "cover" }}>
              <source src="video/main.mp4" type="video/mp4" />
            </video>
          
          </div>
          
          <div>

          <div style={{textAlign:"left",position:"absolute",top:"50%", transform: "translate(50%, -60%)", display: 'flex', alignItems: 'center'}}>
              <h style={{ color: "white", fontSize: "3vw", fontFamily:'GangwonEduPowerExtraBoldA', marginLeft: '10px'}}>3D 동아리</h>
              <img src="img/logo.png" style={{width:"6.5vw", verticalAlign: 'middle',marginBottom:"5vh"}}/>
          </div>




            <video muted autoPlay loop style={{ width: "100%", height: "100vh", objectFit: "cover" }}>
              <source src="video/samdi.mp4" type="video/mp4" />
            </video>
          
          </div>
         
          <div>
           
            <video muted autoPlay loop style={{ width: "100%", height: "100vh", objectFit: "cover" }}>
              <source src="video/History.mp4" type="video/mp4" />
            </video>
         
          </div>
          
          <div>
          
            <video muted autoPlay loop style={{ width: "100%", height: "100vh", objectFit: "cover" }}>
              <source src="video/Join.mp4" type="video/mp4" />
            </video>
         
          </div>
        
        </Slider>
        
        <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", zIndex: "1" }}>
          {Array.from({ length: 4 }, (_, i) => (
            
            <span
              key={i}
              onClick={() => this.handleDotClick(i)}
              style={{ cursor: "pointer", fontSize: "20px", color: this.state.currentSlide === i ? "#fff" : "#ccc", margin: "0 5px" }}
            >
              •
            </span>
          ))}
        </div>
      </div>
    );
  }
}
