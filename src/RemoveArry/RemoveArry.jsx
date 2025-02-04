import React from 'react'

const RemoveArry = () => {

    const arr =["a","undo","b","c","undo","x"]

    function NewArrayProcess(arr){
        let stack = []
        arr.forEach(item => {
            if(item === "undo"){
                stack.pop();
            }else{
                stack.push(item)
            }
        });
        return [stack.join("")]
    }
   
    
  return (
    <div>
      <h2>Output Array : </h2>
      <p>{JSON.stringify(NewArrayProcess(arr))}</p>
    </div>
  )
}

export default RemoveArry
