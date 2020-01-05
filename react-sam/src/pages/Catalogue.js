import React, { useState, useEffect } from "react";
import { getCatalogue } from '../http/CatalogueService';
import { Link } from "react-router-dom";

function Catalogue() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCatalogue()
      .then(response => setProducts(response.data));
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.photo} />
          </Link>
          <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>
              <span className="iprice">{`${product.init_price}€ `}</span>
              <span className="dis">{` -${product.discount}% `}</span>
              <span className="fprice">{` ${product.final_price}€`}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export { Catalogue };


// import React, { useEffect, useReducer } from 'react';
// import { getCatalogue } from '../http/CatalogueService';
// import { CatalogueList } from '../components/CatalogueList';
// import { CatalogueProduct } from '../components/CatalogueProduct';

// function catalogueProductsReducer(state, action) {
//   switch (action.type) {
//     case 'GET_CATALOGUE_PRODUCTS':
//       return { ...state, catalogueProducts: action.initialProducts };
//     case 'SELECT_CATALOGUE_PRODUCT':
//       return { ...state, selectedCatalogueProduct: action.index };
//     case 'TOOGLE_CATALOGUE_PRODUCT':
//       return { ...state, isCatalogueProductOpened: !state.isCatalogueProductOpened };
//     default: return state;
//   }
// }

// export function Catalogue() {

//   const [state, dispatch] = useReducer(catalogueProductsReducer, {
//     catalogueProducts: [],
//     selectedCatalogueProduct: null,
//     isCatalogueProductOpened: false
//   });

//   useEffect(() => {
//     getCatalogue().then(response => {
//       dispatch({ type: 'GET_CATALOGUE_PRODUCTS', initialCatalogueProducts: response.data });
//     });
//   }, []);

//   const selectCatalogueProduct = selectedIndex =>
//     dispatch({ type: 'SELECT_PRODUCT', index: selectedIndex });

//   const initialCatalogueProducts = state.catalogueProducts;
//   console.log(initialCatalogueProducts);
//   console.log(state);
//   console.log(state.selectedCatalogueProduct);

//   return (
//     <React.Fragment>
//       <main>
//         <div className={`grid ${state.isCatalogueProductOpened}`} />
//         <div>
//           <CatalogueList
//             catalogueProducts={initialCatalogueProducts}
//             selectedIndex={state.selectedCatalogueProduct}
//             onCatalogueProductSelected={i => {
//               selectCatalogueProduct(i);
//               dispatch({ type: 'TOGGLE_CATALOGUE_PRODUCT' });
//             }}
//           />
//         </div>
//         <div>
//           {state.selectedProduct !== null && (
//             <CatalogueProduct
//               defaultCatalogueProduct={state.selectedCatalogueProduct}
//             />
//           )}
//         </div>
//         <button
//           className=""
//           style={{ position: "fixed", bottom: "20px", left: "20px" }}
//           onClick={() => dispatch({ type: "TOGGLE_CATALOGUE_PRODUCT" })}
//         >
//           Volver
//         </button>
//       </main>
//     </React.Fragment>
//   )
// }