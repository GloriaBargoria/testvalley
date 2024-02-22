// IconLabel component
export const IconLabel = ({ icon: Icon, label, badge }) => {
  return (
    <div className="flex flex-col items-center">
      {badge && (
        <span className="absolute bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full transform -translate-y-1/2">
          {badge}
        </span>
      )}
      <div className="w-12 h-12 bg-gray-200 rounded-full p-3 flex items-center justify-center">
        {Icon && <Icon className="h-6 w-6 text-blue-500" />}
      </div>
      <div className="text-sm mt-2">{label}</div>
    </div>
  );
};
