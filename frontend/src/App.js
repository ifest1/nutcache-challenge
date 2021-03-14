import Dashboard from './pages/Dashboard/index';
import { Provider } from 'react-redux';
import store from './store/index';
import './styles/global.css';
import Routes from './routes/index';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
