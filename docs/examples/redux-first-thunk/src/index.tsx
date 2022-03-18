import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { myreduxstore } from './redux/ReduxStore';

ReactDOM.render(
    <Provider store={myreduxstore}>
       <App />
    </Provider>
    ,
      document.getElementById('root')
);

