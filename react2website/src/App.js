import React, {Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
 import './App.css';



class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>

  );
 }
} 

export default App;
