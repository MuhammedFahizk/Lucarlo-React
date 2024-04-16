interface props {
    children: string
}
const Button = ({children}: props) => {
  return (
    <button className=" my-3 mt-7 bg-white hover:bg-red-50 text-gray-800 font-semibold py-2 px-4 border border-red-400 rounded shadow">{children}</button>
  )
}

export default Button