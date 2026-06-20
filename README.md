# 🧠 Aman Intelligence — Asset Repository

This repository serves as the official registry of AI workflow assets for **Aman Intelligence**. It hosts reusable skills, system prompts, and Model Context Protocol (MCP) server configurations managed by the [Aman CLI (`aman-cli`)](https://github.com/amandeavor/aman-intelligence-CLI).

---

## 🛠️ Structure & Contents

```
aman-intelligence-repo/
├── skills/           # Reusable agent instructions (SKILL.md)
│   ├── azure-cost/
│   ├── brainstorming/
│   ├── caveman/
│   ├── deploy-to-vercel/
│   ├── design-mobile-apps/
│   ├── edit-article/
│   ├── executing-plans/
│   ├── find-skills/
│   ├── frontend-design/
│   ├── react-best-practices/
│   ├── react-native-skills/
│   └── ... and more
└── prompts/          # Customized system & task prompts (PROMPT.md)
    ├── debug/
    └── standup/
```

---

## 🚀 Quick Start with Aman CLI

You can easily import and install assets directly from this repository using the `aman` CLI tool.

### 1. Install Aman CLI
If you haven't installed the CLI yet, run:
```bash
npm install -g aman-cli
```

### 2. Import Assets from this Repository
To import all skills, prompts, and MCP configurations from this repository into your global or local environment:
```bash
aman import amandeavor/aman-intelligence-repo --global
```

### 3. Verify Installed Assets
Check if the skills and prompts were successfully imported and are ready to be used:
```bash
aman list --global
```

---

## 📂 Asset Specifications

Each asset inside this repository follows the standard spec defined in [Aman Asset Spec V1](https://github.com/amandeavor/aman-intelligence-CLI/blob/main/docs/ASSET-SPEC.md):
- **Skills:** Instruct models on how to act, handle specific workflows, or perform specialized coding tasks.
- **Prompts:** Structured templates for quick system prompt bootstrapping (e.g. debugging strategies or standup summaries).

---

## 🤝 Contributing & Customization

If you want to add your own skills or prompts:
1. Fork this repository.
2. Add your skill/prompt directory under `skills/` or `prompts/` (make sure it contains a `SKILL.md` or `PROMPT.md`).
3. Open a Pull Request to merge your improvements.

---

## 📜 License

MIT — see [LICENSE](LICENSE) for details.
