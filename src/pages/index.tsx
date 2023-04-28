import { Inter } from "next/font/google";
import { ResponseFetchUsers } from "@/services/ApiServices";
import ItemCard from "@/components/ItemCard";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  data: ResponseFetchUsers[];
}
export default function Home({ data }: Props) {
  console.log({ data });
  return (
    <div className="p-5 pt-20 flex justify-center  w-full">
      <ItemCard data={data}/>
  
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: ResponseFetchUsers[] = await res.json();
  // console.log({ data });
  return { props: { data } };
}
