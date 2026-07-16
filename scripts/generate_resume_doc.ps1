$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $root "public\ArniePortFolioResume.docx"
$generatedPath = Join-Path $root "public\ArniePortFolioResume.generated.docx"
$backupPath = Join-Path $root "public\ArniePortFolioResume.backup.docx"
$logPath = Join-Path $root "resume_generation.log"

function Write-Log($message) {
  Add-Content -Path $logPath -Value "$(Get-Date -Format s) $message"
}

function Set-NormalStyle($selection, $size = 10.5, $bold = 0, $italic = 0, $alignment = 0) {
  $selection.Font.Name = "Arial"
  $selection.Font.Size = $size
  $selection.Font.Bold = $bold
  $selection.Font.Italic = $italic
  $selection.ParagraphFormat.Alignment = $alignment
}

function Add-Line($selection, $text) {
  $selection.TypeText($text)
  $selection.TypeParagraph()
}

function Add-Section($selection, $title) {
  Set-NormalStyle $selection 14 1 0 0
  Add-Line $selection $title
  Set-NormalStyle $selection 9 0 0 0
  Add-Line $selection "____________________________________________________________"
  Set-NormalStyle $selection 10.5 0 0 0
}

function Add-Bullet($selection, $text) {
  Set-NormalStyle $selection 10.5 0 0 0
  $selection.Range.ListFormat.ApplyBulletDefault() | Out-Null
  $selection.TypeText($text)
  $selection.TypeParagraph()
}

if (Test-Path $logPath) {
  Remove-Item -Force $logPath
}
Write-Log "start"

if (Test-Path $outputPath) {
  Copy-Item -Force $outputPath $backupPath
}
if (Test-Path $generatedPath) {
  Remove-Item -Force $generatedPath
}

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()
$selection = $word.Selection

