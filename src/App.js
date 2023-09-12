import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/search";
import Title from "./components/Title";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First text",
      date: "13/12/2013",
    },
    {
      id: nanoid(),
      text: "Second text",
      date: "14/12/2013",
    },
    {
      id: nanoid(),
      text: "Third text",
      date: "15/12/2013",
    },
    {
      id: nanoid(),
      text: "Forth text",
      date: "16/12/2013",
    },
  ]);

  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Title handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
