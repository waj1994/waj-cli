import AddIcon from '@/icons/add.svg?react';
import { Button, Space } from 'antd';

function Home() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <Space>
        <Button
          className="!flex items-center"
          type="primary"
          icon={
            <AddIcon
              width={20}
              height={20}
            />
          }
        >
          按钮
        </Button>
        <Button>按钮</Button>
        <Button
          type="primary"
          danger
          ghost
        >
          按钮
        </Button>
      </Space>
    </div>
  );
}

export default Home;
