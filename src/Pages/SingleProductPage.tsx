import { useParams } from "react-router-dom"
const SingleProductPage = () => {
    const params =useParams();
  return (
    <div>SingleProductPage {params.productId}</div>
  )
}

export default SingleProductPage