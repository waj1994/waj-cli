import { userList } from '@/api/modules/user';
import BaseTable from '@/components/base-table';
import { Button } from 'antd';

export default function Table() {
  const request = async (params: API.PageParams) => {
    try {
      const res = await userList(params);
      console.log(res);
      return {
        data: res.data.list,
        total: res.data.total
      };
    } catch {
      return {
        data: [],
        total: 0
      };
    }
  };

  return (
    <div h="screen">
      <BaseTable
        columns={[
          {
            title: '姓名',
            dataIndex: 'name'
          },
          {
            title: '邮箱',
            dataIndex: 'email',
            hideInSearch: true
          },
          {
            title: '手机号',
            dataIndex: 'phone',
            hideInSearch: true
          },
          {
            title: '地址',
            dataIndex: 'address',
            hideInSearch: true
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            hideInSearch: true
          }
        ]}
        request={request}
        headerTitle="用户列表"
        toolBarRender={() => [<Button>新增</Button>]}
      />
    </div>
  );
}
