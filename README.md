# 犬の散歩アプリ

愛犬との散歩を記録・管理するためのNext.jsアプリケーションです。

## 機能

- 🐕 散歩記録の作成・編集・削除
- 📊 散歩統計の表示
- 📱 レスポンシブデザイン
- 🎨 モダンなUI/UX

## 技術スタック

- **フレームワーク**: Next.js 15.5.6 (App Router)
- **言語**: TypeScript
- **スタイリング**: TailwindCSS 4
- **データベース**: Supabase
- **認証**: なし（データベースのみ）

## プロジェクト構造

```
project-root/
├─ public/                          # 静的ファイル
│   ├─ favicon.ico
│   ├─ images/                      # 画像ファイル
│   ├─ fonts/                       # フォントファイル
│   └─ icons/                       # アイコンファイル
│
├─ src/
│   ├─ app/                         # Next.js App Router
│   │   ├─ dashboard/               # ダッシュボードページ
│   │   ├─ _components/             # ページ専用コンポーネント
│   │   ├─ layout.tsx               # ルートレイアウト
│   │   └─ page.tsx                 # ホームページ
│   │
│   ├─ components/                  # 共通コンポーネント
│   │   ├─ ui/                      # UI部品
│   │   └─ common/                  # 汎用部品
│   │
│   ├─ actions/                     # サーバーアクション
│   ├─ lib/                         # ユーティリティ・APIクライアント
│   │   └─ supabase/                # Supabase設定
│   ├─ hooks/                       # Reactフック
│   ├─ styles/                      # CSSファイル
│   ├─ constants/                   # 定数
│   └─ types/                       # TypeScript型定義
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Supabaseの設定

1. [Supabase](https://supabase.com)でプロジェクトを作成
2. データベーステーブルを作成：

```sql
-- 散歩記録テーブル
CREATE TABLE walk_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  dog_name TEXT NOT NULL,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER NOT NULL,
  distance_km DECIMAL(5,2),
  route TEXT,
  notes TEXT,
  weather TEXT,
  temperature INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 犬の情報テーブル
CREATE TABLE dogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  breed TEXT,
  age INTEGER,
  weight DECIMAL(4,1),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 散歩ルートテーブル
CREATE TABLE walk_routes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  distance_km DECIMAL(5,2) NOT NULL,
  estimated_duration_minutes INTEGER NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)でアプリケーションを確認できます。

## 開発

### 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを作成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードをチェック

### コーディング規約

- TypeScriptを使用
- TailwindCSSでスタイリング
- コンポーネントは関数コンポーネントで作成
- 型定義は`src/types/`に配置
- 定数は`src/constants/`に配置

## ライセンス

MIT License
