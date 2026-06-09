
import FunctionContextComponent from "./FunctionContext";
import { ThemeProvider } from "./ThemeContext";

function App(){
  
  return (
    <div>
      <ThemeProvider>
        <FunctionContextComponent/>
      </ThemeProvider>
    </div>
  )
}

export default App;

