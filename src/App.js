import routes from './Config/routes';
import './App.css';
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* { routes } */}
      Im a banana!
      <Link to={'/number2'}>Second Component</Link>
      <Link to={'/number2/number3'} >Third Component </Link>
      {/* <Link to={"/number1"}>Fourth??? But it's empty</Link> */}
      <Outlet />
    </div>
  );
}

export default App;
