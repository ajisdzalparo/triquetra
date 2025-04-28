import Typography from "../atoms/Typography";

const Card = ({ text }) => {
  return (
    <div className="bg-secondary-blue border border-primary-blue rounded-lg p-4 md:p-8 xl:0w-[250px] xl:h-[250px] md:w-full md:h-full flex flex-col items-center justify-center flex-grow">
      <Typography
        variant="heading3"
        className="text-primary-blue text-center text-base md:text-lg lg:text-xl xl:text-2xl"
      >
        {text}
      </Typography>
    </div>
  );
};

export default Card;
