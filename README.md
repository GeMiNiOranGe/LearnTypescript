# LearnTypescript

> Caption: **[Node.js](https://nodejs.org/)** version must be newer than **20.0.0**

## How to build
### Step 1: intall library.
```bash
npm install
```
### Step 2: run project.
- Use [`tsx`](https://github.com/privatenumber/tsx):
```bash
npx tsx .\index.ts
```

- Use [`tsc`](https://github.com/microsoft/TypeScript):
```bash
npx tsc .\src\index.ts
node .\src\index.js

# Or

# Recommend
npm run ts:build-and-run
```

- Use [`ts-node`](https://github.com/TypeStrong/ts-node):

> **Note:** For `ts-node`, the `.js` extension must be removed when using the `import` statement in `.ts` files.

**Option 1:** Remove `module` flag or set `"module": "CommonJS"` in [`tsconfig`](tsconfig.json).

```bash
npx ts-node .\src\index.ts
```

**Option 2:** ignore [`tsconfig`](tsconfig.json). ([How to ignore tsconfig](https://github.com/TypeStrong/ts-node/issues/456#issuecomment-597851736))

```bash
npx ts-node --skip-project .\src\index.ts
```
