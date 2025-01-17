/**
 * http://webapp.docx4java.org/OnlineDemo/ecma376/WordML/hyperlink_2.html
 */

import {Relationship} from '../../parse/parseRelationship';
import Word from '../../Word';
import {Run} from './Run';

export class Hyperlink {
  anchor?: string;
  relation?: Relationship;
  children: Run[] = [];

  addChild(Run: Run): void {
    this.children.push(Run);
  }

  static fromXML(word: Word, element: Element): Hyperlink {
    const hyperlink = new Hyperlink();

    const rId = element.getAttribute('r:id');
    if (rId) {
      const rel = word.getRelationship(rId);
      if (rel) {
        hyperlink.relation = rel;
      }
    }

    const anchor = element.getAttribute('anchor');
    if (anchor) {
      hyperlink.anchor = anchor;
    }

    for (const child of element.children) {
      const tagName = child.tagName;
      switch (tagName) {
        case 'w:r':
          hyperlink.addChild(Run.fromXML(word, child));
          break;

        default:
          console.warn('parse Hyperlink: Unknown key', tagName, child);
      }
    }

    return hyperlink;
  }
}
