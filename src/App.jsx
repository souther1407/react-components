import Text from "./components/atoms/Text/Text";
import Title from "./components/atoms/Title/Title";
import Input from "./components/atoms/Input/Input";
import TextArea from "./components/atoms/Textarea/Textarea";
import "./App.css";
import { useColorModeStore } from "./stores/useColorModeStore";
function App() {
  const { mode, toggleMode } = useColorModeStore((state) => state);
  return (
    <div className={`bg ${mode}`}>
      <Title>Titulo</Title>
      <Text>texto</Text>
      <Input id={"ejemplo"} onChange={() => {}} onError={() => {}} />
      <TextArea id={""} onChange={() => {}} onError={() => {}} />
      <div className={"btn"} onClick={toggleMode}>
        <Text>{mode}</Text>
      </div>
    </div>
  );
}

export default App;
