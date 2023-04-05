import fetch from "isomorphic-fetch";

// Django API server URL
const SERVERURL = "http://127.0.0.1:8000/";

// get all posts
export async function getALLPostsData(){
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    const posts = await res.json();
    return posts;
}

// get all post's ID
export async function getALLPostIds(){
    const res = await fetch(new URL(`${SERVERURL}api/post/`));
    const posts = await res.json();
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        };
    });
}

// get post detail
export async function getPostData(id){
    const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`));
    const post = await res.json();
    return post;

}