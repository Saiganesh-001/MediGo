import React, { useEffect, useState } from "react"
import {
	Box,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	OutlinedInput,
} from "@mui/material"

const ProductFilter = ({
	uniqueCompanies,
	uniqueCategories,
	handleCompanyChange,
	handleCategoryChange,
	handleAvailabilityChange,
	handleSortChange,
	handleTopProductsChange,
	handleMaxPriceChange,
	handleMinPriceChange,
}) => {
	return (
		<Box
			display="flex"
			flexDirection={"column"}
			justifyContent="space-between"
			mt={5}
			mb={5}
			position={"fixed"}
			maxWidth={500}
		>
			<Typography variant="h4" fontWeight="bold" mb={10}>
				Filter Products
			</Typography>

			<Box display="flex" flexDirection={"column"}>
				<Box
					display="flex"
					justifyContent="space-between"
					gap={5}
					flexWrap={"wrap"}
					zIndex={10}
				>
					<FormControl variant="outlined" sx={{ minWidth: 200 }}>
						<InputLabel htmlFor="company">Select Company</InputLabel>
						<Select
							id="company"
							label="company"
							defaultValue="all"
							onChange={handleCompanyChange}
						>
							<MenuItem value="all">All</MenuItem>
							{uniqueCompanies.map((company, index) => {
								return (
									<MenuItem key={index} value={company}>
										{company}
									</MenuItem>
								)
							})}
						</Select>
					</FormControl>
					<FormControl variant="outlined" sx={{ minWidth: 200 }}>
						<InputLabel htmlFor="categories">Categories</InputLabel>
						<Select
							id="categories"
							label="Categories"
							defaultValue="all"
							onChange={handleCategoryChange}
						>
							<MenuItem value="all">All</MenuItem>
							{uniqueCategories.map((category, index) => (
								<MenuItem key={index} value={category}>
									{category}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl variant="outlined" sx={{ minWidth: 200 }}>
						<InputLabel htmlFor="availability">Availability</InputLabel>
						<Select
							id="availability"
							label="Availability"
							defaultValue="both"
							onChange={handleAvailabilityChange}
						>
							<MenuItem value="yes">Yes</MenuItem>
							<MenuItem value="no">No</MenuItem>
							<MenuItem value="both">Both</MenuItem>
						</Select>
					</FormControl>
					<FormControl variant="outlined" sx={{ minWidth: 200 }}>
						<InputLabel htmlFor="sorting">Sort By</InputLabel>
						<Select
							defaultValue="featured"
							id="sorting"
							label="Sort By"
							onChange={handleSortChange}
						>
							<MenuItem value="featured">Featured</MenuItem>
							<MenuItem value="price">Price</MenuItem>
							<MenuItem value="rating">Rating</MenuItem>
							<MenuItem value="discount">Discount</MenuItem>
						</Select>
					</FormControl>
					<FormControl variant="outlined" sx={{ maxWidth: 200 }}>
							<InputLabel htmlFor="minPrice">Min Price</InputLabel>
							<OutlinedInput
								id="minPrice"
								label="Min Price"
								onChange={handleMinPriceChange}
							/>
						</FormControl>
						<FormControl variant="outlined" sx={{ maxWidth: 200 }}>
							<InputLabel htmlFor="maxPrice">Max Price</InputLabel>
							<OutlinedInput
								id="maxPrice"
								label="Max Price"
								onChange={handleMaxPriceChange}
							/>
						</FormControl>
						<FormControl variant="outlined" sx={{ maxWidth: 200 }}>
							<InputLabel htmlFor="topProducts">Top Products</InputLabel>
							<OutlinedInput
								id="topProducts"
								label="Top Products"
								onChange={handleTopProductsChange}
							/>
						</FormControl>
				</Box>
			</Box>
		</Box>
	)
}

export default ProductFilter
