var _ = require('lodash');
var utils = require('../../utils');

var Publisher = require('./publisher');
var SupportingResource = require('./supportingresource');

module.exports = {
    tag: 'DescriptiveDetail',
    fields: {
      'extent': {
        tag: 'Extent',
        fields: {
          'type': {
            tag: 'ExtentType',
          },
          'value': {
            tag: 'ExtentValue',
          },
          'unit': {
            tag: 'ExtentUnit',
          },
        },
      },
      'supportingResource': SupportingResource // P.16
    }
};
