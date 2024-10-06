import React from "react";
import Header from "../components/Header";
export default function Support() {
  return (
    <div className="container mx-auto ">
      <Header />
    <section className="h-[72vh] flex items-center justify-center ">
      
      <div>
        <div className="flex flex-col items-center space-y-4">
          <div className="inline-block px-4 py-2 text-green-200 border-2 border-green-500 rounded-full">
            Support Badge Under Upgrade..
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
