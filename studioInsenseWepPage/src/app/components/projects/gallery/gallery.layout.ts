export interface GalleryItem {
  src: string;
  /** szélesség / magasság */
  ratio: number;
  /** eredeti sorrend (lightboxhoz) */
  index: number;
}

export type GalleryBlock =
  | { kind: 'full'; item: GalleryItem }
  | { kind: 'row'; items: GalleryItem[]; solo: boolean }
  | {
      kind: 'split';
      feature: GalleryItem;
      stack: [GalleryItem, GalleryItem];
      /** a két egymás alatti kép együttes képaránya */
      stackRatio: number;
      reverse: boolean;
    };

export const isPortrait = (i: GalleryItem) => i.ratio < 0.95;
export const isLandscape = (i: GalleryItem) => !isPortrait(i);

/**
 * A képek listájából blokkokat épít a dizájn mintája alapján:
 *   1. széles "hero" kép (fekvő)
 *   2. álló kép + két egymás alatti fekvő kép (oldalanként váltakozva)
 *   ... ismétlődve.
 * Ha egy minta nem rakható ki (pl. nincs álló kép), sorkizárt sort használ,
 * ahol a képek magassága azonos, szélességük a képarányukkal arányos.
 * Soha nem marad egyetlen árva kép a végén.
 */
export function buildLayout(items: GalleryItem[]): GalleryBlock[] {
  const pool = [...items];
  const blocks: GalleryBlock[] = [];
  let step = 0;
  let reverse = false;

  const take = (pred: (i: GalleryItem) => boolean, window: number) => {
    const idx = pool.slice(0, window).findIndex(pred);
    return idx < 0 ? null : pool.splice(idx, 1)[0];
  };

  const row = (rowItems: GalleryItem[]): GalleryBlock => ({
    kind: 'row',
    items: rowItems,
    solo: rowItems.length === 1 && isPortrait(rowItems[0]),
  });

  while (pool.length) {
    // A maradék legfeljebb 3 kép egy sorba kerül.
    if (pool.length <= 3) {
      blocks.push(row(pool.splice(0)));
      break;
    }

    const phase = step++ % 2 === 0 ? 'hero' : 'split';

    if (phase === 'hero') {
      const hero = take(isLandscape, 3);
      if (hero) {
        blocks.push({ kind: 'full', item: hero });
        continue;
      }
    } else if (pool.length !== 4) {
      // 4 képnél a split után 1 árva maradna, ezért ott inkább 2+2 sor lesz.
      const head = pool.slice(0, 5);
      const pIdx = head.findIndex(isPortrait);
      if (pIdx >= 0 && pIdx < 3 && head.filter(isLandscape).length >= 2) {
        const feature = pool.splice(pIdx, 1)[0];
        const a = take(isLandscape, 5)!;
        const b = take(isLandscape, 5)!;
        blocks.push({
          kind: 'split',
          feature,
          stack: [a, b],
          stackRatio: 1 / (1 / a.ratio + 1 / b.ratio),
          reverse,
        });
        reverse = !reverse;
        continue;
      }
    }

    // Tartalék: sorkizárt sor (álló képekből 3, fekvőkből 2 fér el szépen).
    let n = isPortrait(pool[0]) ? 3 : 2;
    if (pool.length - n === 1) n++;
    blocks.push(row(pool.splice(0, n)));
  }

  return blocks;
}
