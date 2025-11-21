import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoTopButton from "./components/GoTopButton";
import Home from "./pages/Home";


export default function App() {
return (
<>
<Navbar />
<main>
<Home />
</main>
<Footer />
<GoTopButton />
</>
);
}