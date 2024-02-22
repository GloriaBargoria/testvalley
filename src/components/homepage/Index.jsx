"use client";
import useFetchData from "@/hooks/useFetchData";
import React from "react";
import HeaderCarousel from "./HeaderCarousel";
import Example from "../layout/Navbar";
import Product from "./Products";

const Index = () => {
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


  return (
    <div className="w-screen">
      <Example />
      <HeaderCarousel banners={data?.data} />
      {data3?.map((data) => (
        <div className="grid grid-cols-5 gap-4 mx-auto max-w-5xl space-y-4" key={data?.id}>
          <div className="flex flex-col col-span-1 justify-start items-start p-4">
            <h3 className="font-semibold">{data?.title}</h3>
            <p className="text-xs font-light">{data?.subtitle}</p>
          </div>
          <div className="col-span-4">
             <Product teamData={data?.items} />
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Index;
