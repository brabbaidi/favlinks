import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr style={{ borderBottom: "1px solid #dcdced" }}>
      <td  width={'40%'} style={{fontWeight:500,marginLeft:'100px'}}>NAME</td>
      <td width={'50%'} style={{fontWeight:500}}>URL</td>
      <td width={'40%'} style={{fontWeight:500}}>REMOVE</td>
      </tr>
    </thead>
  )
}

const TableBody = ({linkData,removeLink}) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via linkData
  const rows = linkData.map((row, index) => {
    return (
      <tr key={index} style={{ borderBottom: "1px solid #dcdced" }}>
        <td width={'40%'} style={{padding:'15px 0px', fontWeight:450}}>{row.name}</td>
        <td width={'50%'} style={{padding:'15px 0px'}}>
          <a style={{color:'purple'}} href={row.links} target='_blank'>{row.links}</a>
        </td>
        <td width={'30%'} style={{padding:'0px 0px'}}>
        <button
              type="submit"
              style={{
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                fontWeight:'bold',
                padding:'5px',
                cursor:'pointer',
                width:'70px',
                borderRadius:'3px',
                height:'35px'
              }}
              onClick={() => removeLink(index)}
            >
              DELETE
            </button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = ({linkData,removeLink}) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return<div style={{marginLeft:'210px'}}>
    <table style={{width:'100',borderCollapse:'collapse'}}>
      <TableHeader/>
      <TableBody linkData={linkData} removeLink={removeLink}/>
    </table>
    </div> 
  }
}

export default Table