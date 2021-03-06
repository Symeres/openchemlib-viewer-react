# Openchemlib viewer

## Installation

```console
yarn add @symeres/openchemlib-viewer-react
```

## Usage

```typescript
import { OclViewer } from 'openchemlib-viewer-react'

const molText = `untitled.mol
  ChemDraw02072209572D

  0  0  0     0  0              0 V3000
M  V30 BEGIN CTAB
M  V30 COUNTS 6 6 0 0 0
M  V30 BEGIN ATOM
M  V30 1 C -0.714471 0.412499 0.000000 0
M  V30 2 C -0.714471 -0.412501 0.000000 0
M  V30 3 C -0.000001 -0.825000 0.000000 0
M  V30 4 C 0.714471 -0.412501 0.000000 0
M  V30 5 C 0.714471 0.412499 0.000000 0
M  V30 6 C -0.000001 0.825000 0.000000 0
M  V30 END ATOM
M  V30 BEGIN BOND
M  V30 1 2 1 2
M  V30 2 1 2 3
M  V30 3 2 3 4
M  V30 4 1 4 5
M  V30 5 2 5 6
M  V30 6 1 6 1
M  V30 END BOND
M  V30 END CTAB
M  END
`;

<OclViewer molfile={molText} size={100}/>
```
