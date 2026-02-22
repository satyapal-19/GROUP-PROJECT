import React from "react";
import Addition from "./addition";
import Subtraction from "./subtraction";
import Multiplication from "./multiplication";
import Division from "./division";
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Calculator App
      </h1>

      <Addition />
      <Subtraction />
      <Multiplication />
      <Division />
    </div>
  );
}

export default App;