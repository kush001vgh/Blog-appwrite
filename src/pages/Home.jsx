import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-screen bg-gray-100 py-20">
                <Container>
                    <div className="flex justify-center">
                        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-10 text-center">
                            <h1 className="text-3xl font-bold text-gray-800">
                                Login to read posts
                            </h1>

                            <p className="mt-3 text-gray-500">
                                Please login to explore amazing blog posts.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "It always seems impossible until it's done.",
            author: "Nelson Mandela"
        },
        {
            text: "The future belongs to those who believe in their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Success is not final, failure is not fatal.",
            author: "Winston Churchill"
        },
        {
            text: "In the middle of difficulty lies opportunity.",
            author: "Albert Einstein"
        },
        {
            text: "Stay hungry, stay foolish.",
            author: "Steve Jobs"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gray-100">

            <section
                className="
                    relative
                    w-full
                    min-h-[420px]
                    flex
                    items-center
                    justify-center
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/45"></div>

                <div className="relative z-10 text-center text-white px-5">

                    <p className="uppercase tracking-[5px] text-sm mb-4">
                        Welcome to our blog
                    </p>

                    <h1 className="
                        text-4xl
                        md:text-6xl
                        font-bold
                        tracking-tight
                    ">
                        Discover Amazing Stories
                    </h1>

                    <p className="
                        max-w-2xl
                        mx-auto
                        mt-5
                        text-base
                        md:text-lg
                        text-gray-200
                    ">
                        Explore creative ideas, unique perspectives and
                        inspiring stories from around the world.
                    </p>

                    <div className="
                        w-20
                        h-[2px]
                        bg-white
                        mx-auto
                        mt-7
                    "></div>

                </div>
            </section>


            <section className="
                relative
                py-7
                bg-white
                border-y
                border-gray-200
                overflow-hidden
                shadow-sm
            ">

                <div className="
                    absolute
                    left-0
                    top-0
                    bottom-0
                    w-24
                    bg-gradient-to-r
                    from-white
                    to-transparent
                    z-10
                    pointer-events-none
                "></div>

                <div className="
                    absolute
                    right-0
                    top-0
                    bottom-0
                    w-24
                    bg-gradient-to-l
                    from-white
                    to-transparent
                    z-10
                    pointer-events-none
                "></div>

                <div
                    className="
                        flex
                        w-max
                        animate-[scroll_35s_linear_infinite]
                        hover:[animation-play-state:paused]
                    "
                >

                    {[...quotes, ...quotes].map((quote, index) => (
                        <div
                            key={index}
                            className="
                                flex
                                items-center
                                gap-4
                                px-10
                                md:px-16
                                whitespace-nowrap
                            "
                        >

                            <span className="
                                text-2xl
                                text-gray-400
                                font-serif
                            ">
                                “
                            </span>

                            <p className="
                                text-sm
                                md:text-base
                                italic
                                text-gray-700
                                font-medium
                            ">
                                {quote.text}
                            </p>

                            <span className="
                                text-xs
                                md:text-sm
                                uppercase
                                tracking-widest
                                text-gray-400
                            ">
                                — {quote.author}
                            </span>

                            <span className="
                                mx-5
                                text-gray-300
                            ">
                                ✦
                            </span>

                        </div>
                    ))}

                </div>

                <style>
                    {`
                        @keyframes scroll {
                            from {
                                transform: translateX(0);
                            }

                            to {
                                transform: translateX(-50%);
                            }
                        }
                    `}
                </style>

            </section>


            <section
                className="
                    relative
                    py-16
                    overflow-hidden
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80')",
                }}
            >

                <div className="
                    absolute
                    inset-0
                    bg-slate-950/80
                "></div>

                <div className="
                    absolute
                    -top-24
                    -left-24
                    w-72
                    h-72
                    rounded-full
                    bg-blue-400/20
                    blur-3xl
                    animate-pulse
                "></div>

                <div className="
                    absolute
                    -bottom-24
                    -right-24
                    w-80
                    h-80
                    rounded-full
                    bg-purple-400/20
                    blur-3xl
                    animate-pulse
                "></div>

                <Container>

                    <div className="
                        relative
                        z-10
                        text-center
                        mb-10
                    ">

                        <p className="
                            text-sm
                            uppercase
                            tracking-[5px]
                            text-blue-200
                        ">
                            Latest Articles
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-5xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Explore Our Posts
                        </h2>

                        <p className="
                            text-gray-300
                            mt-4
                            text-base
                            md:text-lg
                        ">
                            Read our latest stories and interesting articles.
                        </p>

                        <div className="
                            w-20
                            h-[2px]
                            bg-white/70
                            mx-auto
                            mt-6
                        "></div>

                    </div>


                    <div className="
                        relative
                        z-10
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        xl:grid-cols-5
                        gap-5
                    ">

                        {posts.map((post) => (

                            <div
                                key={post.$id}
                                className="
                                    group
                                    bg-white/95
                                    backdrop-blur-md
                                    rounded-2xl
                                    overflow-hidden
                                    border
                                    border-white/30
                                    shadow-xl
                                    hover:-translate-y-2
                                    hover:shadow-2xl
                                    transition-all
                                    duration-500
                                "
                            >

                                <div className="
                                    transition-transform
                                    duration-500
                                    group-hover:scale-[1.02]
                                ">
                                    <PostCard {...post} />
                                </div>

                            </div>

                        ))}

                    </div>

                </Container>

            </section>


            <section className="py-16 bg-gray-100">

                <Container>

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            min-h-[250px]
                            flex
                            items-center
                            justify-center
                            bg-cover
                            bg-center
                            shadow-xl
                        "
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
                        }}
                    >

                        <div className="
                            absolute
                            inset-0
                            bg-black/50
                        "></div>

                        <div className="
                            relative
                            z-10
                            text-center
                            text-white
                            px-5
                        ">

                            <p className="
                                uppercase
                                tracking-[4px]
                                text-sm
                                text-gray-300
                            ">
                                Keep Discovering
                            </p>

                            <h2 className="
                                text-3xl
                                md:text-5xl
                                font-bold
                                mt-3
                            ">
                                Keep Exploring
                            </h2>

                            <p className="
                                mt-4
                                text-gray-200
                                max-w-xl
                                mx-auto
                            ">
                                Discover more stories and share your ideas
                                with the world.
                            </p>

                        </div>

                    </div>

                </Container>

            </section>

        </div>
    );
}

export default Home;