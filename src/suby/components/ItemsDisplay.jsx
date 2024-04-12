import React,{useState} from 'react'
import { itemData } from '../../data'
const ItemsDisplay = () => {
    const[displayItem,setDisplayItem]=useState(itemData)
  return (
    <div>
        {
            <div className="itemSection">
                {displayItem.map((item)=>{
                    return(
                        <div className="gallery">
                            <img src={item.img_name} alt="image" />
                        </div>
                    )
                })}
            </div>
        }
    </div>
  )
}

export default ItemsDisplay