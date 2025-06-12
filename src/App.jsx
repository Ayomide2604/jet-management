import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
	const currentPath = useLocation().pathname;
	return (
		<>
			<Header />

			<div className="app" style={{ minHeight: "100vh" }}>
				<Routes>
					<Route path="/" element={<h1>HomeScreen</h1>} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
