import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-100">

            <section
                className="relative w-full min-h-[320px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=2000&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center text-white px-5">
                    <p className="uppercase tracking-[5px] text-sm text-blue-200">
                        Our Collection
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold mt-3">
                        All Posts
                    </h1>

                    <p className="max-w-2xl mx-auto mt-5 text-gray-200 text-base md:text-lg">
                        Explore all our latest stories, ideas and interesting articles.
                    </p>

                    <div className="w-20 h-[2px] bg-white mx-auto mt-7"></div>
                </div>
            </section>

            <section
                className="relative py-16 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-slate-950/85"></div>

                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>

                <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-purple-400/20 blur-3xl animate-pulse"></div>

                <Container>

                    <div className="relative z-10 text-center mb-10">
                        <p className="text-sm uppercase tracking-[5px] text-blue-200">
                            Explore
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                            Discover All Stories
                        </h2>

                        <p className="text-gray-300 mt-4 text-base md:text-lg">
                            Browse through all the posts and discover something new.
                        </p>

                        <div className="w-20 h-[2px] bg-white/70 mx-auto mt-6"></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

                        {posts.map((post) => (
                            <div
                                key={post.$id}
                                className="group bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="transition-transform duration-500 group-hover:scale-[1.02]">
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
                        className="relative overflow-hidden rounded-3xl min-h-[250px] flex items-center justify-center bg-cover bg-center shadow-xl"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
                        }}
                    >

                        <div className="absolute inset-0 bg-black/55"></div>

                        <div className="relative z-10 text-center text-white px-5">

                            <p className="uppercase tracking-[4px] text-sm text-gray-300">
                                Keep Discovering
                            </p>

                            <h2 className="text-3xl md:text-5xl font-bold mt-3">
                                More Stories Await
                            </h2>

                            <p className="mt-4 text-gray-200 max-w-xl mx-auto">
                                Keep exploring our collection and discover new ideas,
                                perspectives and stories.
                            </p>

                        </div>

                    </div>

                </Container>

            </section>

        </div>
    );
}

export default AllPosts;