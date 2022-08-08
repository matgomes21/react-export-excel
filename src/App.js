
function App() {
  const data = [
    [
      {
        id: 1,
        name: 'John',
        age: 25
      },
      {
        id: 2,
        name: 'Maria',
        age: 30
      }
    ],
    [
      {
        id: 1,
        name: 'Marcus',
        age: 18
      },
      {
        id: 2,
        name: 'Jessica',
        age: 23
      },
      {
        id: 3,
        name: 'Matt',
        age: 22
      }
    ]
  ]

  return (
   <div>
    <h1>React Export Excel</h1>
    {data.map((arr,i) => (
      <>
        <h2>Person Set {i+1}</h2>
        <ul>
          {arr.map(e => (
            <div>
              <li>id: {e.id}</li>
              <li>name: {e.name}</li>
              <li>age: {e.age}</li>
              <br></br>
            </div>
          ))}
        </ul>
      </>
    ))}
    <button onClick={()=>console.log('Exporting...')}>Export</button>
   </div>
  );
}

export default App;
