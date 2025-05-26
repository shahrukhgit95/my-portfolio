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
                    I have worked in iOS (Native) and Android (Native). I also expertise in Flutter Dart. I have worked in US based startup CalAI an Calorie Tracking App it has more than 30K daily active users. I have worked with Steppi UAE based startup it more than 100K+ downloads. I have worked with Hiiker an Ireland based startup it has also have 100K+ downloads. I have also worked with Dimitra Canadian based AgroTech startup which also has acquired 4m USD funding. I have worked with iPaparazo a french based startup undergoing the development phase.
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