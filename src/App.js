import './App.css';
import Sidebar from './components/sidebar.js'
import Body from './components/body.js'
import Notice from './components/notice.js'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Notice className='notice'/>
      <Body />
    </div>
  );
}

export default App;
