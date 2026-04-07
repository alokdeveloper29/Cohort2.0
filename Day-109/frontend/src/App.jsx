import { router } from "./app.routes"
import { RouterProvider } from "react-router"
import "./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context.jsx"

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={ router } />
    </AuthProvider>
  )
}

export default App
