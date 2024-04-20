import { useSelector } from "react-redux";
import {  Link } from "react-router-dom"

const Home = () => {
    const user = useSelector((state) => state.user); // Assuming 'user' is a property in your RootState

    console.log(user);

    return (
        <div className="p-20 bg-red-300 ">
        <h1 className="text-3xl px-10  my-3">Users Page</h1>
        <Link to={'/create'} className="mx-10 px-5 py-1 rounded-md bg-green-600 text-white">
          Add User
        </Link>
        <div className="p-5 px-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3 bg-white">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Email
                            </th>
                            <th scope="col" className="px-1 justify-center flex py-3 bg-white">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 dark:text-white dark:bg-gray-800">
                                    {item.id}
                                </th>
                                <td className="px-6 py-4 bg-white">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    {item.email} {/* Assuming 'email' is the correct property */}
                                </td>
                                <td className="px-1 py-4 justify-center flex bg-white">
                                    <button className="mx-2 bg-gray-500  text-white px-2 py-1  rounded-md">
                                        Edit
                                    </button>
                                    <button className="mx-2 bg-red-500  text-white px-2 py-1  rounded-md">
                                        Delete
                                    </button>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default Home;
