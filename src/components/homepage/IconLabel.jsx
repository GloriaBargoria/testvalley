export const IconLabel = ({ icon: Icon, label, badge }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      {badge && (
        <span className="absolute bg-red-500 text-white text-[7px] font-bold p-1 rounded-lg transform -translate-y-1/3">
          {badge}
        </span>
      )}
      <div className="w-12 h-12 bg-gray-200 rounded-full p-3 flex items-center justify-center">
        {Icon && <Icon className="h-6 w-6 text-blue-500" />}
      </div>
      <div className="text-xs mt-2">{label}</div>
    </div>
  );
};
