import React from 'react';

export default function LayoutProvider(props) {
  return (
    <main className='w-full' id='main'>
      <div className="w-full" id='main-content'> 
        {props.children}
      </div>
    </main>
  )
}
