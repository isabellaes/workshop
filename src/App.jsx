import "./style/main.scss";
import Header from "./components/header/Header";
import RepeatText from "./components/repeatText/RepeatText";
import List from "./components/list/List";
import Counter from "./components/counter/Counter";
import Check from "./components/check/Check";
import Radio from "./components/radio/Radio";

function App() {
  return (
    <div className="app">
      <Header headerText={"Hello world 👋"} />
      <div className="content">
        <RepeatText count={10} text={"Lorem"} />
        <List animalArray={["Cat", "Dog", "Elephant", "Zebra", "Lion"]} />
        <Counter />
        <Check />
        <Radio />
      </div>
    </div>
  );
}

export default App;
