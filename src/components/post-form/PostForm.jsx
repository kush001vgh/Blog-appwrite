import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";

export default function PostForm({ post, onSuccess }) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        getValues,
    } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();

    const submit = async (data) => {
        try {
            console.log("Form Data:", data);

            // --------------------------------
            // CHECK CURRENT APPWRITE USER
            // --------------------------------
            const currentUser = await authService.getCurrentUser();

            console.log("Current User:", currentUser);

            if (!currentUser?.$id) {
                console.log("User is not logged in");
                alert("Please login before creating a post.");
                navigate("/login");
                return;
            }

            // ==================================
            // UPDATE POST
            // ==================================
            if (post) {
                let file = null;

                // Upload new image if selected
                if (data.image && data.image.length > 0) {
                    file = await appwriteService.uploadFile(
                        data.image[0]
                    );

                    if (!file) {
                        console.log("Image upload failed");
                        return;
                    }

                    // Delete old image
                    if (post.featuredImage) {
                        await appwriteService.deleteFile(
                            post.featuredImage
                        );
                    }
                }

                const dbPost = await appwriteService.updatePost(
                    post.$id,
                    {
                        ...data,
                        featuredImage: file
                            ? file.$id
                            : post.featuredImage,
                    }
                );

                if (dbPost) {
                    console.log(
                        "Post updated successfully:",
                        dbPost
                    );

                    if (onSuccess) {
                        onSuccess(dbPost);
                    } else {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }

                return;
            }

            // ==================================
            // CREATE NEW POST
            // ==================================

            // Image required
            if (
                !data.image ||
                data.image.length === 0
            ) {
                console.log(
                    "Please select a featured image"
                );

                alert("Please select a featured image.");
                return;
            }

            console.log("Uploading image...");

            const file = await appwriteService.uploadFile(
                data.image[0]
            );

            if (!file) {
                console.log("Image upload failed");
                return;
            }

            console.log("Image uploaded:", file);

            const fileId = file.$id;

            console.log("Creating post...");

            const dbPost = await appwriteService.createPost({
                title: data.title,
                slug: data.slug,
                content: data.content,
                status: data.status,
                featuredImage: fileId,

                // IMPORTANT
                userId: currentUser.$id,
            });

            if (dbPost) {
                console.log(
                    "Post created successfully:",
                    dbPost
                );

                if (onSuccess) {
                    onSuccess(dbPost);
                } else {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                console.log("Post creation failed");
            }

        } catch (error) {
            console.error(
                "PostForm :: submit :: error",
                error
            );

            alert(
                error?.message ||
                "Something went wrong while creating the post."
            );
        }
    };

    // ==================================
    // SLUG TRANSFORM
    // ==================================

    const slugTransform = useCallback(
        (value) => {
            if (
                value &&
                typeof value === "string"
            ) {
                return value
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-zA-Z\d\s]+/g, "-")
                    .replace(/\s/g, "-");
            }

            return "";
        },
        []
    );

    // ==================================
    // AUTO GENERATE SLUG
    // ==================================

    useEffect(() => {
        const subscription = watch(
            (value, { name }) => {
                if (name === "title") {
                    setValue(
                        "slug",
                        slugTransform(value.title),
                        {
                            shouldValidate: true,
                        }
                    );
                }
            }
        );

        return () =>
            subscription.unsubscribe();
    }, [
        watch,
        slugTransform,
        setValue,
    ]);

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="w-full"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

                {/* ==================================
                    LEFT SIDE
                ================================== */}

                <div className="lg:col-span-2 space-y-6">

                    <div className="bg-white rounded-2xl p-5 md:p-7 shadow-lg border border-gray-200">

                        <div className="mb-6">

                            <p className="text-xs uppercase tracking-[4px] text-blue-500 font-semibold">
                                Article Information
                            </p>

                            <h3 className="text-2xl font-bold text-gray-800 mt-2">
                                Write Your Story
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                Add a title and create the content of your post.
                            </p>

                        </div>

                        {/* TITLE */}

                        <Input
                            label="Title"
                            placeholder="Enter your post title"
                            className="mb-5"
                            {...register("title", {
                                required: true,
                            })}
                        />

                        {/* SLUG */}

                        <Input
                            label="Slug"
                            placeholder="your-post-slug"
                            className="mb-6"
                            {...register("slug", {
                                required: true,
                            })}
                            onInput={(e) => {
                                setValue(
                                    "slug",
                                    slugTransform(
                                        e.currentTarget.value
                                    ),
                                    {
                                        shouldValidate: true,
                                    }
                                );
                            }}
                        />

                        {/* RTE */}

                        <div className="rounded-xl border border-gray-200 overflow-hidden">

                            <RTE
                                label="Content"
                                name="content"
                                control={control}
                                defaultValue={getValues("content")}
                            />

                        </div>

                    </div>

                </div>

                {/* ==================================
                    RIGHT SIDE
                ================================== */}

                <div className="space-y-6">

                    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200">

                        <div className="mb-5">

                            <h3 className="text-xl font-bold text-gray-800 mt-2">
                                Publish Details
                            </h3>

                        </div>

                        {/* IMAGE */}

                        <Input
                            label="Featured Image"
                            type="file"
                            className="mb-5"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("image", {
                                required: !post,
                            })}
                        />

                        {/* CURRENT IMAGE */}

                        {post && post.featuredImage && (
                            <div className="mb-5">

                                <p className="text-sm font-medium text-gray-700 mb-2">
                                    Current Image
                                </p>

                                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">

                                    <img
                                        src={
                                            appwriteService.getFilePreview(
                                                post.featuredImage
                                            )
                                        }
                                        alt={post.title}
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                    />

                                </div>

                            </div>
                        )}

                        {/* STATUS */}

                        <Select
                            options={[
                                "active",
                                "inactive",
                            ]}
                            label="Status"
                            className="mb-6"
                            {...register("status", {
                                required: true,
                            })}
                        />

                        {/* BUTTON */}

                        <Button
                            type="submit"
                            bgColor={
                                post
                                    ? "bg-green-500"
                                    : "bg-blue-600"
                            }
                            className="w-full py-3 rounded-xl text-base font-semibold hover:scale-[1.02] transition-transform duration-200"
                        >
                            {post
                                ? "Update Post"
                                : "Publish Post"}
                        </Button>

                    </div>

                    {/* TIPS */}

                    <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg">

                        <p className="text-xs uppercase tracking-[3px] text-blue-300">
                            Publishing Tips
                        </p>

                        <h3 className="text-xl font-bold mt-2">
                            Make it Interesting
                        </h3>

                        <p className="text-sm text-gray-300 mt-3 leading-6">
                            Add a clear title, beautiful featured
                            image and useful content to make your
                            post more engaging.
                        </p>

                    </div>

                </div>

            </div>
        </form>
    );
}