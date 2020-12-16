import React, {useState} from 'react'
import CourseRowView from "../components/CourseRowView";

const coursesData = [
    {
        name: 'Таблица на соответстие',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Инженерная механика',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },
    {
        name: 'Таблица на соответстие',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Инженерная механика',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },
    {
        name: 'Таблица на соответстие',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Инженерная механика',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },
    {
        name: 'Таблица на соответстие',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Физическая культура',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },
    {
        name: 'Таблица на соответстие',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Физическая культура',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },
    {
        name: 'Диалоговый тренажер',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Soft Skills: навыки 21 века',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },    {
        name: 'Диалоговый тренажер',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Soft Skills: навыки 21 века',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },{
        name: 'Диалоговый тренажер',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Soft Skills: навыки 21 века',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },{
        name: 'Диалоговый тренажер',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Soft Skills: навыки 21 века',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },{
        name: 'Диалоговый тренажер',
        rightНolder: 'v.01',
        session: [
            {
                name: 'Soft Skills: навыки 21 века',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'App-settings',
            'LTI-settings',
            'reports',
        ]
    },
]



const CoursesPage = () => {


    const courses = coursesData.map(
       (course, index) => {
           return <CourseRowView  key={index} course={course}/>
       })


  return (
        <>
        <h2>Мои приложения</h2>
            <table className="table">
                <thead>
                <tr className="table-primary">
                    <th scope="col"></th>
                    <th scope="col">Название приложения</th>
                    <th scope="col">Версия</th>
                    <th scope="col">Название курса</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                {
                    courses
                }
                </tbody>
            </table>
        </>
  )
}

export default CoursesPage
