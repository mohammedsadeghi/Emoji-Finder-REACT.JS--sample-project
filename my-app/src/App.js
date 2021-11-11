import "./App.css";
import EmojiJason from "./emojiList.json";
import React, { useState } from "react";
import Input from "./Input";
import Display from "./Display";
import Emoji from "./Emoji";

const App = () => {
  const [state, setState] = useState(() => {
    return { input: "" };
  });

  var n = null;
  var b = [];

  const m = () => {
    var c = [];
    n = [...EmojiJason];

    b = n.map((emoji, index) => {
      if (
        emoji.keywords.toLowerCase().includes(state.input.toLocaleLowerCase())
      ) {
        return true;
      }
      if (n[index].keywords.includes(state.input)) {
        return true;
      }

      return false;
    });

    let count = 0;
    for (var i in b) {
      if (b[i] !== false) {
        c[count] = (
          <Emoji key={count} title={n[i].title}>
            {n[i].symbol}
          </Emoji>
        );

        count++;
      }
    }

    return c;
  };

  const inputChange = (e) => {
    setState((prevState) => {
      return { ...prevState, input: document.getElementById("InputVal").value };
    });
  };

  return (
    <div>
      <div className={"header__name"}>
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="" />
        <div>Emoji Search</div>
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" alt="" />
        <br />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        By Mohammed Sadeghi .H
      </div>
      <Input type="text" Change={inputChange} />
      <div>
        <Display />
      </div>
      <div className={"display__system"}>{m()}</div>
    </div>
  );
};

export default App;
