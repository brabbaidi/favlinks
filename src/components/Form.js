import React, { Component } from "react";

class Form extends Component {
  render() {
    const { handleSubmit, setName, name, links, setLink } = this.props;
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
        <div style={{ marginLeft: '200px' }}>
          <div style={{marginBottom:'12px' ,}}>
          <div style={{ fontSize: '16px' , fontWeight:500, marginBottom:'6px' }}> NAME </div>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="name"
              name="task"
              style={{ width: '80%', padding: '10px',borderRadius:'3px' }}
            />
          </div>
          <div>
            <div style={{ fontSize: '16px' , fontWeight:500 , marginBottom:'6px'}}> URL </div>
            <input
              value={links}
              onChange={(event) => setLink(event.target.value)}
              type="link"
              name="link"
              style={{ width: '80%', padding: '10px',borderRadius:'3px' }}
            />
          </div>
          <div style={{ width: '40px', height: '50px', marginTop: '6px' }}>
            <button
              type="SUBMIT"
              style={{
                backgroundColor: 'blue',
                color: 'white',
                border: '20px',
                fontSize: '16px',
                fontWeight:'bold',
                width: '80px',
                height: '40px',
                cursor:'pointer',
                borderRadius:'4px'
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;