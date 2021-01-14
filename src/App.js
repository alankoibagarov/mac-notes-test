import './App.css';
import Content from './views/Content/Content';
import LeftMenu from './components/leftMenu/leftMenu';

function App() {
  return (
    <div className="App">
        <LeftMenu/>
        <Content/>
    </div>
  );
}

export default App;
