define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/Dialog",
    "dijit/form/Button",
    "dojo/_base/lang",
    "dojo/text!./templates/Screen3.html",
    "dojo/i18n!./nls/Screen3",
	"app/widget/exampleWidget/exampleWidget"
],
function(declare, _WidgetBase, _TemplatedMixin, Dialog, Button, lang, template, nls, ExampleWidget) {

    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        baseClass: 'genericWidget',
        dialogBox: null,

        postCreate: function(){
            this.inherited(arguments);
            this.hello.innerHTML = nls.hello;

            new Button({
                label: 'Show me!',
                onClick: lang.hitch(this, this.showDialogTwo)
            }, this.btnNode);

            this.dialogBox = new Dialog({
                title: "Programmatic Dialog Creation",
                style: "width: 300px",
				onHide: lang.hitch(this, this.cleardialogContent),
				onClick: lang.hitch(this, this.changeDialogContent)
            });
			var exmpWidg = new ExampleWidget({
				name: 'poopdeck'
			},this.stank).startup();
							
        },


        showDialogTwo: function(){
            console.info("show");
            this.dialogBox.set("content", "Hey, I wasn't there before, I was added at " + new Date() + "!");
		    this.dialogBox.show();
            

        },
		cleardialogContent: function() {
			this.dialogBox.set("content", "");
		},
		changeDialogContent: function () {
			this.dialogBox.set("href", 'data/content1.html');
		}


    });



});