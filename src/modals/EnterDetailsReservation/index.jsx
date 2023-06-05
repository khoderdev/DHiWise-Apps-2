import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text, TextArea } from "components";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectanaccasOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EnterDetailsReservationModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[78%]"
      overlayClassName="bg-gray_900_a3 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-8 items-end justify-start max-w-[1112px] mx-auto my-[76px] p-10 md:px-5 rounded-[16px] w-full">
          <div className="flex flex-row sm:gap-10 items-start justify-between w-[59%] md:w-full">
            <Text className="mt-5 text-gray_900" as="h5" variant="h5">
              Reservation
            </Text>
            <Img
              src="images/img_close.svg"
              className="common-pointer h-5 w-5"
              alt="close"
              onClick={props.onRequestClose}
            />
          </div>
          <div className="flex flex-col font-poppins gap-12 items-center justify-start mb-5 mr-5 w-[97%] md:w-full">
            <Text
              className="bg-light_blue_A100_7e font-normal h-16 justify-center max-w-[992px] md:max-w-full sm:px-5 px-[35px] py-5 rounded-[20px] text-black_900 w-full"
              variant="body2"
            >
              <span className="text-gray_801 text-xl font-poppins text-left">
                Due to limited availability, we can hold this table for you for
              </span>
              <span className="text-black_900 text-xl font-poppins text-left">
                {" "}
              </span>
              <span className="text-gray_900 text-xl font-poppins text-left font-semibold">
                5:00 minutes
              </span>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start md:mt-0 mt-1.5 w-[48%] md:w-full">
                <Text className="font-semibold text-black_900" variant="body1">
                  Data order
                </Text>
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Input
                    wrapClassName="w-full"
                    className="font-normal p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                    type="text"
                    name="Firstname"
                    placeholder="First name"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineGray400"
                  ></Input>
                  <Input
                    wrapClassName="w-full"
                    className="font-normal p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                    type="text"
                    name="Lastname"
                    placeholder="Last name"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineGray400"
                  ></Input>
                  <div className="bg-white_A700 border border-gray_400 border-solid flex flex-row gap-4 items-center justify-start p-3 rounded-lg w-full">
                    <SelectBox
                      className="sm:flex-1 mb-0.5 ml-1 w-[11%] sm:w-full"
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
                    <Text className="font-normal text-gray_500" variant="body2">
                      Phone number
                    </Text>
                  </div>
                  <Input
                    wrapClassName="w-full"
                    className="font-normal p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                    type="email"
                    name="Emailaddress"
                    placeholder="Email address"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineGray400"
                  ></Input>
                  <SelectBox
                    className="font-normal text-gray_500 text-left text-xl w-full"
                    placeholderClassName="text-gray_500"
                    indicator={
                      <Img
                        src="images/img_arrowdown_21X21.svg"
                        className="h-[21px] mr-5 w-[21px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                    isSearchable={false}
                    placeholder="Select an occasion"
                    shape="RoundedBorder8"
                    isMulti={false}
                    options={selectanaccasOptionsList}
                    name="Selectanaccas"
                    variant="OutlineGray400"
                  />
                  <TextArea
                    className="font-normal placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                    name="Addaspecialr"
                    placeholder="Add a special request"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="OutlineGray400"
                  ></TextArea>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-normal min-w-[475px] sm:min-w-full sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700"
                  onClick={() => navigate("/reservationhasbeenconfirmed")}
                  shape="RoundedBorder8"
                  size="lg"
                  variant="FillRed400"
                >
                  Confirm reservation
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col gap-[55px] items-center justify-start w-[44%] md:w-full">
                <div className="bg-bluegray_100_63 flex flex-col items-start justify-end p-[35px] sm:px-5 rounded-[20px] w-full">
                  <Text
                    className="font-semibold md:ml-[0] ml-[5px] mt-[5px] text-gray_900"
                    variant="body1"
                  >
                    Reservation detail
                  </Text>
                  <div className="flex flex-row gap-9 items-center justify-start mt-[47px] w-[95%] md:w-full">
                    <Img
                      src="images/img_calendar.svg"
                      className="h-[34px] w-[34px]"
                      alt="calendar"
                    />
                    <Text className="font-normal text-gray_801" variant="body2">
                      Saturday, 28 february 2022
                    </Text>
                  </div>
                  <div className="flex flex-row gap-9 items-center justify-start mt-[25px] w-[46%] md:w-full">
                    <Img
                      src="images/img_clock.svg"
                      className="h-[34px] w-[34px]"
                      alt="clock"
                    />
                    <Text className="font-normal text-gray_801" variant="body2">
                      04:30 pm
                    </Text>
                  </div>
                  <div className="flex flex-row gap-9 items-center justify-start mt-[25px] w-[95%] md:w-full">
                    <Img
                      src="images/img_user_34X34.svg"
                      className="h-[34px] w-[34px]"
                      alt="user"
                    />
                    <Text className="font-normal text-gray_801" variant="body2">
                      2 people (Standar seating)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-12 items-start justify-start">
                  <Text
                    className="font-semibold text-black_900"
                    variant="body1"
                  >
                    Restaurant informations
                  </Text>
                  <Text
                    className="font-normal text-gray_801 w-full"
                    variant="body2"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default EnterDetailsReservationModal;
