import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { FaSortDown } from 'react-icons/fa'
interface Props {
  onselectOrder: (order: string) => void
  sortorder: string
}

const SortSelector = ({ onselectOrder, sortorder }: Props) => {
  const sortOrder = [
    { value: '', label: 'Relevence' },
    { value: '-added', label: 'Data Added' },
    { value: '-name', label: 'Name' },
    { value: '-released', label: 'Released Date' },
    { value: 'metacritic', label: 'Popularity' },
    { value: 'rating', label: 'Average Rating' },
  ]
  const currentOrder = sortOrder.find((order) => order.value == sortorder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaSortDown />}>
        Order By:{currentOrder?.label || 'Relevence'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            value={order.value}
            key={order.value}
            onClick={() => onselectOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
