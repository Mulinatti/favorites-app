import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Normalize from "./styles/normalize";
import { MoviesProvider } from "./contexts/moviesContext";
import Favorites from "./components/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Normalize/>
      <Header/>
      <MoviesProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </MoviesProvider>
    </BrowserRouter>
  )
}

export default App;