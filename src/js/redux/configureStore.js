
import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './rootReducers'


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
  return typeof window === 'object'
    && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
}

// history is passed here, for this example, we don't use history
export default function configureStore(initialState, history) { // eslint-disable-line no-unused-vars, max-len
  
  const composedStoreEnhancer = compose(
    reduxDevTool()
  )

  const store = composedStoreEnhancer(createStore)(persistedReducer, initialState)

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      store.replaceReducer(require('./rootReducers'))
    })
  }


  const persistor = persistStore(store);
  return {store, persistor}
  
}