try {
  Write-Log "word created"
  $doc.PageSetup.TopMargin = 54
  $doc.PageSetup.BottomMargin = 54
  $doc.PageSetup.LeftMargin = 54
  $doc.PageSetup.RightMargin = 54

  Set-NormalStyle $selection 18 1 0 0
  Add-Line $selection "ARNIEQUE O. AMABA"

  Set-NormalStyle $selection 10.5 0 0 0
  Add-Line $selection "Digos City, Davao del Sur, Philippines"
  Add-Line $selection "+63 991 669 4076"
  Set-NormalStyle $selection 10.5 0 0 2
  Add-Line $selection "kikoy12345amaba@gmail.com"
  Add-Line $selection "Portfolio Website: professional-portfolio-1-c4ev.onrender.com"
  Add-Line $selection "GitHub: github.com/Arnie098"
  Add-Line $selection "LinkedIn: linkedin.com/in/arnie-que-amaba-9383b2284"
  Write-Log "contact added"

  Add-Section $selection "Summary"
  Add-Line $selection "Junior Software Engineer candidate and BSIT student with freelance experience building production web systems for payments, logistics, document workflows, and blockchain verification. Strong in backend development, API integration, SQL, cloud deployment, and full stack feature delivery using Laravel, FastAPI, React, and JavaScript."
  Write-Log "summary added"

  Add-Section $selection "Skills"
  Add-Bullet $selection "Programming: JavaScript, Java, PHP, C#, SQL"
  Add-Bullet $selection "Frameworks & Libraries: Laravel, FastAPI, React, React Native, Node.js, Bootstrap, Tailwind CSS"
  Add-Bullet $selection "Backend & APIs: REST APIs, webhook integration, idempotency design, background job processing"
  Add-Bullet $selection "Databases: MySQL, SQLite, SQL Server, Redis, Supabase"
  Add-Bullet $selection "Infrastructure & Tools: Docker, DigitalOcean, Azure, Google Cloud, CI/CD, Nginx, systemd, Git, GitHub, Swagger, GraphQL, VS Code, Visual Studio"
  Write-Log "skills added"

  Add-Section $selection "Professional Experience"

  Set-NormalStyle $selection 11 1 0 0
  Add-Line $selection "BACKEND DEVELOPER"
  Set-NormalStyle $selection 10.5 0 1 0
  Add-Line $selection "Surepay Inc. | Freelance - Remote"
  Set-NormalStyle $selection 10.5 0 1 2
  Add-Line $selection "May 2026 - Present"
  Add-Bullet $selection "Built document e-signature and notarization workflows in Laravel 12 with Livewire, including PDF stamping, sealing, and certificate generation."
  Add-Bullet $selection "Developed a drag-and-drop signature field builder for signature, initial, date, and text placement in e-signing flows."
  Add-Bullet $selection "Integrated Polygon blockchain anchoring through a Node.js ethers.js sidecar and Hardhat-deployed smart contract for tamper-proof document verification."
  Add-Bullet $selection "Designed Redis-backed queue lanes for documents, notifications, and e-invoices to improve reliability of long-running background jobs."
  Add-Bullet $selection "Built idempotent API endpoints with idempotency keys so document and e-invoice operations can be retried safely without duplication."
  Add-Bullet $selection "Set up CI/CD with GitHub Actions and zero-downtime deployment on DigitalOcean using Nginx, PHP-FPM, and systemd workers."

  Set-NormalStyle $selection 11 1 0 0
  Add-Line $selection "BACKEND DEVELOPER"
  Set-NormalStyle $selection 10.5 0 1 0
  Add-Line $selection "Surepay Inc. | Freelance - Remote"
  Set-NormalStyle $selection 10.5 0 1 2
  Add-Line $selection "February 2026 - Present"
  Add-Bullet $selection "Integrated Coins.ph and merchant APIs to support secure payment processing and transaction management."
  Add-Bullet $selection "Built idempotent payment APIs and webhook handling to prevent duplicate transaction processing during retries."
  Add-Bullet $selection "Developed merchant-facing API endpoints and dynamic QR payment functionality for platform users."
  Add-Bullet $selection "Investigated production issues, debugged backend flows, and improved platform reliability."
  Add-Bullet $selection "Deployed and maintained VPS infrastructure on DigitalOcean, including domain setup and environment configuration."

  Set-NormalStyle $selection 11 1 0 0
  Add-Line $selection "FULL STACK DEVELOPER"
  Set-NormalStyle $selection 10.5 0 1 0
  Add-Line $selection "Surepay Inc. | Freelance - Remote"
  Set-NormalStyle $selection 10.5 0 1 2
  Add-Line $selection "January 2026 - March 2026"
  Add-Bullet $selection "Integrated Ninja Van APIs and webhook handling for real-time delivery tracking and logistics updates."
  Add-Bullet $selection "Built idempotent API endpoints and webhook handlers so retried order and delivery events are processed exactly once."
  Add-Bullet $selection "Developed order management, delivery tracking, and notification features across frontend and backend workflows."
  Add-Bullet $selection "Deployed the application on Hostinger and handled domain configuration."
  Write-Log "experience added"

  Add-Section $selection "Education"
  Set-NormalStyle $selection 11 1 0 0
  Add-Line $selection "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY"
  Set-NormalStyle $selection 10.5 0 1 0
  Add-Line $selection "Davao del Sur State College"
  Set-NormalStyle $selection 10.5 0 1 2
  Add-Line $selection "2022 - Present"
  Add-Bullet $selection "Backend systems and software engineering focus."
  Add-Bullet $selection "Capstone: NCIP Hybrid Blockchain-Powered Management System with ABAC framework."
  Write-Log "education added"

  $doc.SaveAs2($generatedPath, 16)
  Write-Log "generated saved"
}
catch {
  Write-Log "error: $($_.Exception.Message)"
  throw
}
finally {
  Write-Log "cleanup start"
  try { $doc.Close() } catch {}
  try { $word.Quit() } catch {}
  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($selection) | Out-Null
  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($doc) | Out-Null
  [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
  [GC]::Collect()
  [GC]::WaitForPendingFinalizers()
  Write-Log "cleanup done"
}

for ($i = 0; $i -lt 10; $i++) {
  try {
    Copy-Item -Force $generatedPath $outputPath
    Write-Log "output replaced"
    break
  }
  catch {
    if ($i -eq 9) {
      throw "Could not replace $outputPath because it is locked by another process. Generated file is at $generatedPath"
    }
    Start-Sleep -Milliseconds 500
  }
}
