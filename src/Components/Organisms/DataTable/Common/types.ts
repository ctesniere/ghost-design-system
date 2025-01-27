import { CSSProperties, ReactElement } from 'react';
import * as yup from 'yup';
import lang from 'suneditor-react/dist/types/lang';

import { IconProp } from '../../../Atoms/Icon';
import { BadgeColorsEnum } from '../../../Atoms/Badge';
import { DateFormat, DateFormatEnum, WeekDayEnum } from '../../../Atoms/DatePickerInput';
import { IOption } from '../../../Atoms/SelectInput';
import { ThousandsGroupStyle } from '../../../Atoms/AmountInput';
import { ColorButtonEnum } from '../../../Molecules/Button';
import { IFile } from '../../../Atoms/FileInput';
import { IFieldProps } from '../../Form';

export enum ColumnType {
  AMOUNT = 'amount',
  BADGE = 'badge',
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  CODE = 'code',
  CUSTOM = 'custom',
  DATE = 'date',
  DESCRIPTION = 'description',
  DYNAMICSEARCH = 'dynamicsearch',
  FILE = 'file',
  MULTISELECT = 'multiselect',
  NUMBER = 'number',
  PERCENTAGE = 'percentage',
  RICHTEXT = 'richtext',
  SECTION = 'section',
  SWITCH = 'switch',
  TABLE = 'table',
  TEXT = 'text',
  TEXTAREA = 'textarea',
  YEAR = 'year',
}

export enum SortDirectionEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export interface IButtonCellProps<T> {
  /** Custom className (optional, default: undefined) */
  className?: string;
  /** Button is hidden (optional, default: false) */
  hidden?: (row: T, rowIndex: number) => boolean;
  /** Icon name */
  icon: IconProp;
  /** Label use as tooltip if button of first level */
  label: string;
  /** Loading state, disabling the button and replacing icon with spiner (optional, default: false) */
  loading?: boolean;
  /** Button click event handler (optional, default: undefined) */
  onClick?: (row: T, rowIndex: number) => void;
  /** Confirmation Popover enabled (optional, default: false) */
  popover?: {
    message: string;
    confirm: string;
    cancel: string;
  };
  /** For test purpose only */
  dataTestId?: string;
}

interface IColumn {
  /** For test purpose only */
  dataTestId?: string;
  /** Enables ellipsis on the colum when it overflows (optional, default: undefined) */
  ellipsis?: boolean;
  /** Make the field when in edition (for lineeditabledatatable (optional, default: false) */
  hiddenInForm?: boolean;
  /** Makes the column invisible (optional, default: false) */
  hidden?: boolean;
  /** Enables sort on the colum (optional, default: undefined) */
  sorter?: boolean;
  /** Title of the column */
  title: string;
  /** Column width (as a CSSProperty) (optional, default: undefined) */
  width?: CSSProperties['width'];
}

export interface IColumnAmount<T> extends IColumn {
  allowNegative?: boolean;
  currency?: string;
  dataIndex: keyof T;
  decimalScale?: number;
  decimalSeparator?: string;
  editable?: boolean;
  maxValue?: number;
  minValue?: number;
  placeholder?: string;
  thousandSeparator?: string;
  thousandsGroupStyle?: ThousandsGroupStyle;
  type: ColumnType.AMOUNT;
}

export interface IColumnBadge<T> extends IColumn {
  color?: BadgeColorsEnum;
  dataIndex: keyof T;
  editable?: boolean;
  isClearable?: boolean;
  // When the value is not present in the options, should the value be erased (optional, default: false)
  eraseValueWhenNotInOptions?: boolean;
  options: Array<IOption> | ((row: T | undefined) => Array<IOption>);
  selectColors?: {
    controlErrorColor: string; // colors.error,
    controlFocusColor: string; // colors.primary,
    fontColor: string; // 'rgb(0, 0, 0)',
    optionFocusColor: string; // colors.chalk,
    optionSelectedColor: string; // colors.primary,
  };
  placeholder?: string;
  type: ColumnType.BADGE;
  usePortal?: boolean;
}

export interface IColumnButton<T> extends IColumn {
  buttons: Array<IButtonCellProps<T>>;
  moreActionsMessage: string;
  type: ColumnType.BUTTON;
}

