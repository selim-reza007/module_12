import { getCategoryBlog } from "@/app/lib/apiRwquests";
import Link from "next/link";

export default async function CategoryPage({ params }) {
    let categoryId = params.categorypage;
    let categoryBlog = await getCategoryBlog(categoryId);

    return (
        <div className="grid grid-cols-3 gap-3 mt-2 ml-1">
            {
                categoryBlog.map((cbi, i) => {
                    return (
                        <Link href={'/blog/singleblog/' + cbi.id} key={i} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={cbi.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{cbi.title}</h2>
                                <p>{cbi.short}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}
