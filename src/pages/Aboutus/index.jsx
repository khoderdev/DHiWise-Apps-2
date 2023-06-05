import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const AboutusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              src="images/img_logo.svg"
              className="h-[51px] w-[12%]"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text className="text-gray_900_cc" variant="body6">
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                <Text
                  className="common-pointer text-gray_900_cc"
                  variant="body6"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start ml-8 sm:ml-[0] w-[12%] sm:w-full">
                <Text className="text-red_400" variant="body6">
                  About us
                </Text>
                <Line className="bg-red_400 h-px w-[69%]" />
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-gray_900_cc"
                  variant="body6"
                  onClick={() => navigate("/orderonline")}
                >
                  Order online
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                <Text
                  className="common-pointer text-gray_900_cc"
                  variant="body6"
                  onClick={() => navigate("/reservation")}
                >
                  Reservation
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-gray_900_cc"
                  variant="body6"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] rounded-[50%] w-[50px]"
              leftIcon={
                <Img
                  src="images/img_cart.svg"
                  className="m-[13px]"
                  alt="cart"
                />
              }
              variant="FillWhiteA700"
            ></Button>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm text-white_A700"
              shape="RoundedBorder16"
              size="md"
              variant="FillRed400"
            >
              Log in
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[78px] w-full">
            <div className="md:h-[541px] h-[543px] relative w-[543px] sm:w-full">
              <div className="bg-bluegray_100_63 flex flex-col sm:h-auto h-full items-center justify-start m-auto p-[52px] md:px-10 sm:px-5 rounded-[50%] w-[543px]">
                <div className="bg-bluegray_100_6c h-[437px] rounded-[50%] w-[437px]"></div>
              </div>
              <Img
                src="images/img_unsplashebmyh7.png"
                className="absolute h-[346px] inset-[0] justify-center m-auto rounded-[50%] w-[346px]"
                alt="unsplasheBmyHSeven"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-9 items-start justify-start rounded-[16px] w-[39%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="font-tinos leading-[110.00%] text-red_400"
                  as="h3"
                  variant="h3"
                >
                  <span className="md:text-[44px] sm:text-[38px] text-gray_902 text-[52px] font-opensans text-left font-bold leading-[normal]">
                    <>
                      About Our <br />
                    </>
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-red_400 text-[52px] font-opensans text-left font-bold leading-[normal]">
                    Restaurant
                  </span>
                </Text>
                <Text
                  className="font-normal font-poppins leading-[200.00%] text-gray_801 w-full"
                  variant="body2"
                >
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[232px] text-center text-white_A700 text-xl"
                shape="RoundedBorder16"
                size="xl"
                variant="FillRed400"
              >
                Order now
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[120px] w-full">
            <Text
              className="font-normal leading-[200.00%] text-gray_801"
              variant="body2"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </Text>
            <div className="md:h-[559px] h-[560px] relative w-[560px] sm:w-full">
              <div className="bg-bluegray_100_63 flex flex-col sm:h-auto h-full items-center justify-start m-auto p-[57px] md:px-10 sm:px-5 rounded-[50%] w-[560px]">
                <div className="bg-bluegray_100_63 h-[445px] rounded-[50%] w-[445px]"></div>
              </div>
              <Img
                src="images/img_unsplash5dsznc.png"
                className="absolute h-[354px] inset-[0] justify-center m-auto rounded-[50%] w-[354px]"
                alt="unsplash5dsZnC"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[120px] w-full">
            <Img
              src="images/img_unsplashlrawct.png"
              className="h-[629px] md:h-auto object-cover"
              alt="unsplashlRAWcT"
            />
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="font-tinos leading-[140.00%] text-gray_900 w-full"
                  as="h3"
                  variant="h3"
                >
                  <span className="md:text-[44px] sm:text-[38px] text-red_400 text-[52px] font-opensans text-left font-bold">
                    Owner
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-orange_600 text-[52px] font-opensans text-left font-bold">
                    {" "}
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-gray_900 text-[52px] font-opensans text-left font-bold">
                    & Executive Chef
                  </span>
                </Text>
                <Text
                  className="font-normal font-poppins text-gray_801"
                  as="h4"
                  variant="h4"
                >
                  Ismail Marzuki
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="font-tinos text-amber_800_6c"
                  as="h1"
                  variant="h1"
                >
                  “
                </Text>
                <Text
                  className="font-light font-poppins italic leading-[200.00%] text-gray_801 w-full"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text
                  className="font-tinos md:ml-[0] ml-[455px] rotate-[180deg] text-amber_800_6c"
                  as="h1"
                  variant="h1"
                >
                  “
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutusPage;
