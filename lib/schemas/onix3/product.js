var _ = require('lodash');
var utils = require('../../utils');

var Price = require('./price');
var ProductId = require('./productid');
var ProductDescription = require('./productdescription');
var CollateralDetail = require('./collateraldetail');
var DescriptiveDetail = require('./descriptivedetail');
var PublishingDetail = require('./publishingdetail');
var ProductSupply = require('./productsupply');
var RelatedMaterial = require('./relatedmaterial');

module.exports = {
    tag: 'Product',
    array: true,
    fields: {
        'record': {
            tag: 'RecordReference', // Group P.1
            raw: true
        },
        'notification': {
            tag: 'NotificationType',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number
        },
        'ids': ProductId, // Group P.2
        'description': ProductDescription, // Block 1
        'collateralDetail': CollateralDetail, // Block 2
        'publishingDetail': PublishingDetail, // Block 4
        'relatedMaterial': RelatedMaterial, // Block 5
        'productSupply': ProductSupply, // Block 6
        'descriptivedetail': DescriptiveDetail
      }
}
