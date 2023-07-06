# Info for developers

## Test addon

1. Make changes to local checkout.
2. Run make
3. Go to: about:debugging#/runtime/this-firefox
4. Click "Load Temporary Add-on" and select youtube-disable-number-seek.zip

This website can be used to test embedded youtube videos:
https://www.cookietractor.com/youtube-and-vimeo-without-cookies

## Upload new version

1. Bump version in manifest.json
2. Test following directions above
3. Upload new version:
   https://addons.mozilla.org/en-US/developers/addon/youtube-disable-number-seek/edit
4. Add git tag: `git tag v1.x`
5. Upload git tag: `git push origin v1.x`
