import { useState } from "react"
import { profile } from "../../data/apps"
import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleSubmit = (event) => {
        event.preventDefault()
        const subject = `Partnership inquiry from ${formData.name}`
        const body = `${formData.message}\n\n${formData.name}\n${formData.email}`
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    const field = "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-cream outline-none transition placeholder:text-muted/70 focus:border-gold"

    return (
        <section id="contact" className="px-4 py-20">
            <RevealOnScroll className="reveal-hold">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
                    <div className="enter">
                        <p className="text-sm uppercase tracking-[0.22em] text-gold">Contact</p>
                        <h2 className="mt-3 font-serif text-4xl text-cream md:text-6xl">Open to a call this week.</h2>
                        <p className="mt-4 max-w-md text-lg text-muted">
                            {profile.name} · {profile.studio}. Tell me which apps you want to fund, scale, or buy.
                        </p>
                        <div className="mt-8 space-y-3">
                            <a href={`mailto:${profile.email}`} className="block text-xl text-cream hover:text-gold">{profile.email}</a>
                            <a href={profile.phoneHref} className="block text-xl text-cream hover:text-gold">{profile.phone}</a>
                            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#1f8a4c] px-5 py-3 font-medium text-white hover:bg-[#187a41]">
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="enter d2 rounded-3xl border border-white/10 bg-card p-6">
                        <label className="block text-sm text-muted" htmlFor="name">Name</label>
                        <input id="name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`mt-2 ${field}`} />

                        <label className="mt-4 block text-sm text-muted" htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`mt-2 ${field}`} />

                        <label className="mt-4 block text-sm text-muted" htmlFor="message">Message</label>
                        <textarea id="message" name="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`mt-2 ${field}`} />

                        <button type="submit" className="mt-5 w-full rounded-full bg-gold py-3 font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-cream">
                            Email Shahrukh
                        </button>
                        <p className="mt-3 text-center text-sm text-muted">This opens your email app with the message ready to send.</p>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
