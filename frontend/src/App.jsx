import { Container } from 'react-bootstrap'
import './bootstrap.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Header />
      
        <Container>
        <h1>Welcome!</h1>
        </Container>
        <Footer />
      </main>
  )
}

export default App
