
import Box from '@/components/box'
import TaskForm from '@/components/task-form'
import React from 'react'

const NewTaskPage = () => {
  return (
    <section className='py-6'>
      <Box>
        <div className='w-full flex flex-col'>
          <h1 className='text-xl font-medium text-gray-800'>Tareas Nuevas</h1>
          <p className='font-light text-gray-400 text-md'>Agrega nuevas tareas aqui</p>
          <TaskForm />
        </div>
      </Box>
    </section>
  )
}

export default NewTaskPage