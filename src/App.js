import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Opciones from './components/Opciones'
import SupportGuide from './components/SupportGuides'
import CommonQuestions from './components/Questions';
import RankingPeriferic from './components/Ranking';
import { Container, Row } from 'react-bootstrap';
import BestBuilds from './components/Best_Builds';

function App() {
  return (
    <div className="App">+
      <Container>
        <Row>
          <Header/>
        </Row>
        <Row>
          <BrowserRouter>
            <Routes>
              <Route path="1" element={<Opciones />} />
              <Route path="2" element={<SupportGuide />} />
              <Route path="3" element={<CommonQuestions />} />
              <Route path="4" element={<RankingPeriferic />} />
              <Route path="5" element={<BestBuilds />} />
            </Routes>
          </BrowserRouter>
        </Row>
      </Container>
    </div>
  );
}

export default App;
