import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { FcSearch } from 'react-icons/fc'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const navigate = useNavigate()
  const setSearchText = useGameQueryStore((s) => s.setSearchText)
  const Ref = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (Ref.current) {
          setSearchText(Ref.current?.value)
          navigate('/')
        }
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
