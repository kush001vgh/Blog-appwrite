import React from "react";
import { Container, PostForm } from "../components";
import { useNavigate } from "react-router-dom";

function AddPost() {
    const navigate = useNavigate();

    const handlePostCreated = () => {
        navigate("/");
    };

    return (
        <div className="w-full min-h-screen bg-gray-100">

            <section
                className="relative w-full min-h-[300px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/65"></div>

                <div className="relative z-10 text-center text-white px-5">
                    <p className="uppercase tracking-[5px] text-sm text-blue-200">
                        Create Something
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold mt-3">
                        Create New Post
                    </h1>

                    <p className="max-w-2xl mx-auto mt-5 text-gray-200 text-base md:text-lg">
                        Share your thoughts, ideas and stories with the world.
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
                <div className="absolute inset-0 bg-slate-950/90"></div>

                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>

                <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-purple-400/20 blur-3xl animate-pulse"></div>

                <Container>
                    <div className="relative z-10 max-w-4xl mx-auto">

                        <div className="text-center mb-10">
                            <p className="text-sm uppercase tracking-[5px] text-blue-200">
                                Write & Publish
                            </p>

                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                                Tell Your Story
                            </h2>

                            <p className="text-gray-300 mt-4 text-base md:text-lg">
                                Create a beautiful post and share it with your readers.
                            </p>

                            <div className="w-20 h-[2px] bg-white/70 mx-auto mt-6"></div>
                        </div>

                        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-5 md:p-8 border border-white/30">
                            <PostForm onSuccess={handlePostCreated} />
                        </div>

                    </div>
                </Container>
            </section>

        </div>
    );
}

export default AddPost;