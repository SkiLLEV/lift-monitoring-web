const LiftCard = ({ name, type, value, isStatus = false, color = "border-[#71B8EB]" }) => {
    return (
        <article className={`bg-white p-8 rounded-2xl shadow-sm border-b-4 ${color} hover:translate-y-[-4px] transition-transform`}>
            <span className="text-[#969696] text-xs font-bold uppercase block mb-4">{name}</span>
            <p className="text-gray-400 text-sm">{type}</p>
            <h3 className={`text-3xl font-black ${isStatus ? (value === 'Open' ? 'text-green-500 uppercase italic' : 'text-red-500 uppercase italic') : 'text-gray-800'}`}>
                {value} {!isStatus && 'floor'}
            </h3>
        </article>
    );
};

export default LiftCard;