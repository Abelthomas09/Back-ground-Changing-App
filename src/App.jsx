
import './App.css'

function App() {
  const changeColor = () => {
    document.body.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)})`;
  };

  return (
    <>
      <button onClick={changeColor}>CLICK ME</button>
    </>
  )
}

export default App
