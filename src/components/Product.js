import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//should use TS instead of checking proptypes at RT
const Product = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={props.id}>
      <CardMedia
        sx={{ height: 140 }}
        image="/no_img_avail.jpg"
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          name: {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          category:{props.category}
          <br/>
          sku: {props.sku}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Product;