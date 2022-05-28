Write-Output "Build For Production"
& npx vite build
Write-Output "Build Complete"
Write-Output "Copying Files"
Copy-Item "./dist/src/*" -Destination "./" -Recurse -Force
md "./assets/"
Copy-Item "./dist/assets/*" -Destination "./assets/" -Recurse -Force
Write-Output "Copied Files"
Write-Output "Deleting dist/src Folder"
Remove-Item -LiteralPath "./dist/" -Recurse -Force
Remove-Item -LiteralPath "./src/" -Recurse -Force
Write-Output "Deleted dist/src Folder"
Write-Output "Build Complete"
ls
