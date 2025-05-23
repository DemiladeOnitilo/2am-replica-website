import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const PayoutSettings = () => {
  const [formData, setFormData] = useState({
    type: "",
  });
  const [isActive, setIsActive] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const bankTransfer = [
    {
      name: "Bank Account Name",
      message: "Add bank account title here",
    },
    {
      name: "Bank Account Number",
      message: "Add bank account number here",
    },
    {
      name: "Bank Name",
      message: "Add bank name here",
    },
    {
      name: "Bank Routing Number",
      message: "Add bank routing number here",
    },
    {
      name: "Bank IBAN",
      message: "Add bank IBAN here",
    },
    {
      name: "Bank BIC/SWIFT",
      message: "Add bank BIC Swift here",
    },
  ];

  return (
    <div className="flex shadow-[0_0_15px_rgba(0,0,0,0.25)] h-full w-[75%]">
      <div className="flex flex-col bg-gray-50 w-[30%]">
        {["Payout Settings", "Your Payout"].map((items, index) => (
          <div
            key={index}
            onClick={() => setIsActive(index)}
            className="group relative"
          >
            <ul
              className={`flex  ${
                isActive === index
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-black hover:bg-white"
              } transition-all ease-in-out duration-700`}
            >
              <div
                className={`absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 scale-y-0 origin-top group-hover:scale-y-100 z-1 ${
                  isActive === index && "scale-y-100"
                }`}
              ></div>
              <li className="p-4 pl-9 w-full cursor-pointer">{items}</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="h-full min-h-[600px] p-8 w-[70%]">
        {isActive === 0 && (
          <div className="flex flex-col gap-10">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Payouts Settings</h2>
            </div>
            <div className="flex flex-col  gap-10 px-6">
              <p>
                All the earning will be sent to below selected payout method
              </p>
              <div className="flex justify-between items-center p-8 border border-gray-300">
                <div className="flex flex-col gap-5">
                  <img
                    src="https://2am.ng/wp-content/uploads/2024/08/wallet.png"
                    alt="Wallet"
                    className="w-15 h-15"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-gray-400 text-sm">Available Balance</p>
                    <p className="text-xl">₦0.00</p>
                  </div>
                </div>
                <button className="bg-[#E17A1B] text-white font-bold px-8 py-2 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 cursor-pointer">
                  Withdraw Now
                </button>
              </div>
              <div className="flex flex-col gap-5 transition-all ease-in-out duration-500 w-full h-full">
                <div className="block ">
                  <div className="w-[40%]">
                    <label
                      htmlFor="payPal"
                      className="relative flex items-center text-sm gap-2 p-6 cursor-pointer border border-gray-300 w-full"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, type: "paypal" }))
                      }
                    >
                      <input
                        type="radio"
                        name="type"
                        value="paypal"
                        onChange={handleChange}
                        checked={formData.type === "paypal"}
                        className="h-5 w-5 cursor-pointer accent-green-500 border-0 "
                      />
                      <img
                        src="https://2am.ng/wp-content/themes/workreap/images/payouts/paypal.png"
                        alt="pay-pal"
                      />
                    </label>
                  </div>
                  <div
                    className={`flex flex-col gap-5  ${
                      formData.type === "paypal"
                        ? "max-h-90 opacity-100 py-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm">
                      You need to add your PayPal ID below in the text field.
                      For more about link{" "}
                      <a
                        href="https://www.paypal.com/fr/home"
                        className="text-[#E17A1B] underline cursor-pointer"
                      >
                        PayPal
                      </a>{" "}
                      |{" "}
                      <a
                        href="https://www.paypal.com/signin?locale.x=fr_FR"
                        className="text-[#E17A1B] underline cursor-pointer"
                      >
                        Create an account
                      </a>
                    </p>
                    <div className="w-[50%] text-sm col-span-2 relative">
                      <input
                        name="paypalEmail"
                        type="text"
                        placeholder="Add PayPal Email Address"
                        className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                      />
                      <div className="absolute top-4 right-3 group inline-flex items-center">
                        <FaQuestionCircle />
                        <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                          <h1>Your PayPal email address</h1>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block ">
                  <div className="w-[40%]">
                    <label
                      htmlFor="bankTransfer"
                      className="relative flex items-center text-sm gap-2 p-6 cursor-pointer border border-gray-300 w-full"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          type: "bankTransfer",
                        }))
                      }
                    >
                      <input
                        type="radio"
                        name="type"
                        value="bankTransfer"
                        onChange={handleChange}
                        checked={formData.type === "bankTransfer"}
                        className="h-5 w-5 cursor-pointer accent-green-500 border-0 "
                      />
                      <img
                        src="https://2am.ng/wp-content/themes/workreap/images/payouts/bank.png"
                        alt="bank-transfer"
                      />
                    </label>
                  </div>
                  <div
                    className={`flex flex-col gap-5  ${
                      formData.type === "bankTransfer"
                        ? "max-h-90 opacity-100 py-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm">
                      Please add all required settings for the bank transfer.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {bankTransfer.map((items, index) => (
                        <div key={index} className="w-full text-sm relative">
                          <input
                            name="paypalEmail"
                            type="text"
                            placeholder={items.name}
                            className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                          />
                          <div className="absolute top-4 right-3 group inline-flex items-center">
                            <FaQuestionCircle />
                            <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-red-500 text-white text-sm px-8 py-2 rounded shadow-lg whitespace-nowrap z-10">
                              <h1>{items.message}</h1>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className=" w-[40%]">
                    <label
                      htmlFor="payoneer"
                      className="relative flex items-center text-sm gap-2 p-6 cursor-pointer border border-gray-300 w-full"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, type: "payoneer" }))
                      }
                    >
                      <input
                        type="radio"
                        name="type"
                        value="payoneer"
                        onChange={handleChange}
                        checked={formData.type === "payoneer"}
                        className="h-5 w-5 cursor-pointer accent-green-500 border-0 "
                      />
                      <img
                        src="https://2am.ng/wp-content/themes/workreap/images/payouts/payoneer.jpg"
                        alt="payoneer"
                      />
                    </label>
                  </div>
                  <div
                    className={`flex flex-col gap-5  ${
                      formData.type === "payoneer"
                        ? "max-h-90 opacity-100 py-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm">
                      You need to add your payoneer email ID below in the text
                      field.{" "}
                      <a
                        href="https://www.payoneer.com/"
                        className="text-[#E17A1B] underline cursor-pointer"
                      >
                        Payoneer
                      </a>{" "}
                      |{" "}
                      <a
                        href="https://login.payoneer.com/?sessionDataKey=f1759fa55c1a49f19ef3928b76c42476----&state=8646d89d-133b-4944-a0fc-39158cb4ba23&provider_id=internal&client_id=b3d186db-4e5d-49c8-8a12-5753136af807&redirect_uri=https%3A%2F%2Fmyaccount.brand.domain%2Flogin%2Flogin.aspx&scope=myaccount+openid&response_type=code"
                        className="text-[#E17A1B] underline cursor-pointer"
                      >
                        Create an account
                      </a>
                    </p>
                    <div className="w-[50%] text-sm col-span-2 relative">
                      <input
                        name="paypalEmail"
                        type="text"
                        placeholder="Add Payoneer Email Address"
                        className="border border-gray-300 w-full p-3 pl-6 rounded  outline-none focus:border-[#E17A1B] transition-all ease-in-out duration-400"
                      />
                    </div>
                  </div>
                </div>
                <button className="bg-[#E17A1B] w-[30%] text-white font-bold px-8 py-2 rounded transition duration-300 ease-in-out transform hover:bg-[#E17A1B] hover:shadow-2xl/10 hover:scale-105 cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
        {isActive === 1 && (
          <div className="flex flex-col gap-5">
            <div className="bg-gray-50 relative w-full p-3 text-black font-bold">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#E17A1B] rounded-t transition-all duration-700 origin-top z-1 scale-y-100 "></div>
              <h2 className="ml-5">Completed Jobs</h2>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 h-[700px] justify-center items-center border-2 border-dashed border-gray-200">
                <img
                  src="https://2am.ng/wp-content/uploads/2024/08/out-of-stock.png"
                  alt="out-of-stock"
                  className="h-[200px]"
                />{" "}
                <p className="text-xl text-gray-400">No payments found yet.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayoutSettings;
