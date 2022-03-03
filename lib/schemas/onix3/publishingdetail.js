var _ = require('lodash');
var utils = require('../../utils');

var Publisher = require('./publisher');
var OnixDate = require('./onixdate');

module.exports = {
    tag: 'PublishingDetail',
    fields: {
        'publisher': Publisher, // Group ~P.19
        'status': { // P.20.1
            tag: 'PublishingStatus',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 4
        },
        'dates': {
            tag: 'PublishingDate',
            array: true,
            fields: {
                'role': {
                  tag: 'PublishingDateRole',
                  default: 1,
                  transform: _.partialRight(utils.pad, 2),
                  untransform: Number,
                },
                'date': OnixDate
            }
        },
        'imprint': {
            tag: 'Imprint',
            array: true,
            fields: {
                'role': {
                  tag: 'PublishingImprintRole',
                  default: 1,
                  transform: _.partialRight(utils.pad, 2),
                  untransform: Number,
                },
                imprint: {
                    tag: 'ImprintName',
                    transform: String
                }
            }
        },
    }
};
