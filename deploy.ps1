# Tibbna Healthcare - Vercel Deployment Script
Write-Host "🚀 Deploying Tibbna Healthcare to Vercel..." -ForegroundColor Cyan

# Check if vercel is installed
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Deploy to Vercel
Write-Host "Starting deployment..." -ForegroundColor Green
vercel --prod --yes

Write-Host "✅ Deployment complete!" -ForegroundColor Green
