import './app-info.css';

const AppInfo = ({employees, encreased}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании KM</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получят: {encreased}</h2>
        </div>
    )
}

export default AppInfo;