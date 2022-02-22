import React from 'react'
import './Home.css'
import Product from "./Product";
import homeAD from './homeAD.png';
import ANNE from './SpoonPhoto.JPG';

function Home() {
    return (
        <div className ="home">
           <div className="home_container">
               <img className="home_image" 
               src={homeAD} />
             <div className="home_row">
                 <Product id= "812583123"title='Hello World: How to be Human in the Age of the Machine'price={19.99} image="https://wordery.com/jackets/a2fc646e/hello-world-hannah-fry-9780857525246.jpg" 
                 rating={5}/>
                 <Product id= "137216312"title='Rich Dad Poor Dad'price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SY344_BO1,204,203,200_.jpg" 
                 rating={4}/>
                 <Product id="917248214" title="A Short History of Nearly Everything" price={7.49} image="https://images-na.ssl-images-amazon.com/images/I/51G0i4rqVFL._SX319_BO1,204,203,200_.jpg"
                 rating={4}/>
            {/* three components*/}
             </div>
             <div className="home_row">
             
             <Product id="1209393" title="Logitech HD Pro Webcam C920, Widescreen Video Calling and Recording, 1080p Camera, Desktop or Laptop Webcam" price={89.99} image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg" 
             rating={4}/>

             <Product id="7279245" title="Fitbit Inspire 2 Health and Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate, Black/White, One Size (S and L Bands Included)" price={69.99} image="https://images-na.ssl-images-amazon.com/images/I/71TS9mA9HwL._AC_SL1500_.jpg" 
             rating={4}/>
            {/* five components*/}
             </div>
             <div className="home_row">
            {/* three components*/}
            <Product id="78214672" title="
ELEGOO UNO Project Super Starter Kit with Tutorial and UNO R3 Compatible with Arduino IDE" price={49.99} image="https://images-na.ssl-images-amazon.com/images/I/81itBMd1hzL._SL1500_.jpg" 
            rating={5}/>
            <Product id="71246124" title="Soldering Iron Kit - Soldering Iron 60 W Adjustable Temperature, Digital Multimeter, Stand, Soldering Iron Tip Set, Desoldering Pump, Solder Wick, Tweezers" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/91etIPpwT2L._AC_SL1500_.jpg" 
            rating={4}/>
            <Product id="41249125" title="Adeept PiCar-Pro Raspberry Pi Smart Robot Car Kit Programming 2-in-1 4WD Car Robot with 4-DOF Robotic Arm" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71E8bbrt6mL._AC_SL1200_.jpg" 
            rating={5}/>
             </div>
             <div className="home_row">
                 <Product id = "18313872" title="HP Chromebook 14-db0003sa 14 Inch Laptop - AMD Dual Core A4, 4 GB RAM"
                 price={235} image ="https://images-na.ssl-images-amazon.com/images/I/71SriwgxJRL._AC_SL1500_.jpg"
                 rating={4}
                 />
             </div>



             {/*<div className="home_row">
                 <Product id = "123123" title="The most BEAUTIFUL thing in the world"
                 price={9999999999999999999999999999999999999999} image ={ANNE}
                 rating={5}
                 />
             </div>

             <div className="home_row">
                 <Product id = "123123" title="Anne's Black Apple Watch"
                 price={0.00} image ="https://brain-images-ssl.cdn.dixons.com/8/6/10213868/u_10213868.jpg"
                 rating={5}
                 />
                  <Product id = "123123" title="Anne's Rose Gold Apple Watch"
                 price={0.00} image ="https://brain-images-ssl.cdn.dixons.com/7/6/10213867/u_10213867.jpg"
                 rating={5}
                 />
             </div>
             <div className="home_row">
                 <Product id = "123123" title="Anne's Blue Apple Watch"
                 price={0.00} image ="https://brain-images-ssl.cdn.dixons.com/9/6/10213869/l_10213869.jpg"
                 rating={5}
                 />
                  <Product id = "123123" title="Anne's White Apple Watch"
                 price={0.00} image ="https://brain-images-ssl.cdn.dixons.com/0/7/10213870/u_10213870.jpg"
                 rating={5}
                 />
             </div>

             <div className="home_row">
                 <Product id = "123123" title="Anne's Red Apple Watch"
                 price={0} image ="https://brain-images-ssl.cdn.dixons.com/4/0/10215204/u_10215204.jpg"
                 rating={5}
                 />
             </div> */}

             


           </div>
        </div>
    )
}

export default Home
