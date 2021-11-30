import "./App.css";
import Video from "./Video";
import AllVideos from "./Video";
import AddVideo from './AddVideo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
        <AddVideo/>
        <AllVideos/>
    </div>
  );
}

//1. For each video
//Create react component that includes
  //1.1 Video title --(h2) - DONE
  //1.2 Embedded video  --(iframe) -DONE
  //1.3 No. of votes for video - DONE
  //1.4 Delete button that removes video -DONE 
  //  WORKED with just remove() & getElementById
      // Usestate ?
      //check if video componennt is rendered/true
      //if true remove it

  //1.5  2 buttons to vote --- (useState to track vote)
    //'Up Vote' increases score onclick --DONE
    //'Down Vote' decreases score --DONE
    
//Create React component that Adds a video. Includes
  // 2.1 field to add Title 
  // 2.2 field to add url 
  //2.3  'Add' button which adds video to the existing list

export default App;
