import React from "react";

import apiFetch from "db/apiFetch";

let count = 0;

function App() {
  return (
    <div>
      <button
        onClick={() => {
          apiFetch(`/?count=${count++}`);
        }}
      >
        send
      </button>
    </div>
  );
}

export default App;
