import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import logo from '../logo.svg'
import useApi from '@/utils/useAxios'

export const Route = createFileRoute('/')({
  component: App,
})
type codeGenData = {
  code_challenge: string
  code_verifier: string
  redirect_url: string
}

function App() {
  const { data, loading } = useApi<codeGenData, null>({
    url: '/auth/code-generator',
    type: 'get',
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginToCanva = () => {
    setIsLoading(true)
    localStorage.setItem('code_verifier', data?.code_verifier as string)
    window.location.href = data?.redirect_url as string
    setIsLoading(false)
  }
  return (
    <div className="text-center">
      {!isLoading || !loading ? (
        <>
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
          <button onClick={loginToCanva}>Start using the App</button>
        </>
      ) : (
        <div>loading .....</div>
      )}
    </div>
  )
}
