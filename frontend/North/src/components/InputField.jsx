const InputField = ({ label, type = "text", placeholder, value, onChange, name }) => (
    <div className="space-y-2">
        <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest block">
            {label}
        </label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-zinc-900 border border-zinc-800 p-3 font-mono text-sm text-white placeholder:text-zinc-600 focus:border-lime-400 focus:outline-none transition-colors"
            required
        />
    </div>
);

export default InputField;
