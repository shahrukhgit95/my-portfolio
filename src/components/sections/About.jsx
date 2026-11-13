import { RevealOnScroll } from "../RevealOnScroll"

const paths = [
    {
        title: "Revenue share",
        text: "A partner funds user acquisition and can take web monetization. I keep building and shipping the apps.",
    },
    {
        title: "Acquisition",
        text: "Selected apps are available to buy. Android utilities and AI apps are the ones I would start with.",
    },
    {
        title: "A short call",
        text: "I can walk through the catalog, what is live, what is in review, and how a partnership would work.",
    },
]

export const Partnership = () => {
    return (
        <section id="partnership" className="px-4 py-20">
            <RevealOnScroll>
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-gold">Partnership</p>
                    <h2 className="mt-3 max-w-3xl font-serif text-4xl text-cream md:text-5xl">
                        Fund and scale the apps, or acquire the ones that fit.
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        Codersglobe is a lean app studio. The catalog covers utilities, productivity, health, and creative tools, the kinds of consumer apps a publisher can put user acquisition behind.
                    </p>
                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {paths.map((item) => (
                            <article key={item.title} className="rounded-3xl border border-white/10 bg-card p-6">
                                <h3 className="font-serif text-2xl text-cream">{item.title}</h3>
                                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                            </article>
                        ))}
                    </div>
                    <ul className="mt-8 grid gap-3 text-cream/90 sm:grid-cols-2">
                        <li className="rounded-2xl border border-white/10 px-4 py-3">Picsly is past 1 million downloads. iThemes is past 50 thousand.</li>
                        <li className="rounded-2xl border border-white/10 px-4 py-3">KaloriesAI and the iOS to-do app are in App Store review.</li>
                        <li className="rounded-2xl border border-white/10 px-4 py-3">Wondelo Password Manager is live on the App Store.</li>
                        <li className="rounded-2xl border border-white/10 px-4 py-3">An iOS AI image and video app launches in about a week.</li>
                    </ul>
                </div>
            </RevealOnScroll>
        </section>
    )
}
