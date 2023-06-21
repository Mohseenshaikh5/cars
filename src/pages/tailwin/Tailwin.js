import React from 'react'


// const Tailwin = () => {
//     return (
//         <div className='container mx-auto'>
//             <ul className="divide-y divide-gray-200">
//                 {people.map((person) => (
//                     <li key={person.email} className="py-4 flex">
//                         <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
//                         <div className="ml-3">
//                             <p className="text-sm font-medium text-gray-900">{person.name}</p>
//                             <p className="text-sm text-gray-500">{person.email}</p>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Tailwin

const TaskItem = ({ task, onDelete }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-lg">{task}</span>
            </div>
            <button className="text-red-500" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;




const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]


