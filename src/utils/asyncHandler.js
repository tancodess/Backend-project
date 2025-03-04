const asyncHandler = (reqHandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,nect)).catch((e)=>next(e));
    }

}
export {asyncHandler}