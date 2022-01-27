var _ = require('lodash');
var utils = require('../../utils');

var Publisher = require('./publisher');
var SupportingResource = require('./supportingresource');

module.exports = {
    tag: 'DescriptiveDetail',
    fields: {
      'editionVersionNumber': {
        tag: 'EditionVersionNumber',
      },
      'contributor': {
        tag: 'Contributor',
        fields: {
          'sequenceNumber': {
            tag: 'SequenceNumber'
          },
          'firstname': {
            tag: 'NamesBeforeKey'
          },
          'lastname': {
            tag: 'KeyNames'
          },
        },
        array: true,
      },
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
              'titleWithoutPrefix': {
                tag: 'TitleWithoutPrefix',
                fields: {
                  'language': {
                    tag: '@language',
                  },
                  'text': {
                    tag: '#text',
                  },
                },
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
      'subject': {
        tag: 'Subject',
        fields: {
          'mainSubject': {
            tag: 'MainSubject',
          },
          'identifier': {
            tag: 'SubjectSchemeIdentifier',
          },
          'version': {
            tag: 'SubjectSchemeVersion',
          },
          'code': {
            tag: 'SubjectCode',
          },
          'text': {
            tag: 'SubjectHeadingText',
          },
        },
        array: true,
      },
      'supportingResource': SupportingResource // P.16
    }
};
