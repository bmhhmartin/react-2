import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header title="To do Apps"></Header>
      <Content></Content>
    </div>
  );
};

export default App;