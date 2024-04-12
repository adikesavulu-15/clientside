import React,{useState,useEffect} from 'react'
import { API_URL } from '../Api'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
const FirmProducts = () => {
    const [productData,setProductData]=useState([])
    const[firmName,setFirmName]=useState([])
    const {firmId}=useParams()
    console.log(firmId)
    
    const productsHandler=async()=>{
        try {
            const getProductsData=await fetch(`${API_URL}/product/${firmId}/products`)
            const newData=await getProductsData.json()
            console.log(newData.products)
            console.log(newData.rest)
            setFirmName(newData.rest)
            setProductData(newData.products,newData.rest)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
      productsHandler();
    },[])
  return (
    <>
      <Navbar/>
      <section className='firmProducts'>
      <h4 align="center" className='firmNameInProductPage'>{firmName}</h4>
      {productData.length >0 ? productData.map((i)=>{
        return(
          <div className='productsSection'>
            <div>
              
              <h5>{i.productName}</h5>
              <span style={{fontSize:'16px',color:'black'}}>₹{i.price}</span><br />
              <span>{i.category.join(',')}</span><br />
              <span>{i.description}</span>
            </div>
            <div className='forImage'>
              <img src={`${API_URL}/uploads/${i.image}`} className="productImage"alt="image" />
              <button>ADD</button>
            </div>
            
          </div>
          
        )
      }): <p align="center" style={{fontWeight:'500',paddingTop:'200px'}}>No products are available</p>}
     
      </section>
      
    </>
  )
}

export default FirmProducts