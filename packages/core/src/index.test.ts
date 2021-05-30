import { getAvatar } from '.'

describe('index', () => {
  it('should return correct avatar', () => {
    expect(getAvatar('dnakamashi@gmail.com')).toEqual(
      `<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 100 100\" width=\"100\" height=\"100\" fill=\"#66B032\"><rect width=\"20\" height=\"20\" x=\"0\" y=\"0\" /><rect width=\"20\" height=\"20\" x=\"20\" y=\"0\" /><rect width=\"20\" height=\"20\" x=\"60\" y=\"0\" /><rect width=\"20\" height=\"20\" x=\"0\" y=\"20\" /><rect width=\"20\" height=\"20\" x=\"20\" y=\"20\" /><rect width=\"20\" height=\"20\" x=\"20\" y=\"40\" /><rect width=\"20\" height=\"20\" x=\"40\" y=\"40\" /><rect width=\"20\" height=\"20\" x=\"60\" y=\"40\" /><rect width=\"20\" height=\"20\" x=\"80\" y=\"40\" /><rect width=\"20\" height=\"20\" x=\"60\" y=\"60\" /><rect width=\"20\" height=\"20\" x=\"80\" y=\"60\" /><rect width=\"20\" height=\"20\" x=\"20\" y=\"80\" /><rect width=\"20\" height=\"20\" x=\"60\" y=\"80\" /><rect width=\"20\" height=\"20\" x=\"80\" y=\"80\" /></svg>`
    )
  })
})
