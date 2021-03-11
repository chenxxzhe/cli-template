## GCF Project Manager

Workflow for one market content management.

Generate GCF dataSource csv files

## Script

Install

```sh
npm i
```

Run

```sh
npm start 2020-06-17 # date suffix
```

more command see [package.json](./package.json)

## How to Use

1. `npm run initialize <version-url>` to download CSV and parse and generate source code
2. use vscode extension `code-template-tool` generate `Location` template

- 2.1 install `code-template-tool` and set `"codeTemplateTool.templatesPath": "{workspace}/code-template"` only in workspace setting; reload vscode;
- 2.2 right click `src/locations` folder and select `New File / Folder From Template`
- 2.3 select `gcf location` and input location code

3. configure location `schedules.ts` and location `components.ts`
4. run `npm start [date, such as '2020-06-17']` to generate file
5. copy file to HQ. **Warning:** deployment should be better same as follow section ' _Process of deployment for Production_ '

## Process of deployment for Production

`version.zip` link the csv which not change frequently, i.e: `[font, playlist-config, component-types, pos6, product-db, sub-db, projects, project-config, screen-types, screen, section-types, section, ]` , `component.lineup` would be here too.

`core.zip` link the csv which will modify every campaign, i.e: `[components, schedule]`

**Check List** :

- before deployment should make sure you can revert by switch available in version.
- link new date suffix component.csv in new `core.xx.xx.[date].zip`

## Use Case

1. change schedule
2. new location with same content
3. new content
4. holiday
5. two presell

## CLI Problem FAQ

> upload fail Client network socket disconnected before secure TLS connection was established

network problem, try another better network

## Content Problem FAQ

see [FAQ](./FAQ.md)

or

https://www.zybuluo.com/chenxxzhe/note/1716469

---

## For Developer

#### TODO

- [x] code-template-tool
- [x] doc
- [x] multiple location merged
- [x] config for generating separate location files
- [x] generate product sub-product
- [x] lineup file problem. each generated and deployed should change component datasource property to its generated lineup name
- [x] generated file should manage in this project
- [x] schedule use key to define start - end time
- [x] warning different tags and non-continuous schedule
- [x] check tag only in production version
- [x] datasource suffix `.csv`
- [x] warning same schedule
- [x] COD header in combined file
- [x] common schedule and common component
- [x] make UAT as production, so we can publish UAT when approved. Solution: New campaign new folder in `src/location` defined new component array, `shared` import this component
- [x] consider the HQ files is changing , and how to synchronize; By auto download all csv
- [x] csv to object cli support

- [-] generate dist copy to `deployed-files` automatically
  - [x] copy version, component, and schedule to deployed folder
  - [x] copy sub version, and UAT
  - [x] copy new lineup
- [ ] download assets
- [ ] how to test batch
- [x] auto deploy
- [x] auto publish
  - [x] publish for location
  - [x] reload location cache list
  - [x] auto close when deploy select "no" in build command
- [-] more regular operation convenient function, such as update schedule and update product code
  - [x] createProduct
  - [ ] updateProduct
  - [ ] changeSchedule
- [ ] friendly UI
- [ ] doc for code style
- [ ] dco for how to create common component for 4.5
- [-] accommodate GCF 4.5
  - [x] handle McCafe and non-McCafe
  - [x] handle #170 special content
  - [ ] handle easyMonday
  - [ ] component order
  - [ ] daypart set week day
  - [ ] parse 4.5
- [ ] iterate all store
- [ ] smart component parser
- [ ] axios socks proxy
- [ ] deploy vscode in server
- [ ] refactor locations files into single file
- [ ] promo space backup lineup auto generate
- [ ] refactor daypartAlias and make user friendly daypart system
- [ ] DOC: for configuring component, what is usage for daypart, schedule and tags
- [ ] refactor , use OOP
- [ ] synchronic all file in version.csv, and remove outdate file
