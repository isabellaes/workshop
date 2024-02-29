import "./style/main.scss";
import Header from "./components/header/Header";
import RepeatText from "./components/repeatText/RepeatText";
import List from "./components/list/List";
import Counter from "./components/counter/Counter";
import Check from "./components/check/Check";
import Radio from "./components/radio/Radio";
import DropDown from "./components/dropdown/DropDown";
import ToDo from "./components/todo/ToDo";
import ColorBox from "./components/colorbox/ColorBox";

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
        <DropDown cars={["Volvo", "Seat", "Mercedes", "Opel"]} />
        <ToDo />
        <ColorBox
          colors={[
            "#eb3434",
            "#eb8f34",
            "#e8eb34",
            "#5eeb34",
            "#3440eb",
            "#ba34eb",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
