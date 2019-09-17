/*global define */
/*eslint no-console: "error"*/
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
define([
	'dojo/_base/declare', 
	'dojo/_base/lang', 
	'dojo/on', 
	'dijit/_WidgetBase', 
	'dijit/_TemplatedMixin', 
	'dojo/dom-class',
	'dojo/text!./template/exampleWidget.html',
	'xstyle/css!./css/exampleWidget.css'
], function(
	  declare, 
	   lang, 
	   on, 
	   _WidgetBase, 
	   _TemplatedMixin, 
	   domClass, 
	   template
	  ) {
	return declare([_WidgetBase, _TemplatedMixin], {

		templateString: template, 
		baseClass: 'smurfpoop',
		options: {},
		name: 'hi',

		constructor: function(options, srcRefNode) {
			this.inherited(arguments);

			// mix in settings and defaults
			this.options = options || {};

			// widget node
			this.domNode = srcRefNode;
		},
		postCreate: function () {
			this.name = this.options.name;
			this.own(
				on(this.domNode, 'click', lang.hitch(this, '_doSomething'))
			);
		},
		// start widget
		startup: function() {
		  this._init();
		},

		// cleanup
		destroy: function() {
		  // default destroy
		  this.inherited(arguments);
		},		
		// private functions
		_init: function() {},
		_doSomething: function() {
			alert('hey yall');
			this._toggleButton();
		}, 
		_toggleButton: function() {
			//domClass.toggle(this.exampleNode, '.btn-primary .btn-success');
			console.log('hey yo uh huh');
		}
	});
	
});