// expor    

import { useContext } from "react"
import { useTheme , useThemeUpdate} from "./ThemeContext"


export default function FunctionContextComponent(){
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const styles = {
                backgroundColor: darkTheme ? "#333" : "#CCC",
                color: darkTheme ? "#CCC" : "#333",
                padding : 5,
                margin: 5,
                height: 300,
                weight: 300    
            }
    return (
        <div>
            <button onClick={toggleTheme}> Theme Toggle</button>
            <div style={styles}>
                function Component
            </div>
            
        </div>
        
    )

}