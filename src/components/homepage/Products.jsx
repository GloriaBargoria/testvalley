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

// const teamData = [
//   {
//     image: three,
//     name: "Rezin M'gode",
//     role: "Head of Operations",
//     facebook: "https://www.facebook.com",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     image: five,
//     name: "Precious Mulenga",
//     role: "Head Sales and Marketing",
//     facebook: "https://www.facebook.com",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     image: six,
//     name: "Kelvin Zimba",
//     role: "Lead Counsel and Head of Legal",
//     facebook: "https://www.facebook.com",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     image: bendon,
//     name: "Bendon Murgor",
//     role: "Head of Tech",
//     facebook: "https://www.facebook.com",
//     linkedin: "https://www.linkedin.com/in/",
//   },
// ];

const CustomArrowLeft = ({ className, onClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`${className} h-10 w-10`}
      >
        <ArrowLeftCircleIcon to="prev" />
      </button>
    </div>
  );
};
const CustomArrowRight = ({ className, onClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`${className} h-10 w-10 text-black`}
      >
        <ArrowRightCircleIcon to="next" />
      </button>
    </div>
  );
};

const Product = ({ teamData }) => {
  // console.log("team data", teamData)
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
                  className="text-valleyGray text-sm font-light drop-shadow-sm team-card"
                >
                  <div className="h-2/3">
                    {team?.publication?.media?.map((item, index) => (
                      <img
                        src={item.uri}
                        alt=""
                        className="w-full object-fit"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className=" pl-3">
                    <div className="module mb-3 flex flex-row justify-between px-4 items-start">
                      <div className="fleex-flex-col">
                        <p className="font-semibold">
                          {team?.publication?.productName}
                        </p>
                        <div>
                          {team?.publication?.priceInfo?.discountPrice ? (
                            <p>
                              <span className="text-reed-500">
                                {
                                  team?.publication?.priceInfo
                                    ?.couponDiscountRate
                                }
                              </span>
                              {
                                team?.publication?.priceInfo
                                  ?.couponDiscountPrice
                              }
                            </p>
                          ) : (
                            <p></p>
                          )}
                        </div>
                        <p className="font-light text-sm">{team.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
      <div className="flex md:hidden">
        {teamData?.items?.map((team) => (
          <div
            key={index}
            className=" text-valleyGray text-sm font-light drop-shadow-sm team-card grid grid-cols-2"
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
                        <span className="text-reed-500">
                          {team?.publication?.priceInfo?.couponDiscountRate}
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
