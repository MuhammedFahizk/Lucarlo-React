import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" justify-center">
        <h1 className="flex justify-center text-4xl mt-10">404 Bad Request</h1>
        <Link className="flex justify-center mt-3" to="/"><button className=" justify-center  bg-red-500 rounded px-2 text-2xl text-white">Home</button></Link>

        <div className="flex justify-center     ">
            <img src="/public/image/undraw_Page_not_found_re_e9o6.png" className="justify-center w-1/2  my-10" alt="" />
        </div>
    </div>
  );
};

export default ErrorPage;
