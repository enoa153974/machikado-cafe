import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * ニュース1件分の型定義
 */
export type NewsItem = {
    title: string;     // 記事タイトル
    date: string;      // 表示・ソート用に統一した日付
    category: string;  // カテゴリ名
    image: string,     // 見出し画像
    slug: string;      // 記事スラッグ（URL用）
};

/**
 * 日付を統一フォーマット(YYYY-MM-DD)に変換
 * Markdownのfrontmatterでstring/date混在しても対応可能
 */
function normalizeDate(d: string | Date | undefined | null): string {
    if (!d) return '';
    return typeof d === 'string' ? d : d.toISOString().slice(0, 10);
}

/**
 * newsコレクションから全件取得し、
 * データ構造を整えて日付の新しい順に並び替えて返す
 */

export async function getNewsItems(): Promise<NewsItem[]> {
    const raw = await getCollection('news');  // Markdownファイル全件取得
    return raw
        .map((entry: CollectionEntry<'news'>) => ({
            title: entry.data.title,
            date: normalizeDate(entry.data.date),
            category: entry.data.category ?? '',
            image: entry.data.image ?? '',
            slug: entry.slug,
        }))
        .sort((a: NewsItem, b: NewsItem) => +new Date(b.date) - +new Date(a.date)); // 新しい順に並べ替え
}

/**
 * 最新N件のニュースだけ取得
 * @param limit 取得件数（デフォルト5）
 * @param category カテゴリ指定（省略時は全件から取得）
 */
export async function getLatestNews(limit = 5, category?: string): Promise<NewsItem[]> {
    const all = await getNewsItems();
    const filtered = category ? all.filter((i) => i.category === category) : all;
    return filtered.slice(0, limit);
}
