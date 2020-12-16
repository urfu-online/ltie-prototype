import React  from "react";

const AppSettingsView = ({course}) => {
    return (
        <>
            <h4>Настройки приложения</h4>
            <div className="form-group">
                <label>Условие задания</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Параметры задания</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Сохранить</button>
        </>
    )
}
export default AppSettingsView
