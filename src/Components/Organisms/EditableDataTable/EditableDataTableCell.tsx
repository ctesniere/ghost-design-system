import React, { ReactElement } from 'react';

import {
  AmountCell,
  BadgeCell,
  ButtonCell,
  CodeCell,
  CustomCell,
  DateCell,
  NumberCell,
  PercentageCell,
  TextCell,
} from '../StaticDataTable/Cells';
import { ColumnType, IColumnType, IExtraEditableDataTableProps } from '../StaticDataTable/types';

export interface ILineEditableDataTableCellProps<T> {
  column: IColumnType<T>;
  row: T;
  extra?: IExtraEditableDataTableProps<T>;
  rowIndex: number;
  handUpdateDataChange: (rowIndex: number, dataIndex: keyof T, newData: T[keyof T]) => void;
}

const LineEditableDataTableCell = <T,>(props: ILineEditableDataTableCellProps<T>): ReactElement => {
  const { column, row, extra, rowIndex, handUpdateDataChange } = props;

  switch (column.type) {
    case ColumnType.AMOUNT: {
      return (
        <AmountCell<T>
          column={column}
          row={row}
          extra={extra}
          rowIndex={rowIndex}
          onChange={(newValue) => {
            handUpdateDataChange(rowIndex, column.dataIndex, newValue);
          }}
          editing
        />
      );
    }
    case ColumnType.BADGE: {
      return (
        <BadgeCell<T>
          column={column}
          row={row}
          extra={extra}
          rowIndex={rowIndex}
          onChange={(newValue) => {
            handUpdateDataChange(rowIndex, column.dataIndex, newValue);
          }}
          editing
        />
      );
    }
    case ColumnType.BUTTON: {
      return <ButtonCell<T> column={column} row={row} extra={extra} rowIndex={rowIndex} />;
    }
    case ColumnType.CODE: {
      return <CodeCell<T> column={column} row={row} extra={extra} rowIndex={rowIndex} />;
    }
    case ColumnType.CUSTOM: {
      return (
        <CustomCell<T>
          column={column}
          row={row}
          extra={extra}
          rowIndex={rowIndex}
          onChange={(newValue) => {
            handUpdateDataChange(rowIndex, column.dataIndex, newValue);
          }}
          editing
        />
      );
    }
    case ColumnType.DATE: {
      return (
        <DateCell<T>
          column={column}
          row={row}
          extra={extra}
          rowIndex={rowIndex}
          onChange={(newValue) => {
            handUpdateDataChange(rowIndex, column.dataIndex, newValue);
          }}
          editing
        />
      );
    }
    case ColumnType.NUMBER: {
      return (
        <NumberCell<T>
          column={column}
          row={row}
          extra={extra}
          rowIndex={rowIndex}
          onChange={(newValue) => {
            handUpdateDataChange(rowIndex, column.dataIndex, newValue);
          }}
          editing
        />
      );
    }
    case ColumnType.PERCENTAGE: {
      return (
        <PercentageCell<T>
          column={column}
          row={row}
          extra={extra}
          rowIndex={rowIndex}
          onChange={(newValue) => {
            handUpdateDataChange(rowIndex, column.dataIndex, newValue);
          }}
          editing
        />
      );
    }
    case ColumnType.TEXT: {
      return (
        <TextCell<T>
          column={column}
          row={row}
          extra={extra}
          rowIndex={rowIndex}
          onChange={(newValue) => {
            handUpdateDataChange(rowIndex, column.dataIndex, newValue);
          }}
          editing
        />
      );
    }
    default: {
      throw new Error('Missing ColumnType');
      break;
    }
  }

  throw new Error('Should have returned by then');
};

export default LineEditableDataTableCell;