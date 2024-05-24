@SET bin=C:\Program Files (x86)\StatNeth\Blaise5\Bin

@SET instrumentBuilder="%bin%\InstrumentBuilder.exe"
@SET manipula="%bin%\Manipula.exe"
@SET serverManager="%bin%\ServerManager.exe"

@SET login=-server:localhost -user:Root -password:Root -binding:http -port:8031

@REM Close the DepApp and remove deploy folder
TASKKILL /IM "DepApp.exe" /F
RD /S /Q "%localappdata%\Blaise5\DepApp\localhost"

@REM Uninstall surveys

@REM CMA
%serverManager% %login% -uninstallsurvey:CMA_Launcher -serverpark:CMA
%serverManager% %login% -uninstallsurvey:CMA_Logging -serverpark:CMA
%serverManager% %login% -uninstallsurvey:CMA_ContactInfo -serverpark:CMA
%serverManager% %login% -uninstallsurvey:CMA_ClientInfo -serverpark:CMA
%serverManager% %login% -uninstallsurvey:CMA_Attempts -serverpark:CMA
%serverManager% %login% -uninstallsurvey:CN_Attempts -serverpark:CMA
%serverManager% %login% -uninstallsurvey:Parent_ContactInfo -serverpark:CMA

@REM CMA_Admin
%serverManager% %login% -uninstallsurvey:CMA_UserInfo -serverpark:CMA_Admin
%serverManager% %login% -uninstallsurvey:CMA_ManageInfo -serverpark:CMA_Admin
%serverManager% %login% -uninstallsurvey:CMA_CustomScript -serverpark:CMA_Admin
%serverManager% %login% -uninstallsurvey:CMA_AdminTool -serverpark:CMA_Admin

@REM CMA_App
%serverManager% %login% -uninstallsurvey:CMA -serverpark:CMA_App

@REM Create ServerParks
%serverManager% %login% -addserverpark:CMA -runmode:disconnected -syncsurveyswhenconnected:true
%serverManager% %login% -addserverpark:CMA_App -runmode:disconnected -syncsurveyswhenconnected:true
%serverManager% %login% -addserverpark:CMA_Admin -runmode:disconnected -syncsurveyswhenconnected:true
%serverManager% %login% -addserverpark:CMA_Surveys -runmode:disconnected -syncsurveyswhenconnected:false

@REM Add CMA_User role
%serverManager% -adduserrole:CMA_User -permissions:apps,surveydataaccess %login%

@REM Add users from sample
%serverManager% -adduser:CMA_Ann -userpassword:CMA_Ann %login%
%serverManager% -adduser:CMA_Ben -userpassword:CMA_Ben %login%
%serverManager% -adduser:CMA_Sup -userpassword:CMA_Sup %login%

%serverManager% %login% -edituser:CMA_Ann -serverparks:CMA,CMA_App,CMA_Surveys -userrole:CMA_User
%serverManager% %login% -edituser:CMA_Ben -serverparks:CMA,CMA_App,CMA_Surveys -userrole:CMA_User
%serverManager% %login% -edituser:CMA_Sup -serverparks:CMA,CMA_Admin,CMA_Surveys -userrole:CMA_User

@REM Install Surveys
%serverManager% %login% -installsurvey:"../Packages/CMA/CMA_Launcher.bpkg" -serverpark:CMA
%serverManager% %login% -installsurvey:"../Packages/CMA/CMA_Attempts.bpkg" -serverpark:CMA
%serverManager% %login% -installsurvey:"../Packages/CMA/CMA_ContactInfo.bpkg" -serverpark:CMA
%serverManager% %login% -installsurvey:"../Packages/CMA/CMA_Logging.bpkg" -serverpark:CMA
%serverManager% %login% -installsurvey:"../Packages/CMA/CN_Attempts.bpkg" -serverpark:CMA
%serverManager% %login% -installsurvey:"../Packages/CMA/CMA_ClientInfo.bpkg" -serverpark:CMA

%serverManager% %login% -installsurvey:"../Packages/CMA_Admin/CMA_AdminTool.bpkg" -serverpark:CMA_Admin
%serverManager% %login% -installsurvey:"../Packages/CMA_Admin/CMA_CustomScript.bpkg" -serverpark:CMA_Admin
%serverManager% %login% -installsurvey:"../Packages/CMA_Admin/CMA_ManageInfo.bpkg" -serverpark:CMA_Admin
%serverManager% %login% -installsurvey:"../Packages/CMA_Admin/CMA_UserInfo.bpkg" -serverpark:CMA_Admin

%serverManager% %login% -installsurvey:"../Packages/CMA_App/CMA.bpkg" -serverpark:CMA_App

@REM Setup Test Survey
%instrumentBuilder% -F:..\TestSurvey\TestSurvey.bsol %packageArgs%
%serverManager% %login% -installsurvey:"..\TestSurvey\TestSurvey.bpkg" -serverpark:CMA_Surveys
%manipula% "..\TestSurvey\AddTestCases.msux"