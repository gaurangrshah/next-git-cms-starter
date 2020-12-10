# next-chakra-starter

Next.js with Chakra UI Starter Template

## Overview

- `/design-system/foundations/*` - Custom theme configuration

## Running Locally

```bash
$ git clone https://github.com/miraklasiaf/next-chakra-starter.git
$ cd next-chakra-starter
$ yarn
$ yarn dev
```

## Built Using

- [Next.js](https://nextjs.org/)
- [next-seo](https://github.com/garmeeh/next-seo)
- [Chakra UI](https://chakra-ui.com/)
- [framer-motion](https://www.framer.com/api/motion/)
- [Vercel](https://vercel.com)

---

> create a new directory in the root of this project `/data` at it's root

**OR**

> create a new git repo with a single directory `/data`

Insert markdown files in that directory with the file names in the following format:

```markdown
year-month-day-<post-title>.md
```

**NOTE:**
requires github personal access token to allow rest-api based acess to update repos.

> Be sure to provide all "repo" permissions to the token

---

---

**setup next-auth**
In order to setup next-auth using github login, we'll need to [generate a new Github ClientId && Secret](https://github.com/settings/developers)

**❗️ NOTE**
For each application we'll need a set of credentials for each environment that we want to allow login from so generally that means we'll need a set of credentials for development, staging, and production.

Use the following settings when configuring the OAuth credentials:

```
homepage url: http://localhost:3000
http://localhost:3000/api/auth
```

> we are able to simply generate a new secret for each application instead of need be, allowing us to keep the same configuration (if the callback url required is the same)

---
