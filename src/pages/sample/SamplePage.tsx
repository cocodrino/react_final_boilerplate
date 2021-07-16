import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAsyncValue} from "../../state/features/counter/counterThunks";
import {StoreType} from "../../state/store";

export default ()=>{
    const dispatch = useDispatch()
    const counter = useSelector((state: StoreType)=>state.counter)

    useEffect(()=>{
        dispatch(getAsyncValue())
    },[])

    return(
        <div>
            this is a simple page!

            <div className="counter-box">
                {counter.status === "DONE" && <div role="main" id="count">{counter.count}</div>}
                <button>increment</button>
            </div>
        </div>
    )
}