import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
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

    const userData = useSelector(
        (state) => state.auth.userData
    );

    const submit = async (data) => {
        try {
            console.log("Form Data:", data);

            if (post) {
                let file = null;

                if (data.image && data.image.length > 0) {
                    file = await appwriteService.uploadFile(
                        data.image[0]
                    );

                    if (!file) {
                        console.log("Image upload failed");
                        return;
                    }

                    if (post.featuredImage) {
                        await appwriteService.deleteFile(
                            post.featuredImage
                        );
                    }
                }

                const dbPost =
                    await appwriteService.updatePost(
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

                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                if (!userData?.$id) {
                    console.log("User is not logged in");
                    return;
                }

                if (
                    !data.image ||
                    data.image.length === 0
                ) {
                    console.log(
                        "Please select a featured image"
                    );
                    return;
                }

                console.log("Uploading image...");

                const file =
                    await appwriteService.uploadFile(
                        data.image[0]
                    );

                if (!file) {
                    console.log("Image upload failed");
                    return;
                }

                console.log(
                    "Image uploaded:",
                    file
                );

                const fileId = file.$id;

                console.log("Creating post...");

                const dbPost =
                    await appwriteService.createPost({
                        title: data.title,
                        slug: data.slug,
                        content: data.content,
                        status: data.status,
                        featuredImage: fileId,
                        userId: userData.$id,
                    });

                if (dbPost) {
                    console.log(
                        "Post created successfully:",
                        dbPost
                    );

                    navigate(
                        `/post/${dbPost.$id}`
                    );
                } else {
                    console.log(
                        "Post creation failed"
                    );
                }
            }
        } catch (error) {
            console.error(
                "PostForm :: submit :: error",
                error
            );
        }
    };

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

    React.useEffect(() => {
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

                        <Input
                            label="Title"
                            placeholder="Enter your post title"
                            className="mb-5"
                            {...register("title", {
                                required: true,
                            })}
                        />

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

                <div className="space-y-6">

                    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-200">

                        <div className="mb-5">
                            

                            <h3 className="text-xl font-bold text-gray-800 mt-2">
                                Publish Details
                            </h3>
                        </div>

                        <Input
                            label="Featured Image"
                            type="file"
                            className="mb-5"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("image", {
                                required: !post,
                            })}
                        />

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