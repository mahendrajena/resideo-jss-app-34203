import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type ProductProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
}

const Product = (props: ProductProps): JSX.Element => (
  <div>
    <h3>Product</h3>
    <Text field={props.fields.heading} />
  </div>
);

export default Product;
