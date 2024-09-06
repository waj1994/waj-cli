import { demo } from '@/api/modules/demo';
import useCount from '@/model/useCount';
import { useRequest } from 'ahooks';
import { Button } from 'antd';
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  const { run } = useRequest(demo, {
    // manual: true,
    onSuccess: (res) => {
      console.log(res);
    },
  });
  const { count, increase, decrease } = useCount();

  return (
    <div>
      <Button type="primary" onClick={run}>
        test
      </Button>
      <br />
      <span>{count}</span>
      <Button onClick={increase}>+++++</Button>
      <Button onClick={decrease}>-----</Button>
      <h2 un-text="red left" un-font="200" className="leading-20px mx-10px">
        Yay! Welcome to umi!
      </h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
