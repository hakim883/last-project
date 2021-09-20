// import React from 'react'



// export const About = () => {
   
 
//     return (






      
      
       
            
    



//         <div className="right">
//           <div className="left">
//             <h2  style={{textAlign:'right', color:'blue', fontSize:'35px' , marginRight:'650px'}}>About Us</h2>
//             <p>If you want to learn more about us, you’re in the right place. Read to learn how we managed to grow our business so fast.</p>
//             <div textAlign="left" >
//             <img
//                 className="medium"
              
//                 src="images/p.jpg"
//                 alt="images/p.jpg"
//               ></img>
//               </div>
//           </div>
//         </div>
      
//     );
//   };
         


import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Hello, wishes from rideontrek.com</p>
      <br />
      <p>
        Trek Bicycle Corporation is a bicycle and cycling product manufacturer
        and distributor under brand names Trek, Electra Bicycle Company,
        Bontrager, and Diamant Bikes. The company has previously manufactured
        bikes under the Gary Fisher, LeMond Racing Cycles, Klein, and Villiger
        Bikes brand names.
      </p>
      <br />
      <p>
        Trek bikes are very good. Trek has a long history of making quality
        bikes that are used by beginner, hobby, and elite cyclists around the
        world. Trek bikes last for a long time and have excellent reselling
        value years after purchase.
      </p>
      <br />

      <h3>Browse through some of our videos</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MsBuNcEB-6Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DFRdZZYwljc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pfECwILwlrg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3pzKY6tqf9c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

