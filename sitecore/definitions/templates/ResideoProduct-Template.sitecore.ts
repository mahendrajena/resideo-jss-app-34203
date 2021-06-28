// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Resideo Product Template
 */
export default function (manifest: Manifest): void {
  manifest.addTemplate({
    name: 'ResideoProduct',
    id: 'resideoproduct-template',
    fields: [
      { name: 'Name', type: CommonFieldTypes.SingleLineText },
      { name: 'Category', type: CommonFieldTypes.SingleLineText },
      { name: 'Price', type: CommonFieldTypes.Number },
      { name: 'Image', type: CommonFieldTypes.SingleLineText },
      { name: 'DecImage1', type: CommonFieldTypes.SingleLineText },
      { name: 'DecRollImages', type: CommonFieldTypes.SingleLineText },
      { name: 'DecContent1', type: CommonFieldTypes.SingleLineText },
      { name: 'DecContent2', type: CommonFieldTypes.SingleLineText },
      { name: 'DecContent3', type: CommonFieldTypes.SingleLineText },
      { name: 'DecContent4', type: CommonFieldTypes.RichText },
      { name: 'DecSelectAModel', type: CommonFieldTypes.SingleLineText },
      { name: 'DecSpec1Image', type: CommonFieldTypes.SingleLineText },
      { name: 'DecSpec1Content1', type: CommonFieldTypes.SingleLineText },
      { name: 'DecSpec1Content2', type: CommonFieldTypes.RichText },
      { name: 'DecSpec2Image', type: CommonFieldTypes.SingleLineText },
      { name: 'DecSpec2Content1', type: CommonFieldTypes.SingleLineText },
      { name: 'DecSpec2Content2', type: CommonFieldTypes.RichText },
      { name: 'RankWeight', type: CommonFieldTypes.Number },
      { name: 'IsDiscontinued', type: CommonFieldTypes.Checkbox },
      { name: 'CreatedOn', type: CommonFieldTypes.DateTime },
    ],
  });
}
