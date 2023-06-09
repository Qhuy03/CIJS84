import React, { useEffect, useState } from "react";


//useEffect có 3 loại 
//Loại 1: useEffect(()=>{}) không có deps
// => chạy mỗi khi re-render
//loại 2: useEffect(()=>{}) có deps là 1 mảng rỗng []
// => chỉ chạy lần đầu tiên khi component đc mount vào DOM
//Loại 3: useEffect(()=>{}) có deps là 1 mảng chứa các giá trị
// => chỉ chạy khi có bất kỳ deps nào thay đổi giá trị


const UseEffect = ()=>{
    


    const [count, setCount] = useState(0)
    const[isShow, setIsShow] = useState(false);
    
	useEffect(() => {
		document.title = `You clicked ${count} times`;
	})

	return (
    <div >
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

  );

};



export default UseEffect;