declare module '*.less' {
  const classes: CSSModuleClasses;
  export default classes;
}
// antd中dayjs替换moment ts类型替换
declare module 'moment' {
  import { Dayjs } from 'dayjs'
  namespace moment {
    type Moment = Dayjs
  }
  export = moment
  export as namespace moment
}