import { Inter } from "next/font/google";
import { ResponseFetchUsers } from "@/services/ApiServices";
import ItemCard from "@/components/ItemCard";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  data: ResponseFetchUsers[];
}
export default function Home({ data }: Props) {
  return (
    <div className="p-5 pt-20 flex justify-center  w-full">
      <div className="">
        <h3 className="text-center font-bold text-blue-800 text-[32px]">
          Item Card
        </h3>
        <ItemCard data={data} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: ResponseFetchUsers[] = await res.json();
  // console.log({ data });
  return { props: { data } };
}
