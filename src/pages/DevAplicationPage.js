import React, {useState} from 'react'
import DevApplivationRowView from "../components/DevApplicationPage/DevApplivationRowView";

const coursesData = [
    {
        name: 'Таблица на соответствие',
        version: 'v.01',
        status: 'Опубликовано',
        actions: [
            'settings',
            'reports',
            'import',
            'export'
        ]
    },
    {
        name: 'Диалоговый тренвжер',
        version: 'v.1.02',
        status: 'Тестирование',
        actions: [
            'settings',
            'reports',
            'import',
            'export'
        ]
    },
    {
        name: 'Таблица на соответствие',
        version: 'v.02',
        status: 'Тестирование',
        actions: [
            'settings',
            'reports',
            'import',
            'export'
        ]
    },
]



const DevApplicationPage = () => {


    const courses = coursesData.map(
       (course, index) => {
           return <DevApplivationRowView  key={index} course={course}/>
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
                    <th scope="col">Статус</th>
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

export default DevApplicationPage
