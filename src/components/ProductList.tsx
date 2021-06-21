import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type ProductListProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
}

const ProductList = (props: ProductListProps): JSX.Element => (
  <div>
    <h2>Product List Staging</h2>
    <Text field={props.fields.heading} />
  </div>
);

export default ProductList;
