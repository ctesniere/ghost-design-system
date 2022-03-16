import React, { ReactElement, MouseEvent, useState } from 'react';
import classnames from 'classnames';

import { IColumnType, IExtraEditableDataTableProps } from '../StaticDataTable/types';
import StaticDataTableCellSelectable from '../StaticDataTable/StaticDataTableCellSelectable';
import EditableDataTableCell from './EditableDataTableCell';

interface IEditableDataTableBodyProps<T> {
  columns: Array<IColumnType<T>>;
  data: Array<T>;
  extra: IExtraEditableDataTableProps<T>;
  handleUpdateDataChange: (rowIndex: number, dataIndex: keyof T, newData: T[keyof T]) => void;
  loading?: ReactElement;
}

const EditableDataTableBody = <T,>(props: IEditableDataTableBodyProps<T>): ReactElement => {
  const { columns, data, extra, handleUpdateDataChange, loading } = props;

  const [selectedRows, setSelectedRows] = useState<Record<number, boolean>>({});

  const isSelectable = extra?.onRowSelect;

  const handleRowClick = (row: T, rowIndex: number) => {
    return extra && extra.onRowClick
      ? (event: MouseEvent<HTMLElement>) => {
          event.preventDefault();
          if (extra && extra.onRowClick) {
            extra.onRowClick(row, rowIndex);
          }
        }
      : undefined;
  };

  /** Handle */
  const handleSelectClick = (row: T, rowIndex: number) => {
    return (_event: MouseEvent<HTMLElement>, selected: boolean) => {
      const newSelectedRows = { ...selectedRows };
      newSelectedRows[rowIndex] = selected;
      setSelectedRows(newSelectedRows);
      if (extra?.onRowSelect) {
        extra.onRowSelect(
          data.filter((_row, index) => newSelectedRows[index]),
          row,
          rowIndex,
        );
      }
    };
  };

  return (
    <tbody>
      {data.map((row, rowIndex) => {
        const isEditable = extra?.isEditable === undefined || extra.isEditable(row, rowIndex);
        return (
          <tr
            key={`row-${rowIndex}`}
            onClick={handleRowClick(row, rowIndex)}
            className={classnames({ pointer: extra && extra.onRowClick, selected: selectedRows[rowIndex] })}>
            {isSelectable && (
              <StaticDataTableCellSelectable
                handleSelectClick={handleSelectClick(row, rowIndex)}
                selected={selectedRows[rowIndex]}
                selectable={extra.isSelectable ? extra.isSelectable(row, rowIndex) : true}
                dataTestId={`select-row-${rowIndex}`}
              />
            )}

            {columns.map((column) => {
              return (
                <EditableDataTableCell<T>
                  key={`cell-${rowIndex}-${column.title}`}
                  column={column}
                  row={row}
                  extra={extra}
                  rowIndex={rowIndex}
                  handleUpdateDataChange={handleUpdateDataChange}
                  editable={isEditable}
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

export default EditableDataTableBody;