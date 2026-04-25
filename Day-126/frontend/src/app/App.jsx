import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import { useEffect } from "react"
import { useAuth } from '../features/auth/hook/useAuth'
import { use } from "react"

function App() {
  const auth = useAuth()

  useEffect(() => {
    auth.handleGetMe()
  }, [])

  return <RouterProvider router={router} />
}

export default App
