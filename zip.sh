#!/bin/sh

# Generate zip file to send to https://chrome.google.com/extensions/detail/hljimbjpihilldbnccpjecekiijojhge?hl=fr

version=`sed -n '/"version"/s/"version": "\(.*\)",/\1/p' manifest.json | xargs`
self=`basename $0`
files_to_compress=`ls *.* -1 | grep -v .zip | grep -v $self | xargs`

zip aum_google_chrome_extension-$version.zip $files_to_compress

echo
echo "zip file generated. url :"
echo "https://chrome.google.com/extensions/detail/hljimbjpihilldbnccpjecekiijojhge?hl=fr"
