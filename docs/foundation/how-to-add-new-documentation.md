---
title: How to add new documentation
sidebar_position: 5
sidebar_label: Adding new documentation
---

# Introduction

This documentation website was made using [Docusaurus](https://docusaurus.io/docs), it is a static-site generator.
It builds a single-page application with fast client-side navigation.
It provides out-of-the-box documentation features but can be used to create any kind of site (personal website, product, blog, marketing landing pages, etc).

# Directory structure:
![Image](/assets/images/dnxOneProjectStructure.png)


# Adding a new documenation file
1. Inside of the `docs` directory, choose the apropriate folder that your documentation should be on, and create your markdown file (`.md` suffix).
2. Add the following structure in the header of your file:

```markdown
---
title: <Your tile>
sidebar_position: <desired_position>
sidebar_label: <sidebar_label>
---

```
3. Now, using [Markdown](https://www.markdownguide.org/) format,  write your documenation.
4. If your documentation relies on any static asset, you can add it inside of `static/images/...`, and reference it 
inside of your markdown file with the structure: `![Image](<image_path e.g: /assets/images/---.png>)`
5. In order to implement advanced features, you can always refer the  [Docusaurus](https://docusaurus.io/docs) documentation.