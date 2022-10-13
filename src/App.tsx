import React from "react";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { Avatar } from "@components/Avatar";

function App() {
  return (
    <div>
      <div className='App'>
        <Button text={"click me!"}/>
      </div>
      <Text variant={'heading_1'} color={'main'} text ={'hello!'}/>
      <h2>hello!</h2>
      <Avatar variant={'size_L'} text={'AH'}/>
    </div>
  );
}

export default App;
