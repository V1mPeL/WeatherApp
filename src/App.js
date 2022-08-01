import { Navbar } from './components/navbar/Navbar'
import { Main } from './components/main/main'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/current" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
