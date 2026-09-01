# Contributing to Aman Intelligence Asset Registry

Thank you for contributing AI workflow skills, prompts, and MCP configurations.

## Asset Structure Requirements

### Skills (`skills/<skill-name>/`)
- Every skill must have a `SKILL.md` file.
- The `SKILL.md` must clearly document the skill's purpose, usage instructions, required tools, and examples.
- Supporting scripts or reference documents should live in subdirectories (`scripts/`, `references/`, `examples/`).

### Prompts (`prompts/<prompt-name>/`)
- Every prompt must have a `PROMPT.md` file detailing the system/task prompt and usage guidance.

## Validation

Run the registry integrity validator locally before submitting a PR:

```bash
npm test
```

## Guidelines

- Never commit real API keys, secrets, or private credentials.
- Ensure all instructions are clear, tested, and reproducible.
