import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    const link = "relative text-muted transition-colors hover:text-cream after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"

    return (
        <nav className="nav-in fixed top-0 z-40 w-full border-b border-white/10 bg-ink/80 backdrop-blur-lg">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <a href="#home" className="font-serif text-xl text-cream">
                    coders<span className="text-gold">globe</span>
                </a>

                <button
                    className="text-2xl text-cream md:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? "×" : "☰"}
                </button>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="#apps" className={link}>Apps</a>
                    <a href="#partnership" className={link}>Partnership</a>
                    <a href="#contact" className={link}>Contact</a>
                    <a href="#contact" className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition hover:bg-cream">
                        Let's talk
                    </a>
                </div>
            </div>
        </nav>
    )
}
