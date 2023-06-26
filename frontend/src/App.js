import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/HomeComponent";

const Shop = () => {
    return (
        <div> Hello im the child</div>
    )
};

const App = () => {
  return (
      <Routes>
        <Route path={'/home'} element={<Home />} >
            <Route path={'shop'} element={<Shop/>} />
        </Route>
      </Routes>
  );
}



export default App;
