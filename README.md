# ROOMS doc
This repository contains all the documentation available to the end user. The goal is to merge the legacy documentation which is cluttered in mainly two parts:
- Benutzerhandbuch.docx (legacy/Benutzerhandbuch.docx)
- [Use Cases](https://3volutions.atlassian.net/wiki/spaces/RoomsUC/overview)

The latest version of this documentation is automatically deployed to gitlab pages on every commit. It can be browsed via: 
- https://3volutions.gitlab.io/3v-rooms/rooms-doc

## Getting started
- Install [Git](https://git-scm.com)
  - After the installation add a username and a email to your `~/.gitconfig` or execute the following two commands in your terminal.
  - `git config --global user.name "your_username"`
  - `git config --global user.email "your_email_address@example.com"`
- Install a comfortable markdown editor like [VSCode](https://code.visualstudio.com/)
- Install HUGO
  - Choose an **extended** Version of HUGO: [hugo-releases](https://github.com/gohugoio/hugo/releases)
  - Optional: If you have chocolatey installed just type `cinst hugo-extended -y` into the command line
- Install [Node.js](https://nodejs.org/en)
  - Install the latest LTS version
- Clone this repository and initialize all dependencies by executing the following lines on the command line
  ```sh
  git clone git@gitlab.com:3volutions/3v-rooms/rooms-doc.git
  cd rooms-doc
  git submodule update --init --recursive
  npm install
  ```

Compile and run

```sh
hugo serve
```

# Docsy
You can learn more about Docsy and find detailed theme instructions in the Docsy user guide: https://docsy.dev/docs
To just start adding content a good introduction can be found here: https://www.docsy.dev/docs/adding-content/content/#

# Screenshots
Any screenshot to illustrate a specific feature has to met the following criteria:
- Format is JPEG
- Size is 1280x716 px
- Try to only show the relevant part and remove any clutter if possible