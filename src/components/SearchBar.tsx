type SearchBarProps = {
  className?: string;
};

export default function SearchBar(className: SearchBarProps) {
  return (
    <div className={`${className}`}>
      <input
        type="text"
        placeholder="Search..."
        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
      />
    </div>
  );
}
