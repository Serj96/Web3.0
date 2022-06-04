import { Footer, Loader, NavBar, Services, Transactions, Welcom } from './components';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcom">
       <NavBar />
       <Welcom />
      </div>
       <Services />
       <Transactions />
       <Footer />
    </div>
  )
}

export default App;