export interface IColumnCheckbox<T> extends IColumn {
  dataIndex: keyof T;
  editable?: boolean;
  type: ColumnType.CHECKBOX;
}

export interface IColumnCode<T> extends IColumn {
  dataIndex: keyof T;
  type: ColumnType.CODE;
}

export interface IColumnCustom<T> extends IColumn {
  customRender: <
    U extends {
      highlighted?: boolean;
      inputValue?: T[keyof T];
      onChange?: (value: T[keyof T]) => void;
      readOnly?: boolean;
    },
  >(
    props: U,
  ) => ReactElement;

  dataIndex: keyof T;
  editable?: boolean;
  type: ColumnType.CUSTOM;
}

export interface IColumnDescription<T> extends IColumn {
  dataIndex: keyof T;
  description: ReactElement | (<U extends { value: T[keyof T] }>(props: U) => ReactElement);
  type: ColumnType.DESCRIPTION;
}

export interface IColumnDate<T> extends IColumn {
  calendarStartDay?: WeekDayEnum;
  dataIndex: keyof T;
  dateFormat?: DateFormat;
  editable?: boolean;
  isClearable?: boolean;
  locale?: string;
  type: ColumnType.DATE;
  usePortal?: boolean;
}

export interface IColumnDynamicSearch<T> extends IColumn {
  dataIndex: keyof T;
  editable?: boolean;
  isClearable?: boolean;
  noOptionsMessage: (obj: { inputValue: string }) => string;
  placeholder?: string;
  resolveValue: (value: string | number) => Promise<IOption | undefined>;
  searchOptions: (searchTerm: string) => Promise<Array<IOption>>;
  selectColors?: {
    controlErrorColor: string; // colors.error,
    controlFocusColor: string; // colors.primary,
    fontColor: string; // 'rgb(0, 0, 0)',
    optionFocusColor: string; // colors.chalk,
    optionSelectedColor: string; // colors.primary,
  };
  type: ColumnType.DYNAMICSEARCH;
  usePortal?: boolean;
}

export interface IColumnFile<T> extends IColumn {
  acceptTypes?: string;
  additionalInfo?: string | ReactElement;
  dataIndex: keyof T;
  editable?: boolean;
  maxFiles?: number;
  maxFileSize?: number;
  maxFolderDepth?: number;
  onDelete: (file: IFile) => Promise<void>;
  onDownload?: (file: IFile) => Promise<void>;
  requestHeaders?: Record<string, string>;
  requestMethod: 'POST' | 'PUT';
  requestUrl: string;
  requestWithCredentials?: boolean;
  showFileSize?: boolean;
  showProgressBar?: boolean;
  uploadMessage?: string | ReactElement;
  localization?: {
    delete?: string;
    popoverConfirm?: string;
    popoverCancel?: string;
    popoverTitle?: string;
    invalidType?: string;
    quotaExceeded?: string;
    sizeExceeded?: string;
  };
  type: ColumnType.FILE;
}

export interface IColumnMultiSelect<T> extends IColumn {
  dataIndex: keyof T;
  editable?: boolean;
  // When the value is not present in the options, should the value be erased (optional, default: false)
  eraseValueWhenNotInOptions?: boolean;
  isClearable?: boolean;
  options: Array<IOption> | ((data: T | undefined) => Array<IOption>);
  numberOfItemLabel: string;
  numberOfItemsLabel: string;
  placeholder?: string;
  selectColors?: {
    controlErrorColor: string; // colors.error,
    controlFocusColor: string; // colors.primary,
    fontColor: string; // 'rgb(0, 0, 0)',
    optionFocusColor: string; // colors.chalk,
    optionSelectedColor: string; // colors.primary,
  };
  type: ColumnType.MULTISELECT;
  usePortal?: boolean;
}

export interface IColumnNumber<T> extends IColumn {
  allowNegative?: boolean;
  dataIndex: keyof T;
  decimalScale?: number;
  decimalSeparator?: string;
  editable?: boolean;
  maxValue?: number;
  minValue?: number;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  thousandSeparator?: string;
  thousandsGroupStyle?: ThousandsGroupStyle;
  type: ColumnType.NUMBER;
}

