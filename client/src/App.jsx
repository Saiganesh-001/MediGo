import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Layout from "./routes/Layout/Layout"
import Homepage from "./routes/Homepage/Homepage"
import BeautyProducts from "./routes/BeautyProducts/BeautyProducts"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Homepage />,
				},
				{
					path: "/beauty-products",
					element: <BeautyProducts/>,
				},
			],
		},
	])
	return <RouterProvider router={router} />
}

export default App
