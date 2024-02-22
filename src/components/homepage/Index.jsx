"use client";
import useFetchData from "@/hooks/useFetchData";
import React, { useState } from "react";
import HeaderCarousel from "./HeaderCarousel";
import Example from "../layout/Navbar";
import Product from "./Products";
import ChatRoom from "./ChatRoom";
import ChatPage from "./ChatPage";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const handleChat = () => {
    setChatOpen(!chatOpen);
  };
  const { data, isLoading } = useFetchData(
    ["all-data"],
    "https://api.testvalley.kr/main-banner/all",
    {},
    "Couldn't fetch banner details",
    true
  );

  const { data: collection, isLoading: isLoadingCollection } = useFetchData(
    ["collection"],
    "https://api.testvalley.kr/collections?prearrangedDiscount",
    {},
    "Couldn't fetch banner details",
    true
  );

  const data3 = collection?.data?.items?.filter(
    (item) => item.type === "SINGLE" && item.viewType === "TILE"
  );

  const { data: shortcut, isLoading: isLoadingShortcut } = useFetchData(
    ["collection"],
    "https://api.testvalley.kr/main-shortcut/all",
    {},
    "Couldn't fetch banner details",
    true
  );

  console.log("chat open", chatOpen);

  return (
    <div className="w-screen">
      <Example />
      <HeaderCarousel banners={data?.data} />
      {data3?.map((data) => (
        <div
          className="grid grid-cols-5 gap-4 mx-auto max-w-5xl space-y-4"
          key={data?.id}
        >
          <div className="flex flex-col col-span-1 justify-start items-start p-4">
            <h3 className="font-semibold">{data?.title}</h3>
            <p className="text-xs font-light">{data?.subtitle}</p>
          </div>
          <div className="col-span-4">
            <Product teamData={data?.items} />
          </div>
        </div>
      ))}
      <button
        className="fixed bottom-4 right-4 cursor-pointer z-20"
        onClick={handleChat}
        aria-label="Open Chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#00d094"
          viewBox="0 0 24 24"
          strokeWidth={0.5}
          stroke="#ffffff"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>
      </button>
      {chatOpen && (
        <div className="fixed bottom-16 right-4 z-10">
          <ChatPage />
        </div>
      )}
    </div>
  );
};

export default Index;
