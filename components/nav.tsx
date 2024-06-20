import Image from "next/image";
import { Varela, Roboto } from "next/font/google";

const varela = Varela({ weight: "400", subsets: ["latin"] });

export default function Nav() {
  return (
    <>
      <div
        className={`flex flex-col fixed w-1/5 md:w-72 py-12 px-4 md:px-8 overflow-hidden h-full border-r-2 border-[#232327] text-[#CCC] ${varela.className}`}
      >
        <ul className="flex flex-col py-8 gap-4 md:gap-0">
          <li>
            <a
              href="./"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
                <p className="">Doc 1</p>
            </a>
          </li>
        </ul>
        <div className="fixed bottom-10 text-sm hidden md:block">
          <p>
            Copyright © <i className="italic">2024</i>
          </p>
        </div>
      </div>
    </>
  );
}