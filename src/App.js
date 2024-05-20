import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/commons/NavBar";
import { useContext } from "react";
import { context } from "./context/ContextProvider";
import SearchPage from "./pages/SearchPage";

function App() {
  const {data} = useContext(context)
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar/>}>
        <Route index element={<Home data={data} />} />
        <Route path="/search" element={<SearchPage data={data}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
