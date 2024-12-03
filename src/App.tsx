import { Provider } from "react-redux"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import appStore from "./utils/appStore"


function App() {
  

  return (
  <Provider store={appStore}>
    <div className="flex">
     <Sidebar/>
    <Main/>
    </div>
    </Provider>
  )
}

export default App
