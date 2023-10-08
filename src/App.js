import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Login';
import Home from './Page/Home';
import Header from './Page/Header';
import Myhome from './Page/Myhome';
import Addproductform from './Page/Addproductform';




export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home/>
              </>
            }
          />
           <Route
            path="/header"
            element={
              <>
                <Header/>
              </>
            }
          />
            <Route
            path="/addproduct"
            element={
              <>
                <Addproductform/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
