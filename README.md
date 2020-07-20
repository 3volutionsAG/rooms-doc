# ROOMS doc
This repository contains all the documentation available to the end user. The goal is to merge the legacy documentation which is cluttered in mainly two parts:
- Benutzerhandbuch.docx (legacy/Benutzerhandbuch.docx)
- [Use Cases](https://3volutions.atlassian.net/wiki/spaces/RoomsUC/overview)

The latest version of this documentation is automatically deployed to gitlab pages on every commit. It can be browsed via: 
- https://3volutions.gitlab.io/3v-rooms/rooms-doc

## Getting started
- Install HUGO
  - Choose an **extended** Version of HUGO: [hugo-releases](https://github.com/gohugoio/hugo/releases)
  - Optional: If you have chocolatey installed just type `cinst hugo-extended -y` into the command line
- Install [Node.js](https://nodejs.org/en)
  - Install the latest LTS version
- Clone this repository and initialize all dependencies
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

To just start adding content a good introduction can be found here: https://www.docsy.dev/docs/adding-content/content/
