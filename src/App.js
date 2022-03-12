import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import HeaderBlockProvider from './contexts/HeaderBlockContext';

function App() {

  return (

    <div className="App">
      <HeaderBlockProvider>
        <Header />
        <HeaderBlock />
      </HeaderBlockProvider>
      <Footer />
    </div>

  )

}

export default App;
