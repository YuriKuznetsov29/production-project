window.jest_html_reporters_callback__({"numFailedTestSuites":3,"numFailedTests":3,"numPassedTestSuites":23,"numPassedTests":65,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":26,"numTotalTests":68,"startTime":1709474053619,"success":false,"testResults":[{"numFailingTests":1,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474060934,"runtime":3305,"slow":false,"start":1709474057629},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\AuthByUsername\\model\\selectors\\getLoginIsLoading\\getLoginIsLoading.test.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mgetLoginIsLoading.test › should work with empty state\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\n    Expected: \u001b[32mfalse\u001b[39m\n    Received: \u001b[31mundefined\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 13 |\u001b[39m     test(\u001b[32m'should work with empty state'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 14 |\u001b[39m         \u001b[36mconst\u001b[39m state\u001b[33m:\u001b[39m \u001b[33mDeepPartial\u001b[39m\u001b[33m<\u001b[39m\u001b[33mStateSchema\u001b[39m\u001b[33m>\u001b[39m \u001b[33m=\u001b[39m {}\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 15 |\u001b[39m         expect(getLoginIsLoading(state \u001b[36mas\u001b[39m \u001b[33mStateSchema\u001b[39m))\u001b[33m.\u001b[39mtoEqual(\u001b[36mfalse\u001b[39m)\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                                                         \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 16 |\u001b[39m     })\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 17 |\u001b[39m })\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 18 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading.test.ts\u001b[39m\u001b[0m\u001b[2m:15:57)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["getLoginIsLoading.test"],"duration":3,"failureMessages":[],"fullName":"getLoginIsLoading.test should return true","status":"passed","title":"should return true"},{"ancestorTitles":["getLoginIsLoading.test"],"duration":3,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\nExpected: \u001b[32mfalse\u001b[39m\nReceived: \u001b[31mundefined\u001b[39m\n    at Object.<anonymous> (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\AuthByUsername\\model\\selectors\\getLoginIsLoading\\getLoginIsLoading.test.ts:15:57)\n    at Promise.then.completed (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\utils.js:391:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\utils.js:316:10)\n    at _callCircusTest (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:218:40)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at _runTest (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:155:3)\n    at _runTestsForDescribeBlock (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:66:9)\n    at _runTestsForDescribeBlock (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:60:9)\n    at run (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:25:3)\n    at runAndTransformResultsToJestFormat (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapterInit.js:170:21)\n    at jestAdapter (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapter.js:82:19)\n    at runTestInternal (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-runner\\build\\runTest.js:389:16)\n    at runTest (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-runner\\build\\runTest.js:475:34)\n    at Object.worker (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-runner\\build\\testWorker.js:133:12)"],"fullName":"getLoginIsLoading.test should work with empty state","status":"failed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":6,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474061367,"runtime":3748,"slow":false,"start":1709474057619},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\entities\\Article\\model\\selectors\\articleDetails.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["articleDetails.test"],"duration":4,"failureMessages":[],"fullName":"articleDetails.test should return data","status":"passed","title":"should return data"},{"ancestorTitles":["articleDetails.test"],"duration":0,"failureMessages":[],"fullName":"articleDetails.test should work with empty state data","status":"passed","title":"should work with empty state data"},{"ancestorTitles":["articleDetails.test"],"duration":0,"failureMessages":[],"fullName":"articleDetails.test should return error","status":"passed","title":"should return error"},{"ancestorTitles":["articleDetails.test"],"duration":1,"failureMessages":[],"fullName":"articleDetails.test should work with empty state error","status":"passed","title":"should work with empty state error"},{"ancestorTitles":["articleDetails.test"],"duration":1,"failureMessages":[],"fullName":"articleDetails.test should return isLoading","status":"passed","title":"should return isLoading"},{"ancestorTitles":["articleDetails.test"],"duration":1,"failureMessages":[],"fullName":"articleDetails.test should work with empty state isLoading","status":"passed","title":"should work with empty state isLoading"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474064005,"runtime":2418,"slow":false,"start":1709474061587},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\shared\\ui\\Button\\Button.test.tsx","failureMessage":null,"testResults":[{"ancestorTitles":["Button"],"duration":91,"failureMessages":[],"fullName":"Button Test render","status":"passed","title":"Test render"},{"ancestorTitles":["Button"],"duration":69,"failureMessages":[],"fullName":"Button Test clear theme","status":"passed","title":"Test clear theme"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474066167,"runtime":1339,"slow":false,"start":1709474064828},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\AuthByUsername\\model\\services\\loginByUsername\\loginByUsername.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["loginByUsername.test"],"duration":9,"failureMessages":[],"fullName":"loginByUsername.test success login","status":"passed","title":"success login"},{"ancestorTitles":["loginByUsername.test"],"duration":60,"failureMessages":[],"fullName":"loginByUsername.test error login","status":"passed","title":"error login"}]},{"numFailingTests":0,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474066539,"runtime":5401,"slow":true,"start":1709474061138},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\entities\\Counter\\ui\\Counter.test.tsx","failureMessage":null,"testResults":[{"ancestorTitles":["Counter"],"duration":98,"failureMessages":[],"fullName":"Counter test render","status":"passed","title":"test render"},{"ancestorTitles":["Counter"],"duration":243,"failureMessages":[],"fullName":"Counter test increment","status":"passed","title":"test increment"},{"ancestorTitles":["Counter"],"duration":41,"failureMessages":[],"fullName":"Counter test decrement","status":"passed","title":"test decrement"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474067535,"runtime":9886,"slow":true,"start":1709474057649},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\widgets\\Sidebar\\ui\\Sidebar\\Sidebar.test.tsx","failureMessage":null,"testResults":[{"ancestorTitles":["Sidebar"],"duration":218,"failureMessages":[],"fullName":"Sidebar Get sidebar","status":"passed","title":"Get sidebar"},{"ancestorTitles":["Sidebar"],"duration":69,"failureMessages":[],"fullName":"Sidebar Test toggle","status":"passed","title":"Test toggle"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474067753,"runtime":968,"slow":false,"start":1709474066785},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\AuthByUsername\\model\\slice\\loginSlice.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["loginSlice.test"],"duration":5,"failureMessages":[],"fullName":"loginSlice.test test set username","status":"passed","title":"test set username"},{"ancestorTitles":["loginSlice.test"],"duration":1,"failureMessages":[],"fullName":"loginSlice.test test set password","status":"passed","title":"test set password"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474068044,"runtime":693,"slow":false,"start":1709474067351},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\AuthByUsername\\model\\selectors\\getLoginError\\getLoginError.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getLofinError.test"],"duration":4,"failureMessages":[],"fullName":"getLofinError.test should return error","status":"passed","title":"should return error"},{"ancestorTitles":["getLofinError.test"],"duration":1,"failureMessages":[],"fullName":"getLofinError.test work with empty","status":"passed","title":"work with empty"}]},{"numFailingTests":0,"numPassingTests":6,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474068686,"runtime":710,"slow":false,"start":1709474067976},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\shared\\lib\\classNames\\classNames.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["classNames"],"duration":3,"failureMessages":[],"fullName":"classNames test","status":"passed","title":"test"},{"ancestorTitles":["width additional classes"],"duration":2,"failureMessages":[],"fullName":"width additional classes test","status":"passed","title":"test"},{"ancestorTitles":["width additional classes"],"duration":0,"failureMessages":[],"fullName":"width additional classes test","status":"passed","title":"test"},{"ancestorTitles":["width mods"],"duration":0,"failureMessages":[],"fullName":"width mods test","status":"passed","title":"test"},{"ancestorTitles":["width mods false"],"duration":1,"failureMessages":[],"fullName":"width mods false test","status":"passed","title":"test"},{"ancestorTitles":["width mods undefined"],"duration":1,"failureMessages":[],"fullName":"width mods undefined test","status":"passed","title":"test"}]},{"numFailingTests":0,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474069007,"runtime":701,"slow":false,"start":1709474068306},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\entities\\Counter\\model\\slice\\counterSlice.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getCounterValue"],"duration":5,"failureMessages":[],"fullName":"getCounterValue increment","status":"passed","title":"increment"},{"ancestorTitles":["getCounterValue"],"duration":0,"failureMessages":[],"fullName":"getCounterValue decrement","status":"passed","title":"decrement"},{"ancestorTitles":["getCounterValue"],"duration":0,"failureMessages":[],"fullName":"getCounterValue should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474072355,"runtime":3384,"slow":false,"start":1709474068971},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\services\\updateProfileData\\updateProfileData.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["updateProfileData.test"],"duration":9,"failureMessages":[],"fullName":"updateProfileData.test success","status":"passed","title":"success"},{"ancestorTitles":["updateProfileData.test"],"duration":59,"failureMessages":[],"fullName":"updateProfileData.test server error","status":"passed","title":"server error"},{"ancestorTitles":["updateProfileData.test"],"duration":3,"failureMessages":[],"fullName":"updateProfileData.test validate error","status":"passed","title":"validate error"}]},{"numFailingTests":1,"numPassingTests":4,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474072613,"runtime":4064,"slow":false,"start":1709474068549},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\slice\\profileSlice.test.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mprofileSlice.test › test update profile service fullfiled\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\n    \u001b[32m- Expected  - 3\u001b[39m\n    \u001b[31m+ Received  + 0\u001b[39m\n\n    \u001b[33m@@ -16,9 +16,6 @@\u001b[39m\n    \u001b[2m      \"first\": \"asd\",\u001b[22m\n    \u001b[2m      \"lastname\": \"123\",\u001b[22m\n    \u001b[2m      \"username\": \"admin\",\u001b[22m\n    \u001b[2m    },\u001b[22m\n    \u001b[2m    \"isLoading\": false,\u001b[22m\n    \u001b[32m-   \"readonly\": true,\u001b[39m\n    \u001b[32m-   \"validateError\": undefined,\u001b[39m\n    \u001b[32m-   \"validateErrors\": undefined,\u001b[39m\n    \u001b[2m  }\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 68 |\u001b[39m         expect(\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 69 |\u001b[39m             profileReducer(state \u001b[36mas\u001b[39m \u001b[33mProfileSchema\u001b[39m\u001b[33m,\u001b[39m updateProfileData\u001b[33m.\u001b[39mfulfilled(data\u001b[33m,\u001b[39m \u001b[32m''\u001b[39m))\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 70 |\u001b[39m         )\u001b[33m.\u001b[39mtoEqual({\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 71 |\u001b[39m             isLoading\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 72 |\u001b[39m             validateErrors\u001b[33m:\u001b[39m undefined\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 73 |\u001b[39m             readonly\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/features/editableProfileCard/model/slice/profileSlice.test.ts\u001b[39m\u001b[0m\u001b[2m:70:11)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["profileSlice.test"],"duration":8,"failureMessages":[],"fullName":"profileSlice.test test set readonly","status":"passed","title":"test set readonly"},{"ancestorTitles":["profileSlice.test"],"duration":2,"failureMessages":[],"fullName":"profileSlice.test test cancel edit","status":"passed","title":"test cancel edit"},{"ancestorTitles":["profileSlice.test"],"duration":1,"failureMessages":[],"fullName":"profileSlice.test test update profile","status":"passed","title":"test update profile"},{"ancestorTitles":["profileSlice.test"],"duration":1,"failureMessages":[],"fullName":"profileSlice.test test update profile service pending","status":"passed","title":"test update profile service pending"},{"ancestorTitles":["profileSlice.test"],"duration":53,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoEqual\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // deep equality\u001b[22m\n\n\u001b[32m- Expected  - 3\u001b[39m\n\u001b[31m+ Received  + 0\u001b[39m\n\n\u001b[33m@@ -16,9 +16,6 @@\u001b[39m\n\u001b[2m      \"first\": \"asd\",\u001b[22m\n\u001b[2m      \"lastname\": \"123\",\u001b[22m\n\u001b[2m      \"username\": \"admin\",\u001b[22m\n\u001b[2m    },\u001b[22m\n\u001b[2m    \"isLoading\": false,\u001b[22m\n\u001b[32m-   \"readonly\": true,\u001b[39m\n\u001b[32m-   \"validateError\": undefined,\u001b[39m\n\u001b[32m-   \"validateErrors\": undefined,\u001b[39m\n\u001b[2m  }\u001b[22m\n    at Object.<anonymous> (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\slice\\profileSlice.test.ts:70:11)\n    at Promise.then.completed (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\utils.js:391:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\utils.js:316:10)\n    at _callCircusTest (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:218:40)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at _runTest (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:155:3)\n    at _runTestsForDescribeBlock (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:66:9)\n    at _runTestsForDescribeBlock (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:60:9)\n    at run (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\run.js:25:3)\n    at runAndTransformResultsToJestFormat (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapterInit.js:170:21)\n    at jestAdapter (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapter.js:82:19)\n    at runTestInternal (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-runner\\build\\runTest.js:389:16)\n    at runTest (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-runner\\build\\runTest.js:475:34)\n    at Object.worker (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-runner\\build\\testWorker.js:133:12)"],"fullName":"profileSlice.test test update profile service fullfiled","status":"failed","title":"test update profile service fullfiled"}]},{"numFailingTests":0,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474072823,"runtime":3313,"slow":false,"start":1709474069510},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\services\\validateProfileData\\validateProfileData.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["validateProfileData.test"],"duration":6,"failureMessages":[],"fullName":"validateProfileData.test success","status":"passed","title":"success"},{"ancestorTitles":["validateProfileData.test"],"duration":2,"failureMessages":[],"fullName":"validateProfileData.test without first and last name","status":"passed","title":"without first and last name"},{"ancestorTitles":["validateProfileData.test"],"duration":1,"failureMessages":[],"fullName":"validateProfileData.test incorrect age","status":"passed","title":"incorrect age"},{"ancestorTitles":["validateProfileData.test"],"duration":1,"failureMessages":[],"fullName":"validateProfileData.test without country","status":"passed","title":"without country"},{"ancestorTitles":["validateProfileData.test"],"duration":1,"failureMessages":[],"fullName":"validateProfileData.test incorrect all","status":"passed","title":"incorrect all"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474073781,"runtime":463,"slow":false,"start":1709474073318},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\AuthByUsername\\model\\selectors\\getLoginPassword\\getLoginPassword.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getLoginPassword.test"],"duration":3,"failureMessages":[],"fullName":"getLoginPassword.test should return value","status":"passed","title":"should return value"},{"ancestorTitles":["getLoginPassword.test"],"duration":0,"failureMessages":[],"fullName":"getLoginPassword.test should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":3,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474073901,"runtime":724,"slow":false,"start":1709474073177},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\shared\\lib\\url\\addQueryParams\\addQueryParams.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["shared/url/addQueryParams"],"duration":4,"failureMessages":[],"fullName":"shared/url/addQueryParams tes with one param","status":"passed","title":"tes with one param"},{"ancestorTitles":["shared/url/addQueryParams"],"duration":0,"failureMessages":[],"fullName":"shared/url/addQueryParams tes with multiple params","status":"passed","title":"tes with multiple params"},{"ancestorTitles":["shared/url/addQueryParams"],"duration":0,"failureMessages":[],"fullName":"shared/url/addQueryParams tes with undefined","status":"passed","title":"tes with undefined"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474074171,"runtime":1182,"slow":false,"start":1709474072989},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\services\\fetchProfileData\\fetchProfileData.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["fetchProfileData.test"],"duration":7,"failureMessages":[],"fullName":"fetchProfileData.test success","status":"passed","title":"success"},{"ancestorTitles":["fetchProfileData.test"],"duration":71,"failureMessages":[],"fullName":"fetchProfileData.test error","status":"passed","title":"error"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474074616,"runtime":691,"slow":false,"start":1709474073925},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\AuthByUsername\\model\\selectors\\getLoginUsername\\getLoginUsername.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getLoginUsername.test"],"duration":3,"failureMessages":[],"fullName":"getLoginUsername.test should return value","status":"passed","title":"should return value"},{"ancestorTitles":["getLoginUsername.test"],"duration":1,"failureMessages":[],"fullName":"getLoginUsername.test should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474075098,"runtime":700,"slow":false,"start":1709474074398},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\entities\\Counter\\model\\selectors\\getCounterValue\\getCounterValue.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getCounterValue"],"duration":4,"failureMessages":[],"fullName":"getCounterValue should return counter value","status":"passed","title":"should return counter value"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474075299,"runtime":762,"slow":false,"start":1709474074537},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\entities\\Counter\\model\\selectors\\getCounter\\getCounter.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getCounter"],"duration":3,"failureMessages":[],"fullName":"getCounter should return counter value","status":"passed","title":"should return counter value"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474075950,"runtime":660,"slow":false,"start":1709474075290},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\selectors\\getProfileValidateErrors\\getProfileValidateErrors.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getProfileValidateErrors.test"],"duration":4,"failureMessages":[],"fullName":"getProfileValidateErrors.test should work with filled state","status":"passed","title":"should work with filled state"},{"ancestorTitles":["getProfileValidateErrors.test"],"duration":0,"failureMessages":[],"fullName":"getProfileValidateErrors.test should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474076439,"runtime":954,"slow":false,"start":1709474075485},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\selectors\\getProfileForm\\getProfileForm.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getProfileForm.test"],"duration":3,"failureMessages":[],"fullName":"getProfileForm.test should return error","status":"passed","title":"should return error"},{"ancestorTitles":["getProfileForm.test"],"duration":1,"failureMessages":[],"fullName":"getProfileForm.test should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474077205,"runtime":1024,"slow":false,"start":1709474076181},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\selectors\\getProfileData\\getProfileData.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getProfileData.test"],"duration":3,"failureMessages":[],"fullName":"getProfileData.test should return error","status":"passed","title":"should return error"},{"ancestorTitles":["getProfileData.test"],"duration":0,"failureMessages":[],"fullName":"getProfileData.test should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474077450,"runtime":753,"slow":false,"start":1709474076697},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\selectors\\getProfileError\\getProfileError.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getProfileError.test"],"duration":4,"failureMessages":[],"fullName":"getProfileError.test should return error","status":"passed","title":"should return error"},{"ancestorTitles":["getProfileError.test"],"duration":0,"failureMessages":[],"fullName":"getProfileError.test should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474078195,"runtime":754,"slow":false,"start":1709474077441},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\selectors\\getProfileIsLoading\\getProfileIsLoading.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getProfileIsLoading.test"],"duration":23,"failureMessages":[],"fullName":"getProfileIsLoading.test should work with filled state","status":"passed","title":"should work with filled state"},{"ancestorTitles":["getProfileIsLoading.test"],"duration":0,"failureMessages":[],"fullName":"getProfileIsLoading.test should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474078386,"runtime":769,"slow":false,"start":1709474077617},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\features\\editableProfileCard\\model\\selectors\\getProfileReadonly\\getProfileReadonly.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["getProfileReadonly.test"],"duration":3,"failureMessages":[],"fullName":"getProfileReadonly.test should work with filled state","status":"passed","title":"should work with filled state"},{"ancestorTitles":["getProfileReadonly.test"],"duration":1,"failureMessages":[],"fullName":"getProfileReadonly.test should work with empty state","status":"passed","title":"should work with empty state"}]},{"numFailingTests":1,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1709474080066,"runtime":5243,"slow":true,"start":1709474074823},"testFilePath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\pages\\ArticlesPage\\model\\services\\fetchNextArticlesPage\\fetchNextArticlesPage.test.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mfetchNextArticlesPage.test › not called\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).\u001b[22mnot\u001b[2m.\u001b[22mtoHaveBeenCalled\u001b[2m()\u001b[22m\n\n    Expected number of calls: \u001b[32m0\u001b[39m\n    Received number of calls: \u001b[31m2\u001b[39m\n\n    1: \u001b[31m{\"meta\": {\"arg\": undefined, \"requestId\": \"LVv2MK2tXYjlSHsp3TpvN\", \"requestStatus\": \"pending\"}, \"payload\": undefined, \"type\": \"articlePage/fetchNextArticlesPage/pending\"}\u001b[39m\n    2: \u001b[31m{\"meta\": {\"arg\": undefined, \"requestId\": \"LVv2MK2tXYjlSHsp3TpvN\", \"requestStatus\": \"fulfilled\"}, \"payload\": undefined, \"type\": \"articlePage/fetchNextArticlesPage/fulfilled\"}\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 42 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 43 |\u001b[39m         expect(thunk\u001b[33m.\u001b[39mdispatch)\u001b[33m.\u001b[39mtoBeCalledTimes(\u001b[35m2\u001b[39m)\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 44 |\u001b[39m         expect(thunk\u001b[33m.\u001b[39mdispatch)\u001b[33m.\u001b[39mnot\u001b[33m.\u001b[39mtoHaveBeenCalled()\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 45 |\u001b[39m     })\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 46 |\u001b[39m })\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 47 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat call (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.test.ts\u001b[39m\u001b[0m\u001b[2m:44:36)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat tryCatch (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.test.ts\u001b[39m\u001b[0m\u001b[2m:2:1)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Generator._invoke (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.test.ts\u001b[39m\u001b[0m\u001b[2m:2:1)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Generator.next (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.test.ts\u001b[39m\u001b[0m\u001b[2m:2:1)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat asyncGeneratorStep (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.test.ts\u001b[39m\u001b[0m\u001b[2m:2:1)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat _next (\u001b[22m\u001b[2m\u001b[0m\u001b[36msrc/pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage.test.ts\u001b[39m\u001b[0m\u001b[2m:2:1)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["fetchNextArticlesPage.test"],"duration":6,"failureMessages":[],"fullName":"fetchNextArticlesPage.test success","status":"passed","title":"success"},{"ancestorTitles":["fetchNextArticlesPage.test"],"duration":5,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mjest.fn()\u001b[39m\u001b[2m).\u001b[22mnot\u001b[2m.\u001b[22mtoHaveBeenCalled\u001b[2m()\u001b[22m\n\nExpected number of calls: \u001b[32m0\u001b[39m\nReceived number of calls: \u001b[31m2\u001b[39m\n\n1: \u001b[31m{\"meta\": {\"arg\": undefined, \"requestId\": \"LVv2MK2tXYjlSHsp3TpvN\", \"requestStatus\": \"pending\"}, \"payload\": undefined, \"type\": \"articlePage/fetchNextArticlesPage/pending\"}\u001b[39m\n2: \u001b[31m{\"meta\": {\"arg\": undefined, \"requestId\": \"LVv2MK2tXYjlSHsp3TpvN\", \"requestStatus\": \"fulfilled\"}, \"payload\": undefined, \"type\": \"articlePage/fetchNextArticlesPage/fulfilled\"}\u001b[39m\n    at call (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\pages\\ArticlesPage\\model\\services\\fetchNextArticlesPage\\fetchNextArticlesPage.test.ts:44:36)\n    at tryCatch (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\pages\\ArticlesPage\\model\\services\\fetchNextArticlesPage\\fetchNextArticlesPage.test.ts:2:1)\n    at Generator._invoke (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\pages\\ArticlesPage\\model\\services\\fetchNextArticlesPage\\fetchNextArticlesPage.test.ts:2:1)\n    at Generator.next (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\pages\\ArticlesPage\\model\\services\\fetchNextArticlesPage\\fetchNextArticlesPage.test.ts:2:1)\n    at asyncGeneratorStep (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\pages\\ArticlesPage\\model\\services\\fetchNextArticlesPage\\fetchNextArticlesPage.test.ts:2:1)\n    at _next (C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\src\\pages\\ArticlesPage\\model\\services\\fetchNextArticlesPage\\fetchNextArticlesPage.test.ts:2:1)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"],"fullName":"fetchNextArticlesPage.test not called","status":"failed","title":"not called"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":3,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\jest-html-reporters\\index.js",{}]],"rootDir":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project","runTestsByPath":false,"skipFilter":false,"testFailureExitCode":1,"testPathPattern":"","testSequencer":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":false,"watchman":true},"endTime":1709474080475,"_reporterOptions":{"publicPath":"C:\\Users\\Сменный персонал\\Downloads\\wa\\production-project\\production-project","filename":"jest_html_reporters.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})