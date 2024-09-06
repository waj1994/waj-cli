const { SingleBar, Presets } = require('cli-progress');

// 创建进度条
const progress = () => {
  return new SingleBar(
    {
      format: 'Installing dependencies |{bar}| {percentage}% | ETA: {eta}s',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    },
    Presets.shades_classic
  );
};

module.exports = {
  progress
};
