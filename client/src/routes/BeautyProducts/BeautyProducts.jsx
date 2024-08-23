import { Box, Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import ProductFilter from "../../components/ProductFilter/ProductFilter"
import ListProducts from "../../components/ListProducts/ListProducts"

const BeautyProducts = () => {
	const [company, setCompany] = useState("all")
	const [category, setCategory] = useState("all")
	const [availability, setAvailability] = useState("both")
	const [minPrice, setMinPrice] = useState(undefined)
	const [maxPrice, setMaxPrice] = useState(undefined)
	const [topProducts, setTopProducts] = useState(undefined)
	const [sortOption, setSortOption] = useState("featured")
	const [orderList, setOrderList] = useState("true")
	const [beautyProducts, setBeautyProducts] = useState([])
	const [uniqueCompanies, setUniqueCompanies] = useState([])
	const [uniqueCategories, setUniqueCategories] = useState([])

	async function fetchProductData() {
		let baseUrl
		try {
			if (company !== "all" && category !== "all") {
				baseUrl = `http://localhost:4000/api/v1/companies/${company}/categories/${category}/products`
			} else if (company !== "all") {
				baseUrl = `http://localhost:4000/api/v1/companies/${company}/products`
			} else if (category !== "all") {
				baseUrl = `http://localhost:4000/api/v1/categories/${category}/products`
			} else {
				baseUrl = "http://localhost:4000/api/v1/products"
			}

			if (availability !== "both") {
				baseUrl += `?availability=${availability}`
			}

			if (minPrice) {
				if (baseUrl.includes("?")) baseUrl += `&`
				else baseUrl += "?"

				baseUrl += `minPrice=${minPrice}`
			}

			if (maxPrice) {
				if (baseUrl.includes("?")) baseUrl += `&`
				else baseUrl += "?"

				baseUrl += `maxPrice=${maxPrice}`
			}

			if (topProducts) {
				if (baseUrl.includes("?")) baseUrl += `&`
				else baseUrl += "?"

				baseUrl += `topProducts=${topProducts}`
			}
			if(sortOption !== "featured"){
				if (baseUrl.includes("?")) baseUrl += `&`
				else baseUrl += "?"

				baseUrl += `sortOption=${sortOption}`
			}
			if(orderList){
				if (baseUrl.includes("?")) baseUrl += `&`
				else baseUrl += "?"

				baseUrl += `orderList=${orderList}`
			}
			
			console.log(baseUrl)
			const res = await fetch(`${baseUrl}`)
			const data = await res.json()
			setBeautyProducts(data)
		} catch (error) {
			console.log(error)
			setBeautyProducts([])
		}
	}

	async function fetchCompaniesData() {
		try {
			const res = await fetch("http://localhost:4000/api/v1/companies")
			const data = await res.json()
			setUniqueCompanies(data)
		} catch (err) {
			console.log(err)
			setUniqueCompanies([])
		}
	}
	async function fetchCategoriesData() {
		try {
			const res = await fetch("http://localhost:4000/api/v1/categories")
			const data = await res.json()
			setUniqueCategories(data)
		} catch (err) {
			console.log(err)
			setUniqueCategories([])
		}
	}

	useEffect(() => {
		fetchCompaniesData()
		fetchCategoriesData()
	}, [])

	useEffect(() => {
		fetchProductData()
	}, [
		company,
		category,
		minPrice,
		maxPrice,
		topProducts,
		availability,
		sortOption,
		orderList
	])

	const handleCompanyChange = async (e) => {
		setCompany(e.target.value)
	}

	const handleCategoryChange = async (e) => {
		setCategory(e.target.value)
	}

	const handleAvailabilityChange = async (e) => {
		setAvailability(e.target.value)
	}
	const handleMinPriceChange = async (e) => {
		setMinPrice(e.target.value)
	}
	const handleMaxPriceChange = async (e) => {
		setMaxPrice(e.target.value)
	}

	const handleSortChange = async (e) => {
		setSortOption(e.target.value)
	}
	const handleTopProductsChange = async (e) => {
		setTopProducts(e.target.value)
	}

	const orderListChange = () => {
		setOrderList((prev) => !prev)
	}

	return (
		<Box className="wrapper" minHeight={"100vh"}>
			<Box className="nav-layout">
				<Box className="products-left-section" sx={{ minWidth: "50rem" }}>
					<Stack direction="row" justifyContent="space-between">
						<Box className="page-heading">
							Showing <span>Beauty Products</span>
						</Box>
						<Box
							marginTop={"20px"}
							fontSize={"20px"}
							sx={{ cursor: "pointer" }}
							onClick={orderListChange}
						>
							{orderList ? (
								<i className="fas fa-sort-amount-down-alt"></i>
							) : (
								<i className="fas fa-sort-amount-down"></i>
							)}
						</Box>
					</Stack>
					<Box>
						{beautyProducts.length > 0 ? (
							beautyProducts.map((Product) => {
								return <ListProducts Product={Product} key={Product.id} />
							})
						) : (
							<Box
								sx={{
									display: "Flex",
									justifyContent: "center",
									alignItems: "center",
									minHeight: "40vh",
									fontSize: "20px",
								}}
							>
								No Products
							</Box>
						)}
					</Box>
				</Box>
				<Box>
					<ProductFilter
						uniqueCategories={uniqueCategories}
						uniqueCompanies={uniqueCompanies}
						handleCompanyChange={handleCompanyChange}
						handleCategoryChange={handleCategoryChange}
						handleAvailabilityChange={handleAvailabilityChange}
						handleMinPriceChange={handleMinPriceChange}
						handleMaxPriceChange={handleMaxPriceChange}
						handleTopProductsChange={handleTopProductsChange}
						handleSortChange={handleSortChange}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default BeautyProducts
