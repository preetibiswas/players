import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { FcSearch } from 'react-icons/fc'

interface Props {
  onSearch: (txt: string | null) => void
}

const SearchInput = ({ onSearch }: Props) => {
  const Ref = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (Ref.current) onSearch(Ref.current?.value)
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FcSearch color="gray.300" size={25} />
        </InputLeftElement>
        <Input
          ref={Ref}
          placeholder="Search Game"
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
