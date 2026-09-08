import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const [error, setError] = useState("");

    const login = async (data) => {

        setError("");

        try {

            const session = await authService.login(data);

            if (session) {

                const userData = await authService.getCurrentUser();

                if (userData) dispatch(authLogin(userData));

                navigate("/");

            }

        } catch (error) {

            setError(error.message);

        }
    };

    return (

        <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-12 bg-[#050816]">

            {/* ================= BACKGROUND IMAGE ================= */}

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-bgZoom"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=2000&q=85')"
                }}
            ></div>

            {/* Dark overlay */}

            <div className="absolute inset-0 bg-slate-950/80"></div>

            {/* Gradient overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-slate-950/70 to-purple-950/80"></div>


            {/* ================= ANIMATED BLOBS ================= */}

            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/25 blur-[120px] animate-floatSlow"></div>

            <div className="absolute top-[20%] right-[-150px] w-[450px] h-[450px] rounded-full bg-purple-500/25 blur-[120px] animate-floatReverse"></div>

            <div className="absolute bottom-[-180px] left-[25%] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[130px] animate-float"></div>

            {/* Small glowing circle */}

            <div className="absolute top-[15%] left-[45%] w-20 h-20 rounded-full bg-blue-400/20 blur-2xl animate-pulse"></div>

            {/* ================= DOT PATTERN ================= */}

            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] [background-size:28px_28px]"></div>


            {/* ================= MAIN CONTENT ================= */}

            <div className="relative z-10 w-full max-w-6xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">


                    {/* ================= LEFT SIDE ================= */}

                    <div className="hidden lg:block text-white">

                        <p className="uppercase tracking-[6px] text-sm text-blue-400 font-semibold animate-fadeUp">
                            The Journal
                        </p>

                        <h1 className="mt-5 text-6xl xl:text-7xl font-serif font-medium leading-tight animate-fadeUp delay-200">
                            Stories
                            <br />
                            Worth
                            <br />
                            Sharing.
                        </h1>

                        <div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 mt-8 animate-line"></div>

                        <p className="mt-8 max-w-lg text-gray-300 text-lg leading-8 animate-fadeUp delay-300">
                            Welcome back to a place where ideas become
                            stories and stories become inspiration.
                        </p>

                        <div className="mt-10 flex items-center gap-4 text-gray-400 animate-fadeUp delay-500">

                            <span className="text-blue-400 text-xl animate-pulse">
                                ✦
                            </span>

                            <span className="uppercase tracking-[4px] text-xs">
                                Read • Create • Inspire
                            </span>

                            <span className="text-purple-400 text-xl animate-pulse">
                                ✦
                            </span>

                        </div>

                    </div>


                    {/* ================= LOGIN CARD ================= */}

                    <div className="w-full max-w-md mx-auto animate-card">

                        <div className="relative bg-white/95 backdrop-blur-xl rounded-[28px] p-7 sm:p-9 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.55)] border border-white/30 hover:shadow-[0_30px_100px_rgba(59,130,246,0.25)] transition-all duration-700">

                            {/* Card glow */}

                            <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-blue-500/40 via-transparent to-purple-500/40 pointer-events-none"></div>

                            <div className="relative">


                                {/* ================= LOGO ================= */}

                                <div className="flex justify-center mb-7">

                                    <div className="p-3 bg-white rounded-2xl shadow-md border border-gray-100 hover:scale-110 hover:rotate-2 transition-all duration-500">

                                        <span className="inline-block w-[90px]">
                                            <Logo width="100%" />
                                        </span>

                                    </div>

                                </div>


                                {/* ================= TITLE ================= */}

                                <div className="text-center">

                                    <p className="text-xs uppercase tracking-[4px] text-blue-600 font-semibold">
                                        Welcome Back
                                    </p>

                                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mt-3">
                                        Login
                                    </h2>

                                    <div className="flex items-center justify-center gap-3 mt-5">

                                        <div className="w-10 h-px bg-gray-300"></div>

                                        <span className="text-blue-500 animate-pulse">
                                            ✦
                                        </span>

                                        <div className="w-10 h-px bg-gray-300"></div>

                                    </div>

                                    <p className="text-sm text-gray-500 mt-5">

                                        Don&apos;t have an account?{" "}

                                        <Link
                                            to="/signup"
                                            className="font-semibold text-blue-600 hover:text-purple-600 hover:underline transition-all duration-300"
                                        >
                                            Sign Up
                                        </Link>

                                    </p>

                                </div>


                                {/* ================= ERROR ================= */}

                                {error && (

                                    <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center">

                                        <p className="text-sm font-medium text-red-600">
                                            {error}
                                        </p>

                                    </div>

                                )}


                                {/* ================= FORM ================= */}

                                <form
                                    onSubmit={handleSubmit(login)}
                                    className="mt-8"
                                >

                                    <div className="space-y-5">

                                        <Input
                                            label="Email"
                                            placeholder="Enter your email"
                                            type="email"
                                            {...register("email", {
                                                required: true,
                                                validate: {
                                                    matchPatern: (value) =>
                                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                        "Email address must be a valid address",
                                                },
                                            })}
                                        />

                                        <Input
                                            label="Password"
                                            type="password"
                                            placeholder="Enter your password"
                                            {...register("password", {
                                                required: true,
                                            })}
                                        />

                                        <Button
                                            type="submit"
                                            className="w-full py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                                        >
                                            Login
                                        </Button>

                                    </div>

                                </form>


                                {/* ================= FOOTER ================= */}

                                <div className="mt-8 pt-5 border-t border-gray-200 text-center">

                                    <p className="text-xs uppercase tracking-[3px] text-gray-400">
                                        Read • Create • Share
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= ANIMATION CSS ================= */}

            <style>{`

                @keyframes bgZoom {

                    0%, 100% {
                        transform: scale(1.10);
                    }

                    50% {
                        transform: scale(1.16);
                    }

                }

                @keyframes float {

                    0%, 100% {
                        transform: translate(0, 0);
                    }

                    50% {
                        transform: translate(60px, -40px);
                    }

                }

                @keyframes floatSlow {

                    0%, 100% {
                        transform: translate(0, 0);
                    }

                    50% {
                        transform: translate(80px, 50px);
                    }

                }

                @keyframes floatReverse {

                    0%, 100% {
                        transform: translate(0, 0);
                    }

                    50% {
                        transform: translate(-70px, 50px);
                    }

                }

                @keyframes fadeUp {

                    from {
                        opacity: 0;
                        transform: translateY(25px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }

                }

                @keyframes card {

                    from {
                        opacity: 0;
                        transform: translateY(35px) scale(0.96);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }

                }

                @keyframes line {

                    from {
                        width: 0;
                    }

                    to {
                        width: 6rem;
                    }

                }

                .animate-bgZoom {
                    animation: bgZoom 18s ease-in-out infinite;
                }

                .animate-float {
                    animation: float 9s ease-in-out infinite;
                }

                .animate-floatSlow {
                    animation: floatSlow 12s ease-in-out infinite;
                }

                .animate-floatReverse {
                    animation: floatReverse 10s ease-in-out infinite;
                }

                .animate-fadeUp {
                    animation: fadeUp 0.9s ease-out both;
                }

                .animate-card {
                    animation: card 0.8s ease-out both;
                }

                .animate-line {
                    animation: line 1s ease-out both;
                }

                .delay-200 {
                    animation-delay: 0.2s;
                }

                .delay-300 {
                    animation-delay: 0.3s;
                }

                .delay-500 {
                    animation-delay: 0.5s;
                }

            `}</style>

        </div>
    );
}

export default Login;