import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import {logger} from 'redux-logger'
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);



const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(middleWares)
})
export const persistor = persistStore(store);