export interface IColumnPercentage<T> extends IColumn {
  allowNegative?: boolean;
  dataIndex: keyof T;
  decimalScale?: number;
  decimalSeparator?: string;
  editable?: boolean;
  maxValue?: number;
  minValue?: number;
  placeholder?: string;
  thousandSeparator?: string;
  thousandsGroupStyle?: ThousandsGroupStyle;
  type: ColumnType.PERCENTAGE;
}

export interface IColumnRichText<T> extends IColumn {
  convertImagesToBase64?: boolean;
  dataIndex: keyof T;
  editable?: boolean;
  enableImage?: boolean;
  enableLink?: boolean;
  locale?: lang;
  maxLength?: number;
  type: ColumnType.RICHTEXT;
}

export interface IColumnSection<T> extends IColumn {
  collapsable?: boolean;
  dataIndex: keyof T;
  openInitially?: boolean;
  fields: Array<IFieldProps<T>>;
  label: string;
  type: ColumnType.SECTION;
}

export interface IColumnSwitch<T> extends IColumn {
  dataIndex: keyof T;
  editable?: boolean;
  type: ColumnType.SWITCH;
}

export interface IColumnTable<T, U> extends IColumn {
  columns: Array<IColumnType<U>>;
  dataIndex: keyof T;
  editable?: boolean;
  extra: IExtraLineEditableDataTableProps<U>;
  loading?: ReactElement;
  onSortChange?: (sortField?: keyof U, sortDirection?: SortDirectionEnum) => void;
  type: ColumnType.TABLE;
}

export interface IColumnText<T> extends IColumn {
  dataIndex: keyof T;
  editable?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  type: ColumnType.TEXT;
}

export interface IColumnTextArea<T> extends IColumn {
  dataIndex: keyof T;
  editable?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  type: ColumnType.TEXTAREA;
}

export interface IColumnYear<T> extends IColumn {
  dataIndex: keyof T;
  editable?: boolean;
  type: ColumnType.YEAR;
  usePortal?: boolean;
}

export type IColumnType<T> =
  | IColumnAmount<T>
  | IColumnBadge<T>
  | IColumnButton<T>
  | IColumnCheckbox<T>
  | IColumnCode<T>
  | IColumnCustom<T>
  | IColumnDate<T>
  | IColumnDescription<T>
  | IColumnDynamicSearch<T>
  | IColumnFile<T>
  | IColumnMultiSelect<T>
  | IColumnNumber<T>
  | IColumnPercentage<T>
  | IColumnRichText<T>
  | IColumnSection<T>
  | IColumnSwitch<T>
  // TODO investigate type resolution
  // Using any to avoid circular type definition for now, until there is a way to get the type of an item of T[keyof T]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | IColumnTable<T, any>
  | IColumnText<T>
  | IColumnTextArea<T>
  | IColumnYear<T>;

export type TableType<T> = Record<keyof T, string | number | Date | undefined | null>;

export interface IExtraStaticDataTableProps<T> {
  /** Method used to enable and compute the total for each column (optional, default: undefined) */
  computeTotal?: (data: Array<T>, dataIndex: keyof T) => T[keyof T] | undefined;
  /** Global currency, which can be override by the amount column setting (optional, default: undefined) */
  currency?: string;
  /** Global date format, which can be override by the date column setting (optional, default: undefined) */
  dateFormat?: DateFormatEnum;
  /** Method used to enable the click on row, and handle the click on a specific row (optional, default: undefined) */
  onRowClick?: (row: T, rowIndex: number) => void;
  /** Method used to enable the selection of rows, and handle the selection of a specific row (optional, default: undefined) */
  onRowSelect?: (selectedRows: Array<T>, clickedRow: T, rowIndex: number) => void;
  /** Method used to disable the selection of a specific row, by default not called and considered as selectable (optional, default: undefined) */
  isSelectable?: (row: T, rowIndex: number) => boolean;
  /** localization (optional, default:
   *    moreActionsMessage: 'More actions'
   *    noData: 'No data'
   *    sortMessage: 'Click to sort'
   *    total: 'Total'
   * )
   */
  localization?: {
    moreActionsMessage?: string;
    noData?: string;
    sortMessage?: string;
    total?: string;
  };
}

