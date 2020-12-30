import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import Home from './components/Pages/Home'
import Info from './components/Pages/Info'
import Mumbai from './components/Location/MLocation'
import NMumbai from './components/Location/NMLocation'
import Pune from './components/Location/Pune'
import Airoli from './components/stations/stations'
import Vashi from './components/stations/vashi'
import Cake from './components/products/Cake'
import c2 from './components/products/c2'
import shops from './components/shops/shops';
import ExportHub from './components/shops/exporthub';
import exporthubj1 from './components/products/exporthubj1';
import exporthubj2 from './components/products/exporthubj2';
import exporthubj3 from './components/products/exporthubj3';
import exporthubj4 from './components/products/exporthubj4';
import exporthubj5 from './components/products/exporthubj5';
import exporthubj6 from './components/products/exporthubj6';
import exporthubj7 from './components/products/exporthubj7';
import exporthubj8 from './components/products/exporthubj8';
import exporthubj9 from './components/products/exporthubj9';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        
        <Route path = '/' exact component={Home}></Route>
        <Route path = '/exporthubj1' exact component={exporthubj1}></Route>
        <Route path = '/exporthubj2' exact component={exporthubj2}></Route>
        <Route path = '/exporthubj3' exact component={exporthubj3}></Route>
        <Route path = '/exporthubj4' exact component={exporthubj4}></Route>
        <Route path = '/exporthubj5' exact component={exporthubj5}></Route>
        <Route path = '/exporthubj6' exact component={exporthubj6}></Route>
        <Route path = '/exporthubj7' exact component={exporthubj7}></Route>
        <Route path = '/exporthubj8' exact component={exporthubj8}></Route>
        <Route path = '/exporthubj9' exact component={exporthubj9}></Route>
        <Route path = '/exporthub' exact component={ExportHub}></Route>
        <Route path = '/info' exact component={Info}></Route>
        <Route path = '/mumbai' exact component = {Mumbai}></Route>
        <Route path = '/nmumbai' exact component = {NMumbai}></Route>
        <Route path = '/p' exact component = {Pune}></Route>
        <Route path = '/airoli' exact component = {Airoli}></Route>
        <Route path = '/Vashi' exact component = {Vashi}></Route>
        <Route path = '/cake' exact component = {Cake}></Route>
        <Route path = '/c2' exact component = {c2}></Route>
        <Route path = '/shops' exact component = {shops}></Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
