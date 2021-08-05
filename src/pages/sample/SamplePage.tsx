import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SButton, SExtendedButton} from "../../shared/styles/base";
import {getAsyncValue} from "../../state/features/counter/counterThunks";
import {StoreType} from "../../state/store";
import {SSampleBox} from "./SampleStyles";

export default ()=>{
    const dispatch = useDispatch()
    const counter = useSelector((state: StoreType)=>state.counter)
    const [currentCount,setCurrentCount] = useState<number>(0)

    useEffect(()=>{
        dispatch(getAsyncValue())
    },[])

    useEffect(()=>{
        if(counter.status==='DONE'){
            setCurrentCount(counter.count)
        }

    },[counter.count,counter.status])

    return(
        <SSampleBox>
            this is a simple page!

            <div className="counter-box">
                {counter.status === "DONE" && <div role="main" id="count">{currentCount}</div>}
                <SButton onClick={()=>setCurrentCount((n)=>n+1)}>increment</SButton>

                <SExtendedButton appearance="ghost" disabled>Not Available</SExtendedButton>
            </div>
        </SSampleBox>
    )
}