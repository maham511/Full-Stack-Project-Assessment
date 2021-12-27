
import React, { useState } from "react";
// import { vidList } from './Video'

// console.log(vidList);

//  let testNewList = vidList.concat({
//     id: "",
//     title: "The Cng Train",
//     url: "https://www.youtube.com/watch?v=HerCR8bw_GE",
//     rating: "",
//   })
//   console.log(testNewList);
//  console.log(vidList);

function AddVideo() {

    //MY CODE---------------
//   const [titleInput, setTitleInput] = useState("");
//   const [URLInput, setURLInput] = useState("");
  const [vidArr, setVidArr] = useState();

// //   console.log(vidArr);

//   //handler for add butn
//   //OnSubmit
//   //store value of titleInput
//   //store value of urlInput
//   //create object var e.g {
//   //     id: '',
//   //     title: {titleInput},
//   //     url: {URLInput} ,
//   //     rating: '',
//   //   }
//   //concat obj to vidList -- vidList.concat(objName)
//   //render card in allVideos --- concat state variable to vid list arr
//   //updates vidList in consolelog, but react doesn't know if vidList updated, so useState for vidList??
//   function handleTitleInputChange(event) {
//     setTitleInput(event.target.value);
//   }

//   function handleURLInputChange(event) {
//     setURLInput(event.target.value);
//     // console.log(URLInput); //logs one char behind
//   }

//   function handleSubmit(event) {
//       event.preventDefault();
    
//     //new object stores title and url values from userInput
//     const newVid = {
//         id: "",
//         title: titleInput,
//         url: URLInput ,
//         rating: '',
//     };

//     console.log(newVid); //logs newVid obj correctly
//     // vidList.concat(newVid);
//     // setVidArr(vidArr.concat(newVid));
//     setVidArr([...vidArr]);

//     console.log(vidArr);
//   }
// MY CODE above ----------

//MYa's code beloe----

 const [addNewVc, setAddNewVc] = useState({ title: "", url: "" });
 const { title, url } = addNewVc;
 const handleOnChange = (event) => {
   setAddNewVc({ ...addNewVc, [event.target.name]: event.target.value });
 };
 const handleSubmit = (event) => {
   event.preventDefault();
   //    let newArr = vidArr.push(addNewVc);
//    console.log(vidList); //logs 11 elems
   //    console.log(vidArr); //logs 15 elems
   //    console.log(newArr); //logs 15

//    const newList = vidList.concat(addNewVc);
//    console.log(vidList); //logs 11 elems
//    console.log(newList); //logs 12 elems
//    console.log(vidList); //logs 11 elems

//    const newList2 = vidArr.concat(addNewVc);
//    setVidArr(newList2);
//    console.log(newList2);

 };

  return (
    <div>
      <div>
        <h1>Add Video</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Title
                <input
                  name="title"
                  type="text"
                  required=""
                  id="newTitle"
                  value={title}
                  onChange={handleOnChange}
                ></input>
              </label>
            </div>
            <div>
              <label>
                URL
                <input
                  name="url"
                  type="text"
                  required=""
                  id="newUrl"
                  value={url}
                  onChange={handleOnChange}
                ></input>
              </label>
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
//-------------------------------------

//   return (
//     <div id="addVideo">
//       <h3>Add Video</h3>
//       <form id="form" onSubmit={handleSubmit}>
//         <div id="input">
//           <label>
//             Title
//             <input
//               onChange={handleTitleInputChange}
//               id="newTitle"
//               name="title"
//               type="text"
//               value={titleInput}
//               required=""
//             ></input>
//           </label>
//           <label>
//             URL
//             <input
//               onChange={handleURLInputChange}
//               id="newUrl"
//               name="url"
//               type="text"
//               required=""
//               value={URLInput}
//             ></input>
//           </label>
//           <input type="submit" value="Add" />
//         </div>
//       </form>
//     </div>
//   );
}


export default AddVideo;