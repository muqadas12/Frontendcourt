import React,{Suspense,lazy} from "react";

const LoadingVideo=lazy(()=>import("./LoadingVideo"))
function VideoCall(){
  return(
    <div>
    <header className="nav-bar">
    <p className="item-left heading" style={{'fontWeight':'bold','fontSize':'25px','fontFamily': 'Times New Roman','marginTop':'-30'}}>Case Proceeding:</p>
  </header>
    <Suspense fallback={<div>Please wait...</div>}>

<LoadingVideo/>

    </Suspense>
    </div>


  )
}
export default VideoCall;
