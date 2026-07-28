# Aman Intelligence Asset Registry

The source registry for reusable AI workflow assets used with [Aman Intelligence CLI](https://github.com/amandeavor/aman-intelligence-CLI).

## Contents

- `skills/`: reusable agent instructions and supporting references
- `prompts/`: task and system prompts
- `mcps/`: Model Context Protocol configuration assets, where available
- `aman.json`: registry metadata used by Aman tooling

## Use with Aman Intelligence CLI

Clone the repository when contributing or reviewing assets:

```bash
git clone https://github.com/amandeavor/aman-intelligence-repo.git
cd aman-intelligence-repo
```

Use the CLI documentation for installation, registry configuration, and asset-management commands.

## Contributing

Each reusable skill should include a `SKILL.md` file with a clear purpose and instructions. Keep assets focused, avoid copying private configuration, and verify any external references before submitting changes.

## Status

This repository is a content registry, not a standalone application. It does not currently provide an automated validation command.
