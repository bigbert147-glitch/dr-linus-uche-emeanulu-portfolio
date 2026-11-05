import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

// Layout — wraps every page with the shared navigation and footer.
// The <Outlet /> from React Router renders whichever page matches the
// current URL. This means each page only defines its own content area;
// the header and footer come from here automatically.
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
