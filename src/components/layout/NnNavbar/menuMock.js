/* eslint-disable */
export const menuItems = [
  {
    id: '1',
    text: 'Parent 1',
    parent: true,
    subItems: [
      {
        text: 'One',
        id: '1_1',
        parentId: '1'
      },
      {
        text: 'Two',
        id: '1_2',
        parentId: '1'
      },
      {
        text: 'Three',
        id: '1_3',
        parentId: '1'
      }
    ]
  },
  {
    id: '2',
    text: 'Parent 2',
    parent: true,
    subItems: [
      {
        text: 'Four',
        id: '2_1',
        parentId: '2'
      },
      {
        text: 'Five',
        id: '2_2',
        parentId: '2'
      }
    ]
  },
  {
    id: '3',
    text: 'Parent 3'
  },
  {
    id: '4',
    text: 'Parent 4'
  }
]
