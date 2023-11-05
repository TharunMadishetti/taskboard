import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';

const schema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 1,
    },
    description: {
      type: 'string',
    },
    due_date: {
      type: 'string',
      format: 'date',
    },
    priority: {
      type: 'string',
      enum: ['Low', 'Medium', 'High'],
    },
  },
  required: ['title', 'due_date', 'priority'],
};

const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/title',
      label: 'Title',
    },
    {
      type: 'Control',
      scope: '#/properties/description',
      label: 'Description',  
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/due_date',
          label: 'Due Date',  
        },
        {
          type: 'Control',
          scope: '#/properties/priority',
          label: 'Priority',  
        },
      ],
    },
  ],
};

export default function Form({addNewTask}) {
  const [data, setData] = useState({});
  const [msg,setMsg] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if(data.title === "" || !data.due_date || data.priority === "")
    {
        return ;
    }
    
    addNewTask(data);
    console.log(data);
  };

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className="w-full max-w-lg rounded px-8 pt-6 pb-8 mb-4 font-semibold">
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={vanillaRenderers}
          cells={vanillaCells}
          onChange={({ data, _errors }) => setData(data)}
        />
        <button
          type="submit"
          className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
