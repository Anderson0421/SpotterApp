"use client"
import { PostType } from "@/types/type";
import Link from 'next/link'

export default function PostCard(post: PostType) {


    return (
        <Link href="#">
            <div className="rounded-xl border group hover:scale-105 duration-300 transition-all border-gray-700 flex flex-col justify-between w-full">
                <div className="relative group-hover:scale-95 group-hover:saturate-150 saturate-50 duration-300 transition-all">
                    <img src={`${post.PostPortada}?sp=racwdli&st=2024-04-14T00:13:42Z&se=2026-10-13T08:13:42Z&sv=2022-11-02&sr=c&sig=q9N9P9sev2O8erCIkIq5KN6CBT9FVoKXrWqxIyqM5HQ%3D`} alt="imagepost"
                    className="w-full h-40 object-cover rounded-t-xl" />
                </div>
                <div className="relative mt-5 pt-3 pb-6 px-3">
                    <h1 className="text-2xl w-3/4 font-semibold">{post.PostTitulo}</h1>
                    <div className="flex justify-between text-sm text-gray-300 mt-2">
                        <h1>Mark Zurck</h1>
                        <p>{post.PostFechaCreacion}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
