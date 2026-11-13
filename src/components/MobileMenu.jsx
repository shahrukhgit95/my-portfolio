export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const item = "text-3xl font-serif text-cream"

    if (!menuOpen) return null

    return (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-ink/95 md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)} className={item}>Home</a>
            <a href="#apps" onClick={() => setMenuOpen(false)} className={item}>Apps</a>
            <a href="#partnership" onClick={() => setMenuOpen(false)} className={item}>Partnership</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className={item}>Contact</a>
        </div>
    )
}
