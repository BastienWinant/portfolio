import Header from "@/components/header/Header.jsx"
import { Outlet } from "react-router"

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}