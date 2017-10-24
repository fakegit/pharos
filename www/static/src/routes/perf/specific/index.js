import React from 'react';
import {connect} from 'dva';
import {Page,helper} from 'components';
import Filter from './filter';
import List from './list';
import {Modal} from 'antd';

function Whatever({dispatch, perf, location, loading}) {
  const {data, pagination,columns} = perf;
  const filterProps = {
    onAdd: ()=> {
      dispatch({
        type: 'perf/save',
        payload: {addModalVisible: true, modalType: 'add'}
      })
    },
    handleSearch: (filter) => {
      helper.queryByUrl(dispatch, location, filter);
    },
    ...location.query
  };

  const listProps = {
    loading:loading.effects['perf/query'],
    columns,
    onPageChange: (page)=> {
      helper.queryByUrl(dispatch, location, {
        pageNo: page.current,
        pageSize: page.pageSize
      });
    },
    data,
    pagination
  };

  return (
    <Page>
      <Filter {...filterProps} />
      <List {...listProps} />
    </Page>
  );
}

export default connect(({perf, app ,loading}) => ({perf, app,loading}))(Whatever)
