import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import contactsBookReducer from './reduce';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['contactsBookReducer'],
};
const contactsBookReducerConfig = {
  key: 'contactsBookReducer',
  storage: storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contactsBookReducer: persistReducer(contactsBookReducerConfig, contactsBookReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;