import configureStore from './configStore';
import { helloSaga } from '../components/rootSaga';

const store = configureStore({});
store.runSaga(helloSaga);

export default store;
