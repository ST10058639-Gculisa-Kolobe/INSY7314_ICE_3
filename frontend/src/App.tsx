
import './App.css';
import myPhoto from './myPhoto.jpg'; // make sure this matches your file name

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Gculisa Kolobe</h1>
      <img src={myPhoto} alt="Gculisa Kolobe" width={200} style={{ borderRadius: '50%' }} />
    </div>
  );
}

export default App;
