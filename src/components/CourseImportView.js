import React  from "react";

const CourseImportView = ({course}) => {
    return (
        <>
            <h4>Импорт</h4>
            <article className="content-primary" role="main">
                <div className="introduction">
                    <p>Прежде чем продолжить, убедитесь, что вы хотите именно импортировать приложение. Импортированное
                        содержимое полностью заменит собой материалы предыдущего прложения. <strong>Вы не сможете отменить
                            импорт приложения</strong>. Мы рекомендуем сначала экспортировать текущий версию приложения, чтобы у вас
                        сохранилась его резервная копия.</p>
                    <p>Приложение, который вы импортируете, должен быть в формате .tar.gz (т. е. файл с расширением .tar,
                        сжатый с помощью программы GNU Zip). Файл .tar.gz должен содержать файл course.xml. Он также
                        может содержать и другие файлы.</p>


                </div>

                <form id="fileupload" method="post" encType="multipart/form-data" className="import-form">

                    <h5 className="title">
                        Выберите файл .tar.gz, чтобы заменить содержимое вашего приложения
                    </h5>

                    <p className="error-block"></p>
                    <div className="wrapper wrapper-file-name file-name-block">


                        <input type="file" name="course-data" className="btn btn-secondary btn-block " />

                        <input type="submit" value="Заменить мой приложение выбранным файлом" className="btn btn-primary btn-block"
                                   id="replace-courselike-button"/>
                    </div>
                </form>
            </article>
        </>
    )
}
export default CourseImportView
