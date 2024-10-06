import React from "react";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section className="flex items-center justify-center h-[72vh]">
      <div>
        <div className="flex flex-col items-center space-y-4">
          <div className="max-w-[100px]">
            <img src={logo} alt="logo" className="rounded-full" />
          </div>
          <div className="inline-block px-4 py-2 text-green-200 border-2 border-green-500 rounded-full">
            New: Moderator Bot
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-center text-green-100 sm:text-5xl lg:w-[500px]">
              Make A Professional Discord Server!
            </h1>
            <p className="tracking-tight text-center text-green-50 lg:w-[500px] mt-5">
              A very customizable multipurpose bot for welcome image, In-depth
              logs, Social commands, Moderation and many more ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
