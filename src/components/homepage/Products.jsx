import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
import "./team.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Product = ({ teamData }) => {
  const [buttonClicked, setButtonClicked] = useState("");

  useEffect(() => {
    setTimeout(() => setButtonClicked(""), 4000);
  }, [buttonClicked]);

  return (
    <div className="w-full">
      <div className="hidden md:block">
        <CarouselProvider
          naturalSlideWidth={340}
          naturalSlideHeight={450}
          totalSlides={teamData?.length}
          visibleSlides={4}
          isPlaying={teamData?.length > 4}
          infinite={true}
        >
          {/* <div className="flex justify-end p-8">
              <ButtonBack>
                <ArrowLeftCircleIcon
                  onClick={() => {
                    setButtonClicked("prev");
                  }}
                  className={`h-10 w-10 ${
                    buttonClicked === "prev"
                    ? "text-valleyGreen"
                    : "text-valleyGray"
                  }`}
                />
              </ButtonBack>
              <ButtonNext>
                <ArrowRightCircleIcon
                  onClick={() => {
                    setButtonClicked("next");
                  }}
                  className={`h-10 w-10 ${
                    buttonClicked === "next"
                      ? "text-valleyGreen"
                      : "text-valleyGray"
                  }`}
                />
              </ButtonNext>
            </div> */}
          <Slider>
            {teamData?.map((team, index) => (
              <Slide key={team.name}>
                <div
                  key={index}
                  className="text-valleyGray text-sm font-light drop-shadow-sm team-card h-auto"
                >
                  <div className="h-1/2">
                    {team?.publication?.media?.map((item, index) => (
                      <img
                        src={item.uri}
                        alt=""
                        className="w-full object-fit rounded-md"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="h-auto pl-3">
                    <div className="module mb-3 flex flex-row justify-between px-4 items-start">
                      <div className="fleex-flex-col">
                        <p className="font-light text-black">
                          {team?.publication?.productName}
                        </p>
                        <div>
                          {team?.publication?.priceInfo?.discountRate > 0 ? (
                            <p className="font-semibold text-black">
                              <span className="text-red-500 font-semibold">
                                {team?.publication?.priceInfo?.discountRate}%
                              </span>
                              {team?.publication?.priceInfo?.discountPrice}
                            </p>
                          ) : (
                            <p className="font-semibold text-black">
                              {team?.publication?.priceInfo?.price}
                            </p>
                          )}
                          <p>Something</p>
                        </div>
                        <div className="flex flex-row space-x-1 text-xs items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="0,0,0"
                            viewBox="0 0 24 24"
                            strokeWidth={0.5}
                            stroke="currentColor"
                            className="w-2 h-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>

                          <p className="font-light text-sm">
                            {team.publication?.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
      <div className="grid md:hidden">
        {teamData?.items?.map((team) => (
          <div
            key={index}
            className=" text-valleyGray text-sm font-light drop-shadow-sm grid grid-cols-2"
          >
            <div>
              {team?.publication?.media?.map((item, index) => (
                <img
                  src={item.uri}
                  alt=""
                  className="w-full object-fit"
                  key={index}
                />
              ))}
            </div>
            <div className="py-4 pl-3">
              <div className="module mb-3 flex flex-row justify-between px-4 items-start">
                <div>
                  <p className="font-semibold">
                    {team?.publication?.productName}
                  </p>
                  <div>
                    {team?.publication?.priceInfo?.discountPrice ? (
                      <p>
                        <span className="text-red-500">
                          {team?.publication?.priceInfo?.couponDiscountRate}%
                        </span>
                        {team?.publication?.priceInfo?.couponDiscountPrice}
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
