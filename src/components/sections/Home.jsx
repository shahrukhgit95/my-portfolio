import { apps, profile } from "../../data/apps"
import { asset } from "../../lib/asset"
import { RevealOnScroll } from "../RevealOnScroll"

const highlights = ["picsly", "vidnova", "todo-android", "ithemes"]

export const Home = () => {
    const shots = highlights
        .map((id) => apps.find((app) => app.id === id))
        .filter((app) => app?.shots?.length)

    return (
        <section id="home" className="relative px-4 pb-16 pt-28">
            <RevealOnScroll>
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.22em] text-gold">{profile.studio}</p>
                        <h1 className="font-serif text-5xl leading-[1.05] text-cream md:text-7xl">
                            {profile.name}
                        </h1>
                        <p className="mt-4 font-serif text-2xl italic text-gold md:text-3xl">
                            Looking for a publisher with capital.
                        </p>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                            I build consumer mobile apps and I am looking for a partner that can fund and scale them, either through a revenue-share partnership or by acquiring selected apps.
                        </p>
                        <p className="mt-4 max-w-xl leading-relaxed text-muted">
                            Four Android apps and four iOS apps are live or in review. A new AI image and video app for iOS launches in about a week. Utilities, productivity, health, and creative.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#apps" className="rounded-full bg-gold px-6 py-3 font-medium text-ink transition hover:-translate-y-0.5 hover:bg-cream">
                                See the apps
                            </a>
                            <a href="#contact" className="rounded-full border border-gold/40 px-6 py-3 font-medium text-gold transition hover:bg-gold/10">
                                Start a conversation
                            </a>
                        </div>
                        <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {[
                                ["4", "Android apps"],
                                ["4", "iOS apps"],
                                ["1M+", "Picsly downloads"],
                                ["1 week", "Next launch"],
                            ].map(([value, label]) => (
                                <div key={label} className="rounded-2xl border border-white/10 bg-card/80 px-3 py-4">
                                    <dt className="font-serif text-2xl text-cream">{value}</dt>
                                    <dd className="mt-1 text-sm text-muted">{label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible">
                        {shots.map((app) => (
                            <a key={app.id} href={`#app/${app.id}`} className="group shrink-0">
                                <img
                                    src={asset(app.shots[0])}
                                    alt={`${app.name} screenshot`}
                                    className="h-72 w-auto rounded-3xl border border-white/10 object-cover shadow-2xl transition duration-300 group-hover:-translate-y-1 lg:h-64 lg:w-full"
                                />
                                <span className="mt-2 block text-sm font-medium text-cream">{app.name}</span>
                                <span className="mt-1 block max-w-[16rem] text-sm text-muted lg:max-w-none">{app.tagline}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
