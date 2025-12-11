import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import UseCases from './pages/UseCases';
import AboutContact from './pages/AboutContact';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecosistema" element={<Ecosystem />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/about-contact" element={<AboutContact />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
