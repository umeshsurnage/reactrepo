import { useEffect, useState } from "react"
function Slider(){
const [count, setCount]=useState(0)

const [className, setClassName] = useState('slideHide');

let slider = ['/slider0.jpg','/slider1.jpg','/slider2.jpg']

  useEffect(()=>{
    const interval = setInterval(() => {
      if(count>=slider.length-1){
        setCount(0)
      }else{
        setCount(count+1)
      }
    }, 5000);
    return ()=> clearInterval(interval)
  })  
  
useEffect(()=>{
  switch(count){
    case 0:
    setClassName('slideOne');
    break;
    case 1:
      setClassName('slideTwo');
      break;
    case 2:
      setClassName('slideThree');
      break;
  }
  // if (count == 0) {
  //   setClassName('slideShow');
  // } else {
  //   setClassName('slideHide');
  // }
},[count])

function right(){
if(count>=slider.length-1){
  setCount(0);

}else{
  setCount(count+1)
}
}

function left(){
    if(count> 0){
      setCount(count-1)
    }else{
      setCount(slider.length-1)
    }  
  }
  return <>
  <div className="">
    <h1 className="center">Slider</h1>
    <p className="center">Image: {count+1}</p>
    <hr />
    <div className="slider">
      <div className="left">
        <a href="#" onClick={left}><i className="fa-solid fa-circle-arrow-left"></i></a>
      </div>
      <div className="slide-img">        
        <img src={slider[count]} className={className}/>

        {/* <img src="/slider0.jpg" alt="" className="slideHide" />
        <img src="/slider1.jpg" alt="" className="slideHide" />
        <img src="/slider2.jpg" alt="" className="slideHide" /> */}

        {/* {slider.map((value, index)=>{
          return <>
          <img key={index} src={value} />
          </>
        })} */}
        <div className="indicators">
          {slider.map((value, index)=>{
            return <a key={index} href="#" onClick={()=>setCount(index)}>
              <img src="/slider1.jpg" alt=""/>
            </a>
          })}

          {/* <a href="#" onClick={()=>setCount(0)}><i className="fa-solid fa-circle"></i></a>
          <a href="#" onClick={()=>setCount(1)}><i className="fa-solid fa-circle"></i></a>
          <a href="#" onClick={()=>setCount(2)}><i className="fa-solid fa-circle"></i></a> */}
        </div>

      </div>
      <div className="right">
        <a href="#" onClick={right} ><i className="fa-solid fa-circle-arrow-right"></i></a>
      </div>
    </div>
  </div>
  </>
}

export default Slider