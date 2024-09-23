import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import ReactPaginate from 'react-paginate';

const ItemList = () => {
  const { items, searchTerm } = useSelector(state => state.items);


  const filteredItems = useMemo(() => {
    return items.filter(item => item && item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [items, searchTerm]);
  

  // Pagination Logic
  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      {currentItems.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default React.memo(ItemList);
