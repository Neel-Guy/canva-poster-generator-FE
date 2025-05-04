import { Link, createFileRoute } from '@tanstack/react-router'
import axios from 'axios'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

const loginToCanva = async () => {
  const response = await axios.get('https://canva.com')
  console.log(response)
}

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
      </header>
      <Link to="/app">App</Link>
    </div>
  )
}
