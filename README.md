# Script API

This repository is full of api scripts written by MSC BEEHI.

# Setup / Modules
Script Samples
scripts
Community driven scripts that use Script API to do all kinds of crazy stuff in Minecraft.
<details><summary>Import Modules</summary>

* **@minecraft/server**
Basic usage of manipulating Script API features within `@minecraft/server` module

* **@minecraft/server-gametest**
Basic usage of creating GameTests or spawning a simulated player using `@minecraft/server-gametest` module

* **@minecraft/server-ui**
Basic usage of manipulating server forms available in `@minecraft/server-ui` module

</details>
<details><summary>Modules Library</summary>

[Install Node js to use Typescript.](https://nodejs.org/)

* **@minecraft/server**
Terminal
```terminal
npm i @minecraft/server@beta
```

* **@minecraft/server-gametest**
Terminal
```terminal
npm i @minecraft/server-gametest@beta
```

* **@minecraft/server-ui**
Terminal
```terminal
npm i @minecraft/server-ui@beta 
```
</details>
ㅤ

![as](https://github.com/MSCBEEHI/Series-FreeAdd-on/blob/main/Beta%20API.png?raw=true)

[Minecraft API Documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-admin/minecraft-server-admin)

# Manifest JSON
[Manifest Generator](https://manifest-generator.vercel.app/)
```json
{
    "format_version": 2,
    "header": {
        "name": "<name>",
        "description": "<description>",
        "uuid": "<UUID>",
        "version": [
            1,
            0,
            0
        ],
        "min_engine_version": [
            1,
            19,
            50
        ]
    },
    "modules": [
        {
            "type": "script",
            "language": "javascript",
            "uuid": "<UUID>",
            "entry": "scripts/Main.js",
            "version": "1.0.0-beta"
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "1.1.0-beta"
        },
        {
            "module_name": "@minecraft/server-gametest",
            "version": "1.0.0-beta"
        },
        {
            "module_name": "@minecraft/server-ui",
            "version": "1.0.0-beta"
        }
    ]
}
```
