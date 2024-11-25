import React from 'react'
import Container from '../Container'
import Pagination from '../Pagination'
import Flex from '../Flex'
import Text from '../Text'

const Shop = () => {
  return (
    <Container>
      <Flex className={'py-[100px]  gap-x-3'}>
      <div className="w-[20%]">
   
        <select className='bg-white  pr-[70px]'><option  >
          <Text tag={'h3'}   text={'Shop by Category '} />
        
          </option>
          <option value="" >
            <p>category 1</p>
          </option>
          <option value="">
            <p>category 2</p>
          </option>
          <option value="">
            <p>category 3</p>
          </option>
          <option value="">
            <p>category 4</p>
          </option>
          <option value="">
            <p>category 5</p>
          </option>
          </select>

      </div>
      <div className="w-[80%] ">
      <Pagination itemsPerPage={12} />
      </div>

      </Flex>
    </Container>
  )
}

export default Shop