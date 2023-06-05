import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactPage = () => {
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
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
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
                  className="common-pointer text-gray_900_cc"
                  variant="body6"
                  onClick={() => navigate("/reservation")}
                >
                  Reservation
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[31px] w-[14%] sm:w-full">
                <Text className="text-gray_900_cc" variant="body6">
                  Contact us
                </Text>
                <Line className="bg-red_400 h-px w-[58%]" />
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
          <div className="flex flex-col gap-[19px] items-center justify-start mt-[117px]">
            <Text className="font-opensans text-gray_900" as="h1" variant="h1">
              Contact us
            </Text>
            <Text
              className="font-normal font-poppins text-center text-gray_801 w-full"
              variant="body1"
            >
              We love hearing from our customers. Feel free to share your
              experience or ask any questions you may have.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[50px] w-full">
            <div
              className="bg-cover bg-no-repeat h-[550px] md:h-[60px] p-[215px] md:px-10 sm:px-5 relative rounded-[24px] w-[48%] md:w-full"
              style={{ backgroundImage: "url('images/img_map.png')" }}
            >
              <Img
                src="images/img_location.svg"
                className="absolute bottom-[39%] h-[60px] inset-x-[0] mx-auto w-[9%]"
                alt="location"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[49%] md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start rounded-lg w-full">
                <Input
                  wrapClassName="w-full"
                  className="font-normal p-0 placeholder:text-gray_500 text-base text-gray_500 text-left w-full"
                  type="text"
                  name="Firstname"
                  placeholder="First name"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineGray400"
                ></Input>
                <Input
                  wrapClassName="w-full"
                  className="font-normal p-0 placeholder:text-gray_500 text-base text-gray_500 text-left w-full"
                  type="text"
                  name="Lastname"
                  placeholder="Last name"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineGray400"
                ></Input>
                <Input
                  wrapClassName="w-full"
                  className="font-normal p-0 placeholder:text-gray_500 text-base text-gray_500 text-left w-full"
                  type="email"
                  name="Emailaddress"
                  placeholder="Email address"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineGray400"
                ></Input>
                <Input
                  wrapClassName="w-full"
                  className="font-normal p-0 placeholder:text-gray_500 text-base text-gray_500 text-left w-full"
                  name="Subject"
                  placeholder="Subject"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="OutlineGray400"
                ></Input>
                <TextArea
                  className="font-normal leading-[normal] text-base placeholder:text-gray_500 text-gray_500 text-left w-full"
                  name="Massage"
                  placeholder="Message"
                  shape="RoundedBorder8"
                  size="lg"
                  variant="OutlineGray400"
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[540px] sm:min-w-full sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700"
                shape="RoundedBorder12"
                size="xl"
                variant="FillRed400"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray_901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
