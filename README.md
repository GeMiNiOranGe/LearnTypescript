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
```bash
npx ts-node .\src\index.ts
```
**Note:**
1. When using `ts-node`, must remove `.js` extension when using `import` statement
2. Remove `module` flag or set `"module": "CommonJS"` in [`tsconfig`](tsconfig.json)
