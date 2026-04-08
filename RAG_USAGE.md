# RAG Documentation API

This project publishes machine-readable documentation alongside the HTML site on GitHub Pages. Use these endpoints to feed megascript type information into AI assistants, search engines, or other tooling.

## Base URL

```
https://infigo-official.github.io/types-for-megascript
```

## Available Endpoints

### Full JSON Documentation

The complete TypeDoc reflection model containing all types, interfaces, enums, properties, and JSDoc comments.

```
GET /documentation.json
```

**Example:**

```js
const res = await fetch(
  "https://infigo-official.github.io/types-for-megascript/documentation.json"
);
const docs = await res.json();
```

### RAG Manifest

An index of all available markdown chunks with metadata. Use this to discover and selectively load chunks.

```
GET /rag/manifest.json
```

**Response structure:**

```json
[
  {
    "file": "runobject-run-run.md",
    "title": "RunObject/Run > Run",
    "type": "interface"
  },
  {
    "file": "runobject-customer-searchparam-enum.md",
    "title": "RunObject/Customer > SearchParam (enum)",
    "type": "enum"
  }
]
```

Each entry contains:

| Field   | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| `file`  | Filename of the markdown chunk, relative to `/rag/`                         |
| `title` | Human-readable title (Module > Name)                                        |
| `type`  | One of: `module`, `interface`, `enum`, `global`                             |

### Individual RAG Chunks

Each chunk is a self-contained markdown file documenting a single interface, enum, global object, or module overview.

```
GET /rag/{filename}
```

**Example:**

```js
const res = await fetch(
  "https://infigo-official.github.io/types-for-megascript/rag/runobject-run-run.md"
);
const markdown = await res.text();
```

## Usage Examples

### Load all chunks for RAG ingestion

```js
const BASE = "https://infigo-official.github.io/types-for-megascript";

// 1. Fetch the manifest
const manifest = await fetch(`${BASE}/rag/manifest.json`).then((r) => r.json());

// 2. Fetch all chunks
const chunks = await Promise.all(
  manifest.map(async (entry) => ({
    ...entry,
    content: await fetch(`${BASE}/rag/${entry.file}`).then((r) => r.text()),
  }))
);
```

### Filter chunks by type

```js
// Only interfaces
const interfaces = manifest.filter((entry) => entry.type === "interface");

// Only enums
const enums = manifest.filter((entry) => entry.type === "enum");

// Only a specific module area
const pdfChunks = manifest.filter((entry) =>
  entry.title.startsWith("RunObject/PdfInstance")
);
```

### Use with an embedding pipeline

```python
import requests

BASE = "https://infigo-official.github.io/types-for-megascript"

manifest = requests.get(f"{BASE}/rag/manifest.json").json()

documents = []
for entry in manifest:
    content = requests.get(f"{BASE}/rag/{entry['file']}").text
    documents.append({
        "id": entry["file"],
        "title": entry["title"],
        "type": entry["type"],
        "content": content,
    })

# Feed `documents` into your vector database / embedding pipeline
```

## Chunk Contents

Each markdown chunk includes:

- **Title and metadata** (module name, kind)
- **Description** from JSDoc comments
- **Properties** with types and descriptions
- **Methods** with full signatures, parameter details, and return types
- **Enum values** with descriptions
- **Code examples** where available in the source JSDoc

## Notes

- All endpoints are public and require no authentication
- Content is automatically regenerated on every push to `main`
- The JSON and RAG files are deployed to GitHub Pages alongside the HTML documentation
