import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../../Containers/Header/Header';
import Main from '../../Pages/Main/Main';
import About from '../../Pages/About/About';
import Footer from '../Footer/Footer';
import Production from '../../Pages/Production/Production';
import Services from '../../Pages/Services/Services';
import Products from '../../Pages/Products/Products';
import Constructor from '../../Pages/Constructor/Constructor';
import News from '../../Pages/News/News';
import Contacts from '../../Pages/Contacts/Contacts';

function App() {

  return (
    <div className="App">

      <Header />

      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/production">
          <Production />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/constructor">
          <Constructor />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
