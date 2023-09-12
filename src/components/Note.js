// Note.js
import{MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return<div className='note'>
        <span>This is first note</span>
        <div className='note-footer'>
            <small>Date</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>

    </div>
};

export default Note;