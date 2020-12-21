import React,{useState,Component} from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product';

import AppBar from '@material-ui/core/AppBar';

const api = "https://jsonplaceholder.typicode.com/photos";


class Albums extends Component {
  state = {
    albums: []
  };
   
  componentDidMount = () => {
fetch(api)
  .then((res) => res.json())
  .then((data) => {
    const filterData = data.filter((x) => x.albumId % 2 === 0);
    const uniqueItems = filterData.reduce((accumulator, item) => {
      const isDuplicateItem = accumulator.find(
        (i) => i.albumId === item.albumId
      );
      
      if (!isDuplicateItem) {
        return [...accumulator, item];
      }

      return accumulator;
    }, []);
this.setState({albums:uniqueItems})
    console.log("uniqueItems", uniqueItems.length);
    
  })
  .catch((err) => console.log(err));
}
    render() {
      

      return (
        <main><Grid container justify="center" spacing={4}>{this.state.albums.map((product)=>(<Grid item key={product.id} xs={12} sm={6} md={4}><Product product={product} /></Grid>))}</Grid></main>
      );
      }
  };
export default Albums;