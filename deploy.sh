#!/usr/bin/env sh

# 發生任何錯誤時终止
set -e

# 構建
npm run build

# 進入輸出產物資料夾
cd dist

# 如果你要部署到自定義域名
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://Peg-L.github.io
# git push -f git@github.com:Peg-L/Peg-L.github.io.git master

# 如果你要部署在 https://Peg-L.github.io/vite-deploy-week6
git push -f git@github.com:Peg-L/drmeme.git main:gh-pages

cd -