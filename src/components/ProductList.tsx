import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type ProductListProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
}

const ProductList = (props: ProductListProps): JSX.Element => (
  <div>
<<<<<<< HEAD
    <h2>Product List (Git checkin)</h2>
=======
    <h2>Product List Prod 1</h2>
>>>>>>> 7e6b57301300a76c4d2de781bce8ca249c1aadbf
    <Text field={props.fields.heading} />
  </div>
);

export default ProductList;
