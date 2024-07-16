import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"

export const InvitationApp = () => {
  return (
    <BrowserRouter> 
      <AppRouter />
    </BrowserRouter>
  )
}
