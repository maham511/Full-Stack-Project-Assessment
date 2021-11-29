import React, { useState } from "react";

const vidList = [
  {
    id: 523523,
    title: "Never Gonna Give You Up",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 23,
  },
  {
    id: 523427,
    title: "The Coding Train",
    url: "https://www.youtube.com/watch?v=HerCR8bw_GE",
    rating: 230,
  },
  {
    id: 82653,
    title: "Mac & Cheese | Basics with Babish",
    url: "https://www.youtube.com/watch?v=FUeyrEN14Rk",
    rating: 2111,
  },
  {
    id: 858566,
    title: "Videos for Cats to Watch - 8 Hour Bird Bonanza",
    url: "https://www.youtube.com/watch?v=xbs7FT7dXYc",
    rating: 11,
  },
  {
    id: 453538,
    title:
      "The Complete London 2012 Opening Ceremony | London 2012 Olympic Games",
    url: "https://www.youtube.com/watch?v=4As0e4de-rI",
    rating: 3211,
  },
  {
    id: 283634,
    title: "Learn Unity - Beginner's Game Development Course",
    url: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
    rating: 211,
  },
  {
    id: 562824,
    title: "Cracking Enigma in 2021 - Computerphile",
    url: "https://www.youtube.com/watch?v=RzWB5jL5RX0",
    rating: 111,
  },
  {
    id: 442452,
    title: "Coding Adventure: Chess AI",
    url: "https://www.youtube.com/watch?v=U4ogK0MIzqk",
    rating: 671,
  },
  {
    id: 536363,
    title: "Coding Adventure: Ant and Slime Simulations",
    url: "https://www.youtube.com/watch?v=X-iSQQgOd1A",
    rating: 76,
  },
  {
    id: 323445,
    title: "Why the Tour de France is so brutal",
    url: "https://www.youtube.com/watch?v=ZacOS8NBK6U",
    rating: 73,
  },
];
console.log(vidList);

 //for all Videos
 function AllVideos () {
   return (
     <div>
       {vidList.map((vid, index) => {

         //extracts unique video url string from array(all chars after 'v=') 
         const extractedID = vid.url.substring(32).toString();

         //handler for delete btn
         function deleteVid() {

           //Store whole video div
           const el = document.getElementById(index + 1);
           el.remove(); //deletes whole video div element; remove() won't work with classname
         }

         return (
           //  id & title attributes index + 1 for simple numbering(optional)
           <div key={index} id={index + 1}>
             <h2>{vid.title}</h2>
             {/* need src value within curly braces as using js to concatenate url with extractedUrl variable */}
             <iframe
               title={index + 1}
               src={"https://www.youtube.com/embed/" + extractedID}
             ></iframe>

             {/* map method's vid(item) argument passed as prop to be used in Rating component */}
             <Rating vid={vid} />

             <button id="DelBtn" onClick={deleteVid}>Delete</button>
           </div>
         );
       })}
     </div>
   )}


 // Rating component for each mapped item
    function Rating(props) {

      // vid prop used to initalise count (value from rating key in vidList array); count's initial value changes according to each mapped arr item
      const [count, setCount] = useState(props.vid.rating);

    
      function countUp() {
        setCount(count + 1);
      }
      function countDown() {
        setCount(count - 1);
      }

      return (
        <div>
          <p>{count} likes</p>
          <button onClick={countUp}>Up Vote</button>
          <button onClick={countDown}>Down Vote</button>
        </div>
      );
    }     


// //for 1 Video
// function Video() {
//   function deleteVid() {
//     const el = document.getElementById("vidDiv");
//     // const el = document.getElementsByClassName("wrapper"); //don't work with class
//     el.remove();
//   }

//   // console.log("hiii");
//   const extractedUrl = vidList[9].url.substring(32).toString(); //stores unique ID string from url

//   return (
//     <div id="vidDiv" classname="wrapper">
//       <h2>{vidList[9].title}</h2>
//       {/* need src value within curly braces as using js to concatenate url with extractedUrl variable */}
//       <iframe src={"https://www.youtube.com/embed/" + extractedUrl}></iframe>
//       <Rating />
//       <button id="DelBtn" onClick={deleteVid}>
//         Delete
//       </button>
//     </div>
//   );
// }

// //Rating component
// function Rating() {
//   const [count, setCount] = useState(vidList[9].rating);
//   function countUp() {
//      setCount(count + 1);
//   }
//    function countDown() {
//      setCount(count - 1);
//   }

//    return (
//      <div>
//        <p>{count} likes</p>
//        <button onClick={countUp}>Up Vote</button>
//        <button onClick={countDown}>Down Vote</button>
//      </div>
//    );
// }


export default AllVideos;
