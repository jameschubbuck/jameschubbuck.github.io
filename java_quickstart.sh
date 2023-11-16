#!/bin/bash
# get brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
# get sdkman
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
brew install --cask visual-studio-code
sdk install java 21-graal
echo "hopefully worked"
# curl -s "https://jameschubbuck.com/java_quickstart.sh" | bash