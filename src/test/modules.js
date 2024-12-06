const {
  ModuleGraph,
  createModuleGraph
} = require('../moduleGraph');

const modules = [
  {
    "type": "module",
    "moduleType": "javascript/auto",
    "layer": null,
    "size": 256,
    "sizes": {
      "javascript": 256
    },
    "built": true,
    "codeGenerated": true,
    "buildTimeExecuted": false,
    "cached": false,
    "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
    "name": "./src/index.js",
    "nameForCondition": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
    "index": 0,
    "preOrderIndex": 0,
    "index2": 3,
    "postOrderIndex": 3,
    "cacheable": true,
    "optional": false,
    "orphan": false,
    "issuer": null,
    "issuerName": null,
    "issuerPath": null,
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "profile": {
      "total": 42,
      "resolving": 26,
      "restoring": 1,
      "building": 15,
      "integration": 0,
      "storing": 0,
      "additionalResolving": 0,
      "additionalIntegration": 0,
      "factory": 26,
      "dependencies": 0
    },
    "id": "./src/index.js",
    "issuerId": null,
    "chunks": [
      "main"
    ],
    "assets": [],
    "reasons": [
      {
        "moduleIdentifier": null,
        "module": null,
        "moduleName": null,
        "resolvedModuleIdentifier": null,
        "resolvedModule": null,
        "type": "entry",
        "active": true,
        "explanation": "",
        "userRequest": "./src/index.js",
        "loc": "main",
        "moduleId": null,
        "resolvedModuleId": null
      }
    ],
    "usedExports": null,
    "providedExports": [],
    "optimizationBailout": [],
    "depth": 0
  },
  {
    "type": "module",
    "moduleType": "javascript/auto",
    "layer": null,
    "size": 22,
    "sizes": {
      "javascript": 22
    },
    "built": true,
    "codeGenerated": true,
    "buildTimeExecuted": false,
    "cached": false,
    "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/static-esm-module.js",
    "name": "./src/static-esm-module.js",
    "nameForCondition": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/static-esm-module.js",
    "index": 1,
    "preOrderIndex": 1,
    "index2": 0,
    "postOrderIndex": 0,
    "cacheable": true,
    "optional": false,
    "orphan": false,
    "issuer": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
    "issuerName": "./src/index.js",
    "issuerPath": [
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "name": "./src/index.js",
        "profile": {
          "total": 42,
          "resolving": 26,
          "restoring": 1,
          "building": 15,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 26,
          "dependencies": 0
        },
        "id": "./src/index.js"
      }
    ],
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "profile": {
      "total": 9,
      "resolving": 5,
      "restoring": 0,
      "building": 4,
      "integration": 0,
      "storing": 0,
      "additionalResolving": 0,
      "additionalIntegration": 0,
      "factory": 5,
      "dependencies": 0
    },
    "id": "./src/static-esm-module.js",
    "issuerId": "./src/index.js",
    "chunks": [
      "main"
    ],
    "assets": [],
    "reasons": [
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "module": "./src/index.js",
        "moduleName": "./src/index.js",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "resolvedModule": "./src/index.js",
        "type": "harmony side effect evaluation",
        "active": true,
        "explanation": "",
        "userRequest": "./static-esm-module",
        "loc": "1:0-44",
        "moduleId": "./src/index.js",
        "resolvedModuleId": "./src/index.js"
      },
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "module": "./src/index.js",
        "moduleName": "./src/index.js",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "resolvedModule": "./src/index.js",
        "type": "harmony import specifier",
        "active": true,
        "explanation": "",
        "userRequest": "./static-esm-module",
        "loc": "12:12-21",
        "moduleId": "./src/index.js",
        "resolvedModuleId": "./src/index.js"
      }
    ],
    "usedExports": null,
    "providedExports": [
      "default"
    ],
    "optimizationBailout": [],
    "depth": 1
  },
  {
    "type": "module",
    "moduleType": "javascript/auto",
    "layer": null,
    "size": 50,
    "sizes": {
      "javascript": 50
    },
    "built": true,
    "codeGenerated": true,
    "buildTimeExecuted": false,
    "cached": false,
    "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "name": "./src/index.css",
    "nameForCondition": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "index": 2,
    "preOrderIndex": 2,
    "index2": 2,
    "postOrderIndex": 2,
    "cacheable": true,
    "optional": false,
    "orphan": false,
    "issuer": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
    "issuerName": "./src/index.js",
    "issuerPath": [
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "name": "./src/index.js",
        "profile": {
          "total": 42,
          "resolving": 26,
          "restoring": 1,
          "building": 15,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 26,
          "dependencies": 0
        },
        "id": "./src/index.js"
      }
    ],
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "profile": {
      "total": 262,
      "resolving": 15,
      "restoring": 0,
      "building": 247,
      "integration": 0,
      "storing": 0,
      "additionalResolving": 0,
      "additionalIntegration": 0,
      "factory": 15,
      "dependencies": 0
    },
    "id": "./src/index.css",
    "issuerId": "./src/index.js",
    "chunks": [
      "main"
    ],
    "assets": [],
    "reasons": [
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "module": "./src/index.js",
        "moduleName": "./src/index.js",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "resolvedModule": "./src/index.js",
        "type": "harmony side effect evaluation",
        "active": true,
        "explanation": "",
        "userRequest": "./index.css",
        "loc": "2:0-21",
        "moduleId": "./src/index.js",
        "resolvedModuleId": "./src/index.js"
      }
    ],
    "usedExports": null,
    "providedExports": [],
    "optimizationBailout": [],
    "depth": 1
  },
  {
    "type": "module",
    "moduleType": "css/mini-extract",
    "size": 296,
    "sizes": {
      "css/mini-extract": 296
    },
    "built": true,
    "codeGenerated": true,
    "buildTimeExecuted": false,
    "cached": false,
    "identifier": "css|/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css|0|||}}",
    "name": "css ./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
    "nameForCondition": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "index": 3,
    "preOrderIndex": 3,
    "index2": 1,
    "postOrderIndex": 1,
    "cacheable": true,
    "optional": false,
    "orphan": false,
    "issuer": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "issuerName": "./src/index.css",
    "issuerPath": [
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "name": "./src/index.js",
        "profile": {
          "total": 42,
          "resolving": 26,
          "restoring": 1,
          "building": 15,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 26,
          "dependencies": 0
        },
        "id": "./src/index.js"
      },
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "name": "./src/index.css",
        "profile": {
          "total": 262,
          "resolving": 15,
          "restoring": 0,
          "building": 247,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 15,
          "dependencies": 0
        },
        "id": "./src/index.css"
      }
    ],
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "profile": {
      "total": 0,
      "resolving": 0,
      "restoring": 0,
      "building": 0,
      "integration": 0,
      "storing": 0,
      "additionalResolving": 0,
      "additionalIntegration": 0,
      "factory": 0,
      "dependencies": 0
    },
    "id": null,
    "issuerId": "./src/index.css",
    "chunks": [
      "main"
    ],
    "assets": [],
    "reasons": [
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "module": "./src/index.css",
        "moduleName": "./src/index.css",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "resolvedModule": "./src/index.css",
        "type": "unknown",
        "active": true,
        "explanation": "",
        "userRequest": null,
        "moduleId": "./src/index.css",
        "resolvedModuleId": "./src/index.css"
      }
    ],
    "usedExports": null,
    "providedExports": null,
    "optimizationBailout": [],
    "depth": 2
  },
  {
    "type": "module",
    "moduleType": "javascript/auto",
    "layer": null,
    "size": 794,
    "sizes": {
      "javascript": 794
    },
    "built": true,
    "codeGenerated": true,
    "buildTimeExecuted": true,
    "cached": false,
    "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "name": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
    "nameForCondition": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "cacheable": true,
    "optional": false,
    "orphan": true,
    "issuer": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "issuerName": "./src/index.css",
    "issuerPath": [
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "name": "./src/index.js",
        "profile": {
          "total": 42,
          "resolving": 26,
          "restoring": 1,
          "building": 15,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 26,
          "dependencies": 0
        },
        "id": "./src/index.js"
      },
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "name": "./src/index.css",
        "profile": {
          "total": 262,
          "resolving": 15,
          "restoring": 0,
          "building": 247,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 15,
          "dependencies": 0
        },
        "id": "./src/index.css"
      }
    ],
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "profile": {
      "total": 116,
      "resolving": 6,
      "restoring": 0,
      "building": 110,
      "integration": 0,
      "storing": 0,
      "additionalResolving": 0,
      "additionalIntegration": 0,
      "factory": 6,
      "dependencies": 0
    },
    "id": null,
    "issuerId": "./src/index.css",
    "chunks": [],
    "assets": [],
    "reasons": [
      {
        "moduleIdentifier": null,
        "module": null,
        "moduleName": null,
        "resolvedModuleIdentifier": null,
        "resolvedModule": null,
        "type": "loader import",
        "active": false,
        "explanation": "",
        "userRequest": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css.webpack[javascript/auto]!=!!!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "loc": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css.webpack[javascript/auto]!=!!!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "moduleId": null,
        "resolvedModuleId": null
      }
    ],
    "usedExports": null,
    "providedExports": [
      "default"
    ],
    "optimizationBailout": [],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "javascript/auto",
    "layer": null,
    "size": 2303,
    "sizes": {
      "javascript": 2303
    },
    "built": true,
    "codeGenerated": true,
    "buildTimeExecuted": true,
    "cached": false,
    "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
    "name": "./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
    "nameForCondition": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "cacheable": true,
    "optional": false,
    "orphan": true,
    "issuer": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "issuerName": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
    "issuerPath": [
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "name": "./src/index.js",
        "profile": {
          "total": 42,
          "resolving": 26,
          "restoring": 1,
          "building": 15,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 26,
          "dependencies": 0
        },
        "id": "./src/index.js"
      },
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "name": "./src/index.css",
        "profile": {
          "total": 262,
          "resolving": 15,
          "restoring": 0,
          "building": 247,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 15,
          "dependencies": 0
        },
        "id": "./src/index.css"
      },
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "name": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "profile": {
          "total": 116,
          "resolving": 6,
          "restoring": 0,
          "building": 110,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 6,
          "dependencies": 0
        },
        "id": null
      }
    ],
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "profile": {
      "total": 0,
      "resolving": 0,
      "restoring": 0,
      "building": 0,
      "integration": 0,
      "storing": 0,
      "additionalResolving": 0,
      "additionalIntegration": 0,
      "factory": 0,
      "dependencies": 0
    },
    "id": null,
    "issuerId": null,
    "chunks": [],
    "assets": [],
    "reasons": [
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "module": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "moduleName": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "resolvedModule": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "type": "harmony side effect evaluation",
        "active": true,
        "explanation": "",
        "userRequest": "../node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
        "loc": "3:0-125",
        "moduleId": null,
        "resolvedModuleId": null
      },
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "module": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "moduleName": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "resolvedModule": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "type": "harmony import specifier",
        "active": true,
        "explanation": "",
        "userRequest": "../node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
        "loc": "4:30-57",
        "moduleId": null,
        "resolvedModuleId": null
      },
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
        "module": "./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
        "moduleName": "./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
        "resolvedModule": "./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/api.js",
        "type": "cjs self exports reference",
        "active": true,
        "explanation": "",
        "userRequest": null,
        "loc": "7:0-14",
        "moduleId": null,
        "resolvedModuleId": null
      }
    ],
    "usedExports": null,
    "providedExports": null,
    "optimizationBailout": [
      "CommonJS bailout: module.exports is used directly at 7:0-14"
    ],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "javascript/auto",
    "layer": null,
    "size": 64,
    "sizes": {
      "javascript": 64
    },
    "built": true,
    "codeGenerated": true,
    "buildTimeExecuted": true,
    "cached": false,
    "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
    "name": "./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
    "nameForCondition": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "cacheable": true,
    "optional": false,
    "orphan": true,
    "issuer": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
    "issuerName": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
    "issuerPath": [
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.js",
        "name": "./src/index.js",
        "profile": {
          "total": 42,
          "resolving": 26,
          "restoring": 1,
          "building": 15,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 26,
          "dependencies": 0
        },
        "id": "./src/index.js"
      },
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/registry.npmmirror.com+mini-css-extract-plugin@2.9.2/node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[0].use[0]!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "name": "./src/index.css",
        "profile": {
          "total": 262,
          "resolving": 15,
          "restoring": 0,
          "building": 247,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 15,
          "dependencies": 0
        },
        "id": "./src/index.css"
      },
      {
        "identifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "name": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "profile": {
          "total": 116,
          "resolving": 6,
          "restoring": 0,
          "building": 110,
          "integration": 0,
          "storing": 0,
          "additionalResolving": 0,
          "additionalIntegration": 0,
          "factory": 6,
          "dependencies": 0
        },
        "id": null
      }
    ],
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "profile": {
      "total": 0,
      "resolving": 0,
      "restoring": 0,
      "building": 0,
      "integration": 0,
      "storing": 0,
      "additionalResolving": 0,
      "additionalIntegration": 0,
      "factory": 0,
      "dependencies": 0
    },
    "id": null,
    "issuerId": null,
    "chunks": [],
    "assets": [],
    "reasons": [
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "module": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "moduleName": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "resolvedModule": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "type": "harmony side effect evaluation",
        "active": true,
        "explanation": "",
        "userRequest": "../node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        "loc": "2:0-147",
        "moduleId": null,
        "resolvedModuleId": null
      },
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "module": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "moduleName": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/src/index.css",
        "resolvedModule": "./src/index.css.webpack[javascript/auto]!=!./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/cjs.js!./src/index.css",
        "type": "harmony import specifier",
        "active": true,
        "explanation": "",
        "userRequest": "../node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        "loc": "4:58-98",
        "moduleId": null,
        "resolvedModuleId": null
      },
      {
        "moduleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        "module": "./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        "moduleName": "./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        "resolvedModuleIdentifier": "/Users/fanduanduan/WorkSpace/github.com/dleged/webpack-build-timing-plugin/examples/simple/node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        "resolvedModule": "./node_modules/.pnpm/css-loader@7.1.2/node_modules/css-loader/dist/runtime/noSourceMaps.js",
        "type": "cjs self exports reference",
        "active": true,
        "explanation": "",
        "userRequest": null,
        "loc": "3:0-14",
        "moduleId": null,
        "resolvedModuleId": null
      }
    ],
    "usedExports": null,
    "providedExports": null,
    "optimizationBailout": [
      "CommonJS bailout: module.exports is used directly at 3:0-14"
    ],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "runtime",
    "layer": null,
    "size": 267,
    "sizes": {
      "runtime": 267
    },
    "built": false,
    "codeGenerated": true,
    "buildTimeExecuted": true,
    "cached": false,
    "identifier": "webpack/runtime/compat get default export",
    "name": "webpack/runtime/compat get default export",
    "nameForCondition": null,
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "optional": false,
    "orphan": true,
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "id": null,
    "chunks": [],
    "assets": [],
    "reasons": [],
    "usedExports": null,
    "providedExports": null,
    "optimizationBailout": [],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "runtime",
    "layer": null,
    "size": 308,
    "sizes": {
      "runtime": 308
    },
    "built": false,
    "codeGenerated": true,
    "buildTimeExecuted": true,
    "cached": false,
    "identifier": "webpack/runtime/define property getters",
    "name": "webpack/runtime/define property getters",
    "nameForCondition": null,
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "optional": false,
    "orphan": true,
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "id": null,
    "chunks": [],
    "assets": [],
    "reasons": [],
    "usedExports": null,
    "providedExports": null,
    "optimizationBailout": [],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "runtime",
    "layer": null,
    "size": 308,
    "sizes": {
      "runtime": 308
    },
    "built": false,
    "codeGenerated": true,
    "buildTimeExecuted": false,
    "cached": false,
    "identifier": "webpack/runtime/define property getters",
    "name": "webpack/runtime/define property getters",
    "nameForCondition": null,
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "optional": false,
    "orphan": false,
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "id": "",
    "chunks": [
      "main"
    ],
    "assets": [],
    "reasons": [],
    "usedExports": null,
    "providedExports": [],
    "optimizationBailout": [],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "runtime",
    "layer": null,
    "size": 88,
    "sizes": {
      "runtime": 88
    },
    "built": false,
    "codeGenerated": true,
    "buildTimeExecuted": true,
    "cached": false,
    "identifier": "webpack/runtime/hasOwnProperty shorthand",
    "name": "webpack/runtime/hasOwnProperty shorthand",
    "nameForCondition": null,
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "optional": false,
    "orphan": true,
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "id": null,
    "chunks": [],
    "assets": [],
    "reasons": [],
    "usedExports": null,
    "providedExports": null,
    "optimizationBailout": [],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "runtime",
    "layer": null,
    "size": 88,
    "sizes": {
      "runtime": 88
    },
    "built": false,
    "codeGenerated": true,
    "buildTimeExecuted": false,
    "cached": false,
    "identifier": "webpack/runtime/hasOwnProperty shorthand",
    "name": "webpack/runtime/hasOwnProperty shorthand",
    "nameForCondition": null,
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "optional": false,
    "orphan": false,
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "id": "",
    "chunks": [
      "main"
    ],
    "assets": [],
    "reasons": [],
    "usedExports": null,
    "providedExports": [],
    "optimizationBailout": [],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "runtime",
    "layer": null,
    "size": 274,
    "sizes": {
      "runtime": 274
    },
    "built": false,
    "codeGenerated": true,
    "buildTimeExecuted": true,
    "cached": false,
    "identifier": "webpack/runtime/make namespace object",
    "name": "webpack/runtime/make namespace object",
    "nameForCondition": null,
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "optional": false,
    "orphan": true,
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "id": null,
    "chunks": [],
    "assets": [],
    "reasons": [],
    "usedExports": null,
    "providedExports": null,
    "optimizationBailout": [],
    "depth": null
  },
  {
    "type": "module",
    "moduleType": "runtime",
    "layer": null,
    "size": 274,
    "sizes": {
      "runtime": 274
    },
    "built": false,
    "codeGenerated": true,
    "buildTimeExecuted": false,
    "cached": false,
    "identifier": "webpack/runtime/make namespace object",
    "name": "webpack/runtime/make namespace object",
    "nameForCondition": null,
    "index": null,
    "preOrderIndex": null,
    "index2": null,
    "postOrderIndex": null,
    "optional": false,
    "orphan": false,
    "failed": false,
    "errors": 0,
    "warnings": 0,
    "id": "",
    "chunks": [
      "main"
    ],
    "assets": [],
    "reasons": [],
    "usedExports": null,
    "providedExports": [],
    "optimizationBailout": [],
    "depth": null
  }
]



const graph = createModuleGraph({ modules });

// Get dependencies of a module
const deps = graph.getDependencies("./src/index.js");

// // Get modules that depend on a specific module
// const dependents = graph.getDependents("./src/index.js");

// // Get information about a specific module
// const moduleInfo = graph.getModuleInfo("./src/index.js");

// Get a visual representation of the graph
console.log(graph.toDAG());
