import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import PracticePage from "./containers/_pages/practicePage/PracticePage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PracticePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
