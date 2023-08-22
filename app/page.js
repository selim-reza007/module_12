import Link from "next/link";
import { newestBlogList } from "./lib/apiRwquests";

export default async function Home() {

  let newestBlog = await newestBlogList();

  return (
    <div className="flex">
      <section className="min-h-[500px] border border-black w-1/3">
        {/* section 1 */}
        <p className="text-center font-bold text-2xl">Blog list</p>
        <ul className="ml-2">
        {
          newestBlog.map((nbi, i) => {
            return (
              <li key={i} className="text-xl text-sky-500 my-3">
                <Link href={'/blog/singleblog/'+nbi.id}>
                  <p>{nbi.id} - {nbi.title}</p>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </section>

      <section className="min-h-[500px] bg-indigo-200 w-1/3">
        {/* section 2 */}
        <p className="text-2xl text-center mt-16">This is section 2</p>
      </section>

      <section className="min-h-[500px] bg-slate-500 w-1/3">
        {/* section 3 */}
        <p className="text-2xl text-center mt-16">This is section 3</p>
      </section>
    </div>
  );
}
