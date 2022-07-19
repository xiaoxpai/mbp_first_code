//form model
Ext.define('FormSet.model.Form', {
	extend : 'Ext.data.Model',
	idProperty : "formNo", // 定義主鍵
	fields : [{
		name : 'formId', // 對應JavaBean中的屬性名
		type : 'int'
	}, {
		name : 'formNo',
		type : 'string'
	}, {
		name : 'formName',
		type : 'string'
	}, {
		name : 'formEnName',
		type : 'string'
	}, {
		name : 'formType',
		type : 'string'
	}, {
		name : 'command',
		type : 'string'
	}, {
		name : 'designDate',
		type : 'date'
	}, {
		name : 'subSysType',
		type : 'string'
	}, {
		name : 'designer',
		type : 'string',
		defaultValue : userInfo.userNo
	}, {
		name : 'manager',
		type : 'string'
	}, {
		name : 'isEnable',
		type : 'string',
		defaultValue : 'Y'
	}, {
		name : 'devEmp',
		type : 'string'
	}, {
		name : 'designEmp',
		type : 'string'
	}, {
		name : 'testEmp',
		type : 'string'
	}, {
		name : 'implementEmp',
		type : 'string'
	}, {
		name : 'logicDesc',
		type : 'string'
	}, {
		name : 'stage',
		type : 'string'
	}, {
		name : 'caseNo',
		type : 'string'
	}, {
		name : 'platform',
		type : 'string'
	}, {
		name : 'creater',
		type : 'string',
		defaultValue : userInfo.userNo
	}, {
		name : 'createDate',
		type : 'datecolumn',
		format : 'Y/m/d'
		// convert : Ext.util.Format.dateRenderer("Y-m-d H:i:s")

	}, {
		name : 'ownerDept',
		type : 'string'
	}, {
		name : 'modifyUser',
		type : 'string',
		defaultValue : userInfo.userNo
	}, {
		name : 'modifyDate',
		type : 'datecolumn',
		// convert : Ext.util.Format.dateRenderer("Y-m-d H:i:s")
		//dateRenderer 返回一个日期渲染函数，该函数可重复使用以有效地多次应用日期格式。
	}],
	// 注意:此處為一對多配置
	hasMany : [{
		model : 'FormSet.model.Element',
		name : 'elements',
		primaryKey : 'elementId',
		foreignKey : 'elementId', // Defaults to the
		// lowercased name of the
		// owner model plus "_id"
		// 該項與下面的filterProperty 互斥
		/*
		 * filter默認為: 通過主表的ID生成從表的外鍵,如本例默認的外鍵應該為formmodel_ID,
		 * 本例其實并不是主從表關系,所以手工override了filterProperty
		 */
		// filterProperty : 'IS_ENABLE',
		associationKey : "elements"
	}]
});
