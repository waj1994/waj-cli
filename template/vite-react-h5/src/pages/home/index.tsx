import AddIcon from '@/icons/add.svg?react';
import { Button, Space } from '@nutui/nutui-react';

function Home() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="w-[300px] text-red-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        dolores, enim quod earum rerum debitis fugit blanditiis, vero numquam
        officiis praesentium quasi odit deserunt quos assumenda iure aliquam.
        Suscipit, deleniti.
      </div>
      <Space>
        <Button
          type="primary"
          className="!rounded-[6px] w-[100px]"
          icon={
            <AddIcon
              width={20}
              height={20}
            />
          }
        >
          搜索
        </Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Space>
    </div>
  );
}

export default Home;
