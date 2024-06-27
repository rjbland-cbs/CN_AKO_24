@SET bin=C:\Program Files (x86)\StatNeth\Blaise5\Bin

@SET instrumentBuilder="%bin%\InstrumentBuilder.exe"
@SET manipula="%bin%\Manipula.exe"

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