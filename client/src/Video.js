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

// vidList.forEach(vid => )

//for all Vides
function Video() {
  function delVidComponent() {
    const el = document.getElementById("vidDiv");
    // const el = document.getElementsByClassName("wrapper"); //don't work with class
    el.remove();
  }

  console.log("hiii");
  const extractedUrl = vidList[9].url.substring(32).toString(); //logs correct ID
  console.log(typeof extractedUrl);
  console.log(`https://www.youtube.com/embed/${extractedUrl}`);

  return (
    <div id="vidDiv" classname="wrapper">
      <h2>{vidList[9].title}</h2>
      {/* need src value within curly braces as using js to concatenate url with extractedUrl variable */}
      <iframe src={"https://www.youtube.com/embed/" + extractedUrl}></iframe>
      <p>{vidList[9].rating} votes</p>
      <button>Up Vote</button>
      <VoteUpBtn />
      <button>Down Vote</button>
      <VoteDownBtn/>
      {/* <button onClick={deleteWhenClicked}>Delete Video</button> */}
      {/* Test butn */}
      {/* Works! deletes whole component!! */}
      <button id="DelBtn" onClick={delVidComponent}>
        Delete test
      </button>
    </div>
  );
}

//UpBtn component
function VoteUpBtn() {
  const [count, setCount] = useState(0);
  console.log("Button was clicked!");

  function countUp() {
     setCount(count + 1)
  }

   return <button onClick={countUp}>Down Vote {count}</button>;
}

//DownBtn component
function VoteDownBtn() {
  const [count, setCount] = useState(0);
  console.log("DwnButton was clicked!");

  function countDown() {
     setCount(count - 1)
  }

   return <button onClick={countDown}>Up Vote {count}</button>;
}


//for 1 video
// function Video() {
//     console.log('hiii');
//     return (
//       <div classname="wrapper">
//         <h2>Title</h2>
//         {/* <iframe></iframe> */}
//         <p>no of votes</p>
//         <button>Up Vote</button>
//         <button>Down Vote</button>
//         <button>Delete Video</button>
//       </div>
//     );
// };

export default Video;
