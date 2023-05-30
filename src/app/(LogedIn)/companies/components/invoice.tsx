import React from "react";
import Barcode from "react-barcode";

export const Invoice = () => {
  return (
    <div className="max-w-[85rem] p-10">
      <div className="flex items-center justify-between ">
        <div className="flex justify-between">
          <div>
            <svg
              className="w-10 h-10"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12"
                className="stroke-blue-600 dark:stroke-white"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12"
                className="stroke-blue-600 dark:stroke-white"
                stroke="currentColor"
                stroke-width="2"
              />
              <circle
                cx="13"
                cy="13.0214"
                r="5"
                fill="currentColor"
                className="fill-blue-600 dark:fill-white"
              />
            </svg>

            <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">
              Preline Inc.
            </h1>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Invoice</h2>
          <div className="">
            <Barcode
              value="http://github.com/kciter"
              width={1}
              height={30}
              fontSize={12}
              margin={0}
              // format="EAN13"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
