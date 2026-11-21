import React, { useRef } from 'react'

function useDebounceHook( originalFun : any) {
    const currenClock = useRef();

    const check = () => {
        clearTimeout(currenClock.current);
        currenClock.current = setTimeout(originalFun , 200)
    }

  return check;
}

export default useDebounceHook;