import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS"]
    const backendSkills = ["React", "Vue", "TypeScript", "TailwindCSS"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">

                <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {""}
                    About me
                </h2>

                <div className="rounded-xl p-8 border-white/10 boeder hover:-translate-y-1 transition-all">

                    <p>
                        🚀 <strong>Full-Stack Mobile & Web App Developer</strong>
                        <br />
                        <br />
                        I’m a results-driven developer with expertise in iOS (Swift), Android (Kotlin/Java), Flutter (Dart), Node.js, and React.js. I build scalable mobile apps, robust backend systems, and modern web interfaces optimized for performance and user experience.                    </p>

                    <p>
                        From crafting cross-platform apps to full-stack solutions, I deliver startup-grade agility, clean architecture, and reliable code tailored for growth-focused products.                    </p>



                    <p>
                        <br />
                        🔧 <strong>What I Offer</strong><br />
                        📱 Cross-Platform App Development (Flutter, iOS, Android)<br />
                        🌐 Full-Stack Web Development (React.js + Node.js)<br />
                        ⚙️ RESTful API & Backend Architecture<br />
                        🚀 Startup MVPs, Scaling & Optimization<br />
                        🌍 Experience with global teams & user bases
                        <br />
                        <br />
                    </p>

                    <p>
                        🌍 <strong>Why Work With Me?</strong><br />
                        ✅ 7+ years of professional experience<br />
                        ✅ Proven track record with global startups<br />
                        ✅ Full-cycle development: idea to deployment<br />
                        ✅ Fast, scalable, and reliable code<br />
                        ✅ Strong communication & on-time delivery
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">
                            Frontend
                        </h3>

                        <div className="flex flex-wrap gap-2"></div>
                        {frontendSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}

                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">
                            Backend
                        </h3>

                        <div className="flex flex-wrap gap-2"></div>
                        {backendSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">
                            Education
                        </h3>

                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>BS computer science </strong> - XYZ Universion
                            </li>

                            <li><strong>BS computer science </strong> - XYZ Universion
                            </li>

                        </ul>

                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">
                            Work Experience
                        </h3>

                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>BS computer science </strong> - XYZ Universion
                            </li>

                            <li><strong>BS computer science </strong> - XYZ Universion
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}