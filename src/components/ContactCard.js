import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'

function ContactCard(props) {

  const { id, name, email } = props.contact;

  return (
    <div className='item'>
      <div className='contact_details'>
        <div className='person_detail'>
          <RxPerson className='person' />
          <div className="content">

            <div className="header">
              {name}
            </div>

            <div>
              {email}
            </div>

          </div>
        </div>

        <BsTrash className='trash_icon' onClick={() => props.clickHandler(id)} />

      </div>
    </div>
  )
}

export default ContactCard