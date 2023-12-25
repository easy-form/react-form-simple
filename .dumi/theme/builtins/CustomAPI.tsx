import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useController } from 'react-form-simple/use/useController';
import { isMeaningful } from 'react-form-simple/utils/util';

import { IconFont } from '@components/IconFont';
import Tag from '@components/Tag';
import { IconButton, Popover, Tooltip } from '@mui/material';
import { useIntl } from 'dumi';
import React from 'react';
import { useLocalFormat } from 'useLocalFormat';
import { ScrollBar } from '../../component/ScrollBar';
import './customAPI.less';

interface CustomAPI {
  path: string;
  title?: string;
  ignoreFields?: any[];
}

function useJSONContent() {
  const getTableData = (path: any) => {
    try {
      const ret = require(`../../metadata/apis/${path}.json`);

      return Object.entries(ret || {});
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

function TooltipInfo({ path, ignoreFields, tags }: any) {
  const { getTableData } = useJSONContent();

  const infoDatas = getTableData(path) as any;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const open = Boolean(anchorEl);

  const renderTbody = infoDatas?.map(([_name, prop]: any, index: number) => {
    return (
      <Tbody
        key={_name}
        ignoreFields={ignoreFields}
        name={_name}
        prop={prop}
        index={index}
      />
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
          {renderTbody}
        </ScrollBar>
      </Popover>
    </>
  );
}

const StickyHeader = React.forwardRef(({ data, title, onClick }: any, ref) => {
  const [active, setActive] = useState(0);
  const { format } = useLocalFormat();

  useImperativeHandle(ref, () => ({
    setActive(index: number) {
      setActive(index);
    },
  }));

  const getItemClasses = (index: number) =>
    [
      'api-sticky-header-item',
      index === active && 'api-sticky-header-item_active',
    ]
      .filter(Boolean)
      .join(' ');

  const renderLi = data?.map(([name, prop]: any, index: number) => {
    const desc = format({ id: prop?.tags?.localKey });
    return (
      <Tooltip
        key={name}
        title={
          <span
            dangerouslySetInnerHTML={{
              __html: isMeaningful(desc) ? desc : prop?.tags?.description,
            }}
            style={{ fontSize: '14px', lineHeight: 2 }}
          />
        }
        placement="left"
      >
        <div
          className={getItemClasses(index)}
          onClick={() => {
            onClick?.(name);
            setActive(index);
          }}
        >
          {name}
        </div>
      </Tooltip>
    );
  });
  return (
    <div className="api-sticky-header">
      <ScrollBar>
        <div className="title">{title}</div>
        <div>{renderLi}</div>
      </ScrollBar>
    </div>
  );
});

const APIType: any = (props: any) => {
  const intl = useIntl();
  const { type, tags } = props;
  const [isResetWrite, setIsResetWrite] = useState(false);

  useEffect(() => {
    const isResetWrite = !!tags?.resetType;
    setIsResetWrite(isResetWrite);
  }, [props]);

  const getResetType = useCallback((tags) => {
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
      {tags?.infoPath && <TooltipInfo path={tags?.infoPath} tags={tags} />}
    </div>
  );
};

const Name = ({ name, tags }: any) => {
  return (
    <div className="name">
      {name}
      <div style={{ display: 'flex', marginTop: '3px' }}>
        <Tag>{tags?.version ? `${tags?.version}+` : '1.1.0+'}</Tag>
      </div>
    </div>
  );
};

const Desc = ({ desc, tags }: any) => {
  const intl = useIntl();

  const { format, isLocalZH_CN } = useLocalFormat();
  if (tags?.localKey === '' || tags?.localKey === undefined) {
    console.log('================', tags);
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

const Tbody = React.forwardRef(
  ({ name, prop, ignoreFields, title }: any, ref) => {
    const elementIsVisibleInViewport = (el: any, partiallyVisible = false) => {
      const { top, left, bottom, right } = el.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
            (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) ||
              (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };

    const boxRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      elementIsVisibleInViewport() {
        return elementIsVisibleInViewport(boxRef.current, true);
      },
      smoothScroll() {
        boxRef.current?.scrollIntoView?.({ behavior: 'smooth' });
      },
    }));

    const isShowInfo = (key: string) => {
      if (!ignoreFields) {
        return true;
      }
      const ignoreFieldSet = Object.fromEntries(
        ignoreFields.split(',').map((i: any) => i.split(':')),
      );
      return ignoreFieldSet[title] !== key;
    };

    return (
      <div key={name} className="api-item" ref={boxRef}>
        {isShowInfo('name') && <Name name={name} tags={prop?.tags} />}
        {isShowInfo('type') && <APIType {...prop} name={name} />}
        {isShowInfo('desc') && (
          <Desc desc={prop?.tags?.description || '--'} tags={prop?.tags} />
        )}
        {isShowInfo('default') && <APIDefault {...prop} name={name} />}
      </div>
    );
  },
);

function TbodyWrap({ path, ignoreFields, name, index }: any) {
  const tbodyRef = useRef({} as any);

  const datas = useController({ tableData: [] });

  const { getTableData } = useJSONContent();

  const stickyHeaderRef = useRef<any>(null);

  const isScrollingWithMouse = useRef(false);

  useEffect(() => {
    const indexs: any = {};
    const scroll = () => {
      if (isScrollingWithMouse.current) {
        Object.entries(tbodyRef.current).forEach(
          ([name, value]: any, index) => {
            const isElementIsVisibleInViewport =
              value.elementIsVisibleInViewport();
            if (isElementIsVisibleInViewport) {
              indexs[name] = index;
            } else {
              indexs[name] = -1;
            }
            const indexsValue = Object.values(indexs);
            stickyHeaderRef.current?.setActive?.(
              indexsValue.length === 0 ? -1 : Math.max(...(indexsValue as any)),
            );
          },
        );
      }
      isScrollingWithMouse.current = false;
    };
    const wheel = () => {
      isScrollingWithMouse.current = true;
    };
    window.addEventListener('scroll', scroll);

    window.addEventListener('wheel', wheel);

    return () => {
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('wheel', wheel);
    };
  }, []);

  useEffect(() => {
    datas.tableData = getTableData(path) as any;
  }, [path]);

  const renderTbody = datas.tableData?.map(
    ([_name, prop]: any, index: number) => {
      return (
        <Tbody
          key={_name}
          ignoreFields={ignoreFields}
          name={_name}
          title={name}
          prop={prop}
          index={index}
          ref={(ref) => {
            tbodyRef.current[_name] = ref;
          }}
        />
      );
    },
  );

  return (
    <div className="tbody" data-index={index}>
      <div style={{ flex: 1 }}>
        <div className="tbody-title">
          <span className="tbody-title-txt">{name}</span>
        </div>
        <div>{renderTbody}</div>
      </div>
      {datas.tableData?.length > 0 && (
        <StickyHeader
          data={datas.tableData}
          title={name}
          ref={stickyHeaderRef}
          onClick={(name: string) => {
            tbodyRef.current[name]?.smoothScroll();
          }}
        />
      )}
    </div>
  );
}

function CustomAPI(props: CustomAPI) {
  const { path, ignoreFields } = props;

  const paths = path.split(',').map((ret) => ret?.split(':'));

  return (
    <div className="markdown custom-api">
      {paths.map(([name, path], index) => (
        <TbodyWrap
          key={name}
          name={name}
          path={path}
          ignoreFields={ignoreFields}
          index={index}
        />
      ))}
    </div>
  );
}

export default CustomAPI;
