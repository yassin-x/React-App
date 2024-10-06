import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Footer() {
  const style = "flex mb-1 text-green-500 transition-all duration-300";
  return (
    <div className="">
      <div className="py-4">
        <footer className="relative gap-2 p-4 rounded-t-lg lg:grid lg:grid-cols-4 second-background">
          <div className="">
            <div className="max-w-[100px] mb-2">
              <img src={logo} alt="Logo" className="rounded-full" />
            </div>
            <p>
              A very customizable multipurpose bot for welcome image, In-depth
              logs, Social commands, Moderation and many more ...
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-medium">Website Pages</h4>
            <div>
              <Link to={"/"} className={style}>
                Dashboard
              </Link>
              <Link to={"/documents"} className={style}>
                Documents
              </Link>
              <Link to={"/support"} className={style}>
                Support
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-medium">Other Links</h4>
            <Link to={"/"} className={style}>
              Discord Support
            </Link>
            <Link to={"/"} className={style}>
              Top.gg
            </Link>
            <Link to={"/"} className={style}>
              Bot Invite
            </Link>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-medium">Rules</h4>
            <Link to={"/"} className={style}>
              Terms Of Use
            </Link>
            <Link to={"/"} className={style}>
              Privacy Policy
            </Link>
            <Link to={"/"} className={style}>
              Refund Policy
            </Link>
          </div>
        </footer>
        <div className="w-full p-[0.5px] three-background mt-1"></div>
        <div>©2024 All rights reserved.</div>
      </div>
    </div>
  );
}
