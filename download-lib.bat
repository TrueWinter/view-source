@echo off

rmdir /S /Q popup\lib
mkdir popup\lib
cd popup\lib
curl -O https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css
curl -O https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js
curl -O https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js
cd ..\..