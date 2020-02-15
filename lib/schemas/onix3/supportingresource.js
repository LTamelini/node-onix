var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
  tag: 'SupportingResource', // P.16
  fields: {
    'resourceContentType': {
      tag: 'ResourceContentType', // P.16.1
    //  transform: _.partialRight(utils.pad, 2),  // list 158
    //  untransform: Number
    },
    'contentAudience': {
      tag: 'ContentAudience', // P.16.2
      transform: _.partialRight(utils.pad, 2),  // list 154
      untransform: Number
    },
    'resourceMode': {
      tag: 'ResourceMode', // P.16.3
      transform: _.partialRight(utils.pad, 2),  // list 159
      untransform: Number
    },
    'resourceFeature': {
      tag: 'ResourceFeature',
      array: true,
      fields: {
        'resourceFeatureType': {
          tag: 'ResourceFeatureType', // P.16.4
          transform: _.partialRight(utils.pad, 2),  // list 160
          untransform: Number
        },
        'featureValue': {
          tag: 'FeatureValue',  // P.16.5
          transform: String
        },
        'featureNote': {
          tag: 'FeatureNote',  // P.16.6
          transform: String
        }
      }
    },
    'resourceVersion': {
      tag: 'ResourceVersion',
      array: true,
      fields: {
        'resourceForm': {
          tag: 'ResourceForm', // P.16.7
          transform: _.partialRight(utils.pad, 2),  // list 161
          untransform: Number
        },
        'resourceVersionFeature': {
          tag: 'ResourceVersionFeature',
          array: true,
          fields: {
            'resourceVersionFeatureType': {
              tag: 'ResourceVersionFeatureType', // P.16.8
              transform: _.partialRight(utils.pad, 2),  // list 162
              untransform: Number
            },
            'featureValue': {
              tag: 'FeatureValue', // P.16.9
            },
            'featureNote': {
              tag: 'FeatureNote', // P.16.10
              transform: String
            }
          }
        },
        'resourceLink': {
          tag: 'ResourceLink', // P.16.11
          tranform: String
        },
        'contentDate': {
          tag: 'ContentDate',
          array: true,
          fields: {
            'contentDateRole': {
              tag: 'ContentDateRole', // P.16.12
              transform: _.partialRight(utils.pad, 2),  // list 155
              untransform: Number
            },
            'date': {
              tag: 'Date', // P.16.13,
              transform: String
            }
          }
        }
      }
    }
  }
}
