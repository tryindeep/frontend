import { Container } from "./components/container"
import { Navbar } from "./components/navbar"
export default function Home() {
  return (
    <div className="layout">
      <Container> 
       <Navbar/>
      </Container>
    </div>
  )
}
