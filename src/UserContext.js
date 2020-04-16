import React, { Component } from "react";

const UserContext = React.createContext({
  notes: [],
  folders: [],
  deleteNote: () => {}
});

export default UserContext;
