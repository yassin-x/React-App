import About from "../components/About";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className="container mx-auto ">
      <Header />
      <About />
      <div className="flex items-center justify-center">
        <div className="inline-block px-4 py-2 text-green-200 border-2 border-green-500 rounded-full">
          Trusted By Over 5 Discord Servers, Including
        </div>
      </div>
    </div>
  );
}
