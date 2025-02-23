import React from "react";
import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header title="huhu" />
      <h1>Chào mừng tới Todo app</h1>
      <TaskInput />
      <Footer title="hihi" />
    </div>
  );
}

export default App;
