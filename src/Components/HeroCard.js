export default function HeroCard(){

    return <div className="hero_card">
        <div className="hero_textarea">
            <section className="hero_text">
                <p className="hero_p"><span>Restore your energy..!</span></p>
                <p className="hero_p"><span>Reconnect with your body..!</span></p>
                <a href="#" className="hero_btn" onMouseEnter={()=>document.querySelector('.arrow-icon').style.width="20px"} onMouseLeave={()=>document.querySelector('.arrow-icon').style.width="0px"}><span style={{alignContent:"center",padding:"0px 1rem",fontSize:"large"}}>My Story</span><span><svg className="arrow-icon" width="0px" height="20px" viewBox="4 2 24 15" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#000000"/>
</svg></span></a>
            </section>
        </div>
        <div className="hero_imgarea">
                    <img src="image/buddha.png" alt="buddha-img" width={"100%"} height={"100%"} className="hero_img"></img>
            </div>
    </div>
}