import Header from "@/components/header/Header.jsx"
import Footer from "@/components/footer/Footer.jsx"
import { Outlet } from "react-router"

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}