import React from "react";

const UserContext = React.createContext({
  isDark: false,
  userWiseData: [],
  changeDarkTheme: () => {},
});

export default UserContext;
