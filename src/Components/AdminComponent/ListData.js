import React from "react";
import {Table} from "antd";
let ListData = ({dataSource,columns,EditData})=>{
    return(
        <div>
            <Table
                    dataSource={dataSource} columns={columns} />

        </div>
    )
}
export default ListData