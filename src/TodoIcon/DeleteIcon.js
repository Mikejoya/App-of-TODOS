import React from 'react';
import { TodoIcon} from '.'

function DeletedIcon({ onDelete }) {
    return (
        <TodoIcon 
            type='delete'
            color='gray'
            onClick={onDelete}
        />
    );
}

export { DeletedIcon }