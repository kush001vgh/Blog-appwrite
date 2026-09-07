import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPosts] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    return post ? (
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
                        The Journal
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold mt-3">
                        Edit Your Post
                    </h1>

                    <p className="max-w-2xl mx-auto mt-5 text-gray-200 text-base md:text-lg">
                        Update your story, change the image and refine your content.
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

                    <div className="relative z-10 max-w-5xl mx-auto">

                        <div className="bg-[#f5f2eb] rounded-3xl shadow-2xl overflow-hidden border border-white/20">

                            <div className="px-6 md:px-10 py-7 border-b border-gray-300">

                                <p className="text-xs uppercase tracking-[4px] text-gray-500">
                                    Editing Article
                                </p>

                                <h2 className="text-2xl md:text-4xl font-serif font-medium text-gray-800 mt-2">
                                    {post.title}
                                </h2>

                                <p className="text-sm text-gray-500 mt-2">
                                    Make your changes and update the article.
                                </p>

                            </div>

                            <div className="p-5 md:p-10">

                                <PostForm post={post} />

                            </div>

                        </div>

                    </div>

                </Container>
            </section>

            <section className="py-14 bg-gray-100">

                <Container>

                    <div className="text-center">

                        <p className="uppercase tracking-[4px] text-xs text-gray-500">
                            The Journal
                        </p>

                        <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mt-2">
                            Refine. Update. Publish.
                        </h2>

                        <div className="w-16 h-px bg-gray-400 mx-auto mt-5"></div>

                    </div>

                </Container>

            </section>

        </div>
    ) : null;
}

export default EditPost;