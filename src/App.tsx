import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
