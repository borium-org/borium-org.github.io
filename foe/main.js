const pinnedRowBuildingName = "Priority scores:";

const columnDefs = [
	{
		headerName: "Building",
		children: [
			{
				headerName: "Name",
				width: 300,
				sortable: true,
				field: "name",
				colId: "Name",
			},
			{
				headerName: "Size",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				valueGetter: GetBuildingSize,
				valueFormatter: FixedDecimal1,
				colId: "Size",
			},
		]
	},
	{
		headerName: "FP",
		width: 75,
		cellClass: "ag-right-aligned-cell",
		sortable: true,
		comparator: CompareColumnAndName,
		valueGetter: param => { return param.data.FP; },
		valueSetter: param => { SingleValueSetter(param); },
		colId: "FP",
		editable: IsPinnedRow,
	},
	{
		headerName: "Troops",
		children: [
			{
				headerName: "AA",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "TAA",
				valueGetter: GetTroopAttAtt,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "AD",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "TAD",
				valueGetter: GetTroopAttDef,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "DA",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "TDA",
				valueGetter: GetTroopDefAtt,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "DD",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "TDD",
				valueGetter: GetTroopDefDef,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
		]
	},
	{
		headerName: "Battleground",
		children: [
			{
				headerName: "AA",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "BAA",
				valueGetter: GetBattlegroundAttAtt,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "AD",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "BAD",
				valueGetter: GetBattlegroundAttDef,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "DA",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "BDA",
				valueGetter: GetBattlegroundDefAtt,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "DD",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "BDD",
				valueGetter: GetBattlegroundDefDef,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
		]
	},
	{
		headerName: "Expedition",
		children: [
			{
				headerName: "AA",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "EAA",
				valueGetter: GetExpeditionAttAtt,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "AD",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "EAD",
				valueGetter: GetExpeditionAttDef,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "DA",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "EDA",
				valueGetter: GetExpeditionDefAtt,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "DD",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "EDD",
				valueGetter: GetExpeditionDefDef,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
		]
	},
	{
		headerName: "Score",
		children: [
			{
				headerName: "SASH",
				width: 100,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				valueGetter: GetBuildingScore,
				valueFormatter: FixedDecimal1,
				colId: "Age",
			}
		]
	},
];

/*

const ages = [ "BA", "IA", "EMA", "HMA", "LMA", "CA", "INA", "PE", "ME", "PME",
	"CE", "TE", "FE", "AF", "OF", "VF", "SAM", "SAAB", "SAV", "SAJM", "SAT",
];

const selectedAge = "SAT";

const selectedCity = 0;
*/

// specify the data
const rowData = buildings;

/*
var scoreAA = localStorage.getItem("scoreAA[" + selectedCity + "]") || 150;
var scoreAD = localStorage.getItem("scoreAD[" + selectedCity + "]") || 100;
var scoreDA = localStorage.getItem("scoreDA[" + selectedCity + "]") || 75;
var scoreDD = localStorage.getItem("scoreDD[" + selectedCity + "]") || 50;
var scoreGA = localStorage.getItem("scoreGA[" + selectedCity + "]") || 100;
var scoreGP = localStorage.getItem("scoreGP[" + selectedCity + "]") || 25;
var scoreGG = localStorage.getItem("scoreGG[" + selectedCity + "]") || 10;
var scoreFP = localStorage.getItem("scoreFP[" + selectedCity + "]") || 15;
*/
var topRowData = [{
		"name": pinnedRowBuildingName,
//		"type": "", "X": 0, "Y": 0,
//		"GA": 0, "GP": 0, "GG": 0, "FP": 0, "road": false,
//		"AA": [],
//		"AD": [],
//		"DA": [],
//		"DD": [],
	}];

function CreateTopRowData()
{
/*
	topRowData[selectedCity].GA = scoreGA;
	topRowData[selectedCity].GP = scoreGP;
	topRowData[selectedCity].GG = scoreGG;
	topRowData[selectedCity].FP = scoreFP;
	topRowData[selectedCity].AA = [];
	topRowData[selectedCity].AD = [];
	topRowData[selectedCity].DA = [];
	topRowData[selectedCity].DD = [];
	for (var i = 0; i < ages.length; i++) {
		topRowData[selectedCity].AA.push(scoreAA);
		topRowData[selectedCity].AD.push(scoreAD);
		topRowData[selectedCity].DA.push(scoreDA);
		topRowData[selectedCity].DD.push(scoreDD);
	}
*/
	return topRowData;
}

// let the grid know which columns and what data to use
const gridOptions =
{
	columnDefs: columnDefs,
	rowData: rowData,
	pinnedTopRowData: CreateTopRowData(),
	rowHeight: 30,
};

function GetBuildingScore(node) {
//	if (GetBuildingSize(node) == 0)
		return 0;
/*
	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
	if (node.data.AA)
		value += node.data.AA[ageIndex] * scoreAA;
	if (node.data.AD)
		value += node.data.AD[ageIndex] * scoreAD;
	if (node.data.DA)
		value += node.data.DA[ageIndex] * scoreDA;
	if (node.data.DD)
		value += node.data.DD[ageIndex] * scoreDD;
	value += node.data.GA * scoreGA;
	value += node.data.GP * scoreGP;
	value += node.data.GG * scoreGG;
	value += node.data.FP * scoreFP;
	value /= GetBuildingSize(node);
	return value;
*/
}

function CompareColumnAndName(valueA, valueB, nodeA, nodeB, isDescending)
{
	if (valueA !== valueB)
		return valueA > valueB ? 1 : -1;
	return nodeA.data.name > nodeB.data.name ? 1 : -1;
}

function GetBuildingSize(node)
{
	var road = Math.min(node.data.X, node.data.Y) * (node.data.road ? 0.5 : 0);
	return node.data.X * node.data.Y + road;
}

function FixedDecimal1(value)
{
	if (value.value == 0)
		return "";
	return value.value.toFixed(1);
}

function GetTroopAttAtt(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.AA)
//		value = node.data.AA[ageIndex];
	return value;
}

function GetTroopAttDef(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.AD)
//		value = node.data.AD[ageIndex];
	return value;
}

function GetTroopDefAtt(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.DA)
//		value = node.data.DA[ageIndex];
	return value;
}

