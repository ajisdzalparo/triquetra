import Typography from "../atoms/Typography";

const Footer = () => {
  return (
    <div className="w-full border-t bg-white border-gray-100 shadow-2xl mt-14">
      <div className="container flex flex-col gap-8 py-12">
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="/images/purple-logo.png"
            alt="triquetra"
            className="w-32 md:w-40"
          />
          <Typography
            variant="heading4"
            className="text-black mt-2 text-center sm:text-left"
          >
            Visibility . Intelligence . Automation
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-gray-300 pb-6">
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <Typography className="text-xs md:text-base">
              Global Headquarters
            </Typography>
            <Typography className="text-xs md:text-base">
              109 Pasir Ris Grove #01-22 Singapore 518199
            </Typography>
            <Typography className="text-xs md:text-base">
              sales@triquetra.cc
            </Typography>
          </div>

          <div className="flex justify-center sm:justify-start">
            <Typography className="text-xs md:text-base text-center sm:text-left">
              Privacy Notice
            </Typography>
          </div>

          <div className="flex justify-center sm:justify-start">
            <Typography className="text-xs md:text-base text-center sm:text-left">
              Master Subscription Agreement
            </Typography>
          </div>
        </div>

        <Typography className="text-center text-xs text-gray-400 md:text-base">
          Copyright (C) Triquetra Software Pte Ltd
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
