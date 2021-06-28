import { Field, Text, Item } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps, StyleguideSpecimenFields } from 'lib/component-props';

type ResideoProductListProps = StyleguideComponentProps &
  StyleguideSpecimenFields & {
    fields: {
      sharedContentList: Item[];
      localContentList: Item[];
    };
  };

const ResideoProductList = (
  props: ResideoProductListProps
): JSX.Element => {
  const { sharedContentList, localContentList } = props.fields;

  return (
    <div>

      {(sharedContentList ? <h5>Shared Content List</h5> : '')}

      {sharedContentList &&
        sharedContentList.map((listItem, index) => (
          <div key={`sharedListItem-${index}`}>
            <p>
              Name: <Text field={listItem.fields.Name as Field<string>} />
              <br></br>
              Category: <Text field={listItem.fields.Category as Field<string>} />
              <br></br>
              Image: <Text field={listItem.fields.Image as Field<string>} />
              <br></br>
              DecContent4: <Text field={listItem.fields.DecContent4 as Field<string>} />
            </p>
          </div>
        ))}


      {(localContentList ? <h5>Local Content List</h5> : '')}

      {localContentList &&
        localContentList.map((listItem, index) => (
          <div key={`localListItem-${index}`}>
            <p>
              Name: <Text field={listItem.fields.Name as Field<string>} />
              <br></br>
              Category: <Text field={listItem.fields.Category as Field<string>} />
              <br></br>
              Image: <Text field={listItem.fields.Image as Field<string>} />
              <br></br>
              DecContent4: <Text field={listItem.fields.DecContent4 as Field<string>} />
            </p>
          </div>
        ))}
    </div>
  );
};

export default ResideoProductList;
