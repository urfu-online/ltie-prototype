import React  from "react";

const CourseExportView = ({course}) => {
    return (
        <>
            <h4>Экспорт</h4>
            <article className="content-primary" role="main">
                <div className="introduction">
                    <p>Вы можете экспортировать приложение . Экспортируемый файл имеет формат .tar.gz (это файл .tar, сжатый при помощи GNU Zip) и содержит структуру проекта. Вы также можете повторно импортировать ранее экспортированный приложение.</p>
                </div>

                <form id="fileupload" method="post" encType="multipart/form-data" className="import-form">

                    <h5 className="title">
                        Экспорт содержимого пакета приложения
                    </h5>

                    <p className="error-block"></p>
                    <div className="wrapper wrapper-file-name file-name-block">

                        <input type="submit" value=" Экспортировать  приложения " className="btn btn-primary btn-block"
                               id="replace-courselike-button"/>
                    </div>
                </form>
            </article>
        </>
    )
}
export default CourseExportView
