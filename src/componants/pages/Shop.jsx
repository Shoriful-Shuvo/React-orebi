import React from 'react'
import Container from '../Container'
import Pagination from '../Pagination'
import Flex from '../Flex'
import Text from '../Text'

const Shop = () => {
  return (
<>
<Container>
      <Flex className={'py-[100px]  gap-x-3'}>
      <div className="w-[20%]">
<div class="sidebar">
{/* 
  <div class="filter-section">
    <div class="filter-header" onclick="toggleSection('category')">
      <h3>Shop by Category</h3>
      <span class="toggle-icon">+</span>
    </div>
    <ul class="filter-content" id="category">
      <li>Category 1</li>
      <li>Category 2</li>
      <li>Category 3</li>
      <li>Category 4</li>
      <li>Category 5</li>
    </ul>
  </div>


  <div class="filter-section">
    <div class="filter-header" onclick="toggleSection('color')">
      <h3>Shop by Color</h3>
      <span class="toggle-icon">+</span>
    </div>
    <ul class="filter-content" id="color">
      <li><span class="color-dot" style="background-color: blue;"></span> Color 1</li>
      <li><span class="color-dot" style="background-color: red;"></span> Color 2</li>
      <li><span class="color-dot" style="background-color: green;"></span> Color 3</li>
      <li><span class="color-dot" style="background-color: yellow;"></span> Color 4</li>
      <li><span class="color-dot" style="background-color: gray;"></span> Color 5</li>
    </ul>
  </div>


  <div class="filter-section">
    <div class="filter-header" onclick="toggleSection('brand')">
      <h3>Shop by Brand</h3>
      <span class="toggle-icon">+</span>
    </div>
    <ul class="filter-content" id="brand">
      <li>Brand 1</li>
      <li>Brand 2</li>
      <li>Brand 3</li>
      <li>Brand 4</li>
      <li>Brand 5</li>
    </ul>
  </div> */}
</div>
      </div>
      <div className="w-[80%] ">
      <Pagination itemsPerPage={12} />
      </div>

      </Flex>
    </Container>


</>
  )
}

export default Shop