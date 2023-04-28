import react, { useState } from "react";
import { useQuery } from "react-query";
import ApiServices, { ResponseFetchUsers } from "@/services/ApiServices";
import { Button, Modal } from "antd";

interface Props {
  data: ResponseFetchUsers[];
}

export default function ItemCard({ data }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<
    ResponseFetchUsers | undefined
  >(undefined);
  const defaultLoadCount = 10;
  const [currentSlice, setCurrentSlice] = useState<number>(defaultLoadCount);

  const showModal = (item: ResponseFetchUsers) => {
    setIsModalOpen(item);
  };

  const handleCancel = () => {
    setIsModalOpen(undefined);
  };

  const loadMore = () => {
    if (currentSlice >= data.length) return;

    setCurrentSlice((x) => x + defaultLoadCount);
  };

  return (
    <>
      <div className="">
        <div className="lg:grid gap-5 grid-cols-4 pt-10 sm:block p-5 ">
          {data &&
            data.length > 0 &&
            data?.slice(0, currentSlice).map((list) => {
              return (
                <div
                  key={list.id}
                  className="border p-5 rounded-xl cursor-pointer hover:border-blue-600 item_card bg-white"
                >
                  <div className="">
                    <div className="mb-14 text-blue-800  border-white rounded-full w-10 h-10 flex justify-center items-center bg-gray-200">
                      <span className="text-center">{list.id}</span>
                    </div>
                    <div className="">
                      <h3 className="font-bold text-[18px] text-blue-800 ">
                        {list.title.substring(0, 15)}
                      </h3>
                      <p className="text-gray-400 text-[14px] line-clamp-2 ">
                        {list.body}
                      </p>
                      <Button onClick={() => showModal(list)} className="mt-3">
                        read more
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className=" pt-10 flex item-center justify-center w-full">
          <Button
            onClick={loadMore}
            className=" bg-blue-950 text-white"
          >
            Load more
          </Button>
        </div>
      </div>

      <Modal
        title={isModalOpen?.id}
        open={isModalOpen !== undefined}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <h3 className="font-bold text-[18px] text-blue-800 ">
          {isModalOpen?.title}
        </h3>
        <p className="text-gray-400 text-[14px] line-clamp-3 ">
          {isModalOpen?.body}
        </p>
      </Modal>
    </>
  );
}
