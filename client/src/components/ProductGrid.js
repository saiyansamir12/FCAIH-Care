import React, { lazy, Suspense } from 'react'
import { generateProductData } from '../productData.js'
import styled from 'styled-components';
import { Container } from '../styles/styles.js';


function ProductGrid() {
  const Product = lazy(() => import('../components/Product.js'));
  const data = generateProductData();

  return (
      <Grid>
        <Suspense fallback={<div>Loading...</div>}>
            {data.map((product) => (
                <Product
                key={product.id}
                model={product.model}
                description={product.description}
                style={product.style}
                brand={product.brand}
                color={product.color}
                material={product.material}
                gender={product.gender}
                price={product.price}
                images={product.images}
                id={product.id}
                />      
            ))}  
        </Suspense>  
    </Grid>
  )
}

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;

export default ProductGrid