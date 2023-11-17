import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="border-t-1 border-1-black py-6 px-4 sm:px-3">
      <div className="max-w-[1160px] mx-auto flex sm:justify-between items-center justify-center flex-col sm:flex-row">
        <div className="flex max-w-sm flex-wrap gap-2 justify-center sm:justify-start mb-4 sm:mb-0">
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Terms of Service
          </Link>
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Do Not Sell or Share My Personal Information
          </Link>
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Trademarks
          </Link>
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Privacy Policy
          </Link>
          <span className="text-xs text-slate-500 font-normal mr-2">
            ©2023 Bloomberg L.P. All Rights Reserved.
          </span>
        </div>
        <div className="flex max-w-sm flex-wrap gap-2 justify-center sm:justify-start">
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Careers
          </Link>
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Made in NYC
          </Link>
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Advertise
          </Link>
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Ad Choices
          </Link>
          <Link className="text-xs text-slate-500 font-normal mr-2" href="">
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
