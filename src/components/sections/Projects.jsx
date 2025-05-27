import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    return (<section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    {""}
                    Featured Projects
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        <h3 className="text-xl font-bold mb-2 "> CalAI - Calorie Tracking App</h3>
                        <p className="text-gray-400 mb-4">
                            Meet Cal AI, the AI-powered app for easy calorie tracking. Snap a photo, scan a barcode, or describe your meal and get instant calorie and nutrient info.
                        </p>

                        <div>
                            {["iOS", "SwiftUI", "AI", "Chatgpt"].map((tech, key) => (

                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "}
                                View Project &rarr;
                            </a>

                        </div>


                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        <h3 className="text-xl font-bold mb-2 "> Steppi - Fitness Tracker</h3>
                        <p className="text-gray-400 mb-4">
                            Bring your team together – wherever they are. STEPPI's virtual challenges make it easy to track activity, set goals, and keep employees moving.
                        </p>

                        <div>
                            {["iOS", "Android", "Watch", "Apple Watch", "Garmin", "Samsung Band", "Huawie Watch"].map((tech, key) => (

                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "}
                                View Project &rarr;
                            </a>

                        </div>


                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        <h3 className="text-xl font-bold mb-2 "> PhoneSkope - Camera App</h3>
                        <p className="text-gray-400 mb-4">
                            With my phone in the Phone Skope case, I pop it onto my scope and can perfectly see everything on my phone. Now I can share pictures and video with friends and family.
                        </p>

                        <div>
                            {["iOS", "UIKit", "Swift", "Camera", "AVFoundation", "Cropping"].map((tech, key) => (

                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "}
                                View Project &rarr;
                            </a>

                        </div>


                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        <h3 className="text-xl font-bold mb-2 "> Hiiker</h3>
                        <p className="text-gray-400 mb-4">
                            HiiKER helps you to find 1000s of the best backpacking and hiking adventures, with reviews, photos, and great places to stay.
                        </p>

                        <div>
                            {["iOS", "Swift", "Mapbox", "GraphQL"].map((tech, key) => (

                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "}
                                View Project &rarr;
                            </a>

                        </div>


                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        <h3 className="text-xl font-bold mb-2 "> iPaparazzo</h3>
                        <p className="text-gray-400 mb-4">
                            iPaparazzo is a cutting-edge mobile application that revolutionizes content monetization through its innovative '1 Seller to 1 Buyer' model.
                        </p>

                        <div>
                            {["iOS", "Swift", "Mapbox", "GraphQL"].map((tech, key) => (

                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "}
                                View Project &rarr;
                            </a>

                        </div>


                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        <h3 className="text-xl font-bold mb-2 "> Dimitra - AgroTech Startup</h3>
                        <p className="text-gray-400 mb-4">
                            A Canadian AgroTech startup, successfully securing $4 million in funding. My involvement in Dimitra helped streamline operations and foster innovation.
                        </p>

                        <div>
                            {["iOS", "Swift", "Mapbox", "GraphQL"].map((tech, key) => (

                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "}
                                View Project &rarr;
                            </a>

                        </div>


                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">

                        <h3 className="text-xl font-bold mb-2 "> Urban Service: Local Experts</h3>
                        <p className="text-gray-400 mb-4">
                            Urban Service: Your On-Demand Home Service Hero. Urban Service helps you find reliable home service professionals for a stress-free home.
                        </p>

                        <div>
                            {["Flutter", "Nodejs", "Reactjs", "Stripe", "Checkout", "Subscription"].map((tech, key) => (

                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                {" "}
                                View Project &rarr;
                            </a>

                        </div>


                    </div>


                </div>
            </div>
        </RevealOnScroll>
    </section>)
}