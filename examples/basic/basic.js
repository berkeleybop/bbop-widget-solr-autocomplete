require('../lib/bbop-widget-solr-autocomplete.js');
var jQuery = require('jquery');
var bbop = require('bbop').bbop;

  // put a proper conf for your prod environment
var gconf = new bbop.golr.conf({});
var golr_loc = "http://geoffrey.crbs.ucsd.edu:8080/solr/monarchAutocomplete/"
var golr_manager_for_disease = new bbop.golr.manager.jquery(golr_loc, gconf);
disease_autocomplete_options = {
  onChange: function(value) {
    console.log(value);
  },
  required: true,
  optionDisplay: function(item, escape) {
    return '<div>' +
      item.id + ' (' + item.annotation_class_label_searchable + ')' +
      '</div>';
  },
  itemDisplay: function(item, escape) {
    return '<div>' +
      item.id + ' (' + item.annotation_class_label_searchable + ')' +
      '</div>';
  },
  valueField: 'id',
  searchField: ['id', 'annotation_class_label_searchable'],
  queryData: function(query) {
    return 'isa_partof_closure_label_searchable:disease AND id:*' + query.replace(':', '\\:').toUpperCase() + '*';
  },
  golrManager: null
};
jQuery('#select_disease').solrautocomplete(disease_autocomplete_options);
