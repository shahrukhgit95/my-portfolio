import { useEffect, useState } from "react"
import "./index.css"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import { Home } from "./components/sections/Home"
import { Apps } from "./components/sections/Projects"
import { Partnership } from "./components/sections/About"
import { Contact } from "./components/sections/Contact"
import { AppDetail } from "./components/sections/AppDetail"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1)
      setActiveId(hash.startsWith("app/") ? hash.slice(4) : null)
      setMenuOpen(false)
    }
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  useEffect(() => {
    if (activeId) window.scrollTo(0, 0)
  }, [activeId])

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen bg-ink text-cream transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute top-[40%] -left-24 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />
        </div>
        <div className="relative">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {activeId ? (
            <AppDetail id={activeId} />
          ) : (
            <>
              <Home />
              <Apps />
              <Partnership />
              <Contact />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
