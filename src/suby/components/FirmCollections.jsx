import React,{useState,useEffect} from 'react'
import { API_URL } from '../Api'
import { Link } from 'react-router-dom'
const FirmCollections = () => {
    const[firmData,setFirmData]=useState([])
    const[filterResults,setFilterResults]=useState('All')
    const [activeCategory,setActiveCategory]=useState('all')
    const getFirmData=async()=>{
        try {
            const response=await fetch(`${API_URL}/vendor/all-vendors`)

        const data=await response.json()

        console.log('f data',data)

        setFirmData(data)
        } catch (error) {
            alert("failed to fetch firm data")
        }
    }

    useEffect(()=>{
        getFirmData();
    },[])

    const filterHandler=(region,category)=>{
        setFilterResults(region)
        setActiveCategory(category)
    }
    const filterByArea=(e)=>{
        const area=e.target.value
        setFilterResults(area)
        
    }
  return (
    <>
    <h4>Restaurants with online food delivery in Hyderabad</h4>
    <div className="filterButtons">
        <button onClick={()=>filterHandler("All",'all')} className={activeCategory === 'all'?'activeButton':''}>All</button>
        <button onClick={()=>filterHandler("south",'south')} className={activeCategory==='south'?'activeButton':''}>South</button>
        <button onClick={()=>filterHandler("north",'north')} className={activeCategory==='north'?'activeButton':''}>North</button>
        <button onClick={()=>filterHandler("chineese",'chineese')} className={activeCategory==='chineese'?'activeButton':''}>Chineese</button>
        <button onClick={()=>filterHandler("bakery",'bakery')} className={activeCategory==='bakery'?'activeButton':''}>Bakery</button>&nbsp;
        <input type="text" className='searchByText' onChange={filterByArea} placeholder="search by text"/>

    </div>
    <br />
        <section className="firmSection">
        {firmData.map((item)=>{
            return item.firm.map((i)=>{
                    if(filterResults=== "All" || i.region.includes(filterResults) || i.area.includes(filterResults) || i.firmName.includes(filterResults)){
                    
                        
                        return(
                            <Link to={`/products/${i._id}`} className='link'>
                            
                                <div key={i._id} className="firmsEction">
                                    <div className="">
                                        <img src={`${API_URL}/uploads/${i.image}`} className="card-imageFirmCol" alt="image" />
                                        <div>
                                            <p className="img-overlay1"> {i.offer}off on above ₹ 599</p>
                                        </div>
                                        <div className='infoFirm'>
                                            {/* {i._id} */}
                                            <span>{i.firmName}</span><br />
                                            <span id="span2">{i.region.join(',')}</span><br />
                                            <span id="span3">{i.area}</span>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            
                            </Link>
                        );
                    }
                })
                return null;
                 
                
})}
       

        </section>
    </>
  );
};

export default FirmCollections