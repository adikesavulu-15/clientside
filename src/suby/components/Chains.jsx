
import React,{useEffect, useState} from 'react'
import { API_URL } from '../Api'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { RotatingLines } from 'react-loader-spinner'
const Chains = () => {
    const [userData,setUserData]=useState([])
    const[scrollPosition,setScrollPosition]=useState(0)
    const[loading,setLoading]=useState(true)
    const formHandler=async()=>{
        try {
            const response=await fetch(`${API_URL}/vendor/all-vendors`)

        const data=await response.json()

        setUserData(data)
        console.log("this is api data",data)
        setLoading(false)
        // console.log('dfgfgfgfg',data.results.firm.firmName)
        } catch (error) {
            alert("failed to fetch")
           console.log('it takes some time ooops') 
           setLoading(true)
        }
        
    }

    useEffect(()=>{
        formHandler();
    },[])


    const handleScroll=(direction)=>{
        const gallery=document.getElementById("chainId")
        const scrollAmount=500

        if(direction === 'left'){
            gallery.scrollTo({
                left:gallery.scrollLeft-scrollAmount,
                behavior:"smooth",
            })
        }else if(direction === 'right'){
            gallery.scrollTo({
                left:gallery.scrollLeft + scrollAmount,
                behavior:"smooth",
            })
        }
    }
    return (
  
       <>
        <div className="loaderSection">
        {loading &&  
       <>
            <div className="loader">
                Your food 🥗🥗 is loading
            </div>

            <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
       
       </>
       
       }
        </div>
       
       <br />
       <div className='title-des'>
            <h4>Best Food Outlets Near Me</h4>

            <div className="btnSection">
                <button onClick={()=>handleScroll("left")}><FaRegArrowAltCircleLeft/></button>
                <button onClick={()=>handleScroll("right")}><FaRegArrowAltCircleRight/></button>
            </div>
       </div>

         <section className="chainSection" id="chainId" onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
            {userData && userData.map((item)=>{
                return(
                    item.firm.map((i)=>{
                        return(
                            <div key={i._id} className="firmsEction">
                                <div className="card">
                                <img src={`${API_URL}/uploads/${i.image}`} className="card-image" alt="image" />
                                    <div className="card-img-overlay">
                                        {/* <h1 className="card-title">{i.firmName}</h1> */}
                                        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
                                    </div>
                                </div>
                                <br />
                            </div>
                          
                        )
                    })
                )
            })}
        </section>
       </>
    
  )
}

export default Chains