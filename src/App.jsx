
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Admin from './components/Admin';
import Add from './components/Add';
import View from './components/View';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Header/>

      <section>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/admin' element={<Admin/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>

</Routes>

      </section>
      <Footer/>
      
    </div>
  );
}

export default App;
