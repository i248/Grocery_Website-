import React from "react";
import Header from "./Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:9000/api/getproduct`;
    axios.get(url).then((response) => {
      setProducts(response.data.productList);
      console.log("line number 30", response.data.productList);
    });
  }, []);
  console.log(products);

  return (
    <div>
      <Header />
      <br />
      <br />

      <div className="container">
        <Box sx={{ width: "100%", alignItems: `center` }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {products.map((product) => (
              <Grid item xs={3} key={product._id}>
                <Card sx={{ maxWidth: 310 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="150"
                      src={product?.Image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product?.productname}
                      </Typography>
                      <Typography gutterBottom variant="p1" component="div">
                        <b>Price : ${product?.price}</b>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.discription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
