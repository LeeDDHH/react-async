//Storeを生成する際に、ミドルウェアが必要な場合ここでまとめて「一つのStore」として生成する

import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducers';

const Store = createStore(
    rootReducer,
    applyMiddleware(promise)
);

export default Store;