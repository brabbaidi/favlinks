import { useState } from 'react'
import Form from './Form';
import Table from './Table';

const LinkContainer = (props) => {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('')
  const [links , setLink] = useState('')

  const handleRemove = (index) => {
    const updatedInfo = [...info];
    updatedInfo.splice(index, 1);
    setInfo(updatedInfo);
  }

  const handleSubmit = () => {
    if(name == '' && links == ''){
      alert('Please Fill All Fields')
    }
    if(name != '' && links != ''){
      const obj = {name:name , links:links}
      setInfo([...info, obj]);
      setName('')
      setLink('')
    }
  }

  return (
    <div className="container" style={{display:'block'}}>
      <h1 style={{marginLeft:'200px'}}>MY FAVORITE LINKS</h1>
      <p style={{marginLeft:'200px'}}>ADD A NEW URL WITH A NAME AND LINK TO THE TABLE.</p>
          <Table removeLink={handleRemove} linkData={info}/>
      <br /><br/>
      <h3 style={{marginLeft:'200px'}}>ADD NEW</h3>    
        <Form handleSubmit={handleSubmit} setName={setName} name={name} links={links} setLink={setLink}/>
    </div>
  )
}

export default LinkContainer