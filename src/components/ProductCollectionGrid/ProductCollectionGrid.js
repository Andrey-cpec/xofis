import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'https://static.tildacdn.com/tild3334-3032-4239-b633-393431613562/noroot.png'}
        title={'Head office'}
        text={'SHOP NOW'}
        link={'https://xofis.ru/kabinet-rukovoditelya'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Women'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Accessories'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Simple Cotton'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
