# ashro

（開発途中／Sass + Bootstrap風 Grid対応）

ashroは、Astroベースのモダンな静的コーディング用テンプレートです。  
LPやコーポレートサイトなどのWebページ制作に最適化された構成で、Bootstrap風 Grid + 自作ユーティリティクラス + Sass設計により、柔軟かつ保守性の高いマークアップが可能です。

## Features

ashroで主にできることは以下になります。

- Astroコンポーネントを使ったHTMLマークアップ
- ページメタデータ外部ファイル（JSON）読み込み
- JSON-LD構造化データのテンプレート対応
- Bootstrap Gridシステムの導入（Sassで読み込み
- 自作ユーティリティクラスで自由な装飾を構成
- Sass（SCSS記法）設計：`@use`ベースの構造に対応
- StyleLint、ESLint、Markuplintによるコードチェック
- Prettierによるコード整形
- TypeScriptの導入
- Vue.js（Piniaプラグイン対応）・React・jQuery対応
- ソースコードのminify・ビルド対応
- Astroのローカルサーバー起動＆ホットリロード
- Markdownファイルを使ったコンテンツ管理とルーティング
- 相対パスの自動変換機能（HTMLビルド時）

## 現在の開発状況（メモ）

- フォルダ構成とSass設計（変数・mixin・ユーティリティ）を整理
- TailwindCSSは削除し、Bootstrap Grid + 自作ユーティリティに統一
- JavaScript（ページ単位の動的処理）の運用方針を検討中

## Requirement

Node.js >= 18.x.x

npm >= 10.x.x

## Installation

### 各種パッケージのインストール

プロジェクトディレクトリにフォルダー内のファイル一式を入れて、package.jsonがあるディレクトリまで移動し、必要なパッケージをインストールします。

```bash
$ npm install
```

## Usage

### 各種コマンド

#### 1. 開発環境用ローカルサーバー起動

```bash
$ npm run dev
```

#### 2. 本番環境用ビルドファイルの作成

```bash
$ npm run build
```

#### 4. 本番環境用ビルドファイルのプレビュー

```bash
$ npm run preview
```

#### 5. リンターの実行

```bash
$ npm run lint
```

#### 6. コード整形

```bash
$ npm run format
```

#### 7. ビルドHTMLファイル内の相対パス置換

```bash
$ npm run path
```

## Note

- タイトル、ディスクリプション、OGPなどページ固有のmeta要素はsiteData.mjsのファイルで一括管理ができます。
- 初期設定では開発用ローカルサーバーのポート番号は2000となっています。
- 初期設定ではビルドファイルはdistディレクトリ配下に格納されるようになっています。

## Author

aoi miyake

## License
