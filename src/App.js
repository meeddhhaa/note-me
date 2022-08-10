import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "3/8/22",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "2/8/22",
    },
    {
      id: nanoid(),
      text: "This is my next note",
      date: "2/8/22",
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "7/8/22",
    },
    {
      id: nanoid(),
      text: "This is my fifth note",
      date: "8/8/22",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("note-me-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'note-me-data',
      JSON.stringify(notes)
      );
  }, [notes]);

  const addNote = (text) => {
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
        <Header handleToggleDarkMode={setDarkMode} darkmode={darkMode} />
        <Search handleSearchText={setSearchText} />
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
