

//structuring app into components
// defining a state of your application

// const ToggleMassge = () => {
//   const [notificationCount , setNotificationCount] = useState(0); //  defining a new state variable
  
//   console.log("re-render");
  
//   return (
//     <>

      
//       <button onClick={() => setNotificationCount(notificationCount+1)}> Increase Notification Count </button>
//       <p>{notificationCount}</p>
      
//     </>
//   )
// }

const style = {width:200 , backgroundColor: "white", borderRadius: 10, borderColor: "black", borderWidth:1, padding: 20}

export function PostComponent(props) {
    return (
      <div style={style}>
        <div style={{display: "flex"}}>
          <img src={props.image}  
            style={{
              width : 30,
              height : 30,
              borderRadius : 20
            }}
          />
          <div style={{fontSize: 10 , marginLeft: 10}}>
            <b>{props.name}</b>
            <div>{props.subtitle}</div>

            {(props.time !== undefined) ? <div style={{display: "flex"}}>
                <div>{props.time}</div>
                <img src={"/src/assets/clockImage.jpg"} alt="" 
                    style={{width : 10, height: 10, padding: 1}}
                  />
            </div> : <div></div>}
            
          </div>
        </div>
        <div style={{fontSize: 12}}>
            {props.description}
        </div>
      </div>
    )
}

// function ProfileCardComponent() {

// }
