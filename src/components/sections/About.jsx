import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = ["Swift", "UIKit","SwiftUI", "Kotlin", "Jetpack Compose", "Flutter",, "RESTAPI",  "React Native", "Firebase", "(GCP)", ]
    const backendSkills = ["Nodejs", "Reactjs", "TypeScript", "NESTJS","TailwindCSS", "AWS", "MySQL", "MongoDB", "NEXTJS", "PostgreSQL"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">

                <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {""}
                    About me
                </h2>

                <div className="rounded-xl p-8 border-white/10 boeder hover:-translate-y-1 transition-all">

                    <p  className="text-center">
                        🚀 <strong>Full-Stack Mobile & Web App Developer</strong>
                        <br />
                        <br />


                        </p>
                        <p>
                        I'm a results-driven developer with expertise in iOS (Swift), Android (Kotlin/Java), Flutter (Dart), Node.js, and React.js. I build scalable mobile apps, robust backend systems, and modern web interfaces optimized for performance and user experience.                    </p>

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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">
                            Mobile Development
                        </h3>

                        <div className="flex flex-wrap gap-2"></div>
                        {frontendSkills.map((tech, key) => (
                            <>
                                <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                                {(key + 1) % 4 === 0 && <div className="w-full h-0" />}
                            </>
                        ))}

                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">
                            Web Development
                        </h3>

                        <div className="flex flex-wrap w-200 gap-2"></div>
                        {backendSkills.map((tech, key) => (
                            <>
                                <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                                {(key + 1) % 4 === 0 && <div className="w-full h-0" />}
                            </>
                        ))}

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">
                            Education
                        </h3>

                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>BS computer science </strong> - PMAS Arid University
                            </li>

                            <li><strong>Intermediate</strong> - Gordon College
                            </li>

                            <li><strong>Matriculation</strong> - Sir Syed Public School
                            </li>

                        </ul>

                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">
                            Work Experience
                        </h3>

                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>Sofware Engineer</strong> - CodesOrbit - (2017 - 2020)
                            </li>

                            <li><strong>Team Lead</strong> - CodesOrbit - (2020 - 2021)
                            </li>

                            <li><strong>Senior iOS Engineer</strong> - Phaedra Solution - (2021 - 2022)
                            </li>

                            <li><strong>Full Stack Developer</strong> - Freelancing Expert - Present
                            </li>

                        </ul>

                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}