import { getAvatar } from '.'

describe('index', () => {
  it('should return correct avatar', () => {
    expect(getAvatar('dnakamashi@gmail.com')).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g stroke="none"><rect width="20" height="20" x="0" y="0" fill="#66B032" /><rect width="20" height="20" x="20" y="0" fill="#66B032" /><rect width="20" height="20" x="40" y="0" fill="transparent" /><rect width="20" height="20" x="60" y="0" fill="#66B032" /><rect width="20" height="20" x="80" y="0" fill="transparent" /><rect width="20" height="20" x="0" y="20" fill="#66B032" /><rect width="20" height="20" x="20" y="20" fill="#66B032" /><rect width="20" height="20" x="40" y="20" fill="transparent" /><rect width="20" height="20" x="60" y="20" fill="transparent" /><rect width="20" height="20" x="80" y="20" fill="transparent" /><rect width="20" height="20" x="0" y="40" fill="transparent" /><rect width="20" height="20" x="20" y="40" fill="#66B032" /><rect width="20" height="20" x="40" y="40" fill="#66B032" /><rect width="20" height="20" x="60" y="40" fill="#66B032" /><rect width="20" height="20" x="80" y="40" fill="#66B032" /><rect width="20" height="20" x="0" y="60" fill="transparent" /><rect width="20" height="20" x="20" y="60" fill="transparent" /><rect width="20" height="20" x="40" y="60" fill="transparent" /><rect width="20" height="20" x="60" y="60" fill="#66B032" /><rect width="20" height="20" x="80" y="60" fill="#66B032" /><rect width="20" height="20" x="0" y="80" fill="transparent" /><rect width="20" height="20" x="20" y="80" fill="#66B032" /><rect width="20" height="20" x="40" y="80" fill="transparent" /><rect width="20" height="20" x="60" y="80" fill="#66B032" /><rect width="20" height="20" x="80" y="80" fill="#66B032" /></g></svg>`
    )
  })
})
