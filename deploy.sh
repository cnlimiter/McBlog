npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:cnlimiter/cnlimiter.github.io.git master

# git push -f git@git.coding.net:recoluan/vuepress-theme-reco-doc.git master

cd ../
rm -rf public