import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const Shipping = () => {

    const navigate = useNavigate();
    const [shippingInfo,setShippingInfo] = useState({
        address:"",
        city:"",
        state:"",
        country:"",
        pinCode:"",
    })

    const chnageHandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setShippingInfo((prev)=>({...prev,[e.target.name]: e.target.value}))
    }
  return (
    <div className="shipping">
            <button className="back-btn" onClick={()=>navigate("/cart")}><BiArrowBack/></button>

            <form action="">
                <h1>Shipping Address</h1>
                <input
                required
                type="text" 
                placeholder="Address" 
                name="address" 
                value={shippingInfo.address}
                onChange={chnageHandler}
                />
                
                <input
                required
                type="text" 
                placeholder="City" 
                name="city" 
                value={shippingInfo.city}
                onChange={chnageHandler}
                />

                <input
                required
                type="text" 
                placeholder="State" 
                name="state" 
                value={shippingInfo.state}
                onChange={chnageHandler}
                />
                
                <select
                name="country" 
                required 
                value={shippingInfo.country}
                onChange={chnageHandler}
                >
                    <option value="">Choose country</option>
                    <option value="india">India</option>
                </select>

                <input
                required
                type="number" 
                placeholder="Pincode" 
                name="pinCode" 
                value={shippingInfo.pinCode}
                onChange={chnageHandler}
                />

                <button type="submit">
                    Pay now
                </button>
            </form>
    </div>
  )
}

export default Shipping