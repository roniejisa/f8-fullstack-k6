import PropTypes from 'prop-types'
const ColumnContainer = ({children}) => {
  return (
    <div className='p-2 flex flex-col flex-1 gap-1'>{children}</div>
  )
}

export default ColumnContainer

ColumnContainer.propTypes = {
    children: PropTypes.any
}