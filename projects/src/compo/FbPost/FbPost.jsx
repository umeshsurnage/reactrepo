import React from "react";
import FbPostData from "./FbPostData";
import FbPostContent from "./FbPostContent";

function FbPost(){
return<>
{FbPostData.map((value, index)=>{
  return(
     <FbPostContent{...value} key={index}></FbPostContent>
  )
})

}
</>
}

export default FbPost