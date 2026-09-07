import React from "react";
import { Signup as SignupComponent } from "../components";

function Signup() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">

            <section
                className="relative min-h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=80')",
                }}
            >

                <div className="absolute inset-0 bg-slate-950/75"></div>

                <div className="relative z-10 w-full px-5 py-12">

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        <div className="text-white text-center lg:text-left">

                            <p className="uppercase tracking-[5px] text-sm text-blue-300 mb-5">
                                Start Your Journey
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight">
                                Create Your
                                <br />
                                Journal Account
                            </h1>

                            <div className="w-20 h-[2px] bg-blue-400 mt-7 mb-7 mx-auto lg:mx-0"></div>

                            <p className="max-w-xl mx-auto lg:mx-0 text-gray-300 text-base md:text-lg leading-8">
                                Join our community and share your stories,
                                ideas and experiences with readers around
                                the world.
                            </p>

                            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-gray-400">

                                <span className="text-blue-400 text-xl">
                                    ✦
                                </span>

                                <span className="text-sm uppercase tracking-[3px]">
                                    Write • Create • Inspire
                                </span>

                                <span className="text-blue-400 text-xl">
                                    ✦
                                </span>

                            </div>

                        </div>

                        <div className="w-full max-w-md mx-auto">

                            <div className="bg-[#f5f2eb] rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 md:p-10">

                                <div className="text-center mb-8">

                                    <p className="text-xs uppercase tracking-[4px] text-blue-500 font-semibold">
                                        The Journal
                                    </p>

                                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mt-3">
                                        Create Account
                                    </h2>

                                    <div className="w-16 h-[2px] bg-blue-500 mx-auto mt-5"></div>

                                    <p className="text-sm text-gray-500 mt-5">
                                        Create your account and start sharing your stories.
                                    </p>

                                </div>

                                <SignupComponent />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Signup;