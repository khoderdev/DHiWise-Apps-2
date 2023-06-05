import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";

const OrderonlinePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1112px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start w-full">
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
                <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                  <Text
                    className="common-pointer text-gray_900_cc"
                    variant="body6"
                    onClick={() => navigate("/aboutus")}
                  >
                    About us
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[31px] w-[17%] sm:w-full">
                  <Text className="text-red_400" variant="body6">
                    Order online
                  </Text>
                  <Line className="bg-red_400 h-px w-[49%]" />
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
            <Text
              className="font-opensans md:ml-[0] ml-[456px] mt-[117px] text-gray_900"
              as="h1"
              variant="h1"
            >
              Menu
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-7 items-center justify-between mt-[73px] rounded-[16px] w-full">
              <Button
                className="cursor-pointer font-normal min-w-[192px] text-center text-gray_900 text-xl"
                shape="RoundedBorder16"
                size="xl"
                variant="FillGray40063"
              >
                All Categories
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[232px] text-center text-white_A700 text-xl"
                shape="RoundedBorder16"
                size="xl"
                variant="FillRed400"
              >
                Pasta
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[192px] text-center text-gray_900 text-xl"
                shape="RoundedBorder16"
                size="xl"
                variant="FillGray40063"
              >
                Pizza
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[192px] text-center text-gray_900 text-xl"
                shape="RoundedBorder16"
                size="xl"
                variant="FillGray40063"
              >
                Dessert
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[192px] text-center text-gray_900 text-xl"
                shape="RoundedBorder16"
                size="xl"
                variant="FillGray40063"
              >
                Drink
              </Button>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-[46px] items-center justify-between mt-[70px] w-full">
              <div className="flex md:flex-1 flex-col gap-12 items-start justify-end pt-[7px] w-[66%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start w-[18%] md:w-full">
                  <Text
                    className="font-semibold text-gray_900"
                    as="h6"
                    variant="h6"
                  >
                    PASTA
                  </Text>
                  <Line className="bg-red_400 h-0.5 w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-5 rounded-[45px] w-full">
                      <div className="flex flex-col h-[173px] items-center justify-start w-[173px]">
                        <Img
                          src="images/img_kisspngitalian.png"
                          className="h-[173px] md:h-auto rounded-[50%] w-[173px]"
                          alt="kisspngitalian"
                        />
                      </div>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body2"
                      >
                        Spaghetti
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        src="images/img_kisspngtagliat.png"
                        className="h-[174px] md:h-auto rounded-[50%] w-[174px]"
                        alt="kisspngtagliat"
                      />
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body2"
                      >
                        Linguine
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <div className="h-[174px] relative rounded-[50%] shadow-bs4 w-[174px]">
                        <Img
                          src="images/img_kisspngitalian.png"
                          className="h-[173px] m-auto rounded-[50%] w-[174px]"
                          alt="kisspngitalian One"
                        />
                        <Img
                          src="images/img_kisspngpastai.png"
                          className="absolute h-[174px] inset-[0] justify-center m-auto rounded-[50%] w-[174px]"
                          alt="kisspngpastai"
                        />
                      </div>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body2"
                      >
                        Capellini
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <div className="h-[174px] relative rounded-[50%] shadow-bs4 w-[174px]">
                        <Img
                          src="images/img_kisspngitalian.png"
                          className="h-[173px] m-auto rounded-[50%] w-[173px]"
                          alt="kisspngitalian Two"
                        />
                        <Img
                          src="images/img_pngwing1.png"
                          className="absolute h-[174px] inset-[0] justify-center m-auto rounded-[50%] w-[174px]"
                          alt="pngwingOne"
                        />
                      </div>
                      <Text
                        className="font-semibold mt-6 text-gray_900"
                        variant="body2"
                      >
                        Fettuccine
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-3 rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          0
                        </Text>
                        <Button className="bg-transparent cursor-pointer h-[33px] ml-5 text-center w-[33px]"></Button>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        src="images/img_kisspngaldent.png"
                        className="h-[174px] md:h-auto rounded-[50%] w-[174px]"
                        alt="kisspngaldent"
                      />
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body2"
                      >
                        Linguine
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        src="images/img_image5.png"
                        className="h-[174px] md:h-auto rotate-[-180deg] rounded-[50%] w-[174px]"
                        alt="imageFive"
                      />
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body2"
                      >
                        Capellini
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-[9px] rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <div className="h-[174px] relative rounded-[50%] shadow-bs4 w-[174px]">
                        <Img
                          src="images/img_kisspngitalian.png"
                          className="h-[173px] m-auto rounded-[50%] w-[173px]"
                          alt="kisspngitalian Three"
                        />
                        <Img
                          src="images/img_pngwing2.png"
                          className="absolute h-[174px] inset-[0] justify-center m-auto rounded-[50%] w-[174px]"
                          alt="pngwingTwo"
                        />
                      </div>
                      <Text
                        className="font-semibold mt-6 text-gray_900"
                        variant="body2"
                      >
                        Fusilli
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-3 rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        src="images/img_pngwing3.png"
                        className="h-[174px] md:h-auto rounded-[50%] w-[174px]"
                        alt="pngwingThree"
                      />
                      <Text
                        className="font-semibold mt-6 text-gray_900"
                        variant="body2"
                      >
                        Farfalle
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-3 rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                      <Img
                        src="images/img_unsplasho3wkh.png"
                        className="h-[174px] md:h-auto rounded-[50%] w-[174px]"
                        alt="unsplashO3wkh"
                      />
                      <Text
                        className="font-semibold mt-6 text-gray_900"
                        variant="body2"
                      >
                        Penne Alla Vodak
                      </Text>
                      <div className="flex flex-row items-center justify-center mt-3 rounded-[1.13px] w-[57%] md:w-full">
                        <RatingBar
                          className="flex justify-between w-[103px]"
                          value={5}
                          starCount={5}
                          activeColor="#f54748"
                          size={15}
                        ></RatingBar>
                      </div>
                      <Text
                        className="mt-[11px] text-center text-gray_801 w-[94%] sm:w-full"
                        variant="body9"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas consequat
                      </Text>
                      <Text
                        className="font-semibold mt-[26px] text-gray_900"
                        variant="body3"
                      >
                        $12.05
                      </Text>
                      <div className="bg-gray_51 flex flex-row items-center justify-center mt-[15px] rounded-[16.5px] w-[66%] md:w-full">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text
                          className="ml-[21px] text-gray_900"
                          variant="body4"
                        >
                          0
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] ml-5 text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-end mb-[60px] md:mt-0 mt-[111px] py-[50px] rounded-[20px] shadow-bs5 w-[31%] md:w-full">
                <div className="flex flex-col gap-[54px] items-center justify-start mt-[3px] w-full">
                  <Text
                    className="font-semibold text-gray_900"
                    as="h6"
                    variant="h6"
                  >
                    Order list
                  </Text>
                  <Line className="bg-bluegray_101 h-px w-full" />
                </div>
                <List
                  className="flex-col gap-[50px] grid items-center mt-[39px] w-[83%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-10 items-center justify-end py-[9px] w-full">
                    <div className="flex flex-row items-start justify-between mt-1 w-full">
                      <Text
                        className="font-semibold text-black_900"
                        variant="body1"
                      >
                        Spaghetti
                      </Text>
                      <Button className="bg-transparent cursor-pointer h-6 text-center w-6"></Button>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray_51 flex flex-row items-center justify-between rounded-[16.5px] w-[42%]">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text className="text-gray_900" variant="body4">
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                      <Text
                        className="font-medium mt-1 text-gray_900"
                        variant="body1"
                      >
                        $24.1
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 items-center justify-end py-[9px] w-full">
                    <div className="flex flex-row items-start justify-between mt-1 w-full">
                      <Text
                        className="font-semibold text-black_900"
                        variant="body1"
                      >
                        Linguine
                      </Text>
                      <Button className="bg-transparent cursor-pointer h-6 text-center w-6"></Button>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray_51 flex flex-row items-center justify-between rounded-[16.5px] w-[42%]">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text className="text-gray_900" variant="body4">
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                      <Text
                        className="font-medium mt-1 text-gray_900"
                        variant="body1"
                      >
                        $35.7
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 items-center justify-end py-[9px] w-full">
                    <div className="flex flex-row items-start justify-between mt-1 w-full">
                      <Text
                        className="font-semibold text-black_900"
                        variant="body1"
                      >
                        Capellini
                      </Text>
                      <Button className="bg-transparent cursor-pointer h-6 text-center w-6"></Button>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray_51 flex flex-row items-center justify-between rounded-[16.5px] w-[42%]">
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineRedA20011"
                        ></Button>
                        <Text className="text-gray_900" variant="body4">
                          2
                        </Text>
                        <Button
                          className="cursor-pointer h-[33px] text-center w-[33px]"
                          shape="RoundedBorder16"
                          variant="OutlineGreen50011"
                        ></Button>
                      </div>
                      <Text
                        className="font-medium mt-1 text-gray_900"
                        variant="body1"
                      >
                        $18.5
                      </Text>
                    </div>
                  </div>
                </List>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[168px] items-center justify-end mt-[49px] p-[25px] sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group7767.svg')" }}
                >
                  <div className="flex flex-col gap-[26px] items-start justify-start mt-1.5 w-[97%] md:w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body1"
                    >
                      Voucher Code
                    </Text>
                    <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                      <Input
                        wrapClassName=""
                        className="font-normal leading-[normal] p-0 placeholder:text-light_blue_800 text-left text-light_blue_800 text-xl w-full"
                        name="group7722"
                        placeholder="FREETOEAT"
                        shape="RoundedBorder15"
                        size="md"
                        variant="FillGray51"
                      ></Input>
                      <Button
                        className="cursor-pointer h-[60px] text-center w-[60px]"
                        shape="RoundedBorder16"
                        variant="FillBlue400"
                      ></Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[39px] items-center justify-end mt-[39px] py-3 w-[83%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body1"
                    >
                      Subtotal
                    </Text>
                    <Text className="font-medium text-gray_900" variant="body1">
                      $78.3
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body1"
                    >
                      Tax fee
                    </Text>
                    <Text className="font-medium text-gray_900" variant="body1">
                      $3.5
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body1"
                    >
                      Voucher
                    </Text>
                    <Text className="font-medium text-gray_900" variant="body1">
                      $5.0
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body1"
                    >
                      Total
                    </Text>
                    <Text className="font-medium text-gray_900" variant="body1">
                      $76.8
                    </Text>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[283px] mt-[60px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700"
                  onClick={() => navigate("/checkout")}
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillRed400"
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="flex flex-row font-inter gap-2.5 items-center justify-start md:ml-[0] ml-[242px] mt-[50px] w-1/5 md:w-full">
              <Img
                src="images/img_arrowleft_black_900.svg"
                className="h-[15px] w-[15px]"
                alt="arrowleft"
              />
              <div className="flex flex-row gap-2.5 items-center justify-start w-[78%]">
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] text-center text-sm text-white_A700 tracking-[-0.50px] w-[35px]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGray900"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] text-black_900 text-center text-sm tracking-[-0.50px] w-[35px]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGray200"
                >
                  2
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] text-black_900 text-center text-sm tracking-[-0.50px] w-[35px]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGray200"
                >
                  3
                </Button>
                <Button
                  className="flex h-[35px] items-center justify-center w-[35px]"
                  shape="icbRoundedBorder4"
                  size="smIcn"
                  variant="icbFillGray200"
                >
                  <Img src="images/img_user.svg" className="h-5" alt="user" />
                </Button>
              </div>
              <Img
                src="images/img_arrowright.svg"
                className="h-[15px] w-[15px]"
                alt="arrowright"
              />
            </div>
          </div>
          <Footer className="bg-gray_901 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderonlinePage;
