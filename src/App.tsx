import BarChart from "./components/BarChart"
import Container from "./components/Container"
import Content from "./components/Content"
import Header from "./components/Header"

function App() {
  return (
    <main className="bg-lightCream h-screen grid place-items-center px-6 md:px-0">
      <Container>
        <Header />
        <Content>
          <BarChart />
        </Content>
      </Container>
    </main>
  )
}

export default App
