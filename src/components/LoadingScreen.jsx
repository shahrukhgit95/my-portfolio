import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const fullText = "Codersglobe"

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++
            if (index > fullText.length) {
                clearInterval(interval)
                setTimeout(() => onComplete(), 500)
            }
        }, 70)
        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 bg-ink text-cream flex flex-col items-center justify-center">
            <div className="mb-4 font-serif text-4xl">{text}<span className="animate-blink ml-1 text-gold">|</span></div>
            <div className="w-[200px] h-[2px] bg-white/10 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-gold shadow-[0_0_15px_#e4b15a] animate-loading-bar" />
            </div>
        </div>
    )
}
