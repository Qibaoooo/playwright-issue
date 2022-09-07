# playwright-issue
demo repo to reproduce error

There is only one test in this repo, you can run it in docker with mobile-webkit to reproduce the issue.

See [video.webm](https://github.com/Qibaoooo/playwright-issue/blob/main/video.webm) for the recording.

This issue happens only when:
 - run in docker ([official one from here](https://playwright.dev/docs/docker))
 - set device to any mobile-webkit. (already done in config file)
 
 
NOTE: sometimes the test will pass intermittently. If you run the test for a few times, most likely you will be able to repro the issue.
