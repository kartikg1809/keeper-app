import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes,setNotes]=useState([])
    function addNote(note) {
        setNotes(prev=>{
            return [...prev,note];
        })
    }

    function deleteNote(id){
      setNotes(prev=>{
        return prev.filter((note,index)=>{
          return index!==id;
        })
      })
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,id)=>{
        return <Note key={id} id={id} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/> 
      })}
      <Footer />
    </div>
  );
}

export default App;
