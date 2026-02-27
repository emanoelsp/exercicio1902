import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';

import SectionAtualiza from './pages/SectionAtualiza';
import SectionDeleta from './pages/SectionDeleta';
import SectionUser from './pages/SectionUser';
import SectionCadastra from './pages/SectionCadastra';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter >
        <Nav />
        <Routes >
          <Route path="/" element={<Section />} />
          <Route path="/usuarios" element={<SectionUser />} />
          <Route path="/usuarios/:id" element={<SectionUser />} />
          <Route path="/cadastrar" element={<SectionCadastra />} />
          <Route path="/atualizar/:id" element={<SectionAtualiza />} />
          <Route path="/deletar/:id" element={<SectionDeleta />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