function GetTroopDefDef(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.DD)
//		value = node.data.DD[ageIndex];
	return value;
}

function GetBattlegroundAttAtt(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.AA)
//		value = node.data.AA[ageIndex];
	return value;
}

function GetBattlegroundAttDef(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.AD)
//		value = node.data.AD[ageIndex];
	return value;
}

function GetBattlegroundDefAtt(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.DA)
//		value = node.data.DA[ageIndex];
	return value;
}

function GetBattlegroundDefDef(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.DD)
//		value = node.data.DD[ageIndex];
	return value;
}

function GetExpeditionAttAtt(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.AA)
//		value = node.data.AA[ageIndex];
	return value;
}

function GetExpeditionAttDef(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.AD)
//		value = node.data.AD[ageIndex];
	return value;
}

function GetExpeditionDefAtt(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.DA)
//		value = node.data.DA[ageIndex];
	return value;
}

function GetExpeditionDefDef(node)
{
//	var ageIndex = ages.indexOf(selectedAge);
	var value = 0;
//	if (node.data.DD)
//		value = node.data.DD[ageIndex];
	return value;
}

// https://stackoverflow.com/questions/55358178/ag-grid-how-to-make-a-particular-column-from-a-particular-row-editable-or-non
function IsPinnedRow(param)
{
	return param.data.name === pinnedRowBuildingName;
}

/*
function SingleValueSetter(param) {
	var colId = param.colDef.colId;
	var newValue = Number.parseInt(param.newValue);
	switch (colId) {
		case "GA":
			scoreGA = newValue;
			break;
		case "GP":
			scoreGP = newValue;
			break;
		case "GG":
			scoreGG = newValue;
			break;
		case "FP":
			scoreFP = newValue;
			break;
		case "AA":
			scoreAA = newValue;
			break;
		case "AD":
			scoreAD = newValue;
			break;
		case "DA":
			scoreDA = newValue;
			break;
		case "DD":
			scoreDD = newValue;
			break;
	}
	localStorage.setItem("score"+ colId + "[" + selectedCity + "]", newValue);
	CreateTopRowData();
	setTimeout(function() {
			aggrid.gridOptions.api.sortController.onSortChanged();
			aggrid.gridOptions.api.redrawRows();
		}, 0)
}
*/

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector('#foeGrid');
  aggrid = agGrid.createGrid(gridDiv, gridOptions);
});
