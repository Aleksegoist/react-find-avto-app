import Driver from './components/driver/Driver';
import Find from './components/find/Find';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
    </div>
  );
};

export default App;
