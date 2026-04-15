const SensorCard = ({ label, value, unit, limit = 50 }) => {
    // Умовний рендеринг: якщо temp > 50, текст стає червоним
    const isWarning = value > limit;

    return (
        <div className={`bg-white p-6 rounded-3xl shadow-sm border-b-4 ${isWarning ? 'border-red-500' : 'border-primaryBlue'} transition-all`}>
            <p className="text-secondaryGrey text-[10px] font-bold uppercase tracking-widest mb-1">{label}</p>
            <h3 className={`text-3xl font-black ${isWarning ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
                {value} <span className="text-sm font-medium text-gray-400">{unit}</span>
            </h3>
        </div>
    );
};

export default SensorCard;