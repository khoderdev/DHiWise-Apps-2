import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
  TextArea,
} from "components";
import Footer from "components/Footer";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1112px] mx-auto md:px-5 w-full">
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
                <div
                  className="common-pointer flex flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[31px] w-[17%] sm:w-full"
                  onClick={() => navigate("/orderonline")}
                >
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
            <div className="flex md:flex-col flex-row font-opensans md:gap-10 gap-[99px] items-start justify-start w-[87%] md:w-full">
              <Button
                className="flex h-[50px] items-center justify-center mb-[843px] rounded-[50%] w-[50px]"
                size="mdIcn"
                variant="icbFillGray900"
              >
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-4"
                  alt="arrowleft"
                />
              </Button>
              <div className="bg-white_A700 flex flex-col items-center justify-start p-[46px] md:px-10 sm:px-5 rounded-[16px] shadow-bs6 w-[85%] md:w-full">
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <Text className="text-gray_900" as="h5" variant="h5">
                    Checkout
                  </Text>
                  <div className="flex flex-col font-poppins gap-8 items-center justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start rounded-lg w-full">
                      <Text
                        className="font-medium text-gray_900"
                        variant="body3"
                      >
                        Shipping address
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-center justify-between rounded-lg w-full">
                        <Input
                          wrapClassName="sm:flex-1 sm:w-full"
                          className="font-normal p-0 placeholder:text-gray_900 text-base text-gray_900 text-left w-full"
                          name="Subject"
                          placeholder="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
                          shape="RoundedBorder8"
                          size="sm"
                          variant="OutlineGray400"
                        ></Input>
                        <Button
                          className="common-pointer cursor-pointer font-normal min-w-[166px] text-center text-lg text-white_A700"
                          onClick={() => navigate("/shippingaddress")}
                          shape="RoundedBorder8"
                          size="lg"
                          variant="FillIndigo300"
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="font-medium text-gray_900"
                        variant="body3"
                      >
                        Order data
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                            <Input
                              wrapClassName="sm:flex-1 sm:w-full"
                              className="font-normal p-0 placeholder:text-gray_500 text-base text-gray_500 text-left w-full"
                              type="text"
                              name="Emailaddress"
                              placeholder="First name"
                              shape="RoundedBorder8"
                              size="sm"
                              variant="OutlineGray400"
                            ></Input>
                            <Input
                              wrapClassName="sm:flex-1 sm:w-full"
                              className="font-normal p-0 placeholder:text-gray_500 text-base text-gray_500 text-left w-full"
                              type="text"
                              name="Emailaddress One"
                              placeholder="Last name"
                              shape="RoundedBorder8"
                              size="sm"
                              variant="OutlineGray400"
                            ></Input>
                          </div>
                          <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                            <div className="bg-white_A700 border border-gray_400 border-solid flex flex-row gap-4 items-center justify-start p-3 rounded-lg">
                              <SelectBox
                                className="mb-0.5 ml-1 w-[15%] sm:w-full"
                                placeholderClassName=""
                                indicator={
                                  <Img
                                    src="images/img_arrowdown.svg"
                                    className="h-[11px] mr-[0] w-[11px]"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="groupNinetyFour"
                                options={optionsList}
                                isSearchable={false}
                                placeholder=""
                              />
                              <Text className="text-gray_500" variant="body6">
                                Phone number
                              </Text>
                            </div>
                            <Input
                              wrapClassName="md:flex-1 md:w-full"
                              className="font-normal p-0 placeholder:text-gray_500 text-base text-gray_500 text-left w-full"
                              type="email"
                              name="Emailaddress Two"
                              placeholder="Email address"
                              shape="RoundedBorder8"
                              size="sm"
                              variant="OutlineGray400"
                            ></Input>
                          </div>
                          <TextArea
                            className="font-normal leading-[normal] text-base placeholder:text-gray_500 text-gray_500 text-left w-full"
                            name="Massage"
                            placeholder="Message"
                            shape="RoundedBorder8"
                            size="md"
                            variant="OutlineGray400"
                          ></TextArea>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="font-medium text-gray_900"
                          variant="body3"
                        >
                          Payment method
                        </Text>
                      </div>
                      <RadioGroup
                        className="flex flex-col w-full"
                        name="paymentmethod"
                      >
                        <RadioGroup
                          className="flex flex-1 w-full"
                          name="radiogroupcashondeliver"
                        >
                          <Radio
                            value="CashOnDelivery"
                            className="font-normal leading-[normal] text-gray_900 text-left text-lg"
                            inputClassName="h-6 mr-[5px] w-6"
                            checked={false}
                            name="radiogroupcashondeliver"
                            label="Cash On Delivery"
                            id="CashOnDelivery"
                            size="md"
                            variant="OutlineGray900"
                          ></Radio>
                          <Radio
                            value="BCAVirtualAccount"
                            className="font-normal leading-[normal] ml-4 text-gray_900 text-left text-lg"
                            inputClassName="h-6 mr-[5px] w-6"
                            checked={false}
                            name="radiogroupcashondeliver"
                            label="BCA Virtual Account"
                            id="BCAVirtualAccount"
                            size="sm"
                            variant="OutlineGray900"
                          ></Radio>
                        </RadioGroup>
                        <RadioGroup
                          className="flex flex-1 mt-6 w-full"
                          name="radiogroupcreditcard"
                        >
                          <Radio
                            value="CreditCard"
                            className="font-normal leading-[normal] text-gray_900 text-left text-lg"
                            inputClassName="h-6 mr-[5px] w-6"
                            checked={false}
                            name="radiogroupcreditcard"
                            label="Credit Card"
                            id="CreditCard"
                            size="sm"
                            variant="OutlineGray900"
                          ></Radio>
                          <Radio
                            value="TransferBank"
                            className="font-normal leading-[normal] ml-4 text-gray_900 text-left text-lg"
                            inputClassName="h-6 mr-[5px] w-6"
                            checked={false}
                            name="radiogroupcreditcard"
                            label="Transfer Bank"
                            id="TransferBank"
                            size="sm"
                            variant="OutlineGray900"
                          ></Radio>
                        </RadioGroup>
                      </RadioGroup>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[722px] md:min-w-full text-center text-white_A700 text-xl"
                      shape="RoundedBorder12"
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
          <Footer className="bg-gray_901 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
