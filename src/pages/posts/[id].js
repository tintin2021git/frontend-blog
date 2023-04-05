import { useRouter } from "next/router";
import { getALLPostIds, getPostData } from "../../../lib/post";

export default function PostData({post}) {
    const router = useRouter();

    if (router.isFallback || !post){
        return <div>Loading......</div>;
    }
    return (
        <div className="space-y-5 w-full">
            <div className="flex justify-center flex-col items-center mb-5">
                <h1 className="text-3xl mb-3 font-bold">
                    {post.title}
                </h1>
                <p className="mb-3">
                    {post.created_at}
                </p>
                <div className="borber w-14"></div>
            </div>
            <p className="whitespace-pre-wrap">
                {post.content}
            </p>
        </div>
    );
}

// get post index ID 
export async function getStaticPaths(){
    const paths = await getALLPostIds();
    return {
        paths,
        fallback: true,
    };
}

//get data of post
export async function getStaticProps({params}){
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
        revalidate: 3,
    };
}
