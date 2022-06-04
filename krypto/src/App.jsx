import { Footer, Loader, NavBar, Services, Transactions, Welcom } from './../components';

const App = () => {

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
  );
}

export default App;
