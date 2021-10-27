import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import {
  Frequency,
  Location,
  EntreeType,
  Entrees,
  Review
} from './components/Steps'

function App() {
  return (
    <Router basename="/a/proxy">
      <div className="defaultWrapper flexColumnDirection">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/step-2" component={Location} />
            <Route exact path="/step-3" component={EntreeType} />
            <Route exact path="/step-4" component={Entrees} />
            <Route exact path="/step-5" component={Review} />
            <Route path="*" component={Frequency} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
