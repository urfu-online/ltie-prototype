import React  from "react";

const DevApplicationSettingsView = ({course}) => {
    return (
        <>
            <h4>Настройки приложения</h4>
            <div className="form-group">
                <label>Тип приложения</label>
                <input type="text" className="form-control" defaultValue={course.name}/>
                <small  className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Краткое описаине</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Сохранить</button>
        </>
    )
}

export default DevApplicationSettingsView
