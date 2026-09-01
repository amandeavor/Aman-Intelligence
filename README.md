# Aman Intelligence Asset Registry

The source registry for reusable AI workflow assets used with [Aman CLI](https://github.com/amandeavor/aman-cli).

## Contents

- `skills/`: reusable agent instructions and supporting references
- `prompts/`: task and system prompts
- `mcps/`: Model Context Protocol configuration assets, where available
- `aman.json`: registry metadata used by Aman tooling

## Use with Aman Intelligence CLI

Clone the repository when contributing or reviewing assets:

```bash
git clone https://github.com/amandeavor/aman-intelligence.git
cd aman-intelligence
```

Use the CLI documentation for installation, registry configuration, and asset-management commands.

## Registry Validation

Run the registry integrity check locally:

```bash
npm test
```

## Contributing and Governance

- [Contributing Guide](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)

## Status and Licensing

This repository is an asset registry. See the license decision issue for status.
