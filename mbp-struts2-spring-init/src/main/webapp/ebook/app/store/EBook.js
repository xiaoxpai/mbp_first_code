//数据处理
 
Ext.define('FormSet.store.Form', {
			extend : 'Ext.data.Store',
			autoDestroy : true,
			//storeId : 'formStore',
			pageSize : 10,
			proxy : {
				type : 'ajax', 
				noCache : false, 
				actionMethods : {
					read : 'POST'
				},
				url : contextPath+'/ebook/bookAction!getJsonListBook.action',
				reader : {
					type : 'json',
					root : 'data',
					idProperty : 'bookId'
				}
			},
			model : 'ebook.model.Book'

		});
