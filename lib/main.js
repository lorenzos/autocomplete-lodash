'use babel';

import AutocompleteLodashProvider from './autocomplete-lodash-provider';

/**
 * Activates the package.
 * @return {AutocompleteLodashProvider} The package Autocomplete provider.
 */
export function activate() {
  atom.config.observe('autocomplete-lodash.prefixType', function(value) {
    AutocompleteLodashProvider.loadMethods();
  });
}

/**
 * Returns the package Autocomplete provider.
 * @return {AutocompleteLodashProvider} The package Autocomplete provider.
 */
export function getProvider() {
  return AutocompleteLodashProvider;
}

// Configuration for the Settings view
export const config = {
  prefixType: {
    title: 'Lodash prefix',
    description: 'Select which prefix should trigger Lodash suggestions, if `_.` or just `_`',
    type: 'string',
    default: "full",
    enum: [
      { 
        value: "full",
        description: "Full Lodash builds, like _.map()"
      }, { 
        value: "cherry-pick", 
        description: "Methods cherry picking, like _map()"
      }
    ]
  }
}

