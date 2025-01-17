import {CSSStyle} from '../openxml/Style';
import {ST_TextDirection} from '../openxml/Types';

export function parseTextDirection(element: Element, style: CSSStyle) {
  const val = element.getAttribute('w:val') as string;

  // 目前值支持 ltr 或 rtl
  // 奇怪这里的类型定义不完整，可能是脚本的问题
  switch (val) {
    case ST_TextDirection.lr:
    case ST_TextDirection.lrV:
    case 'btLr':
    case 'lrTb':
    case 'lrTbV':
    case 'tbLrV':
      style['direction'] = 'ltr';
      break;

    case ST_TextDirection.rl:
    case ST_TextDirection.rlV:
    case 'tbRl':
    case 'tbRlV':
      style['direction'] = 'rtl';
      break;
  }
}
