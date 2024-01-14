import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNotes(noteOne){
    return <Note
    key={noteOne.key}
    title={noteOne.title}
    content={noteOne.content}
    ></Note>
}

function App() {
  return (
    <div>
      <Heading />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
