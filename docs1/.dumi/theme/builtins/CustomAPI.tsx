import { useCallback, useEffect, useState } from 'react';
import { useController } from 'react-form-simple/use/useController';
import { isMeaningful } from 'react-form-simple/utils/util';

import { useIntl } from 'dumi';
import React from 'react';
import './customAPI.less';

interface CustomAPI {
  path: string;
}

const APIType: any = (props: any) => {
  const intl = useIntl();
  const { type, tags } = props;
  const [isResetWrite, setIsResetWrite] = useState(false);

  useEffect(() => {
    const isResetWrite = !!tags?.link || !!tags?.resetType;
    setIsResetWrite(isResetWrite);
  }, [props]);

  const getResetType = useCallback((tags) => {
    if (tags?.link) {
      return (
        <a
          href={tags?.link}
          target="_blank"
          style={{ textDecoration: 'none', fontSize: '14px', color: 'red' }}
        >
          {tags?.linkName || '跳转'}
        </a>
      );
    }
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
      <span style={{ fontWeight: 'bold' }}>{renderContent}</span>
    </div>
  );
};

const Name = ({ name }: any) => {
  return <div className="name">{name}</div>;
};

const Desc = ({ desc }: any) => {
  const intl = useIntl();
  return (
    <div className="desc">
      <span className="desc-txt">
        {intl.formatMessage({ id: 'api.component.description' })}:
      </span>
      <span>{desc}</span>
    </div>
  );
};

const APIDefault = (props: any) => {
  const { defaultValue, name } = props;
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

function CustomAPI(props: CustomAPI) {
  const { path } = props;

  const datas = useController({ tableData: null });

  const tableData: any[] = Object.entries(datas.tableData || {});

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = require(`../../metadata/apis/${path}.json`);
        datas.tableData = response;
      } catch (error) {
        console.error(`Error loading JSON file: ${error}`);
      }
    };
    if (path) {
      fetchJsonData();
    }
  }, [path]);

  const renderTbody = tableData.map(([name, prop]) => {
    return (
      <div key={name} className="item">
        <Name name={name} />
        <APIType {...prop} name={name} />
        <Desc desc={prop?.tags?.description || '--'} />
        <APIDefault {...prop} name={name} />
      </div>
    );
    // return (
    //   <tr key={name}>
    //     <td style={{ minWidth: '120px' }}>{name}</td>
    //     <td style={{ minWidth: '140px' }}>{prop?.tags?.description || '--'}</td>
    //     <td style={{ width: '160px' }}>
    //       <APIType {...prop} />
    //     </td>
    //     <td style={{ minWidth: '80px' }}>
    //       <APIDefault {...prop} name={name} />
    //       {/* <code>{prop?.defaultValue?.value || '-'}</code> */}
    //     </td>
    //   </tr>
    // );
  });

  return (
    <div className="markdown custom-api">
      {/* <Table>
        <thead>
          <tr>
            <th>{intl.formatMessage({ id: 'api.component.name' })}</th>
            <th>{intl.formatMessage({ id: 'api.component.description' })}</th>
            <th>{intl.formatMessage({ id: 'api.component.type' })}</th>
            <th>{intl.formatMessage({ id: 'api.component.default' })}</th>
          </tr>
        </thead>
      </Table> */}
      {renderTbody}
    </div>
  );
}

export default CustomAPI;
