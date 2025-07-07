import { Project } from 'aws-cdk-lib/aws-codebuild';
import './App.css'
import Login from './components/login';
import Navbar from './components/navBar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
        <Login />
      </main>
    </>
  )
}

export default App
