import React from "react";

export default function App() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-green-600">AI Tool Explorer</h1>
      <p className="mt-4">Browse AI tools from Cavin’s library.</p>
      <iframe
        src="https://cavinkrenik.github.io/Ethical_AI/pages/resources.html"
        className="w-full h-[80vh] mt-6 border-2 border-green-300 rounded-xl"
        title="AI Resources"
      ></iframe>
    </div>
  );
}
