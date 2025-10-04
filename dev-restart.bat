@echo off
echo Stopping any running Node.js processes...
taskkill /F /IM node.exe 2>nul

echo Cleaning Next.js cache...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo Getting network IP address...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr "IPv4" ^| findstr "192.168"') do set IP=%%a
set IP=%IP: =%

echo.
echo ====================================
echo Development server will be available at:
echo - Local:    http://localhost:3000
echo - Network:  http://%IP%:3000
echo.
echo For mobile access, use: http://%IP%:3000
echo ====================================
echo.

echo Starting development server...
npm run dev