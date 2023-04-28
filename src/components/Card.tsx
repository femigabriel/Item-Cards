import react, { useState } from "react";
import { useQuery } from "react-query";
import ApiServices, { ResponseFetchUsers } from "@/services/ApiServices";

const list = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
];

export default function Card() {
  const { isLoading, isError, data } = useQuery<ResponseFetchUsers>(
    "fetchUsers",
    ApiServices.fetchUserData
  );

  if (isLoading) {
    return (
      <div className="isLoading">loading users' data, Please wait a bit...</div>
    );
  }

  if (isError) {
    return <div className="isError">Something went wrong...</div>;
  }
  // console.log({ data });

  return (
    <div>
      <div className="lg:grid gap-5 grid-cols-4 p-5 sm:block mb-5">
        {list?.map((item: any, key: any) => {
          return (
            <div
              key={key.id}
              className=" p-5 card rounded-xl cursor-pointer hover:border-blue-600"
            >
              <div className="">
                <div className="mb-14">
                  User id:
                  <span className="text-[#FACD66]"> {item.userId}</span>
                </div>
                <div className=" plan_content">
                  <h3 className="font-bold text-[18px] text-white tracking-wide uppercase mb-3">
                    {item.title.substring(0, 15)}
                  </h3>
                  <p className="text-gray-400 mb-5 text-[14px]">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-full">
        <button className="border p-3 rounded  mx-10">Previous</button>
        <button className="border p-3 rounded  mx-10">Next</button>
      </div>
    </div>
  );
}
