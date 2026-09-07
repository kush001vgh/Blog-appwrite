import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector(
        (state) => state.auth.userData
    );

    const isAuthor =
        post && userData
            ? post.userId === userData.$id
            : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 py-10 md:py-16">

            <Container>

                <article className="w-full bg-[#f5f2eb] border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">

                    <div className="p-6 sm:p-10 lg:p-14">

                        <div className="relative float-left w-full md:w-[52%] lg:w-[50%] mr-0 md:mr-10 mb-8 md:mb-6 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">

                            <img
                                src={appwriteService.getFilePreview(
                                    post.featuredImage
                                )}
                                alt={post.title}
                                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"></div>

                            <div className="absolute bottom-5 left-5">

                                <span className="bg-white/90 px-4 py-2 text-xs uppercase tracking-[3px] text-gray-700 shadow-lg rounded-full">
                                    The Journal
                                </span>

                            </div>

                        </div>

                        {isAuthor && (
                            <div className="flex justify-end gap-3 mb-8">

                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor="bg-green-500"
                                        className="hover:bg-green-600 transition-all duration-300"
                                    >
                                        Edit
                                    </Button>
                                </Link>

                                <Button
                                    bgColor="bg-red-500"
                                    onClick={deletePost}
                                    className="hover:bg-red-600 transition-all duration-300"
                                >
                                    Delete
                                </Button>

                            </div>
                        )}

                        <div className="mb-8">

                            <p className="text-xs uppercase tracking-[4px] text-blue-500 font-semibold mb-5">
                                Featured Story
                            </p>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-tight text-gray-800">
                                {post.title}
                            </h1>

                            <div className="mt-6 h-[2px] w-20 bg-blue-500 rounded-full"></div>

                        </div>

                        <div
                            className="
                                text-gray-700
                                text-[16px]
                                leading-8

                                [&_h1]:font-serif
                                [&_h1]:text-3xl
                                [&_h1]:font-medium
                                [&_h1]:text-gray-800
                                [&_h1]:mb-5

                                [&_h2]:font-serif
                                [&_h2]:text-2xl
                                [&_h2]:font-medium
                                [&_h2]:text-gray-800
                                [&_h2]:mb-4

                                [&_h3]:text-xl
                                [&_h3]:font-semibold
                                [&_h3]:text-gray-800
                                [&_h3]:mb-3

                                [&_p]:mb-5

                                [&_strong]:font-bold
                                [&_strong]:text-gray-800

                                [&_ul]:list-disc
                                [&_ul]:pl-6
                                [&_ul]:mb-5

                                [&_ol]:list-decimal
                                [&_ol]:pl-6
                                [&_ol]:mb-5

                                [&_li]:mb-2

                                [&_a]:text-blue-600
                                [&_a]:underline
                                [&_a]:underline-offset-4

                                [&_blockquote]:border-l-4
                                [&_blockquote]:border-blue-400
                                [&_blockquote]:pl-5
                                [&_blockquote]:italic
                                [&_blockquote]:my-6

                                [&_img]:rounded-xl
                                [&_img]:my-5
                                [&_img]:max-w-full
                                [&_img]:h-auto
                            "
                        >

                            {post.content ? (
                                parse(post.content)
                            ) : (
                                <p>
                                    No content available for this post.
                                </p>
                            )}

                        </div>

                        <div className="clear-both"></div>

                        <div className="mt-10 pt-6 border-t border-gray-300 flex items-center justify-between">

                            <span className="text-xs uppercase tracking-[3px] text-gray-400">
                                End of Story
                            </span>

                            <span className="text-blue-500 text-xl">
                                ✦
                            </span>

                        </div>

                    </div>

                </article>

            </Container>

        </div>
    ) : null;
}