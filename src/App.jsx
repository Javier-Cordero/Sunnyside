import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Services } from "./components/Services"
import { TestimonioContainer } from "./components/TestimonioContainer"
import { Galery } from "./components/Galery"
import { Footer } from "./components/Footer"
function App() {
  return (
    <main className="max-w-[1440] mx-auto relative">
        <Header />
        <Main/>
        <Services />
        <TestimonioContainer />
        <Galery />
        <Footer />
    </main>
  )
}
export default App
