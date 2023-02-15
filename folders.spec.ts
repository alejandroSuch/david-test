const newFolder = (name, parent): Folder => ({ name, parent });

describe('folders', () => {
  const users: Folder = newFolder('users', null);
  const keif: Folder = newFolder('keif', users);
  const pictures: Folder = newFolder('pics', keif);
  const halloween2022: Folder = newFolder('halloween-2022', pictures);
  const movies: Folder = newFolder('movies', keif);

  it('should return null on empty folder', () => {
    expect(foldersFn(null)).toBeNull();
  })

  it('one level', () => {
    expect(foldersFn(users)).toEqual('users');
  })

  it('four levels', () => {
    expect(foldersFn(halloween2022)).toEqual('users/keif/pics/halloween-2022');
  })
});