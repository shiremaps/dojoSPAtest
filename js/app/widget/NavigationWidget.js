define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/_base/lang",
    "dojo/hash",
    "dijit/MenuBar",
    "dijit/MenuBarItem",
    "dijit/PopupMenuBarItem",
    "dijit/MenuItem",
    "dijit/DropDownMenu",
	"app/widget/exampleWidget/exampleWidget",
    "dojo/text!./templates/NavigationWidget.html",
    "dojo/i18n!./nls/NavigationWidget",
	
],
function(declare, _WidgetBase, _TemplatedMixin, lang,  hash, MenuBar, MenuBarItem, PopupMenuBarItem, MenuItem, DropDownMenu,exampleWidget,template, nls) {  //, 


    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,

        postCreate: function() {
            this.inherited(arguments);

            var pMenuBar = new MenuBar({});
            var menuBarItem1 = new MenuBarItem({
                label: nls.screen1,
                onClick: lang.hitch(this, function (evt) {
                    evt.preventDefault();
                    menuBarItem1._setSelected(false);  // work-around for possible dojo bug.
                    hash("!screen1");
					menuBarItem1._set("active", true);
                })
            });
            pMenuBar.addChild(menuBarItem1);

            var menuBarItem2 = new MenuBarItem({
                label: nls.screen2,
                onClick: lang.hitch(this, function (evt) {
                    evt.preventDefault();
                    menuBarItem2._setSelected(false);
                    hash("!screen2");
					menuBarItem2.set("activated", true);
                })
            });
            pMenuBar.addChild(menuBarItem2);

            var menuBarItem3 = new MenuBarItem({
                label: nls.screen3,
                onClick: lang.hitch(this, function (evt) {
                    evt.preventDefault();
                    menuBarItem3._setSelected(false);
                    hash("!screen3");
					menuBarItem3.set("activated", true);
                })
            });
            pMenuBar.addChild(menuBarItem3);
			
			var anotherButton = new exampleWidget({
				name: 'dot'
			});
			pMenuBar.addChild(anotherButton);

            var pSubMenu = new DropDownMenu({});
            pSubMenu.addChild(new MenuItem({
                label: nls.getHelp
            }));
            pSubMenu.addChild(new MenuItem({
                label: nls.about
            }));
            pMenuBar.addChild(new PopupMenuBarItem({
                label: nls.help,
                popup: pSubMenu
            }));

            pMenuBar.placeAt(this.menuNode);
            pMenuBar.startup();
        }

    });

});