import React, { useState } from "react";
import Button from "./Button"; // Assuming the Button component is in a separate file

function App() {
  const handleAddNew = () => {
    // Logic to add a new post goes here
    console.log("Adding a new post...");
  };

  return (
    <div className="App">
      {/* Other components */}
      <Button click={handleAddNew} name="Add Post" />
    </div>
  );
}

export default App;
