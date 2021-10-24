import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider({ products, filterByPrice }) {
  const [value, setValue] = React.useState([7, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterByPrice(newValue);
  };
  const getMinPrice = () => {
    let minPrice = products[0]?.price;
    products.forEach((item) => {
      if (item.price < minPrice) {
        minPrice = item.price;
      }
    });
    return minPrice;
  };
  const getMaxPrice = () => {
    let maxPrice = products[0]?.price;
    products.forEach((item) => {
      if (item.price > maxPrice) {
        maxPrice = item.price;
      }
    });
    return maxPrice;
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        min={getMinPrice()}
        max={getMaxPrice()}
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
