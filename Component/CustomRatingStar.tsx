import React from 'react'
import Rating from '@mui/material/Rating';

const CustomRatingStar = ({value}:any) => {
  return (
    <div>
        <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly />
    </div>
  )
}

export default CustomRatingStar