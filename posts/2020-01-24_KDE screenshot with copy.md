---
title: KDE screenshot with copy
story: >-
  //gist.githubusercontent.com/dipsywong98/d072015a268659ea519a416a09d33f61/raw/KDE%2520screenshot%2520with%2520copy.md
tags:
  - Linux
  - KDE
id: KDE%20screenshot%20with%20copy
date: 2020-01-24
---
# KDE screenshot with copy

1. install xclip

```shell showLineNumbers
sudo apt-get install xclip
```

2. create a new shortcut
![](https://i.imgur.com/OU9haFx.png)

```shell showLineNumbers
spectacle -br -o ~/Pictures/Screenshots/copyshot.png
```

3. take a screenshot and click the setting icon next to the close icon
![](https://i.imgur.com/R3gRKor.png)

4. add run command

![](https://i.imgur.com/RP1P4TT.png)

```shell showLineNumbers
/usr/bin/xclip -selection clipboard -target image/png -i ~/Pictures/Screenshots/copyshot.png
```

## Reference

https://gist.github.com/Xarkam/26d40e98dbad314423c11a27e35aab47
https://www.reddit.com/r/kde/comments/5i4awm/how_to_make_spectacle_copy_to_clipboard_by_default/

    