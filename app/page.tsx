import Box from '@/components/box'
import TaskForm from '@/components/task-form'
import TaskCard from '@/components/task-card'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import React, { Suspense } from 'react'

const HomePage = async () => {
  return (
    <div className='py-6'>
      <Box>
        <div className='flex items-center w-full justify-between'>
          <div>
            <h1 className='text-xl font-medium text-gray-800'>Tareas</h1>
            <p className='font-light text-gray-400 text-md'>Las tareas estan listadas aqui</p>
          </div>
          <Link href={'/new'}>
          Nueva Tarea</Link>
        </div>
        <Suspense fallback={'Cargando...'}>
          <TaskList />
        </Suspense>
      </Box>

    </div>
  )
}

async function TaskList(){
  const tasks = await prisma.task.findMany({})
  return(
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 border p-2'>
      {tasks.map(task => (
        <TaskCard
        key={task.id}
        task={task}
        />
      ))}
    </div>
  )
}

export default HomePage