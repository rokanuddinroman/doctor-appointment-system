import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Layout } from "./Layout";
import Image from "next/image";

export const Navbar = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between gap-4 h-20">
        <Link href="/">
          <div className="relative h-12 aspect-[775/192]">
            <Image src="https://i.ibb.co/vz3vX32/Group-10.png" alt="" fill />
          </div>
        </Link>
        <div className="bg-[#EFF1FF] flex items-center gap-6 px-4 font-medium py-2 text-[#3F2A8C] rounded-full">
          <Link href="/">Home</Link>
          <Link href="/doctor-appointments">Doctor Appointments</Link>
          <Link href="my-appointments">My Appointments</Link>
        </div>
        <div>
          <Link href="/sign-in">
            <Button className="rounded-full" variant="default">
              Registration
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
