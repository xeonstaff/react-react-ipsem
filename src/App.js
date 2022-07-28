import { useState } from 'react'

import loremdata from './assets/loremdata'

function App() {
  const [count, setCount] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello hello')
  }

  return (
    <div>
      <section className="section-center">
        <h3>React Ipsem</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">
            paragraphs:
          </label>
          <input type="number" name="amount" id="amount" />
        </form>
      </section>
    </div>
  );
}

export default App;
