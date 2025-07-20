import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
                <Link href="/">
                    <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
                        Back <BsArrowLeft className="ml-2"/>
                    </Button>
                </Link>
                <div className="space-y-6">
                    <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">About Me</h1>

                    <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
                        <p>Hi, I'm Prokash, a Video Editor and a Gamer specializing in Shorts, Mediumform Videos, Longform Videos, Trailers. With 3 years of experience, I create videos for my clients using my Video Editing skills.</p>
                        <p>I'm passionate about making new projects, learning new skills, and I love my work. Check out my portfolio to see my work, and feel free to get in touch!</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">Education</h2>
                        <div className="space-y-2">
                            <p className="font-medium">Studying in Class 8</p>
                            <p className="text-neutral-500">Sher-e-Bangla Nagar Govt. Boys' High School, 2020-2028</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">Professional Experience</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium">No Position</p>
                                <p className="text-neutral-500">Company 1, 2025</p>
                            </div>
                            <div>
                                <p className="font-medium">No Position</p>
                                <p className="text-neutral-500">Company 2, 2025</p>
                            </div>
                            <div>
                                <p className="font-medium">No Postion</p>
                                <p className="text-neutral-500">Company 3, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page