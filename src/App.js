import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableColumnResizing,
  DragDropProvider,
  TableColumnReordering,
  ColumnChooser,
  TableColumnVisibility,
  Toolbar,
} from '@devexpress/dx-react-grid-material-ui';


function App() {

  const [columns] = useState([
    { name: 'name', title: 'Имя' },
    { name: 'gender', title: 'Пол' },
    { name: 'price', title: 'Цена' },
  ]);

  const [rows] = useState([
    {
      name:"Влад",
      gender:"М",
      price:2500,
    },
    {
      name:"Макс",
      gender:"М",
      price:500,},
    {
      name:"Аня",
      gender:"Ж",
      price:9500,}
  ]);

  const [defaultColumnWidths] = useState([
    { columnName: 'name', width: 250 },
    { columnName: 'gender', width: 250 },
    { columnName: 'price', width: 250 },
  ]);

  const [defaultHiddenColumnNames] = useState(['gender',]);

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table />
        <DragDropProvider />
        <TableColumnReordering
          defaultOrder={[ 'gender', 'price', 'name']}
        />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
        <TableHeaderRow />
        
        <TableColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
        />
        <Toolbar />
        <ColumnChooser />
      </Grid>
    </Paper>
  );
}

export default App;
