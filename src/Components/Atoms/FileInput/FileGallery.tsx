import React, { ReactElement, useState } from 'react';
import classnames from 'classnames';

import { Icon } from '../Icon';
import { MenuDirectionEnum, Tooltip } from '../Tooltip';
import { FileStatusEnum, IFile } from './types';
import { formatBytes } from './fileUtils';

export interface IFileGallery {
  /** Disabled field (optional, default: false) */
  disabled?: boolean;
  /** File to be displayed */
  file: IFile;
  /** Reference to the progress map (optional, default: undefined) */
  progress?: Record<string, number>;
  /** Read only field (optional, default: false) */
  readOnly?: boolean;
  /** Show file size (optional, default: false) */
  showFileSize?: boolean;
  /** Show progress bar (optional, default: false) */
  showProgressBar?: boolean;
  /** Delete handler */
  updateFileDelete: (file: IFile) => Promise<void>;
  /** Download handler */
  updateFileDownload: (file: IFile) => Promise<void>;
}

const FileGallery = (props: IFileGallery): ReactElement => {
  const { disabled, file, progress, readOnly, showFileSize, showProgressBar, updateFileDelete, updateFileDownload } =
    props;

  const [downloading, setDownloading] = useState(false);

  const downloadable =
    file.status && ![FileStatusEnum.DELETING, FileStatusEnum.ERROR].includes(file.status) && !downloading;

  return (
    <Tooltip
      tooltip={file.error}
      direction={MenuDirectionEnum.TOP}
      style={{ display: 'inline-block', width: '100%', overflow: 'hidden' }}>
      <div className={classnames('item-container', { error: file.error !== undefined })}>
        <div className='left'>
          <div className='paperclip-icon'>
            {file.error ? <Icon icon={['fal', 'exclamation-triangle']} /> : <Icon icon={['fal', 'paperclip']} />}
          </div>
          <div
            className={classnames('name', {
              downloadable: downloadable,
            })}
            onClick={
              downloadable
                ? () => {
                    setDownloading(true);
                    updateFileDownload(file)
                      .catch()
                      .finally(() => {
                        setDownloading(false);
                      });
                  }
                : undefined
            }>
            {file.name}
            {showFileSize && ` (${formatBytes(file.size)})`}
          </div>
        </div>
        <div className='right'>
          {showProgressBar && file.uid && progress && progress[file.uid] && (
            <progress className='progress' max={100} value={file.uid && progress[file.uid]} />
          )}

          {readOnly || disabled ? (
            <></>
          ) : file.status && [FileStatusEnum.UPLOADING, FileStatusEnum.DELETING].includes(file.status) ? (
            <div className='delete-icon'>
              <Icon icon={['fal', 'spinner']} spin />
            </div>
          ) : (
            <div
              className='delete-icon'
              onClick={() => {
                updateFileDelete(file);
              }}>
              <Icon icon={['fal', 'trash-alt']} />
            </div>
          )}
        </div>
      </div>
    </Tooltip>
  );
};

FileGallery.defaultProps = {
  disabled: false,
  progress: undefined,
  readOnly: false,
  showFileSize: false,
  showProgressBar: false,
};

export default FileGallery;
