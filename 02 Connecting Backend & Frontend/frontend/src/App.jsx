import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [poems, setPoems] = useState([]);

  const fetchPoemsData = async () => {
    const res = await fetch('/api/poems');
    const data = await res.json();

    setPoems(data);
  }

  useEffect(() => {
    fetchPoemsData();
  }, []);

  return (
    <>
      <div>
        <h1>Mamoon Full Stack Engineer</h1>

        <div>
          <h2>Poems: {poems.length}</h2>
          {
            poems.map((poem) => {
              return <div key={poem.id}>
                <h4>{poem.title}</h4>
                <p>{poem.content}</p>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
