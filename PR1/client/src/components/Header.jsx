export default function Header() {
    return (
        <header className="topbar">
            <div>
                <p className="eyebrow">Test project</p>
                <h1>TaskFlow manager</h1>
                <p className="subtitle">Здесь будут собраны ваши задачи, проекты и
                    прогресс.</p>
            </div>
            <button className="primaryButton" type="button">
                + Новая задача
            </button>
        </header>
    );
}
