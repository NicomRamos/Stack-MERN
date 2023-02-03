import './App.css';
import Clients from './pages/Clients';
import Cars from './pages/Cars';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import clientActions from './redux/actions/clientActions'

function App(props) {
  props.getClient()
  if (props.clients.email) {
    props.getClient()
  }
  return (
    <BrowserRouter>
      <a href="/" className=''>
        <h1 className="text-center">El Gran Calibre</h1>
      </a>
      <Route exact path="/" component={Clients}/>
      <Route exact path="/cars/:id" component={Cars}/>
    </BrowserRouter>
  );
}
const mapDispatchToProps = {
  getClient: clientActions.allClient
}
const mapStateToProps = state => {
  return {
    clients: state.clientReducer.clients
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

