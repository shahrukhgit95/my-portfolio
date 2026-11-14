import { useState } from "react"
import { apps } from "../../data/apps"
import { asset } from "../../lib/asset"
import { RevealOnScroll } from "../RevealOnScroll"

const filters = ["All", "Android", "iOS"]

const statusTone = {
    Live: "text-gold",
    "In review": "text-cream",
    "Launching soon": "text-coral",
}

export const Apps = () => {
    const [filter, setFilter] = useState("All")
    const visible = filter === "All" ? apps : apps.filter((app) => app.platform === filter)

    return (
        <section id="apps" className="px-4 py-20">
            <RevealOnScroll className="reveal-hold">
                <div className="mx-auto max-w-6xl">
                    <p className="enter text-sm uppercase tracking-[0.22em] text-gold">The catalog</p>
                    <h2 className="enter d1 mt-3 font-serif text-4xl text-cream md:text-5xl">Apps ready to grow</h2>
                    <p className="enter d2 mt-4 max-w-2xl text-muted">
                        Each card opens a page with the store screenshots and the features taken from the live listing, TestFlight, or the launch note.
                    </p>

                    <div className="enter d3 mt-8 flex gap-2">
                        {filters.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setFilter(item)}
                                className={`rounded-full px-4 py-2 text-sm transition ${filter === item ? "bg-gold text-ink" : "border border-white/10 text-muted hover:text-cream"}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(15rem,18rem))] justify-center gap-5">
                        {visible.map((app, index) => (
                            <a
                                key={`${filter}-${app.id}`}
                                href={`#app/${app.id}`}
                                className="card-pop group overflow-hidden rounded-3xl border border-white/10 bg-card transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_40px_-24px_rgba(228,177,90,0.55)]"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="aspect-[3/4] overflow-hidden bg-black/30">
                                    {app.shots[0] ? (
                                        <img
                                            src={asset(app.shots[0])}
                                            alt=""
                                            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                                        />
                                    ) : (
                                        <div className="flex h-full items-end bg-gradient-to-br from-gold/25 via-card to-coral/20 p-5">
                                            <span className="font-serif text-3xl text-cream">{app.status}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-3">
                                        {app.icon ? (
                                            <img src={asset(app.icon)} alt="" className="h-12 w-12 rounded-2xl" />
                                        ) : (
                                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 font-serif text-gold">{app.monogram}</span>
                                        )}
                                        <div>
                                            <h3 className="font-serif text-2xl text-cream">{app.name}</h3>
                                            <p className="text-sm text-muted">{app.platform} · {app.category}</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-cream/85">{app.tagline}</p>
                                    <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-sm">
                                        <span className={statusTone[app.status]}>{app.stat}</span>
                                        <span className="text-muted group-hover:text-gold">Features and screenshots →</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