export interface IExtraLineEditableDataTableProps<T> extends IExtraStaticDataTableProps<T> {
  /** Action column width (as a CSSProperty) (optional, default: undefined) */
  actionColumnWidth?: string;
  /** Disable tabbing outside modal (optional, default: true) */
  disableTabOutside?: boolean;
  /** Notification of initiation of changes on a specific row (optional, default: undefined) */
  onRowEdit?: (editRow: T, editedRowIndex: number) => void;
  /** Additional actions shown in the row edit modal (optional, default: undefined) */
  rowEditExtraActions?: (
    editRow: T,
    editedRowIndex: number,
  ) => Array<{
    label: string;
    // If the execution of this action fails, notify the user and reject the call.
    onClick: (editRow: T, editedRowIndex: number) => Promise<void>;
    // Color of the button (optional, default: ColorButtonEnum.SECONDARY)
    color?: ColorButtonEnum;
  }>;
  /** Show side by side in modal (optional, default: false) */
  showChanges?: boolean;
  /** Notification of changes cancellation on a specific row (optional, default: undefined) */
  onRowCancelEdit?: (editRow: T, editedRowIndex: number) => void;
  /** Notification of changes on a specific row (optional, default: undefined) */
  onRowSubmit?: (editedRow: T, submittedRowIndex: number) => void;
  /** Method used to disable the edition of a specific row, by default not called and considered as editable (optional, default: undefined) */
  isEditable?: (row: T, rowIndex: number) => boolean;
  /** Method used to enable the deletion of a specific row (optional, default: undefined) */
  onRowDelete?: (deletedRow: T, deletedRowIndex: number) => void;
  /** Method used to disable the deletion of a specific row, by default not called and considered as deletable (optional, default: undefined) */
  isDeletable?: (row: T, rowIndex: number) => boolean;
  /** Initial index of edited row */
  editedRowIndex?: number;
  /** Method used to enable the download of a specific row (optional, default: undefined) */
  onRowDownload?: (downloadRow: T, downloadRowIndex: number) => void;
  /** Method used to disable the download of a specific row, by default not called and considered as deletable (optional, default: undefined) */
  isDownloadable?: (row: T, rowIndex: number) => boolean;
  /** Method used to enable the button to add a new line (optional, default: undefined) */
  canAddNewLine?: () => boolean;
  /** Method used to when the new line button is clicked to get initial values (optional, default: undefined) */
  onNewLine?: () => T;
  /** Validation schema to be used in the modal (if this conditions are not met, the line cannot be updated) (optional, default: undefined) */
  validationSchema: yup.SchemaOf<T>;
  /** localization (optional, default:
   *    actionColumn: 'Actions'
   *    addRow: 'Add row'
   *    cancelButton: 'Cancel'
   *    deleteButton: 'Delete'
   *    deletePopoverMessage: 'Delete?'
   *    deletePopoverConfirm: 'Confirm'
   *    deletePopoverCancel: 'Cancel'
   *    downloadButton: 'Download'
   *    editButton: 'Edit'
   *    modalTitle: 'Edit row'
   *    moreActionsMessage: 'More actions'
   *    noData: 'No data'
   *    sortMessage: 'Click to sort'
   *    submitButton: 'Submit'
   *    total: 'Total'
   * )
   */
  localization?: {
    actionColumn?: string;
    addRow?: string;
    cancelButton?: string;
    deleteButton?: string;
    deletePopoverMessage?: string;
    deletePopoverConfirm?: string;
    deletePopoverCancel?: string;
    downloadButton?: string;
    editButton?: string;
    modalTitle?: ((row: T, rowIndex: number) => string) | string;
    moreActionsMessage?: string;
    noData?: string;
    sortMessage?: string;
    submitButton?: string;
    total?: string;
  };
}

