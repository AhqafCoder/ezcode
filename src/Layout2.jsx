
import Navbar2 from './components/Navbar2';


export default function Layout({ children }) {
  return (
    <div>
      <Navbar2 />
      
      {children}
    </div>
  );
}