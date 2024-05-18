import Paragraph from "./Paragraph";
import Button from "./Button";
const Banner = () => {
  return (
    <div className="lg-ms-24  lg-my-12 ">
       <div className="flex ">
        <div className="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
          <div className=" justify-center lg-mt-20">
            <Paragraph className="mt-20 mb-3 ">
              {[
                "Coz it never goes out of style! ...",
                "Put your fashion cape on and take on the world! # ...",
                "In fashion, less is more! # ...",
              ]}
            </Paragraph>

            <h1 className="font-bold text-4xl ">
              Dress like you're going somewhere better latter
            </h1>
            <Button>Explore More</Button>
          </div>
        </div>

        <div className="px-10 hidden lg:block  block justify-end ">
          <img
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1713249581~exp=1713253181~hmac=febb81fe822adddf963ebb15607d4fb958978f484893ca7a376d1b3dd7979a49&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
