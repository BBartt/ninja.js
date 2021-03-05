import React, { useState, useMemo } from 'react';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

import { calculateTotalNumberOfPages } from '../utils';

function DataTable({ data = [], rowsPerPage = 40 }) {
  const [state, setState] = useState({
    searchedVal: '',
    rows: data,
    currentPageNum: 0,
    totalNumberOfPages: calculateTotalNumberOfPages(data, rowsPerPage)
  });

  const search = val => {
    let rowsFound =
      val.length > 0
        ? state.rows.filter(
            row =>
              row?.name1?.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
              row?.email?.toLowerCase().indexOf(val.toLowerCase()) > -1
          )
        : data;

    setState({
      searchedVal: val,
      rows: rowsFound,
      currentPageNum: 0,
      totalNumberOfPages: calculateTotalNumberOfPages(rowsFound, rowsPerPage)
    });
  };

  const rowsToRender = useMemo(() => {
    const startIndex = state.currentPageNum * rowsPerPage;
    return state.rows
      .map(row => <Row key={row.per_id} row={row} />)
      .slice(startIndex, startIndex + rowsPerPage);
  }, [state.rows, state.currentPageNum, rowsPerPage]);

  return (
    <div className="dataTable">
      <Search value={state.searchedVal} onSearch={val => search(val)} />
      <table>
        <tbody>
          {rowsToRender.length > 0 ? (
            rowsToRender
          ) : (
            <tr>
              <td>No data</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        currentPageNumber={state.currentPageNum}
        totalNumberOfPages={state.totalNumberOfPages}
        onClick={num => setState({ ...state, currentPageNum: num })}
      />
    </div>
  );
}

export default DataTable;
