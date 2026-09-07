import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
    const imageUrl = featuredImage
        ? appwriteService.getFilePreview(featuredImage)
        : "";

    return (
        <Link to={`/post/${$id}`} className="block">
            <article className="group w-full overflow-hidden bg-[#f5f2eb] border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">

                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="relative h-[280px] md:h-[320px] overflow-hidden bg-gray-200">

                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-gray-500">
                                No Image
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                    </div>

                    <div className="flex flex-col justify-center p-6 md:p-8">

                        <p className="mb-4 text-xs uppercase tracking-[4px] text-gray-500">
                            The Journal
                        </p>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium leading-tight text-gray-800 transition-colors duration-300 group-hover:text-gray-600">
                            {title}
                        </h2>

                        <div className="mt-5 h-px w-16 bg-gray-400"></div>

                        <div className="mt-5 text-sm md:text-base leading-7 text-gray-600 line-clamp-3">
                            {content ? parse(content) : (
                                <p>
                                    Discover this story and explore more interesting ideas and experiences.
                                </p>
                            )}
                        </div>

                        <div className="mt-7 flex items-center gap-3">

                            <span className="text-sm font-medium text-gray-800 underline underline-offset-4 transition-all duration-300 group-hover:tracking-wide">
                                Read More
                            </span>

                            <span className="text-lg text-gray-600 transition-transform duration-300 group-hover:translate-x-2">
                                →
                            </span>

                        </div>

                    </div>

                </div>

            </article>
        </Link>
    );
}

export default PostCard;