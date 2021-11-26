import "./App.css";
import Video from "./Video";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
        <Video/>
    </div>
  );
}

//1. For each video
//Create react component that includes
  //1.1 Video title --(h2)
  //1.2 Embedded video  --(iframe)
  //1.3 No. of votes for video
  //1.4 Delete button that removes video
  //1.5  2 buttons to vote --- (useState to track vote)
    //'Up Vote' increases score onclick
    //'Down Vote' decreases score 
    
//Create React component that Adds a video. Includes
  // 2.1 field to add Title 
  // 2.2 field to add url 
  //2.3  'Add' button which adds video to the existing list

export default App;
