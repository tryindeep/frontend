export function AuthBanner(){
    return (
        <div style={{minHeight: "100vh", backgroundColor: "black", display:"flex" ,alignItems: "center", justifyContent:"center"}}>
            
            <div style={{display : "flex" ,alignItems:"center", flexDirection:"column"}}>
                <img src="./logo.jpg" alt="" style={{width:200, height:200}}/>
            <h1 style={{color: "white" , fontFamily: "Inter"}}>Build a board, get the job done!</h1>
            </div>
            
        </div>
    )
}