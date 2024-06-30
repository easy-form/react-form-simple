import { IconFont } from '@components/IconFont';
import { ScrollBar } from '@components/ScrollBar';
import Tag from '@components/Tag';
import { IconButton, Popover, Tooltip } from '@mui/material';
import { useIntl } from 'dumi';
import React, { useCallback, useEffect, useState } from 'react';
import { isMeaningful } from 'react-form-simple/utils/util';
import { useLocalFormat } from 'useLocalFormat';
import './index.less';

function useJSONContent() {
  const getTableData = (path: any) => {
    try {
      const ret = require(`../../../../docs/api/apiChildJSON/${path}.json`);

      return Object.values(ret || {});
    } catch (error) {
      console.error(`Error loading JSON file: ${error}`);
      return [];
    }
  };

  const getTableDataAll = (paths: any) => {
    return Object.fromEntries(
      paths.map(([name, path]: any) => [name, getTableData(path)]),
    );
  };

  return {
    getTableData,
    getTableDataAll,
  };
}

function TooltipInfo(props: any) {
  const { apiInstance } = props;

  const { tags } = JSON.parse(apiInstance) || {};
  const { getTableData } = useJSONContent();

  const infoDatas = getTableData(tags?.infoPath) as any;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const open = Boolean(anchorEl);

  const renderContent = infoDatas?.map((prop: any, index: number) => {
    return (
      <div>
        <div
          style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}
        >
          {prop.name}
        </div>
        <App key={prop.name} apiInstance={JSON.stringify(prop)} />
      </div>
    );
  });

  return (
    <>
      <Tooltip
        title={<span style={{ fontSize: '14px' }}>{tags?.infoTitle}</span>}
        placement="top"
      >
        <IconButton
          className="more-icon"
          onClick={(e) => {
            setAnchorEl(e.currentTarget as any);
          }}
        >
          <IconFont name="info" size={22} />
        </IconButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        className="popover-container"
      >
        <ScrollBar className="markdown popover-wrap" noEvent>
          {renderContent}
        </ScrollBar>
      </Popover>
    </>
  );
}

const APIType = (props: any) => {
  const intl = useIntl();
  const { type, tags, apiInstance } = props;
  const [isResetWrite, setIsResetWrite] = useState(false);

  useEffect(() => {
    const isResetWrite = !!tags?.resetType;
    setIsResetWrite(isResetWrite);
  }, [props]);

  const getResetType = useCallback((tags: any) => {
    if (tags?.resetType) {
      return <code>{tags?.resetType}</code>;
    }
    return null;
  }, []);

  const renderContent = isResetWrite ? (
    getResetType(tags)
  ) : (
    <code>{type?.name}</code>
  );

  return (
    <div className="type">
      <span className="type-txt">
        {intl.formatMessage({ id: 'api.component.type' })}:
      </span>
      <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
        {renderContent}
      </span>
      {tags?.infoPath && (
        <TooltipInfo path={tags?.infoPath} apiInstance={apiInstance} />
      )}
    </div>
  );
};

const Desc = ({ desc, tags }: any) => {
  const intl = useIntl();

  const { format, isLocalZH_CN } = useLocalFormat();
  if (tags?.localKey === '' || tags?.localKey === undefined) {
    console.log('No Data', tags);
  }

  const _desc = format({ id: tags?.localKey });

  return (
    <div className="desc">
      <div>
        <span className="desc-txt">
          {intl.formatMessage({ id: 'api.component.description' })}:
        </span>
        <span
          dangerouslySetInnerHTML={{
            __html: isMeaningful(_desc) ? _desc : desc,
          }}
          className="desc-info"
          style={
            isLocalZH_CN()
              ? {}
              : {
                  letterSpacing: '0',
                }
          }
        />
      </div>
      {tags?.link && (
        <div>
          <span dangerouslySetInnerHTML={{ __html: tags?.link }}></span>
        </div>
      )}
    </div>
  );
};

const APIDefault = (props: any) => {
  const { defaultValue } = props;
  const { value } = defaultValue || {};
  const intl = useIntl();

  const toCodeType = () => {
    if (!isMeaningful(value)) return <code>--</code>;
    if (value === 'true' || value === 'false') {
      return <code>{value}</code>;
    }
    return <code>"{value}"</code>;
  };
  return (
    <div className="default">
      <span className="default-txt">
        {intl.formatMessage({ id: 'api.component.default' })}:
      </span>
      {toCodeType()}
    </div>
  );
};

export default function App(props: any) {
  const { apiInstance } = props;
  const parseApiInstance = JSON.parse(apiInstance);
  const { tags, type, defaultValue } = parseApiInstance || {};
  return (
    <div className="api-wrap">
      <Tag style={{ marginBottom: '6px' }}>
        {tags?.version ? `${tags?.version}+` : '1.1.0+'}
      </Tag>
      <APIType tags={tags} type={type} apiInstance={apiInstance} />
      <Desc desc={tags?.description || '--'} tags={tags} />
      <APIDefault defaultValue={defaultValue} />
    </div>
  );
}
