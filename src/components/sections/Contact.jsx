import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailJs from 'emailjs-com' 

export const Contact = () => {

    const [formData , setFormData] = useState({
        name: "",
        email:"",
        message: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        emailJs.sendForm("service_cozzbs9","template_4uhlrqi", e.target, "IiUfGOCsqyW-E1o4x")
            .then(() => {
                alert("Message Sent.")
                setFormData({name: "", email: "", message: ""})
            })
            .catch((error) => {
                console.error(error);
                alert("Something went wrong. Please try again.\n" + (error?.text || error?.message || error));
            })
    }
    return (
        <section id="contact"
            className="min-h-screen flex item-center justify-center py-20">

            <RevealOnScroll>
                <div className="px-4 w-full max-w-lg mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        {" "}
                        Get In Touch
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">

                            <input placeholder="name..." value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">
                            </input>

                        </div>

                        <div className="relative">

                            <input placeholder="example@gmail.com..." value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="text" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">
                            </input>

                        </div>

                        <div className="relative">

                            <textarea placeholder="your message..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} type="text" id="message" name="message" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5">
                            </textarea>

                        </div>

                        <button type="submit" className=" px-3 py-2 w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Submit
                        </button>
                    </form>
                </div>
            </RevealOnScroll>


        </section>
    )
}