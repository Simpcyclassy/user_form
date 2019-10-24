import { createStore } from 'redux';
import rootReducer from '../components/rootReducer';

export default function configureStore(initialState) {
    const composeEnhancers = (
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return {
        ...createStore(
            rootReducer,
            initialState,
            composeEnhancers
        ),
    };
}
