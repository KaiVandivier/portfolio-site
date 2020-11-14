---
title: "Custom Report Builder"
date: "2020-11-12"
images:
  [
    "/images/custom-report-builder/crb-home.png",
    "/images/custom-report-builder/crb-edit.png",
    "/images/custom-report-builder/crb-highlighting.png",
    "/images/custom-report-builder/crb-data-select.png",
    # "/images/custom-report-builder/crb-org-unit-select.png",
    # "/images/custom-report-builder/crb-period-select.png",
    "/images/custom-report-builder/crb-parameters.png",
    "/images/custom-report-builder/crb-generated.png",
  ]
description: "A DHIS web app for building custom data tables."
---

[Try a sandbox version here!](https://play.dhis2.org/2.35.0/api/apps/custom-report-builder/index.html#/tables)

[View the source on GitHub](https://github.com/KaiVandivier/custom-report-builder)

This is a DHIS2 app designed to provide table-building functionality with some tools that are currently unavailable to existing pivot tables, including:

- Adding predefined text to cells
- Highlighting cells based on value
- Querying different data items for every cell
- Having control over the exact contents of every cell, for example querying a different indicator or program indicator in every cell

Read the Instructions for Use [on this page](https://github.com/KaiVandivier/custom-report-builder/blob/master/docs/tables.md).

This app is built using DHIS development tools, including:

- The app runtime data layer
- The app service datastore
- Complex form validation using final form
- Extensive use of the UI libraries
- Data and period selector components from the analytics library

An alpha version for testing is awaiting approval on the DHIS App Hub.
