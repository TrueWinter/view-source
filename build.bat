@echo off

cmd /c download-lib.bat

del view-source.zip
mkdir dist
cd dist
:: Copy root and popup directories separately to prevent cyclic copy issue
xcopy .. .
xcopy /S /I ..\popup .\popup
del *.bat
del *.zip
del .gitignore
tar -a -cf view-source.zip --exclude *.zip *
move view-source.zip ..
cd ..
rmdir /S /Q dist