import React, { Component } from "react";

const UserContext = React.createContext({
  notes: [],
  folders: []
});

export default UserContext;
