import { useState } from "react";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { Avatar } from "@components/Avatar";
import { Badge } from "@components/Badge";
import { Input } from "@components/Input";
import { Checkbox } from "@components/Checkbox";
import { RadioButton } from "@components/RadioButton";
import { Toggle } from "@components/Toggle";
import { Modal } from "@components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className="App">
        <Button text={"click me!"} />
      </div>
      <Text variant={"heading_1"} color={"main"} text={"hello!"} />
      <h2>hello!</h2>
      <Avatar variant={"size_L"} text={"AH"} />
      <br />
      <Badge variant={"comp_position"} />
      <br />
      <Input
        type={"password"}
        label={""}
        size={"L"}
        error={""}
        placeholder={""}
      />
      <Checkbox isShowLabel={true} label={"some label"} />
      <br />
      <RadioButton isShowLabel={true} label={"some label"} id={'one'}/>
      <br />
      <RadioButton isShowLabel={true} label={"some label"} id={'two'}/>
      <br />
      <Toggle isShowLabel={true} label={'toggle'} />
      <br />
      <Button onClick={() => setIsOpen(true)} text={"open modal"} />
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Text variant={"heading_1"} color={"main"} text={"Modal content"} />
      </Modal>}
    </div>
  );
}

export default App;
