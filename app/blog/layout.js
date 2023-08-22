import Link from "next/link";
import getBlogCategory from "../lib/apiRwquests";

export default async function Layout({ children }) {
    let categories = await getBlogCategory();

    return (
        <div className="flex">
            <div className="min-w-[150px] bg-slate-100 min-h-[500px]">
                <ul className="mt-5 ml-2">
                    {categories.map((ci, i) => {
                        return (
                            <li className="text-xl py-2">
                                <Link href={'/blog/'+ci.id}>{ci.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}