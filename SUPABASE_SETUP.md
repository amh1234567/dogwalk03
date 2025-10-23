# Supabase テーブルエディター設定ガイド

このプロジェクトでは、Supabaseのテーブルエディターを使用してデータベーススキーマを管理し、型定義を自動生成します。

## セットアップ手順

### 1. 環境変数の設定

`.env.local`ファイルにSupabaseの認証情報を設定してください：

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Supabaseプロジェクトにリンク

```bash
# Supabaseプロジェクトにリンク
npx supabase link --project-ref your_project_id

# または、環境変数から自動的にプロジェクトIDを取得
npx supabase link
```

### 3. テーブルエディターでのテーブル作成

1. Supabaseダッシュボードにアクセス
2. 左側のメニューから「Table Editor」を選択
3. 「Create a new table」をクリック
4. テーブル名とカラムを設定
5. 保存

### 4. 型定義の自動生成

テーブルエディターでテーブルを作成・編集した後、以下のコマンドで型定義を自動生成：

```bash
# 方法1: ローカル開発用（推奨）
npm run supabase:types

# 方法2: リモートプロジェクトから生成
npm run generate-types
```

### 5. 型定義の確認

生成された型定義は `src/types/database.types.ts` に保存されます。
このファイルは自動生成されるため、手動で編集しないでください。

## 使用方法

### テーブルエディターでの作業

1. **テーブルの作成**: テーブルエディターで新しいテーブルを作成
2. **カラムの追加**: 必要なカラムを追加し、データ型や制約を設定
3. **インデックスの作成**: 必要に応じてインデックスを作成
4. **型定義の更新**: 変更後、`npm run supabase:types` を実行

### コードでの使用

```typescript
import { supabase } from '@/lib/supabase'
import { Database } from '@/types/database.types'

// 型安全なクエリ
const { data, error } = await supabase
  .from('walk_records')
  .select('*')
  .eq('dog_name', 'ポチ')
```

## 注意事項

- `src/types/database.types.ts` は自動生成ファイルです。手動で編集しないでください
- テーブル構造を変更した後は、必ず型定義を再生成してください
- 環境変数が正しく設定されていることを確認してください

## トラブルシューティング

### 型定義が生成されない場合

1. 環境変数が正しく設定されているか確認
2. Supabaseプロジェクトにリンクされているか確認
3. テーブルエディターでテーブルが作成されているか確認

### 型エラーが発生する場合

1. 型定義を再生成: `npm run supabase:types`
2. TypeScriptサーバーを再起動
3. キャッシュをクリア: `rm -rf .next`
