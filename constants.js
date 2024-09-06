module.exports = {
  // 远程模板地址
  TEMPLATE_PATH:
    'https://codeload.github.com/waj1994/cli-template/zip/refs/heads/master',
  /**
   * 获取缓存模板的目录
   * process.platform  darwin: mac;  win32:window
   */
  cacheDir: `${
    process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']
  }/.template`
};
