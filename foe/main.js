const pinnedRowBuildingName = "Priority scores:";

const columnDefs = [
	{
		headerName: "Building",
		children: [
			{
				headerName: "Name",
				width: 300,
				sortable: true,
				field: "Name",
				colId: "Name",
			},
			{
				headerName: "Size",
				width: 60,
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
		width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
				width: 60,
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
		headerName: "Quantum Incursion",
		children: [
			{
				headerName: "AA",
				width: 60,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "QAA",
				valueGetter: GetQuantumAttAtt,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "AD",
				width: 60,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "QAD",
				valueGetter: GetQuantumAttDef,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "DA",
				width: 60,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "QDA",
				valueGetter: GetQuantumDefAtt,
				valueSetter: param => { SingleValueSetter(param); },
				editable: IsPinnedRow,
			},
			{
				headerName: "DD",
				width: 60,
				cellClass: "ag-right-aligned-cell",
				sortable: true,
				comparator: CompareColumnAndName,
				colId: "QDD",
				valueGetter: GetQuantumDefDef,
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

// specify the data
const rowData = buildings;

var scoreTAA = localStorage.getItem("scoreTAA") || 5;
var scoreTAD = localStorage.getItem("scoreTAD") || 5;
var scoreTDA = localStorage.getItem("scoreTDA") || 5;
var scoreTDD = localStorage.getItem("scoreTDD") || 5;

var scoreBAA = localStorage.getItem("scoreBAA") || 5;
var scoreBAD = localStorage.getItem("scoreBAD") || 5;
var scoreBDA = localStorage.getItem("scoreBDA") || 5;
var scoreBDD = localStorage.getItem("scoreBDD") || 5;

var scoreEAA = localStorage.getItem("scoreEAA") || 5;
var scoreEAD = localStorage.getItem("scoreEAD") || 5;
var scoreEDA = localStorage.getItem("scoreEDA") || 5;
var scoreEDD = localStorage.getItem("scoreEDD") || 5;

var scoreQAA = localStorage.getItem("scoreQAA") || 10;
var scoreQAD = localStorage.getItem("scoreQAD") || 10;
var scoreQDA = localStorage.getItem("scoreQDA") || 10;
var scoreQDD = localStorage.getItem("scoreQDD") || 10;

var scoreFP = localStorage.getItem("scoreFP") || 5;

var topRowData = [{
		"name": pinnedRowBuildingName,
		"X": 0, "Y": 0, "Road": "N", "FP": 0,
		"TAA": 0, "TAD": 0, "TDA": 0, "TDD": 0,
		"BAA": 0, "BAD": 0, "BDA": 0, "BDD": 0,
		"EAA": 0, "EAD": 0, "EDA": 0, "EDD": 0,
		"QAA": 0, "QAD": 0, "QDA": 0, "QDD": 0,
	}];

function CreateTopRowData()
{
	topRowData[0].TAA = scoreTAA;
	topRowData[0].TAD = scoreTAD;
	topRowData[0].TDA = scoreTDA;
	topRowData[0].TDD = scoreTDD;

	topRowData[0].BAA = scoreBAA;
	topRowData[0].BAD = scoreBAD;
	topRowData[0].BDA = scoreBDA;
	topRowData[0].BDD = scoreBDD;

	topRowData[0].EAA = scoreEAA;
	topRowData[0].EAD = scoreEAD;
	topRowData[0].EDA = scoreEDA;
	topRowData[0].EDD = scoreEDD;

	topRowData[0].QAA = scoreQAA;
	topRowData[0].QAD = scoreQAD;
	topRowData[0].QDA = scoreQDA;
	topRowData[0].QDD = scoreQDD;

	topRowData[0].FP = scoreFP;

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
	if (GetBuildingSize(node) == 0)
		return 0;

	var value = 0;

	value += node.data.TAA * scoreTAA;
	value += node.data.TAD * scoreTAD;
	value += node.data.TDA * scoreTDA;
	value += node.data.TDD * scoreTDD;

	value += node.data.BAA * scoreBAA;
	value += node.data.BAD * scoreBAD;
	value += node.data.BDA * scoreBDA;
	value += node.data.BDD * scoreBDD;

	value += node.data.EAA * scoreEAA;
	value += node.data.EAD * scoreEAD;
	value += node.data.EDA * scoreEDA;
	value += node.data.EDD * scoreEDD;

	value += node.data.QAA * scoreQAA;
	value += node.data.QAD * scoreQAD;
	value += node.data.QDA * scoreQDA;
	value += node.data.QDD * scoreQDD;

	value += node.data.FP * scoreFP;

	value /= GetBuildingSize(node);
	return value;
}

function CompareColumnAndName(valueA, valueB, nodeA, nodeB, isDescending)
{
	if (valueA !== valueB)
		return (valueA * 1) > (valueB * 1) ? 1 : -1;
	return nodeA.data.Name > nodeB.data.Name ? 1 : -1;
}

function GetBuildingSize(node)
{
	var road = Math.min(node.data.X, node.data.Y) * (node.data.Road == "Y" ? 0.5 : 0);
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
	return node.data.TAA;
}

function GetTroopAttDef(node)
{
	return node.data.TAD;
}

function GetTroopDefAtt(node)
{
	return node.data.TDA;
}

function GetTroopDefDef(node)
{
	return node.data.TDD;
}

function GetBattlegroundAttAtt(node)
{
	return node.data.BAA;
}

function GetBattlegroundAttDef(node)
{
	return node.data.BAD;
}

function GetBattlegroundDefAtt(node)
{
	return node.data.BDA;
}

function GetBattlegroundDefDef(node)
{
	return node.data.BDD;
}

function GetExpeditionAttAtt(node)
{
	return node.data.EAA;
}

function GetExpeditionAttDef(node)
{
	return node.data.EAD;
}

function GetExpeditionDefAtt(node)
{
	return node.data.EDA;
}

function GetExpeditionDefDef(node)
{
	return node.data.EDD;
}

function GetQuantumAttAtt(node)
{
	return node.data.QAA;
}

function GetQuantumAttDef(node)
{
	return node.data.QAD;
}

function GetQuantumDefAtt(node)
{
	return node.data.QDA;
}

function GetQuantumDefDef(node)
{
	return node.data.QDD;
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
	localStorage.setItem("score"+ colId + "", newValue);
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
