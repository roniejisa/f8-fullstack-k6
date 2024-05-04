import React from 'react'
import Counter from './components/Counter'
import Login from './components/Login'

const App = () => {
  return (
    <div>
        <Counter  />
        {/* <Login  /> */}
    </div>
  )
}

export default App

/**
 * React Hook --> Làm việc với các thành phần của React: State, Lifecycle, Refs,...
 * 1 hàm đặc biệt, bắt đầu bằng từ khóa use (Có thể do React định nghĩa, hoặc lập trình viên tự định nghĩa)
 * Hook chỉ được gọi trong functional component (Phải gọi ngay cấp đàu tiên trong functional)
 */