---
title: calenytics - 算帳日曆
githubLink: //github.com/dipsywong98/calenytics
brief: >-
  Turn your Google Calendar into income balance spreadsheet. Set up once, synced forever.
time: 2023 Q1
liveLink: https://calenytics.dipsy.me
tags:
  - TypeScript
  - React
  - MongoDB
  - Next.JS
  - Vercel
  - web
  - Figma
id: calenytics%20-%20%E7%AE%97%E5%B8%B3%E6%97%A5%E6%9B%86
date: 2023-03-04
isProject: true
---
[![alt text](<../public/img/posts/calenytics - 算帳日曆/image.png>)](https://calenytics.dipsy.me)

live at https://calenytics.dipsy.me

## Story

My brother is a freelance musician and he wants to organise his schedule and income well, so I make this tools to convert a google calendar into a google spreadsheet, tally all the income from all events. Events in calendar can include some custom tags, for example my brother can put what instrument he was playing at the event, and then he can analyse which instrument brings him the best income.

## Technology

- Next.js - it is easy to use, align with my toolchains, easy horizontal scale, can be easily hosted with free vercel hosting service. Can even switch to self host or other hosting services easily.
- MongoDB - it has cloud free tier, and our data volume is very small, only one collection for holding the linkage between calendar and sheet and sync configuration, which the document is small as well, so even if many users using will still not be a problem
- Google API (Calender, Sheet, Service Account) - using service account because setting up Google APP has too much overhead for this small project and have usage limit of 100 users. And in user perspective, users have a granular control and high visibility on which data the service account can access.
- Github Action - free service to run tests and schedule cron job

## Working principles

First, users need to register their calendar and sheet to link them. They will need to grant Calenytics service account for accesss. And we will verify whether they are the actual owner of the calendar and sheet. The linkage and verification state is store in a mongo collection, and upon verification we register webhook on the calendar.

When user edit their calendar, it trigger our webhook, we will parse the calendar and put update to their google sheet. In their google sheet, they can on their own set up formulars or charts to analyse their events. We do not own or further process their data to limit our scope. A limitation of webhook is that, it only notifies us there is an update in the calendar, without telling us which part is updated. So everytime we can only process the whole calendar and dump everything into google sheet. This may have a risk to break the execution time limit in the vercel free hosting if the calendar is too big.

As google webhook only live for 24 hours, we have a cron job to refresh webhooks every day.
