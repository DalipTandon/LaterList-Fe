import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import Intro from "./components/Intro";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
         
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Intro/>}/>
          <Route
            path="/laterList"
            element={
              <div className="flex">
                <Sidebar />
                <Main />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
