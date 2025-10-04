@echo off
echo Clearing Next.js cache and restarting development server...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo Cache cleared. Starting development server...
npm run dev
pause