/**
 * 列表
 */
import type { ProColumnType } from '@ant-design/pro-table'
import { getUserList } from '@/api/modules/user'
import BaseTable from '@/components/base-table'

export interface User {
  id: string
  name: string
  email: string
  phone: string
  address: string
}

const columns: ProColumnType<User>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    hideInSearch: true,
  },
  {
    title: '电话',
    dataIndex: 'phone',
    hideInSearch: true,
  },
  {
    title: '地址',
    dataIndex: 'address',
    hideInSearch: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    hideInSearch: true,
  },
]

export default function List() {
  return (
    <div className="h-[500px]">
      <BaseTable
        order
        columns={columns}
        request={async (params) => {
          try {
            const res = await getUserList(params)
            console.log(res)
            return {
              data: res.data.list,
              total: res.data.total,
            }
          }
          catch {
            return {
              data: [],
              total: 0,
            }
          }
        }}
      />
    </div>
  )
}
