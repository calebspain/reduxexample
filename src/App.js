import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import Posts from './components/Posts'
import PostForm from './components/Postform'

const store = createStore(() => [], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>Redux Example</p>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  )
}

export default App