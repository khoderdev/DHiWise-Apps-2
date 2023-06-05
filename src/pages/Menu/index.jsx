import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { loginDeviceAuth } from "service/api";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";

import { handleSectionNavigation } from "utils";

import "react-toastify/dist/ReactToastify.css";

const MenuPage = () => {
  const [login, setLogin] = React.useState();
  const navigate = useNavigate();

  function login1() {
    const req = {};

    loginDeviceAuth(req)
      .then((res) => {
        setLogin(res?.data);

        navigate("/orderonline");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Cannot Login !! please check your credentials");
      });
  }

  return (
    <>
      <div
        className="common-pointer bg-gray_50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto pt-[51px] w-full"
        onClick={() => navigate("/homepage")}
      >
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[1140px] md:w-full">
            <Img
              src="images/img_logo.svg"
              className="h-[51px] md:w-1/4 w-[12%]"
              alt="Logo"
            />
            <div className="flex sm:flex-col flex-row font-bold font-opensans sm:gap-5 sm:items-center items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="common-pointer text-gray_900_a2"
                  variant="body6"
                  onClick={() => navigate("/homepage")}
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 sm:items-center items-start sm:justify-center justify-start ml-8 sm:ml-[0] w-[9%] sm:w-full">
                <Text
                  className="common-pointer text-red_400"
                  variant="body6"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Text>
                <Line className="bg-red_400 h-px w-full" />
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[29px]">
                <Text
                  className="common-pointer text-gray_900_cc"
                  variant="body6"
                  onClick={() => navigate("/aboutus")}
                >
                  About us
                </Text>
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
                  className="common-pointer hidden text-gray_900_cc"
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
              className="cursor-pointer flex h-[50px] md:hidden items-center justify-center md:ml-[0] ml-[122px] rounded-[50%] w-[50px]"
              leftIcon={
                <Img
                  src="images/img_cart.svg"
                  className="m-[13px]"
                  alt="cart"
                />
              }
              variant="FillWhiteA700"
            >
              <div className="md:hidden sm:hidden"></div>
            </Button>
            <Button
              className="common-pointer cursor-pointer font-semibold md:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm text-white_A700"
              onClick={() => {
                login1();
              }}
              shape="RoundedBorder16"
              size="md"
              variant="FillRed400"
            >
              Log in
            </Button>
          </div>
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
            <Text className="text-gray_900" as="h3" variant="h3">
              Our Popular Menu
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[232px] text-center text-white_A700 text-xl"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillRed400"
                >
                  All catagory
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-normal min-w-[192px] text-center text-gray_900 text-xl"
                  onClick={() => {
                    handleSectionNavigation("block2");
                  }}
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillGray40063"
                >
                  Dinner
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-normal min-w-[192px] text-center text-gray_900 text-xl"
                  onClick={() => {
                    handleSectionNavigation("block1");
                  }}
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillGray40063"
                >
                  Lunch
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
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                  <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        src="images/img_pngitem41084.png"
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        alt="PngItem41084"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            as="h6"
                            variant="h6"
                          >
                            Spaghetti
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray_800 w-full"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="hidden justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold hidden min-w-[158px] text-base text-center text-white_A700"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        src="images/img_pngitem1447549.png"
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        alt="PngItem1447549"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            as="h6"
                            variant="h6"
                          >
                            Gnocchi
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray_800 w-full"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="hidden justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold hidden min-w-[158px] text-base text-center text-white_A700"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        src="images/img_pngegg.png"
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        alt="pngegg"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            as="h6"
                            variant="h6"
                          >
                            Rovioli
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray_800 w-full"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="hidden justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold hidden min-w-[158px] text-base text-center text-white_A700"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-white_A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full"
                      id="block1"
                    >
                      <Img
                        src="images/img_pngwing.png"
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[95%]"
                        alt="pngwing"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-[15px] w-full">
                        <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            as="h6"
                            variant="h6"
                          >
                            Penne Alla Vodak
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray_800 w-full"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="hidden justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold hidden min-w-[158px] text-base text-center text-white_A700"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        src="images/img_pngitem5290903.png"
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        alt="PngItem5290903"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            as="h6"
                            variant="h6"
                          >
                            Risoto
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray_800 w-full"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="hidden justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold hidden min-w-[158px] text-base text-center text-white_A700"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        src="images/img_pngwing_270X270.png"
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        alt="pngwing One"
                        id="block2"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start mt-4 w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            as="h6"
                            variant="h6"
                          >
                            Splitza Signature
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray_800 w-full"
                            variant="body7"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="hidden justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-center mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="font-semibold text-gray_900"
                            variant="body1"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer cursor-pointer font-semibold hidden min-w-[158px] text-base text-center text-white_A700"
                            onClick={() => navigate("/checkout")}
                            shape="RoundedBorder8"
                            size="lg"
                            variant="FillRed400"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-inter gap-2.5 items-center justify-center w-1/5 md:w-full">
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
                      <Img
                        src="images/img_user.svg"
                        className="h-5"
                        alt="user"
                      />
                    </Button>
                  </div>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[15px] w-[15px]"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-5 w-full" />
      </div>
      <ToastContainer />
    </>
  );
};

export default MenuPage;
