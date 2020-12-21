import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart, Autorenew} from '@material-ui/icons';


import useStyles from './style';
 
const Product = ({product}) =>{
    const classes = useStyles();
return (<Card >
     



  <img src={product.url}  alt="avtar" style={{height: '100%',width: '100%'}} />



  




</Card>);


}

export default Product;