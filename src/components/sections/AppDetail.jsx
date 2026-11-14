import { useEffect, useState } from "react"
import { apps } from "../../data/apps"
import { asset } from "../../lib/asset"

export const AppDetail = ({ id }) => {
    const app = apps.find((item) => item.id === id)
    const [activeShot, setActiveShot] = useState(null)

    useEffect(() => {
        if (!activeShot) return undefined
        const onKey = (event) => {
            if (event.key === "Escape") setActiveShot(null)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [activeShot])

    if (!app) {
        return (
            <section className="mx-auto max-w-3xl px-4 pb-20 pt-32">
                <h1 className="font-serif text-4xl">That app is not on this page.</h1>
                <a href="#apps" className="mt-6 inline-block text-gold">Back to the apps</a>
            </section>
        )
    }

    return (
        <section className="page-in px-4 pb-20 pt-28">
            <div className="mx-auto max-w-6xl">
                <a href="#apps" className="text-sm text-muted hover:text-gold">← All apps</a>

                <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                    <div>
                        <div className="flex items-center gap-4">
                            {app.icon ? (
                                <img src={asset(app.icon)} alt="" className="h-16 w-16 rounded-2xl" />
                            ) : (
                                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/15 font-serif text-2xl text-gold">{app.monogram}</span>
                            )}
                            <div>
                                <p className="text-sm uppercase tracking-[0.18em] text-gold">{app.platform} · {app.category}</p>
                                <h1 className="font-serif text-4xl text-cream md:text-5xl">{app.name}</h1>
                            </div>
                        </div>

                        <p className="mt-4 text-gold">{app.status} · {app.stat}</p>
                        <p className="mt-5 text-lg leading-relaxed text-muted">{app.summary}</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {app.links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink hover:bg-cream"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-cream hover:border-gold/50">
                                Talk about this app
                            </a>
                        </div>

                        {app.metrics && (
                            <div className="mt-8">
                                <h2 className="font-serif text-2xl">Audience</h2>
                                <p className="mt-2 text-sm text-muted">{app.metrics.source} · {app.metrics.period}</p>
                                <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    {app.metrics.stats.map((item) => (
                                        <div key={item.label} className="rounded-2xl border border-white/10 bg-card px-4 py-3">
                                            <dt className="text-sm text-muted">{item.label}</dt>
                                            <dd className="mt-1 font-serif text-2xl text-cream">{item.value}</dd>
                                            <p className="mt-1 text-xs text-muted">{item.detail}</p>
                                        </div>
                                    ))}
                                </dl>
                                <h3 className="mt-6 text-sm uppercase tracking-[0.18em] text-gold">Top countries</h3>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {app.metrics.countries.map(([name, share]) => (
                                        <li key={name} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-cream">
                                            {name} <span className="text-muted">{share}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-sm leading-relaxed text-muted">{app.metrics.note}</p>
                            </div>
                        )}

                        <h2 className="mt-10 font-serif text-2xl">Features</h2>
                        <ul className="mt-4 space-y-3">
                            {app.features.map((feature) => (
                                <li key={feature} className="flex gap-3 rounded-2xl border border-white/10 bg-card px-4 py-3 text-cream/90">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        {app.video && (
                            <div className="mb-4 overflow-hidden rounded-3xl border border-white/10 bg-black">
                                <iframe
                                    title={`${app.name} preview`}
                                    src={app.video}
                                    className="aspect-video w-full"
                                    allow="autoplay"
                                />
                            </div>
                        )}

                        {app.shots.length > 0 ? (
                            <div className="flex gap-4 overflow-x-auto pb-3">
                                {app.shots.map((shot, index) => (
                                    <button
                                        key={shot}
                                        type="button"
                                        onClick={() => setActiveShot(shot)}
                                        className="shrink-0"
                                        aria-label={`Open screenshot ${index + 1} of ${app.name}`}
                                    >
                                        <img
                                            src={asset(shot)}
                                            alt={`${app.name} screenshot ${index + 1}`}
                                            className="h-[440px] w-auto rounded-3xl border border-white/10 bg-black/40"
                                        />
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-3xl border border-dashed border-white/15 bg-card p-8 text-muted">
                                Public store screenshots are not up yet. Use the TestFlight link, or the preview when one is attached.
                            </div>
                        )}
                    </div>
                </div>

                {app.demos?.length > 0 && (
                    <section className="mt-16">
                        <h2 className="font-serif text-3xl text-cream">Demos</h2>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {app.demos.map((demo) => (
                                <figure key={demo.embed} className="overflow-hidden rounded-3xl border border-white/10 bg-black">
                                    <iframe
                                        title={`${app.name} demo: ${demo.label}`}
                                        src={demo.embed}
                                        className="aspect-video w-full"
                                        allow="autoplay"
                                    />
                                    <figcaption className="flex items-center justify-between gap-3 bg-card px-4 py-3">
                                        <span className="text-cream">{demo.label}</span>
                                        <a href={demo.href} target="_blank" rel="noreferrer" className="text-sm text-gold hover:text-cream">
                                            Open
                                        </a>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {activeShot && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setActiveShot(null)}
                >
                    <img
                        src={asset(activeShot)}
                        alt=""
                        className="max-h-[90vh] max-w-[92vw] rounded-2xl"
                    />
                </div>
            )}
        </section>
    )
}
