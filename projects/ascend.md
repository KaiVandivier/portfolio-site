---
title: 'KIT & ASCEND Reports'
date: '2020-10-01'
images: [
  '/images/ascend/mda.png',
  '/images/ascend/mda-filters.png',
  '/images/ascend/dsa.png',
  '/images/ascend/training.png',
  '/images/ascend/lf-tc.png',
]
description: 'Multi-featured HTML-based reports for DHIS2.'
---

<em>**NOTE:** The screenshots above were taken while the database was not yet populated. These screenshots will be updated when data becomes available.</em>

[View the source on GitHub](https://github.com/KaiVandivier/ascend-reports)

These are a group of reports for the KIT and ASCEND organisations which are designed to display analytics data which required custom handling and several dynamic features.

Each cell requires a different data item to be queried from the DHIS analytics API, and some require custom logic, for example to be the greater of two other cells. Other cells require complex analytics queries and processing, for example to sum an indicator value across multiple programs, but only count one value from each of the smallest levels of organization units across all the programs (i.e. if a village responded with values to multiple different programs, only the largest response value is counted toward the national or global sum).

The reports also feature:
- A tool for choosing the years and countries for which the table data is queried and refreshing the table (which was necessary aT the time when report parameters in the reports app were not working correctly)
- The option to export the contents of the table in CSV format
- Tooltips explaining the content of cells with custom logic
- Tooltips to explain errors and warnings during the fetching and population process

Development notes: The deliverable for HTML-based reports is a single HTML fragment that will be rendered in an `iframe`, which creates a number of constraints. To take advantage of useful libraries, they were imported from externally hosted packages. When there was just one table and it was in a simple stage, working inside a `script` element in single HTML file was adequate, but as the reports grew in complexity and number, maintenance became difficult. To make them more maintainable, I made a custom webpack script that compiles javascript projects and emit them in the form required by the HTML reports, which enables module-based javascript development, unit testing and linting, and further refactoring to make the scripts more maintainable. In the future, the reports may benefit by being refactored into a standalone app.
