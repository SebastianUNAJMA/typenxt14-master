import React from 'react'
import Box from './box'
import HeadingText from './heading-text'

const Header = () => {
  return (
    <header className='py-6'>
        <Box>
            <HeadingText
            title={'Gestion basica de Tareas'}
            description={'"Organiza tus tareas pendientes"'}
            />
        </Box>
    </header>
  )
}

export default Header