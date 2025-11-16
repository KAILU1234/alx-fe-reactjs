import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0' }}>
      <Header />
      <MainContent />
      <UserProfile name="Kailu" age="22" bio="A passionate learner exploring React and frontend development at ALX." />
      <Footer />
    </div>
  );
}

export default App;
