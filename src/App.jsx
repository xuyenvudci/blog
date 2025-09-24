
import './App.css'
import Posts from './components/Posts'

function App() {
  
  return (
   <div>
      <header className='flex'>
        <p>My Blog</p>
        <nav>
          <ul className='flex'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <Posts />
   </div>
  )
}

export default App
