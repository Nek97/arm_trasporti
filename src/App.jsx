import React from 'react'
import AppContext from "./App.context"
import Header from './components/header/header'
import About from './components/about/about'
import Footer from './components/footer/footer'

class App extends React.Component {
  render() {
    return (
      <AppContext>
        {context =>
          <div className="App">
            <Header />
            <About />
            <Footer />
          </div>
        }
      </AppContext>
    )
  }
}

export default App;
