module.exports = {
  // Umi 项目
  extends: require.resolve('umi/stylelint'),
  plugins: ['stylelint-order'],
  rules: {
    /* standard规则覆写
     * 查看所有配置项：https://stylelint.io/user-guide/rules
     *  */
    indentation: 2, // 缩进2个空格
    'color-hex-length': 'short', // 颜色16进制指定为短符号
    'font-family-no-missing-generic-family-keyword': null, // 禁止在字体系列名称列表中缺少通用族：允许
    'selector-list-comma-newline-after': null,
    'selector-pseudo-element-no-unknown': null,
    'color-function-notation': 'legacy', // 不使用现代的颜色表达
    'alpha-value-notation': 'number', // 数字不是用百分比
    'selector-class-pattern': '^[a-z0-9-_]+$',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'root'],
      },
    ],
    // 禁止小于 1 的小数有一个前导零
    'number-leading-zero': 'always',
    // http://alloyteam.github.io/CodeGuide/#css-declaration-order
    'order/properties-order': [
      'display',
      'visibility',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'zoom',
      // 分割
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      // 分割
      '-webkit-box-orient',
      '-webkit-box-direction',
      '-webkit-box-decoration-break',
      '-webkit-box-pack',
      '-webkit-box-align',
      '-webkit-box-flex',
      // 分割
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      // 分割
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      '-webkit-box-sizing',
      '-moz-box-sizing',
      'box-sizing',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      '-webkit-border-radius',
      '-moz-border-radius',
      'border-radius',
      '-webkit-border-top-left-radius',
      '-moz-border-radius-topleft',
      'border-top-left-radius',
      '-webkit-border-top-right-radius',
      '-moz-border-radius-topright',
      'border-top-right-radius',
      '-webkit-border-bottom-right-radius',
      '-moz-border-radius-bottomright',
      'border-bottom-right-radius',
      '-webkit-border-bottom-left-radius',
      '-moz-border-radius-bottomleft',
      'border-bottom-left-radius',
      '-webkit-border-image',
      '-moz-border-image',
      '-o-border-image',
      'border-image',
      '-webkit-border-image-source',
      '-moz-border-image-source',
      '-o-border-image-source',
      'border-image-source',
      '-webkit-border-image-slice',
      '-moz-border-image-slice',
      '-o-border-image-slice',
      'border-image-slice',
      '-webkit-border-image-width',
      '-moz-border-image-width',
      '-o-border-image-width',
      'border-image-width',
      '-webkit-border-image-outset',
      '-moz-border-image-outset',
      '-o-border-image-outset',
      'border-image-outset',
      '-webkit-border-image-repeat',
      '-moz-border-image-repeat',
      '-o-border-image-repeat',
      'border-image-repeat',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      // 分割
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'line-height',
      'text-align',
      '-webkit-text-align-last',
      '-moz-text-align-last',
      '-ms-text-align-last',
      'text-align-last',
      'vertical-align',
      'white-space',
      'text-decoration',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-indent',
      '-ms-text-justify',
      'text-justify',
      'letter-spacing',
      'word-spacing',
      '-ms-writing-mode',
      'text-outline',
      'text-transform',
      'text-wrap',
      '-ms-text-overflow',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      '-ms-word-wrap',
      'word-wrap',
      '-ms-word-break',
      'word-break',
      // 分割
      'color',
      'background',
      'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
      'background-color',
      'background-image',
      'background-repeat',
      'background-attachment',
      'background-position',
      '-ms-background-position-x',
      'background-position-x',
      '-ms-background-position-y',
      'background-position-y',
      '-webkit-background-clip',
      '-moz-background-clip',
      'background-clip',
      'background-origin',
      '-webkit-background-size',
      '-moz-background-size',
      '-o-background-size',
      'background-size',
      // 分割
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'opacity',
      'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
      "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
      '-ms-interpolation-mode',
      '-webkit-box-shadow',
      '-moz-box-shadow',
      'box-shadow',
      'filter:progid:DXImageTransform.Microsoft.gradient',
      "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
      'text-shadow',
      // 分割
      '-webkit-transition',
      '-moz-transition',
      '-ms-transition',
      '-o-transition',
      'transition',
      '-webkit-transition-delay',
      '-moz-transition-delay',
      '-ms-transition-delay',
      '-o-transition-delay',
      'transition-delay',
      '-webkit-transition-timing-function',
      '-moz-transition-timing-function',
      '-ms-transition-timing-function',
      '-o-transition-timing-function',
      'transition-timing-function',
      '-webkit-transition-duration',
      '-moz-transition-duration',
      '-ms-transition-duration',
      '-o-transition-duration',
      'transition-duration',
      '-webkit-transition-property',
      '-moz-transition-property',
      '-ms-transition-property',
      '-o-transition-property',
      'transition-property',
      '-webkit-transform',
      '-moz-transform',
      '-ms-transform',
      '-o-transform',
      'transform',
      '-webkit-transform-origin',
      '-moz-transform-origin',
      '-ms-transform-origin',
      '-o-transform-origin',
      'transform-origin',
      '-webkit-animation',
      '-moz-animation',
      '-ms-animation',
      '-o-animation',
      'animation',
      '-webkit-animation-name',
      '-moz-animation-name',
      '-ms-animation-name',
      '-o-animation-name',
      'animation-name',
      '-webkit-animation-duration',
      '-moz-animation-duration',
      '-ms-animation-duration',
      '-o-animation-duration',
      'animation-duration',
      '-webkit-animation-play-state',
      '-moz-animation-play-state',
      '-ms-animation-play-state',
      '-o-animation-play-state',
      'animation-play-state',
      '-webkit-animation-timing-function',
      '-moz-animation-timing-function',
      '-ms-animation-timing-function',
      '-o-animation-timing-function',
      'animation-timing-function',
      '-webkit-animation-delay',
      '-moz-animation-delay',
      '-ms-animation-delay',
      '-o-animation-delay',
      'animation-delay',
      '-webkit-animation-iteration-count',
      '-moz-animation-iteration-count',
      '-ms-animation-iteration-count',
      '-o-animation-iteration-count',
      'animation-iteration-count',
      '-webkit-animation-direction',
      '-moz-animation-direction',
      '-ms-animation-direction',
      '-o-animation-direction',
      'animation-direction',
      // 分割
      'content',
      'quotes',
      'counter-reset',
      'counter-increment',
      'resize',
      'cursor',
      '-webkit-user-select',
      '-moz-user-select',
      '-ms-user-select',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      '-moz-tab-size',
      '-o-tab-size',
      'tab-size',
      '-webkit-hyphens',
      '-moz-hyphens',
      'hyphens',
      'pointer-events',
    ],
  },
};
