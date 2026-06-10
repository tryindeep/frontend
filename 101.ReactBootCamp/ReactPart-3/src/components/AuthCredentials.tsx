export function AuthCredentials(){
    return (
        <div style={{minHeight:"100vh" , display: "flex", alignContent:"center", justifyContent: "center",alignItems:"center"}}>

            <div style={{display:"flex" , justifyContent: "center", alignItems:"center", flexDirection: "column", }}>
                <div style={{fontSize: 30}}>
                    Login  in to Trello
                </div>
                <div>
                    Connect to Neon with: 
                </div>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button> Sign In </button>
            </div>
        </div>
    )
}