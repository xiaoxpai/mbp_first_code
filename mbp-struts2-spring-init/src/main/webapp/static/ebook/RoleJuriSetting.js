/**
 * 角色授權頁面
 */
Ext.define('juri.setting.RoleJuriSetting',{
	extend:'Ext.container.Viewport',
	alias:'widget.rolejurisetting',
	
	storeRole:null,
	storeUser:null,
	
	initComponent:function(){
		  
		Ext.apply(this, {
			renderTo : Ext.getBody(),
	 
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			//margin : '5 3 3 3',
			items : [
			
				{
					itemId: 'panel1',
					xtype: 'panel',
					flex: 4,
					border: 0,
					margin:'0 1 2 0',
					layout: {type: 'hbox',align: 'stretch'},
					items:[
					{
					itemId : 'gpanelRole',
					xtype : 'grid', 
					tbar : [{xtype : 'tbtext',text : '角色信息'}],
					flex : 4,
					loadMask : true,
					autoScroll : true, 
					store : me.storeRole,
					viewConfig : {
						getRowClass : function(record, rowIndex, rowParams,
								store) {
							return record.get("isEnable") == 'Y'? "": "disable-row";
						}
					},
					columns : [Ext.create('Ext.grid.RowNumberer'), {
								text : '編號',
								dataIndex : 'roleNo',
								menuDisabled : true,
								flex : 2,
								sortable : false
							}, {
								text : '名稱',
								dataIndex : 'roleName',
								menuDisabled : true,
								flex : 3,
								sortable : false
							}, {
								text : '所屬部門',
								dataIndex : 'ownerDept',
								menuDisabled : true,
								flex : 3,
								sortable : false
							}, {
								text : '有效',
								dataIndex : 'isEnable',
								menuDisabled : true,
								flex : 2,
								sortable : false,
								xtype : 'checkcolumn'
							}, {
								text : '創建日期',
								dataIndex : 'createDate',
								menuDisabled : true,
								flex : 2,
								sortable : false,
								xtype : 'datecolumn',
								format : 'Y/m/d'
							}],
					dockedItems : [{
								xtype : 'pagingtoolbar',
								store : me.storeRole,
								dock : 'bottom',
								weight : 2,
								border : true
							}, {
								xtype : 'toolbar',
								dock : 'bottom',
								weight : 1,/* style:'background-color:#D6E3F2;', */
								baseCls : 'x-border-layout-ct',
								ui : 'footer',
								items : [{
											xtype : 'searchfield',
											itemId : 'txtSearchRole',
											width : 170,
											listeners : {
												scope : me,
												specialkey : function(field, e) {
													if (e.getKey() == e.ENTER) {
														me.queryRole(field
																.getValue());
													}
												}
											}
										}, {
											text : '查詢',
											icon : contextPath
													+ '/resources/img/icons/find.png',
											scope : me,
											handler : function(btn, e) {
												var keyword = me
														.down('#txtSearchRole')
														.getValue();
												me.queryRole(keyword);
											}
										}]
							}],
					listeners : {
						scope : me,
						selectionchange : {
							fn : function(view, selections, options) {
								if (selections.length > 0) {
									me.selectedChanged(selections[0]);
								}
							}
						}
					}
				}, {
					xtype : 'grid',
					region : 'center',
					itemId : 'gpanelUser',
					flex : 4,
					margin : '1 0 1 0',
					loadMask : true,
					autoScroll : true,
					store : me.storeUser,
					tbar : [{
								xtype : 'tbtext',
								text : '用戶授權管理'
							}],
					viewConfig : {
						getRowClass : function(record, rowIndex, rowParams,
								store) {
							return record.get("isEnable") == 'Y'
									? ""
									: "disable-row";
						}
					},
					columns : [Ext.create('Ext.grid.RowNumberer'), {
								text : '用戶編號',
								dataIndex : 'userNo',
								menuDisabled : true,
								width : 100,
								sortable : false
							}, {
								text : '姓名',
								dataIndex : 'userName',
								menuDisabled : true,
								width : 80,
								sortable : false
							}, {
								text : '部門編號',
								dataIndex : 'deptNo',
								menuDisabled : true,
								width : 100,
								sortable : false
							}, {
								text : '工號',
								dataIndex : 'empNo',
								menuDisabled : true,
								width : 100,
								sortable : false
							}, {
								text : '廠區代碼',
								dataIndex : 'siteNo',
								menuDisabled : true,
								width : 60,
								sortable : false
							}, {
								text : '語言',
								dataIndex : 'language',
								menuDisabled : true,
								width : 40,
								sortable : false
							}, {
								text : '失效日期',
								dataIndex : 'invalidDate',
								menuDisabled : true,
								width : 120,
								sortable : false,
								xtype : 'datecolumn',
								format : 'Y/m/d'
							}],
					dockedItems : [{
								xtype : 'pagingtoolbar',
								store : me.storeUser,
								dock : 'bottom',
								weight : 3,
								border : true
							}]
				}
					
					]//panel 的items
				},
			
				{
					//实例化自己的类
					itemId : 'rolejuritabsetting',
					xtype : 'roletabsetting',
					flex : 6,
					margin : '1 0 1 0',
					border : 0,
					listeners : {
						scope : me,
						showMessage : {
							fn : function(msg, level) {
								me.showMsg(msg, level);
							}
						}
					}
				}, {
					xtype : 'toolbar',
					border : 0,
					//(top, right, bottom, left)
					margin : '1 0 3 0',
					items : [{
								xtype : 'tbtext',
								text : '詳細信息'
							}, {
								itemId : 'lblMessage',
								xtype : 'marqueebox'
							}]
				 
			}]

		});
		
		this.callParent();
		
	},  
	    
  
Ext.onReady(function(){
	Ext.view.Table.prototype.enableTextSelection = true;
	var main = Ext.create('juri.setting.RoleJuriSetting',{});
	main.down('#txtSearchRole').focus(true);
});
