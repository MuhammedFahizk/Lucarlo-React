import Banner from "./Banner"
import Nav from "./Nav"

const Header = () => {
  return (
    <div >
        <Nav></Nav>
        <Banner></Banner>
        <hr className="lg:me-24  lg:ms-10 h-0.5 bg-red-500" />
        
    </div>
  )
}

export default Header