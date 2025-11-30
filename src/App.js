import './App.css';
import ContentBox from './Components/ContentBox';
import HeroCard from './Components/HeroCard';
import LinkBox from './Components/LinkBox';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroCard/>
      <ContentBox/>
      <LinkBox/>
    </div>
  );
}

export default App;
