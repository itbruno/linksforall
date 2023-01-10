# LinksforAll

Open source link page with custom filters to keep all your links in one place.

![GitHub tag (latest SemVer)](https://img.shields.io/github/package-json/v/itbruno/linksforall)

![linksforall](https://user-images.githubusercontent.com/3206543/211219655-832f3f3e-820d-4abd-a8b0-dd9a741fe4ca.jpg)

## Description

**Linksforall** is a all in one open-source links page with optionally categories filter to better link sort with infinite possibilities.

## Get started

This project was created on [NextJS](https://nextjs.org/) with Typescript and [Tailwind CSS](https://tailwindcss.com/).
Icons from [Phosphoricons](https://phosphoricons.com/) lib

1. Begin installing all dependencies:

```shell
npm run install
# or
yarn
```

2. Run dev command to load nextjs

```shell
npm run dev
```

3. Open local URL

```
http://localhost:3000
```
## Base structure

### Content location

All content are located in:

```shell
./src/lib/links.json
./src/lib/categories.json
./src/lib/user.json
```

#### Links

Links are array with the following structure:

| name       | type   | description                   |
| ---------- | ------ | ----------------------------- |
| label      | string | label visible on page         |
| categoryId | string | **optional** id from category |
| url        | string | url from link                 |

```json
[
  {
    "label": "Open-source link page",
    "categoryId": "projects",
    "url": "https://github.com/itbruno/linksforall"
  }
]
```

#### Categories (optional)

Categories are optional to filter links, keep the array empty if you don't use.

| name  | type   | description           |
| ----- | ------ | --------------------- |
| label | string | label visible on page |
| id    | string | category identifier   |

```json
[
  {
    "label": "Projects",
    "id": "projects",
  }
]
```

#### User

The user file is all personal content from page, feel free to create/update new fields and use in your page.

| name        | type   | description                    |
| ----------- | ------ | ------------------------------ |
| fullname    | string | Page name                      |
| website     | string | **optional** website url       |
| role        | string | Your role                      |
| bio         | string | short description about you    |
| image       | string | profile image                  |
| socialLinks | object | object with social media links |

```json
[
  "fullname": "Bruno Rodrigues",
  "website": "https://itbruno.com.br",
  "role": "UI Designer & Front-end dev",
  "bio": "UI Designer and Front-end developer, based on Brazil and working at Nuvemshop",
  "image": "https://avatars3.githubusercontent.com/u/3206543?s=400&u=10401f6bec19f1675f77a45ee9b40bfb1a293367&v=4",

  "socialLinks": {
    "twitter": "https://twitter.com/_brunoweb",
    "linkedin": "https://linkedin.com/in/itbruno",
    "github": "https://github.com/itbruno",
    "medium": "https://medium.com/@itbruno",
    "facebook": "",
    "youtube": "",
    "instagram": "",
    "dribbble": "https://dribbble.com/itbruno"
  }
]
```

## Themes

Here is the best part, you can use the current themes or create your own.
Use your creativity and/or tech skill to generate awesome themes.

Themes are located in

```shell
./src/themes/[THEME_NAME]
```

To use your theme, after created you can import in `./src/index.tsx`

```ts
...
import { Alpha } from '@themes/alpha';
import { DATA } from '@lib/data';

export default function Home() {
  const { user } = DATA;
  return (
    <>
      ...
      <Alpha data={DATA} />
    </>
  );
}
```

## Design

Some themes availbale with [Figma](https://tinu.be/uilinks)

## Versions and Demo

- [v1.0.1](https://linksforall.surge.sh)
- [v2.0.1](https://linksforall.vercel.app)
