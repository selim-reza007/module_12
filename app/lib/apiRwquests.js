export default async function getBlogCategory() {
    let res = await fetch("https://basic-blog.teamrabbil.com/api/post-categories");

    if (res.status != 200) {
        throw new Error("Error occured!");
    }
    return res.json();
}

export async function newestBlogList() {
    let res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");

    if (res.status != 200) {
        throw new Error("Error!");
    }
    return res.json();
}

export async function getCategoryBlog(categoryId) {
    let res = await fetch("https://basic-blog.teamrabbil.com/api/post-list/"+ categoryId);

    if (res.status != 200) {
        throw new Error("Error!");
    }
    return res.json();
}

export async function getSingleBlog(singleBlogId) {
    let res = await fetch("https://basic-blog.teamrabbil.com/api/post-details/"+singleBlogId);

    if (res.status != 200) {
        throw new Error("Error!");
    }
    return res.json();
}