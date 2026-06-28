---
title: EC2 root loginconfig
titleLink: //gist.github.com/dipsywong98/ca1ced267eaecbb483ed237690d04140
story: >-
  https://gist.githubusercontent.com/dipsywong98/ca1ced267eaecbb483ed237690d04140/raw/EC2-root-login-config.md
tags:
  - SSH
  - AWS
  - EC2
id: EC2%20root%20loginconfig
date: 2019-08-04
---
# Config root login for server

1. add ssh public key to /root/.ssh/authorized_keys

2. Refer to the following to set root login:

```sh
sudo -s (to become root)
vi /root/.ssh/authorized_keys
```
Delete the lines at the begining of the file until you get to the words ssh-rsa.

```sh
vi /etc/ssh/sshd_config
```
Set the variable PermitRootLogin to PermitRootLogin without-password (without quotes)

sudo service sshd restart
    