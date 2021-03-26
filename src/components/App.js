import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((data) => (
        <Note Key={data.id} title={data.title} detail={data.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
