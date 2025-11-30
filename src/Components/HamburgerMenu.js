import { useEffect, useState } from "react"

export default function HamburgerMenu(){

    const [active,setActive]=useState(false);

    useEffect(()=>{
        if(active){
            document.querySelector('.ham-item_middle').style.display="none"
            document.querySelector('.ham-item_top').classList.add('ham_active')
            document.querySelector('.ham-item_bottom').classList.add('ham_active')
            document.querySelector('.ham_menu_sec').classList.add('active')
        }else{
            document.querySelector('.ham-item_middle').style.display="block"
            document.querySelector('.ham-item_top').classList.remove('ham_active')
            document.querySelector('.ham-item_bottom').classList.remove('ham_active')
            document.querySelector('.ham_menu_sec').classList.remove('active')
        }
        console.log("clicked menu")
    },[active])

    return <div className="ham_menu" onClick={()=>setActive(e=>!e)}>
        <div className="ham-item_top"></div>
        <div className="ham-item_middle"></div>
        <div className="ham-item_bottom"></div>
        <div className="ham_menu_sec">
            <div className="ham_menu_item">Home</div>
            <div className="ham_menu_item">My Story</div>
            <div className="ham_menu_item">Meditation Practice</div>
            <div className="ham_menu_item">Healing Request</div>
            <div className="ham_menu_item">Contact Us</div>
        </div>
    </div>
} 