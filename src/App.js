import { nanoid } from "nanoid";
import { useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/search";
import Title from "./components/Title";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First text",
      date: "13/13/2013",
    },
  ]);

  const addNote = (text) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <Title />
      <Search />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
