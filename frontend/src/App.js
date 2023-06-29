import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/HomeComponent";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
    return (
        <div> Hello im the child</div>
    )
};

const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path={'shop'} element={<Shop/>} />
        </Route>
      </Routes>
  );
}



export default App;
