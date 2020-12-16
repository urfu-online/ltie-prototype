import React  from "react";

const CourseReportsView = ({course}) => {
    return (
        <>
            <h4>Статистика</h4>
            <h5>Количество запусков:</h5>
            <p>Успешно:	<strong>2660</strong></p>
            <p>С ошибкой:	<strong>0</strong></p>
            <h5>Выгрузка</h5>
            <button className="btn btn-primary"> Скачать </button>

        </>
    )
}
export default CourseReportsView
