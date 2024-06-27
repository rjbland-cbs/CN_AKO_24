@SET zip="C:\Program Files\7-Zip\7z"

RD /S /Q "../Packages"

MKDIR "../Packages/CMA"
MKDIR "../Packages/CMA_Admin"
MKDIR "../Packages/CMA_Surveys"
MKDIR "../Packages/CMA_App"

COPY "..\CMA\CMA_Attempts.bpkg" "../Packages/CMA"
COPY "..\CMA\CMA_ClientInfo.bpkg" "../Packages/CMA"
COPY "..\CMA\CMA_ContactInfo.bpkg" "../Packages/CMA"
COPY "..\CMA\CMA_Launcher.bpkg" "../Packages/CMA"
COPY "..\CMA\CMA_Logging.bpkg" "../Packages/CMA"

COPY "..\CMA\CMA.bpkg" "../Packages/CMA_App"

COPY "..\CN_Attempts\CN_Attempts.bpkg" "../Packages/CMA"

COPY "..\AKO24\AKO24.bpkg" "../Packages/CMA_Surveys"

COPY "..\CMA\AdminTool\*.bpkg" "../Packages/CMA_Admin"

%zip% a "..\Packages\Packages.zip" "..\Packages\"

PAUSE