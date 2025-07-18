import { createTask } from '@/lib/actions/add-task';
import { updateTask } from '@/lib/actions/update-task';
import { Task } from '@prisma/client';
import React from 'react';

const TaskForm = ({ task }: { task?: Task }) => {
  const functionAction = task?.id ? updateTask : createTask;

  return (
    <div className="p-6">
      <form action={functionAction} className="space-y-4">
        <input type="hidden" name="id" defaultValue={task?.id?.toString()} />

        <div>
          <label className="block text-gray-700">Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre de tu tarea"
            defaultValue={task?.name}
            required
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label className="block text-gray-700">Descripcion:</label>
          <textarea
            name="description"
            placeholder="Descripcion de la tarea"
            defaultValue={task?.description || ''}
            rows={3}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700">Prioridad:</label>
          <select
            name="priority"
            defaultValue={task?.priority}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="completion"
            defaultChecked={task?.completion === 'true'}
            className="form-checkbox h-5 w-5 text-orange-500"
          />
          <label className="ml-2 text-gray-700">Realizada</label>
        </div>

        <button
          type="submit"
          className="bg-purple-500 w-full hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {task?.id ? 'Actualizar Tarea' : 'Crear Tarea'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;