import Link from "next/link";

export default function ButtonList({ tags }: {tags: string[]}) {
    //const Menus:string[] = ["ホーム", "機械学習", "読書メモ", "ツール", "アルゴリズム", "セキュリティ", "プログラミング", "その他"];

    return(
        <div className="text-center flex flex-wrap justify-center gap-4 p-4 bg-yellow-100">
        {
          tags.map((value, index) => (
          <Link
            key={index}
            href={`/tag/${value}`}
            className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-block"
          >
            {value}
          </Link>
          ))
        }
    </div>
    )
}