export interface IExtraLineEditableInPlaceDataTableProps<T> extends IExtraStaticDataTableProps<T> {
  /** Notification of initiation of changes on a specific row (optional, default: undefined) */
  onRowEdit?: (editRow: T, editedRowIndex: number) => void;
  /** Notification of changes cancellation on a specific row (optional, default: undefined) */
  onRowCancelEdit?: (editRow: T, editedRowIndex: number) => void;
  /** Notification of changes on a specific row (optional, default: undefined) */
  onRowSubmit?: (editedRow: T, submittedRowIndex: number) => void;
  /** Method used to disable the edition of a specific row, by default not called and considered as editable (optional, default: undefined) */
  isEditable?: (row: T, rowIndex: number) => boolean;
  /** Method used to enable the deletion of a specific row (optional, default: undefined) */
  onRowDelete?: (deletedRow: T, deletedRowIndex: number) => void;
  /** Method used to disable the deletion of a specific row, by default not called and considered as deletable (optional, default: undefined) */
  isDeletable?: (row: T, rowIndex: number) => boolean;
  /** Initial index of edited row */
  editedRowIndex?: number;
  /** Method used to enable the download of a specific row (optional, default: undefined) */
  onRowDownload?: (downloadRow: T, downloadRowIndex: number) => void;
  /** Method used to disable the download of a specific row, by default not called and considered as deletable (optional, default: undefined) */
  isDownloadable?: (row: T, rowIndex: number) => boolean;
  /** Method used to enable the button to add a new line (optional, default: undefined) */
  canAddNewLine?: () => boolean;
  /** Method used to when the new line button is clicked to get initial values (optional, default: undefined) */
  onNewLine?: () => T;
  /** localization (optional, default:
   *    actionColumn: 'Actions'
   *    addRow: 'Add row'
   *    cancelButton: 'Cancel'
   *    deleteButton: 'Delete'
   *    deletePopoverMessage: 'Delete?'
   *    deletePopoverConfirm: 'Confirm'
   *    deletePopoverCancel: 'Cancel'
   *    downloadButton: 'Download'
   *    editButton: 'Edit'
   *    moreActionsMessage: 'More actions'
   *    noData: 'No data'
   *    sortMessage: 'Click to sort'
   *    submitButton: 'Submit'
   *     total: 'Total'
   * )
   */
  localization?: {
    actionColumn?: string;
    addRow?: string;
    cancelButton?: string;
    deleteButton?: string;
    deletePopoverMessage?: string;
    deletePopoverConfirm?: string;
    deletePopoverCancel?: string;
    downloadButton?: string;
    editButton?: string;
    moreActionsMessage?: string;
    noData?: string;
    sortMessage?: string;
    submitButton?: string;
    total?: string;
  };
}

export interface IExtraEditableDataTableProps<T> extends IExtraStaticDataTableProps<T> {
  /** Notification of changes on a specific row (optional, default: undefined) */
  onEdit: (editRow: T, dataIndex: keyof T, editedRowIndex: number) => void;
  /** Method used to disable the edition of a specific row, by default not called and considered as editable (optional, default: undefined) */
  isEditable?: (row: T, rowIndex: number) => boolean;
  /** Method used to enable the deletion of a specific row (optional, default: undefined) */
  onRowDelete?: (deletedRow: T, deletedRowIndex: number) => void;
  /** Method used to disable the deletion of a specific row, by default not called and considered as deletable (optional, default: undefined) */
  isDeletable?: (row: T, rowIndex: number) => boolean;
  /** Method used to enable the download of a specific row (optional, default: undefined) */
  onRowDownload?: (downloadRow: T, downloadRowIndex: number) => void;
  /** Method used to disable the download of a specific row, by default not called and considered as deletable (optional, default: undefined) */
  isDownloadable?: (row: T, rowIndex: number) => boolean;
  /** Method used to enable the button to add a new line (optional, default: undefined) */
  canAddNewLine?: () => boolean;
  /** Method used to when the new line button is clicked to get initial values (optional, default: undefined) */
  onNewLine?: () => T;
  /** localization (optional, default:
   *    actionColumn: 'Actions'
   *    addRow: 'Add row'
   *    deleteButton: 'Delete'
   *    deletePopoverMessage: 'Delete?'
   *    deletePopoverConfirm: 'Confirm'
   *    deletePopoverCancel: 'Cancel'
   *    downloadButton: 'Download'
   *    moreActionsMessage: 'More actions'
   *    noData: 'No data'
   *    sortMessage: 'Click to sort'
   *    total: 'Total'
   * )
   */
  localization?: {
    actionColumn?: string;
    addRow?: string;
    deleteButton?: string;
    deletePopoverMessage?: string;
    deletePopoverConfirm?: string;
    deletePopoverCancel?: string;
    downloadButton?: string;
    moreActionsMessage?: string;
    noData?: string;
    sortMessage?: string;
    total?: string;
  };
}
