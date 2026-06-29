---
title: Use Github Actions to auto deploy your Github pages
story: //hackmd.io/0xQl_7RET9KLVmGW7TynvA/download
tags:
  - devops
  - JavaScript
id: Use%20Github%20Actions%20to%20auto%20deploy%20your%20Github%20pages
date: 2020-03-16
---

# Use Github Actions to auto deploy your Github pages

Today I received some security update on my [SpyFall](https://github.com/dipsywong98/SpyFall/) project from dependabot. I merged the pull request. Then I want to deploy this update to gh-pages branch, where my github page of SpyFall is deployed. However, this app is written in react js, I need to build it before I can deploy it to github Pages. Before I will just git pull and build and push the build to gh-pages branch manually,  but now I can use github action to automate this, and in the future I can just push to master and Github will build and deploy to gh-pages automatically.

(This method also applicable for other javascript framework like Vue.js)

1. Press "Actions" here
 ![](https://i.imgur.com/irUh2To.png)
 
2. Click "set up a workflow myself"
 ![](https://i.imgur.com/8gmkKbd.png)

3. Paste this if you are using yarn for your non `<username>.github.io` repo
```yaml
name: gh-pages

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: yarn install --frozen-lockfile
    - run: yarn build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
      env:
        CI: true
```
Note: I am using yarn as dependency manager, if you use npm, you can replace `yarn install --frozen-lockfile` with `npm ci`. 

The reason why use these commands to install dependencies instead of using `yarn` or `npm install` is, `npm ci` install depedencies according to `package-lock.json` instead of `package.json`, to ensure the versions of the app dependencies and their dependencies is same as the one you installed during development.

Moreover, react build the page to ./build directory, so I change the publish_dir to ./build, if your build will be in other directory you can change it accordingly.

If you are deploying to your `<username>.github.io` repo, refer to this yaml instead

```yaml
name: gh-pages

on:
  push:
    branches: [ dev ]
  pull_request:
    branches: [ dev ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
    - uses: actions/checkout@v2
      with:
        ref: 'dev'
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        publish_branch: master
      env:
        CI: true
```

My source code is in `dev` branch, so the action should be triggered by event related to `dev` branch instead of `master` branch, the `action/checkout` should checkout `dev` branch instead of `master` branch, which is the default. The `gh-page` action I specified the `publish_branch` is `master`, which is required by github. I am using `./dist` instead of `./build` just because my personal homepage is written in Vue which builds to `./dist` by default

4. Press start commit and commit new file
 ![](https://i.imgur.com/BMdSoAd.png)

5. Check if your gh-pages is enabled at settings
  
  ![](https://i.imgur.com/ahlAaJ6.png)

  ![](https://i.imgur.com/eNNFY17.png)
  
6. (optional) Add a badge to readme, just copy the markdown from actions->your pipeline->create status badge, then paste it to the readme file
![](https://i.imgur.com/rppqNjb.png)


## reference

https://github.com/marketplace/actions/github-pages-action
    