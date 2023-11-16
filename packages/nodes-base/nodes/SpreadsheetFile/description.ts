import type { INodeProperties } from 'n8n-workflow';

export const operationProperty: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Read From File',
			value: 'fromFile',
			description: 'Reads data from a spreadsheet file',
			action: 'Read data from a spreadsheet file',
		},
		{
			name: 'Write to File',
			value: 'toFile',
			description: 'Writes the workflow data to a spreadsheet file',
			action: 'Write data to a spreadsheet file',
		},
	],
	default: 'fromFile',
};

export const binaryProperty: INodeProperties = {
	displayName: 'File Property',
	name: 'binaryPropertyName',
	type: 'string',
	default: 'data',
	required: true,
	placeholder: '',
	description:
		'Name of the binary property from which to read the binary data of the spreadsheet file',
	displayOptions: {
		show: {
			operation: ['fromFile'],
		},
	},
};

export const toFileProperties: INodeProperties[] = [
	{
		displayName: 'File Format',
		name: 'fileFormat',
		type: 'options',
		options: [
			{
				name: 'CSV',
				value: 'csv',
				description: 'Comma-separated values',
			},
			{
				name: 'HTML',
				value: 'html',
				description: 'HTML Table',
			},
			{
				name: 'ODS',
				value: 'ods',
				description: 'OpenDocument Spreadsheet',
			},
			{
				name: 'RTF',
				value: 'rtf',
				description: 'Rich Text Format',
			},
			{
				name: 'XLS',
				value: 'xls',
				description: 'Excel',
			},
			{
				name: 'XLSX',
				value: 'xlsx',
				description: 'Excel',
			},
		],
		default: 'xls',
		displayOptions: {
			show: {
				operation: ['toFile'],
			},
		},
		description: 'The format of the file to save the data as',
	},
	{
		displayName: 'File Property',
		name: 'binaryPropertyName',
		type: 'string',
		default: 'data',
		required: true,
		displayOptions: {
			show: {
				operation: ['toFile'],
			},
		},
		placeholder: '',
		description:
			'Name of the binary property in which to save the binary data of the spreadsheet file',
	},
];

export const toFileOptions: INodeProperties = {
	displayName: 'Options',
	name: 'options',
	type: 'collection',
	placeholder: 'Add Option',
	default: {},
	displayOptions: {
		show: {
			operation: ['toFile'],
		},
	},
	options: [
		{
			displayName: 'Compression',
			name: 'compression',
			type: 'boolean',
			displayOptions: {
				show: {
					'/fileFormat': ['xlsx', 'ods'],
				},
			},
			default: false,
			description: 'Whether compression will be applied or not',
		},
		{
			displayName: 'File Name',
			name: 'fileName',
			type: 'string',
			default: '',
			description:
				'File name to set in binary data. By default will "spreadsheet.&lt;fileFormat&gt;" be used.',
		},
		{
			displayName: 'Header Row',
			name: 'headerRow',
			type: 'boolean',
			default: true,
			description: 'Whether the first row of the file contains the header names',
		},
		{
			displayName: 'Sheet Name',
			name: 'sheetName',
			type: 'string',
			displayOptions: {
				show: {
					'/fileFormat': ['ods', 'xls', 'xlsx'],
				},
			},
			default: 'Sheet',
			description: 'Name of the sheet to create in the spreadsheet',
		},
	],
};

export const fromFileOptions: INodeProperties = {
	displayName: 'Options',
	name: 'options',
	type: 'collection',
	placeholder: 'Add Option',
	default: {},
	displayOptions: {
		show: {
			operation: ['fromFile'],
		},
	},
	options: [
		{
			displayName: 'Header Row',
			name: 'headerRow',
			type: 'boolean',
			default: true,
			description: 'Whether the first row of the file contains the header names',
		},
		{
			displayName: 'Delimiter',
			name: 'delimiter',
			type: 'string',
			displayOptions: {
				show: {
					'/fileFormat': ['csv'],
				},
			},
			default: ',',
			description: 'Set the field delimiter',
		},
		{
			displayName: 'Starting Line',
			name: 'fromLine',
			type: 'number',
			displayOptions: {
				show: {
					'/fileFormat': ['csv'],
				},
			},
			default: 0,
			description: 'Start handling records from the requested line number',
		},
		{
			displayName: 'Max Number of Rows to Load',
			name: 'maxRowCount',
			type: 'number',
			displayOptions: {
				show: {
					'/fileFormat': ['csv'],
				},
			},
			default: -1,
			description: 'Stop handling records after the requested number of rows are read',
		},
		{
			displayName: 'Exclude Byte Order Mark (BOM)',
			name: 'enableBOM',
			type: 'boolean',
			displayOptions: {
				show: {
					'/fileFormat': ['csv'],
				},
			},
			default: false,
			description:
				'Whether to detect and exclude the byte-order-mark from the CSV Input if present',
		},
		{
			displayName: 'Include Empty Cells',
			name: 'includeEmptyCells',
			type: 'boolean',
			default: false,
			description:
				'Whether to include empty cells when reading from file, they will be filled with an empty string',
		},
		{
			displayName: 'RAW Data',
			name: 'rawData',
			type: 'boolean',
			default: false,
			description: 'Whether the data should be returned RAW instead of parsed',
		},
		{
			displayName: 'Read As String',
			name: 'readAsString',
			type: 'boolean',
			default: false,
			// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
			description:
				'In some cases and file formats, it is necessary to read specifically as string else some special character get interpreted wrong',
		},
		{
			displayName: 'Range',
			name: 'range',
			type: 'string',
			default: '',
			description:
				'The range to read from the table. If set to a number it will be the starting row. If set to string it will be used as A1-style bounded range.',
		},
		{
			displayName: 'Sheet Name',
			name: 'sheetName',
			type: 'string',
			default: 'Sheet',
			description:
				'Name of the sheet to read from in the spreadsheet (if supported). If not set, the first one gets chosen.',
		},
	],
};
