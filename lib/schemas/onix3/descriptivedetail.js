var _ = require('lodash');
var utils = require('../../utils');

var Publisher = require('./publisher');
var SupportingResource = require('./supportingresource');

module.exports = {
    tag: 'DescriptiveDetail',
    fields: {
      'titleDetail': {
        tag: 'TitleDetail',
        fields: {
          'type': {
            tag: 'TitleType',
          },
          'element': {
            tag: 'TitleElement',
            fields: {
              'level': {
                tag: 'TitleElementLevel',
              },
              'text': {
                tag: 'TitleText',
              },
            },
          },
        },
        array: true,
      },
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
        array: true,
      },
      'supportingResource': SupportingResource // P.16
    }
};
