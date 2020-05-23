---
title: 'This Site is Built With Next.js'
date: '2020-04-01'
---

This portfolio site was built using Next.js, a React framework that offers routing, pre-rendering, and other features that facilitate building web apps.

This app takes advantage of **static generation** to process and load all the content at build time, resulting in a quick page loads.  It also takes advantage of **dynamic routing** to load in content from markdown files (like this one) and dynamically create pages and routes for them, making content management easy.

I used Next in the Recipe Market project, and it served as a valuable tool to structure the site.  Because most of the content on Recipe Market requires up-to-date data fetched from the server, the pages could not be statically generated, but instead were **rendered server-side** to provide better user experience.
