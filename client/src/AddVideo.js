

function AddVideo() {
  return (
    <div id="addVideo">
      <h3>Add Video</h3>
      <form id="form">
        <div id='input'>
          <label>
            Title
            <input class="input" name="title" type="text" required=""></input>
          </label>
          <label>
            URL
            <input class="input" name="url" type="text" required=""></input>
          </label>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}


export default AddVideo;