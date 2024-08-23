import React from 'react';
import { Box } from '@mui/material';

const bannerList = [
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/93051e0bc77-MEGA20_App.jpg",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/dc5281c821e-GRAND1000_App.jpg",
    },
    {
        imgUrl: "https://cms-contents.pharmeasy.in/banner/86df3a0dc37-HP.jpg",
    },
];

const Banner = () => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                overflow: 'auto', 
                width: '90%', 
                margin: 'auto', 
                boxSizing: 'border-box',
                '::-webkit-scrollbar': { display: 'none' }, 
                marginTop: "50px"
            }}
        >
            {bannerList.map((banner, index) => (
                <Box 
                    component="img" 
                    key={index} 
                    src={banner.imgUrl} 
                    alt="" 
                    sx={{ 
                        width: '45%', 
                        marginRight: '25px', 
                        borderRadius: '10px', 
                        cursor: 'pointer' 
                    }} 
                />
            ))}
        </Box>
    );
}

export default Banner;
