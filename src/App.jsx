import './App.css'
import Login from './components/login';
import Navbar from './components/navBar';
import About from './pages/About';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <About />
        <Login />
      </main>
    </>
  )
}

export default App
