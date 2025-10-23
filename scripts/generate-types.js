#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 環境変数を読み込み
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('環境変数 NEXT_PUBLIC_SUPABASE_URL と NEXT_PUBLIC_SUPABASE_ANON_KEY が設定されていません');
  process.exit(1);
}

try {
  console.log('Supabaseから型定義を生成中...');
  
  // Supabase CLIを使用して型定義を生成
  const command = `npx supabase gen types typescript --project-id ${extractProjectId(supabaseUrl)} > src/types/database.types.ts`;
  
  execSync(command, { stdio: 'inherit' });
  
  console.log('型定義が正常に生成されました: src/types/database.types.ts');
  
  // lib/supabase.tsを更新
  updateSupabaseFile();
  
} catch (error) {
  console.error('型定義の生成に失敗しました:', error.message);
  process.exit(1);
}

function extractProjectId(url) {
  // Supabase URLからプロジェクトIDを抽出
  const match = url.match(/https:\/\/([^.]+)\.supabase\.co/);
  if (!match) {
    throw new Error('無効なSupabase URLです');
  }
  return match[1];
}

function updateSupabaseFile() {
  const supabaseFilePath = 'src/lib/supabase.ts';
  const typesFilePath = 'src/types/database.types.ts';
  
  // 既存のsupabase.tsファイルを読み込み
  let content = fs.readFileSync(supabaseFilePath, 'utf8');
  
  // 型定義のインポートを追加
  const importStatement = "import { Database } from '../types/database.types'";
  
  // 既存のDatabase型定義を削除し、インポートに置き換え
  content = content.replace(
    /\/\/ データベースのテーブル型定義\nexport type Database = \{[\s\S]*?\}\n\n/g,
    `${importStatement}\n\n`
  );
  
  // ファイルを更新
  fs.writeFileSync(supabaseFilePath, content);
  
  console.log('lib/supabase.tsが更新されました');
}
