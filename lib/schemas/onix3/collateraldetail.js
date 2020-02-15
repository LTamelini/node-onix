var _ = require('lodash');
var utils = require('../../utils');

var Publisher = require('./publisher');
var SupportingResource = require('./supportingresource');

module.exports = {
    tag: 'CollateralDetail',
    fields: {
        'textContent': { // P.14
            tag: 'TextContent',
            fields: {
              'type': { // P.14.1
                tag: 'TextType',
              //  transform: _.partialRight(utils.pad, 2),
              //  untransform: Number,
              // default: 3
              },
              'text': { // P.14.3
                tag: 'Text',
              //  cdata: true
              }
            },
            array: true
        },
        'supportingResource': SupportingResource // P.16
    }
};
