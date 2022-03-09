import React, { ReactElement, MouseEvent, useState } from 'react';
import classnames from 'classnames';

import { IColumnType, IExtraEditableDataTableProps } from '../StaticDataTable/types';
import StaticDataTableCellSelectable from '../StaticDataTable/StaticDataTableCellSelectable';
import EditableDataTableCell from './EditableDataTableCell';

interface IEditableDataTableBodyProps<T> {
  columns: Array<IColumnType<T>>;
  data: Array<T>;
  extra: IExtraEditableDataTableProps<T>;
  handUpdateDataChange: (rowIndex: number, dataIndex: keyof T, newData: T[keyof T]) => void;
}

const EditableDataTableBody = <T,>(props: IEditableDataTableBodyProps<T>): ReactElement => {
  const { columns, data, extra, handUpdateDataChange } = props;

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
                selectable={extra.isSelectable ? extra.isSelectable(row) : true}
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
                  handUpdateDataChange={handUpdateDataChange}
                />
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default EditableDataTableBody;