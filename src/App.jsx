
import './App.css'
import Posts from './components/Posts'
import Register from './components/Register'

function App() {
  
  return (
   <div className='bg-gray-100'>
      <header className='flex '>
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
      <Register />
   </div>
  )
}

export default App
