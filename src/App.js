import React from 'react'
import Header from './features/header/Header'
import TodoList from './features/todos/TodoList'
import Footer from './features/footer/Footer'

function App() {
  return (
    <div className="App">
      <nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
    </div>
  )
}

export default App
