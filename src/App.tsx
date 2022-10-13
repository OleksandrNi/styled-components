import React from "react";
import { Button } from "@components/Button";
import { Text } from "@components/Text";

function App() {
  return (
    <div>
      <div className='App'>
        <Button text={"click me!"}/>
      </div>
      <Text variant={'heading_1'} color={'main'} text ={'hello!'}/>
      <h2>hello!</h2>
    </div>
  );
}

export default App;
