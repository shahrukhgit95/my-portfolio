import { useEffect, useRef } from "react"

export const RevealOnScroll = ({ children, className = "" }) => {
    const ref = useRef(null)

    useEffect(() => {
        const node = ref.current
        if (!node) return undefined

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.classList.add("visible")
                    observer.unobserve(node)
                }
            })
        }, { threshold: 0, rootMargin: "0px 0px -8% 0px" })

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
          
