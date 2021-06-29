# Gatsby ts sandbox

TypeScript のみ導入、スタイルは CSS modules で書いてみる  
後ほど CSS-in-JS の環境も作って比較する

## Netlify にデプロイ

https://laughing-haibt-0663e5.netlify.app/

GitHub / GitLab 等と連携するだけでデプロイ可能だが、Netlify 側の環境変数で Node.js のバージョンを指定する必要がある。  
今回は下記の環境変数を設定した。

```
key: NODE_VERSION
value: v14.15.1
```

## 環境構築時や CSS Modules で書いた際の気付き

間違い等あればご指摘いただけると幸いです。

### .tsx で CSS Modules をインポートする際の型定義ファイルについて

型定義無しの状態だと当然 TypeScript コンパイラに怒られるので、  
型定義ファイルを用意するかエラーを無視するなど対策が必要。

今回は下記の Gatsby Plugin を利用させていただきました。  
https://github.com/jens-duttke/gatsby-plugin-dts-css-modules

定義した css の補完がエディタで有効になったため、開発体験が良かった。

### クラスの記法は BEM をそのまま適用できない

BEM や他の記法で一般的なハイフンを CSS Modules では使用できない。  
JS の変数名と同じ扱いなので、キャメルケースで書く例がいくつか見受けられた。  
よく調べると公式でもキャメルケースが推奨されていました。

参考 URL

- https://github.com/css-modules/css-modules
- https://buildersbox.corp-sansan.com/entry/2020/02/10/110000
