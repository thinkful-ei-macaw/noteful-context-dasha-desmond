import React from "react";

const ApiContext = React.createContext({
  note_table: [],
  folder_table: [],
  addFolder:() => {},
  addNote:() => {},
  deleteNote: () => {}
});

export default ApiContext;
