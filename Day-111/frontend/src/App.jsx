import { router } from "./app.routes"
import { RouterProvider } from "react-router"
import "./features/shared/global.scss"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { PostContextProvider } from "./features/posts/post.context.jsx"


function App() {

  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={ router } />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
