import shajs from 'sha.js'

import { COLORS } from './colors'

const PIXEL_SIZE = 20

function getHash(text: string): string {
  return shajs('sha256').update(text).digest('hex')
}

function getColorAndPixels(hash: string): [string, ...boolean[]] {
  const colorHex = hash.substr(0, 14)
  const pixelsHex = hash.substr(14).match(/.{2}/g)

  if (pixelsHex === null) {
    throw new Error('Invalid hash length')
  }

  const color = COLORS[parseInt(colorHex, 16) % COLORS.length]
  const pixels = pixelsHex.map((pixelHex) => Boolean(parseInt(pixelHex, 16) % 2))

  return [color, ...pixels]
}

function getSVG(color: string, pixels: boolean[]) {
  const pixelsRects = pixels.map((pixel, index) => {
    const line = Math.floor(index / 5)
    const row = index % 5

    return `<rect width="${PIXEL_SIZE}" height="${PIXEL_SIZE}" x="${row * PIXEL_SIZE}" y="${
      line * PIXEL_SIZE
    }" fill="${Boolean(pixel) ? color : 'transparent'}" />`
  })
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">${pixelsRects.join('')}</svg>`

  return svg
}

function getAvatar(text: string) {
  const hash = getHash(text)
  const [color, ...pixels] = getColorAndPixels(hash)
  const svg = getSVG(color, pixels)

  return svg
}

export { getAvatar }
