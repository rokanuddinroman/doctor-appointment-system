import React from "react";
import { Navbar } from "../common/Navbar";
import { Layout } from "../common/Layout";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-[#3F2A8C] min-h-screen">
        <div className="rounded-b-[30px] py-10 bg-white">
          <Layout>
            <div>
              <h1 className="text-primary text-[48px] font-bold ">
                Book your doctor from the Appointments Section
              </h1>
            </div>
          </Layout>
        </div>
        <Layout>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-[#76F3BB] text-primary text-[24px] flex justify-center items-center p-8 rounded-xl">
              Room 1
            </div>
            <div className="bg-[#76F3BB] text-primary text-[24px] flex justify-center items-center p-8 rounded-xl">
              Room 1
            </div>
            <div className="bg-[#76F3BB] text-primary text-[24px] flex justify-center items-center p-8 rounded-xl">
              Room 1
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default HomePage;
