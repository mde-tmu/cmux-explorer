# CMUX Explorer

An ontology-driven assessment tool for evaluating the User Experience (UX) impact of Collaborative Modeling (CM) features.

## Overview

CMUX Explorer implements the framework described in "Towards Ontology-Driven User Experience Assessment of Collaborative Modeling Tools". The tool enables natural language queries about the relationship between collaborative modeling features and user experience attributes, automatically translating them to SPARQL queries against a unified CM-UX ontology.

## Key Features

- **Natural Language Interface**: Query the ontology using conversational language instead of requiring SPARQL expertise
- **Ontology-Driven Assessment**: Systematic mapping between CM features (versioning, real-time editing, etc.) and UX attributes (efficiency, memorability, satisfaction)
- **Multiple Result Views**: Tabular data, natural language interpretation, and raw JSON output
- **Weighted Relationships**: Configurable impact weights between CM features and UX outcomes

## Use Cases

- **Tool Builders**: Identify which CM features have the highest UX impact for design decisions
- **Researchers**: Explore systematic relationships between collaborative modeling capabilities and user experience
- **Project Managers**: Prioritize feature development based on UX implications

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

## Technology Stack

- React + TypeScript
- Vite build system
- Tailwind CSS + shadcn/ui components
- SPARQL query execution via Comunica

## Related Work

This tool implements the CMUX framework for computer-aided design of UX-aware collaborative modeling tools. For technical details and evaluation, see the associated research paper.

