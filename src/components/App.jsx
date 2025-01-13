import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App() {
  return (
    <div>
      <Header />
      {/* // what component do we want here ?
      // notes the lets print it  using map function */}
      {notes.map(
         noteItem =>
        (
          (<Note
            key = {noteItem.key}
            title = {noteItem.title}
            content =  {noteItem.content}
            
          />)
          )
      )}
      <Footer />
    </div>
  );
}

export default App;
