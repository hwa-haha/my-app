import React from "react";
import {Address, Restaurant} from './model/resturant'

interface OwnProps{
    info:Restaurant,
    changesAddress(address:Address):void
}

const Store:React.FC<OwnProps> = (info) => {
    return(
        <div>Store</div>
    )
}

export default Store