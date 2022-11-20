import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Favouriate from "./Components/Favouriate";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={[<Banner/>, <Movies />]}></Route>
          <Route path="/favouriates" element={<Favouriate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
