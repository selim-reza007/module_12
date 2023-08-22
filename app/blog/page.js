import Link from "next/link";
import { newestBlogList } from "../lib/apiRwquests";

export default async function Blog() {
  let newestBlog = await newestBlogList();

  return (
    <section className="grid grid-cols-3 gap-3 mt-2 ml-1">
      {
        newestBlog.map((nbi, i) => {
          return (
            <Link href={'/blog/singleblog/'+nbi.id} key={i} className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={nbi.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{nbi.title}</h2>
                <p>{nbi.short}</p>
              </div>
            </Link>
          )
        })
      }
    </section>
  );
}