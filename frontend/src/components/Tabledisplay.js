import React from 'react'

export default function Tabledisplay(){
    return(
        <>
       
       <form action="" method="post" >
                    <div className="table-in">
                        <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                </tr>
                                <tr>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                </tr> 
                                <tr>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                </tr>  
                                <tr>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                </tr> 
                                <tr>
                                    <td><input type="text" /></td>
                                    <td><input type="number" /></td>
                                </tr>                  
                        </table>
                    </div>
                 </form>
        </>
    )
}