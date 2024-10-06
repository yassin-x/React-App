import { MdLogin } from "react-icons/md";
import Header from "../components/Header";
export default function Support() {


  return (
    <div className="container mx-auto ">
      <Header />
    <section className="h-[72vh] flex items-center justify-center">

      <div>
        <button
          className="flex items-center justify-center p-3 text-center transition-all duration-300 bg-green-900 rounded-md hover:bg-green-700"
        >
          <MdLogin className="mr-1" /> Login With Discord
        </button>
      </div>
    </section>
    </div>
  );
}
