import Router from '@/router'
import Message from '@/utils/message'
import { App as AntdApp, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        locale={zhCN}
      >
        <AntdApp>
          <Message />
          <Router />
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
