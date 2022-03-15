import React, { ReactElement, MouseEvent, useState } from 'react';
import classnames from 'classnames';

import { IColumnType, IExtraLineEditableInPlaceDataTableProps } from '../StaticDataTable/types';
import StaticDataTableCellSelectable from '../StaticDataTable/StaticDataTableCellSelectable';
import LineEditableInPlaceDataTableCell from './LineEditableInPlaceDataTableCell';

interface ILineEditableInPlaceDataTableBodyProps<T> {
  columns: Array<IColumnType<T>>;
  data: Array<T>;
  extra?: IExtraLineEditableInPlaceDataTableProps<T>;
  handUpdateDataChange: (rowIndex: number, dataIndex: keyof T, newData: T[keyof T]) => void;
  loading?: ReactElement;
}

const LineEditableInPlaceDataTableBody = <T,>(props: ILineEditableInPlaceDataTableBodyProps<T>): ReactElement => {
  const { columns, data, extra, handUpdateDataChange, loading } = props;

  const [selectedRows, setSelectedRows] = useState<Record<number, boolean>>({});

  const isSelectable = extra?.onRowSelect;

  const handleRowClick = (row: T) => {
    return extra && extra.onRowClick
      ? (event: MouseEvent<HTMLElement>) => {
          event.preventDefault();
          if (extra && extra.onRowClick) {
            extra.onRowClick(row);
          }
        }
      : undefined;
  };

  /** Handle */
  const handleSelectClick = (row: T, index: number) => {
    return (_event: MouseEvent<HTMLElement>, selected: boolean) => {
      const newSelectedRows = { ...selectedRows };
      newSelectedRows[index] = selected;
      setSelectedRows(newSelectedRows);
      if (extra?.onRowSelect) {
        extra.onRowSelect(
          data.filter((_row, index) => newSelectedRows[index]),
          row,
        );
      }
    };
  };

  return (
    <tbody>
      {data.map((row, rowIndex) => {
        return (
          <tr
            key={`row-${rowIndex}`}
            onClick={handleRowClick(row)}
            className={classnames({ pointer: extra && extra.onRowClick, selected: selectedRows[rowIndex] })}>
            {isSelectable && (
              <StaticDataTableCellSelectable
                handleSelectClick={handleSelectClick(row, rowIndex)}
                selected={selectedRows[rowIndex]}
                selectable={(extra?.isSelectable ? extra?.isSelectable(row) : true) && !extra?.editedRowIndex}
              />
            )}

            {columns.map((column) => {
              return (
                <LineEditableInPlaceDataTableCell<T>
                  key={`cell-${rowIndex}-${column.title}`}
                  column={column}
                  row={row}
                  extra={extra}
                  rowIndex={rowIndex}
                  handUpdateDataChange={handUpdateDataChange}
                />
              );
            })}
          </tr>
        );
      })}
      {(!data || data?.length === 0) && (
        <tr className='no-data'>
          <td colSpan={columns.length + (isSelectable ? 1 : 0)}>{extra?.localization?.noData || 'No data'}</td>
        </tr>
      )}
      {loading && (
        <tr className='no-data'>
          <td colSpan={columns.length + (isSelectable ? 1 : 0)}>{loading}</td>
        </tr>
      )}
    </tbody>
  );
};

export default LineEditableInPlaceDataTableBody;