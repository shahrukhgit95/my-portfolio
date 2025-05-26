import { useEffect } from "react"

export const MobileMenu  = ({menuOpen, setMenuOpen}) => {



useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
}, [menuOpen])

    return (
        <div className={`relative top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        
        `}>

            <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close Menu">
             x
            </button>
            
            <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 tranform transition-transform duration-300 ${menuOpen ? "opacity-100 tanslate-y-0" : "opacity-0 tanslate-y-5"}`}>Home</a>
            <a href="#about" className={`text-2xl font-semibold text-white my-4 tranform transition-transform duration-300 ${menuOpen ? "opacity-100 tanslate-y-0" : "opacity-0 tanslate-y-5"}`}>About</a>
            <a href="#projects" className={`text-2xl font-semibold text-white my-4 tranform transition-transform duration-300 ${menuOpen ? "opacity-100 tanslate-y-0" : "opacity-0 tanslate-y-5"}`}>Projects</a>
            <a href="#contact" className={`text-2xl font-semibold text-white my-4 tranform transition-transform duration-300 ${menuOpen ? "opacity-100 tanslate-y-0" : "opacity-0 tanslate-y-5"}`}>Contact</a>

        </div>
    )
}