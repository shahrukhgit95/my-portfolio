export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const item = "text-3xl font-serif text-cream"

    if (!menuOpen) return null

    return (
        <div className="menu-overlay fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-ink/95 md:hidden">
            {["Home", "Apps", "Partnership", "Contact"].map((label, index) => (
                <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className={`${item} menu-item`}
                    style={{ animationDelay: `${0.08 + index * 0.07}s` }}
                >
                    {label}
                </a>
            ))}
        </div>
    )
}
