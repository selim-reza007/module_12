import { getSingleBlog } from "@/app/lib/apiRwquests";


export default async function SingleBlog({ params }) {
    let singleBlog = await getSingleBlog(params.sid);
    
    return (
        <div>
            <section className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <img src={singleBlog?.postDetails?.img} className="max-w-2xl rounded-lg shadow-2xl" />
                    <h1 className="text-5xl font-bold">{singleBlog?.postDetails?.title}</h1>
                    <p className="py-6">{singleBlog?.postDetails?.content}</p>
                </div>
            </section>

        </div>
    );
}

