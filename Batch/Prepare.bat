@SET bin=C:\Program Files (x86)\StatNeth\Blaise5\Bin

@SET instrumentBuilder="%bin%\InstrumentBuilder.exe"
@SET manipula="%bin%\Manipula.exe"

@SET zip="C:\Program Files\7-Zip\7z"

@SET packageArgs=-P:+ -L:+ -FP:+ -FS:+

@REM Build CMA
%instrumentBuilder% -F:..\CMA\CMA_SettingsMeta.blax %packageArgs%
%instrumentBuilder% -F:..\CMA\MakeAKOSettings.manx
%manipula% ..\CMA\MakeAKOSettings.msux
%instrumentBuilder% -F:..\CMA\CMA.bsol %packageArgs%

@REM Build CN Attempts
%instrumentBuilder% -F:..\CN_Attempts\CN_Attempts.bsol %packageArgs%

@REM Build Admin Tool
%instrumentBuilder% -F:..\CMA\AdminTool\CMA_AdminSettingsMeta.blax %packageArgs%
%instrumentBuilder% -F:..\CMA\AdminTool\MakeAKOAdminSettings.manx
%manipula% ..\CMA\AdminTool\MakeAKOAdminSettings.msux
%instrumentBuilder% -F:..\CMA\AdminTool\CMA_AdminTool.bsol %packageArgs%

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

COPY "..\CMA\AdminTool\*.bpkg" "../Packages/CMA_Admin"

%zip% a "..\Packages\Packages.zip" "..\Packages\"

PAUSE