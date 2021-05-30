# Pixavatar

Generates a SVG image with a Github like avatar based on username or any other text

## Instalation

```bash
npm install pixavatar
```

or

```bash
yarn add pixavatar
```

## Usage

```javascript
import { getAvatar } from 'pixavatar'

const Avatar = ({ username }) => {
  const svg = getAvatar('username')
  const blob = new Blob([svg], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)

  return <img src={url} />
}
```
