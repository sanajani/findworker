'use client'

import { useEffect } from "react"

const Error = ({error, reset}) => {
    useEffect(() => {
        console.log('this is error on contact page');
    }, [error])

    return(
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()} type="button">
                Try again
            </button>
        </div>
    )
}
export default Error