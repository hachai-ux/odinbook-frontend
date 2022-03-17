import { HashRouter, Routes, Route, Redirect, useLocation, useHistory} from "react-router-dom";
import Homepage from "./sites/Homepage";



const App = (props) => {

  

    return (
        <div className="container">
            <HashRouter>
                <Routes>
                            <Route exact path="/" element={<Homepage />}>
                            </Route>
                            <Route exact path="/#_=_" element={<Homepage />}>
                            </Route>
                            <Route exact path="/_=_" element={<Homepage />}>
                            </Route>

                </Routes>
            </HashRouter>
                </div>
    )
}

export default App;